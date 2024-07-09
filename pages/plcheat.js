// plcheat.js
//
// Indexing and search management for plcheat.

// Used from plui:
//   get(), getAll()
//   getSaved(), setSaved()
//
// Called from index.html:
//   buildIndexes();
//
// Called from PLUI:
//   setRenderPanes(elements)
//   renderLanguageTo(element, selectedCategory, language)

// SCROLL_DELAY: To prevent infinite recursion between the two panes,
//               how long do we lock a pane for?
const SCROLL_DELAY = 1000;

// Completed index - probably want to eventually save this to local
// storage when our json object gets BIG.
const BUILT = {};

function getSortedTopics(category) {
  let dtopics = [];
  const rtopics = {};
  for (const [topic, dispname] of Object.entries(category.topics)) {
    rtopics[dispname] = topic;
    dtopics.push(dispname);
  }
  dtopics = dtopics.sort();
  topickeys = [];
  for (dtopic of dtopics) {
    topickeys.push(rtopics[dtopic]);
  }

  return topickeys;
}

function appendSnippet(element, css, topic, displaytopic, snippet) {
  const title = document.createElement("h3");
  title.innerText = displaytopic;

  const codesnippet = document.createElement("code");
  codesnippet.innerHTML = snippet;
  codesnippet.className = "language-" + css;
  hljs.highlightElement(codesnippet);
  const presnippet = document.createElement("pre");
  presnippet.appendChild(codesnippet);

  element.appendChild(title);
  element.appendChild(presnippet);
  element.appendChild(document.createElement("hr"));
}

const OBSERVED = {};

function normalize(str) {
  str = str.replaceAll(/[^a-zA-Z]+/g, ' ').toLowerCase();
  str = str.replaceAll(/\s+/g, ' ').replace(/^\s+/, '').replace(/\s+$/, '');
  return str.split(/\s+/)
}

function bestMatch(wanted, comments) {
  const wants = {};
  for (const word of normalize(wanted.innerText)) {
    wants[word] = true;
  }

  let bestscore = 0;
  let bestrest = 1000;
  let bestfit = comments[0];

  for (const comment of comments) {
    let score = 0;
    let rest = 0;
    for (const word of normalize(comment.innerText)) {
      if (wants[word]) {
        score += 1;
      } else {
        rest += 1;
      }
    }
    // if (score > 0) {
      // console.log("Comparing " + comment.innerText + " vs " + wanted.innerText + ": " + score + " - " + rest);
    // }
    if ((score > bestscore && rest <= bestrest) || (score >= bestscore && rest < bestrest)) {
      bestscore = score;
      bestfit = comment;
      bestrest = rest;
    }
  }
  console.log("Winner: " + bestfit.innerText + " vs " + wanted.innerText + ": " + bestscore + " - " + bestrest);
  return bestfit;
}

function scrollToItem(wanted, pane) {
  const items = pane.querySelectorAll(".hljs-comment,h3");
  const best = bestMatch(wanted, items);

  // Tricky part - scrolling math.
  let panetop = pane.getBoundingClientRect().top;
  let panescroll = pane.scrollTop;
  let besttop = best.getBoundingClientRect().top;

  let targetTop = besttop - panetop + panescroll;

  if (targetTop < 100) {
    targetTop = 0;
  }
  pane.scrollTop = targetTop;
}

function matchScrolling(pane, events, context) {
  // So we don't trigger infinite recursion.
  // So we don't trigger infinite recursion.
  // So we don't trigger infinite recursion.
  const now = new Date().getTime();

  if (context.activeUntil > now) {
    if (pane.id !== context.activePane) {
      return;
    }
  }
  context.activePane = pane.id;
  context.activeUntil = now + 1000;

  foo = events;

  const wanted = events[0].target;

  for (const element of context.panes) {
    if (element.id !== pane.id) {
      scrollToItem(wanted, element);
    }
  }
}

function watchScrolling(pane, context) {
  pane.observer = new IntersectionObserver(function(events) {
    matchScrolling(pane, events, context);
  }, {
    root: pane,
    threshold: 1.0,
    rootMargin: "20px 0px 20px 0px",
  });
  pane.observing = [];
}

function setRenderPanes(panes) {
  const now = new Date().getTime();
  const context = {
    activePane: null,
    activeUntil: now + 1000,
    panes: panes,
  };
  for (pane of panes) {
    watchScrolling(pane, context);
  }
}

function renderLanguageTo(element, category, language) {
  for (const watched of element.observing) {
    element.observer.unobsrve(watched);
  }
  element.innerHTML = BUILT.snippets[category][language].innerHTML;
  for (const watch of element.querySelectorAll(".hljs-comment,h3")) {
    element.observer.observe(watch);
  }
}

function buildIndex() {
  // TODO: Maybe save indexes into local storagedb?

  const categories = {};
  for (const category of Object.values(GENERATED.categories)) {
    // Sort all topics.
    displaytopics = category.topics;
    topics = getSortedTopics(category);

    const languages = {};
    for (const language of Object.values(category.languages)) {
      var renderDiv = document.createElement("div");
      for (const topic of topics) {
        if (language.snippets[topic] !== undefined) {
          appendSnippet(renderDiv, language.css, topic, displaytopics[topic], language.snippets[topic]);
        }
      }
      languages[language.name] = renderDiv;
    }
    categories[category.name] = languages;
  }
  BUILT.snippets = categories;
}

function searchPhrase(phrase) {
  // Normalize the phrase to lowercase for case-insensitive comparison
  const normalizedPhrase = phrase.toLowerCase();
  const matchingContents = [];

  // Iterate over keyword mappings
  for (const mapping of keywordMappings) {
    // Check if any of the keywords are included in the phrase
    if (mapping.keywords.some(keyword => normalizedPhrase.includes(keyword))) {
      // Get the target associated with the mapping
      const target = mapping.target;

      // Get the file contents associated with the target
      const targetContents = fileContents[target];

      // If no file contents are found for the target, continue to the next mapping
      if (!targetContents) {
        continue;
      }

      // Filter the file contents to include only those that contain the phrase
      const filteredContents = targetContents.filter(content =>
        content.toLowerCase().includes(normalizedPhrase)
      );

      // Add the filtered contents to the matching contents array
      matchingContents.push(...filteredContents);
    }
  }

  // If no contents are found from keyword mapping, search all file contents
  if (matchingContents.length === 0) {
    for (const target in fileContents) {
      const targetContents = fileContents[target];
      const filteredContents = targetContents.filter(content =>
        content.toLowerCase().includes(normalizedPhrase)
      );
      matchingContents.push(...filteredContents);
    }
  }

  return matchingContents;
}
