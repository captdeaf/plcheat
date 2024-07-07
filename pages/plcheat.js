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

var RENDER_PANES = [];

function setRenderPanes(panes) {
  RENDER_PANES = panes;
}

function renderLanguageTo(element, category, language) {
  element.innerHTML = BUILT.snippets[category][language].innerHTML;
}

function tagDiv(language, renderDiv) {
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
      tagDiv(renderDiv);
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
