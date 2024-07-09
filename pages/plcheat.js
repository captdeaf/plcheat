// plcheat.js
//
// Indexing and search management for plcheat.

// Used from plui:
//   get(), getAll()
//   getSaved(), setSaved()
//
// Called from index.html:
//   buildIndexes();
//   searchAdvanced(phrase);
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

function appendSnippet(element, css, aliases, displaytopic, snippet) {
  const title = document.createElement("h3");
  title.innerText = displaytopic;

  title.aliases = aliases;

  const codesnippet = document.createElement("code");
  codesnippet.innerHTML = snippet;
  codesnippet.className = "language-" + css;
  hljs.highlightElement(codesnippet);

  // Add topic to each for advanced searching.
  for (const element of codesnippet.querySelectorAll(".hljs-comment")) {
    element.aliases = aliases;
  }
  const presnippet = document.createElement("pre");
  presnippet.appendChild(codesnippet);

  element.appendChild(title);
  element.appendChild(presnippet);
  element.appendChild(document.createElement("hr"));
}

function normalize(str) {
  str = str.replaceAll(/[^a-zA-Z]+/g, ' ').toLowerCase();
  str = str.replaceAll(/\s+/g, ' ').replace(/^\s+/, '').replace(/\s+$/, '');
  return str.split(/\s+/)
}

function bestMatch(searches, targets, isAdvanced) {
  let best = {
    score: 0,
    rest: 1000,
    target: targets[0],
    matches: [],
  }

  let isMatch = function(find, word) {
    return find == word;
  }

  if (isAdvanced) {
    isMatch = function(find, word) {
      return word.includes(find);
    }
  }
 
  for (const search of searches) {
    const wants = {};
    for (const word of normalize(search)) {
      wants[word] = true;
    }

    for (const target of targets) {
      let cur = {
        score: 0,
        rest: 0,
        target: target,
        matches: [],
      };
      let searchWanted = Object.assign({}, wants);

      // Score consists of two things:
      //   1) Matched words (e.g: 2 matches)
      //   2) Unmatched words / "rest" (So shorter is better)
      for (const searchWord of Object.keys(searchWanted)) {
        let found = false;
        for (const word of normalize(target.innerText)) {
          if (isMatch(searchWord, word)) {
            cur.score += 1;
            cur.matches.push(word);
            delete searchWanted[searchWord];
            break;
          }
          if (word.length > 3) {
            // Don't add to rest on "is", "the", "a", "and", etc.
            cur.rest += 1;
          }
        }
        if (searchWanted[searchWord]) {
          cur.rest += 1;
        }
      }
      cur.rest += Object.keys(searchWanted).length;

      // if (score > 0) {
        // console.log("Comparing " + target.innerText + " vs " + wanted.innerText + ": " + score + " - " + rest);
      // }
      if ((cur.score > best.score && cur.rest <= best.rest) ||
          (cur.score >= best.score && cur.rest < best.rest) ||
          (cur.score - best.score > 1) ||
          (best.rest - cur.rest > 1 && cur.score == best.score)) {
        best = cur;
      }
    }
    if (best.score >= 2 || best.rest < 3) break;
  }
  console.log("Best:");
  console.log(best);
  if (best.score >= 1 || best.rest == 0) {
    return best.target;
  }
  console.log("No best?");
}

function scrollToVisible(targetPane, phrases, isAdvanced) {
  const items = targetPane.querySelectorAll(".hljs-comment,h3");
  const best = bestMatch(phrases, items, isAdvanced);

  if (!best) {
    return false
  }

  // Tricky part - scrolling math.
  let panetop = targetPane.getBoundingClientRect().top;
  let panescroll = targetPane.scrollTop;
  let besttop = best.getBoundingClientRect().top;

  let targetTop = besttop - panetop + panescroll;

  if (targetTop < 100) {
    targetTop = 0;
  }
  targetPane.scrollTop = targetTop;

  return true
}

function matchScrolling(pane, visibles, context) {
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

  for (const element of context.panes) {
    if (element.id !== pane.id) {
      const phrases = visibles.map(function(visible) {
        return visible.innerText;
      });
      scrollToVisible(element, phrases);
    }
  }
}

function watchScrolling(pane, context) {
  pane.visibles = [];
  pane.observing = [];
  pane.observer = new IntersectionObserver(function(events) {
    for (const evt of events) {
      if (evt.isIntersecting) {
        pane.visibles.push(evt.target);
      } else {
        const idx = pane.visibles.indexOf(evt.target);
        if (idx >= 0) {
          pane.visibles.splice(idx, 1);
        }
      }

      pane.visibles.sort(function(a, b) {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
      });
    }
    // console.log("Observed " + events.length + " events, " + pane.visibles.length + " visibles");
    matchScrolling(pane, pane.visibles, context);
  }, {
    root: pane,
    threshold: 1.0,
    rootMargin: "20px 0px 20px 0px",
  });
}

function setRenderPanes(panes) {
  const now = new Date().getTime();
  const context = {
    activePane: null,
    activeUntil: now + 1000,
    panes: panes,
    initializing: true,
  };
  for (pane of panes) {
    watchScrolling(pane, context);
  }
}

function renderLanguageTo(element, category, language) {
  for (const watched of element.observing) {
    element.observer.unobserve(watched);
  }
  element.innerHTML = BUILT.snippets[category][language].innerHTML;
  for (const watch of element.querySelectorAll(".hljs-comment,h3")) {
    element.observer.observe(watch);
    element.observing.push(watch);
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

function searchAdvanced(pane, phrase) {
  return scrollToVisible(pane, [phrase], true);
}
