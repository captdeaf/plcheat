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

  bestscore = 0;
  bestfit = comments[0];

  for (const comment of comments) {
    let score = 0;
    for (const word of normalize(comment.innerText)) {
      if (wants[word]) {
        score += 1;
      }
    }
    if (score > bestscore) {
      bestscore = score;
      bestfit = comment;
    }
  }
  return bestfit;
}

function scrollToComment(wanted, pane) {
  const comments = pane.querySelectorAll(".hljs-comment");
  const best = bestMatch(wanted, comments);

  // Tricky part - scrolling math.
  let panetop = pane.getBoundingClientRect().top;
  let panescroll = pane.scrollTop;
  let commenttop = best.getBoundingClientRect().top;

  pane.scrollTop = commenttop - panetop + panescroll;
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
  context.activeUntil = now + 5000;

  foo = events;

  console.log("Pane " + pane.id + " wants others to match scrolling with " + events.length + " items.");
  const wanted = events[0].target;

  for (const element of context.panes) {
    if (element.id !== pane.id) {
      scrollToComment(wanted, element);
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
  const context = {
    activePane: null,
    activeUntil: 0,
    panes: panes,
  };
  for (pane of panes) {
    watchScrolling(pane, context);
  }
}

function renderLanguageTo(element, category, language) {
  console.log("Rendering to " + element.id);
  for (const watched of element.observing) {
    element.observer.unobsrve(watched);
  }
  element.innerHTML = BUILT.snippets[category][language].innerHTML;
  for (const watch of element.querySelectorAll(".hljs-comment")) {
    element.observer.observe(watch);
  }
}

function tagComments(language, renderDiv) {
  const allComments = renderDiv.querySelectorAll('.hljs-comment');
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
      tagComments(language, renderDiv);
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
