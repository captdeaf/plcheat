// cheatsheet.js
//
// UI management for plcheat, a programming language cheat sheet website.
//
// Using highlight.js for ... pretty much everything.
//
// Programming (default): C, Bash, python, rust, etc.
//
// Database: pgsql, sql, etc.

function getAll(identifier) {
  return document.querySelectorAll(identifier);
}

function get(identifier) {
  return document.querySelector(identifier);
}

function getSaved(name, otherwise) {
  const val = localStorage.getItem(name);
  if (val === null) {
    localStorage.setItem(name, otherwise);
    return otherwise;
  }
  return val;
}

function setSaved(name, val) {
  localStorage.setItem(name, val);
  return val;
}

function setupDescription() {
  const desc = get('#description');
  const close = get('#description-closer');
  const open = get('#description-opener');
  const statekey = 'description-state';
  const state = localStorage.getItem(statekey);

  const opendisplay = open.style.display;
  const closedisplay = close.style.display;
  const descdisplay = desc.style.display;

  function closeDescription() {
    desc.style.display = 'none';
    close.style.display = 'none';
    open.style.display = opendisplay;
    localStorage.setItem(statekey, 'closed');
  }

  function openDescription() {
    desc.style.display = descdisplay;
    close.style.display = closedisplay;
    open.style.display = 'none';
    localStorage.setItem(statekey, 'open');
  }

  close.addEventListener('click', closeDescription);
  open.addEventListener('click', openDescription);

  if (state === 'closed') {
    closeDescription();
  } else {
    openDescription();
  }
}

function buildSelect(element, options) {
  element.innerHTML = '';
  let names = [];
  const map = {};
  for (const [shortname, dispname] of Object.entries(options)) {
    names.push(dispname)
    map[dispname] = shortname;
  }

  names = names.sort();
  for (const dispname of names) {
    let opt = document.createElement('option');
    opt.setAttribute('value', map[dispname]);
    opt.innerText = dispname;
    element.appendChild(opt);
  }
}

function setupHeader() {
  setupDescription();

  const categorySelect = get('#category');
  const fromSelect = get('#langfrom');
  const toSelect = get('#langto');

  buildSelect(categorySelect, GENERATED.categories);

  // SEARCHDATA built what we want, sorta.
  function languagesFor(category) {
    console.log("Selected " + category);
    const languages = {};
    for (const lang of Object.keys(SEARCHDATA.allComments[category])) {
      languages[lang] = GENERATED.languages[lang].displayname;
    }
    return languages;
  }

  let selectedCategory = setSaved('selectedCategory', 'programming');
  let selectedFrom = setSaved('selectedFrom', 'python');
  let selectedTo = setSaved('selectedTo', 'js');

  function selectCategory(category) {
    let opt = categorySelect.querySelector('[value="' + category + '"]');
    if (!opt) {
      setSaved('selectedCategory', 'programming');
      return;
    }
    selectedCategory = setSaved('selectedCategory', category);
    buildSelect(fromSelect, languagesFor(category));
    buildSelect(toSelect, languagesFor(category));
  }

  function selectFrom(language) {
    let opt = fromSelect.querySelector('[value="' + language + '"]');
    if (!opt) {
      setSaved('selectedFrom', 'python');
      return;
    }
    opt.selected = true;
    selectedFrom = setSaved('selectedFrom', language);
  }

  function selectTo(language) {
    let opt = toSelect.querySelector('[value="' + language + '"]');
    if (!opt) {
      setSaved('selectedTo', 'js');
      return;
    }
    opt.selected = true;
    selectedTo = setSaved('selectedTo', language);
  }

  selectCategory(selectedCategory);
  selectFrom(selectedFrom);
  selectTo(selectedTo);

  categorySelect.addEventListener('change', function() {
    const opt = categorySelect.querySelector('option:checked');
    selectCategory(opt.value);
  });

  fromSelect.addEventListener('change', function() {
    const opt = fromSelect.querySelector('option:checked');
    selectFrom(opt.value);
  });

  toSelect.addEventListener('change', function() {
    const opt = toSelect.querySelector('option:checked');
    selectTo(opt.value);
  });
}

// or IDB?
const SEARCHDATA = {};

const COMMENTSCANS = {
  default: new RegExp('^\s*(#|//)\s*(.*)\s*$'),
};

function findComments(body, pattern) {
  if (pattern === undefined) { pattern = 'default'; }
  let rx = COMMENTSCANS[pattern];
  if (rx === undefined) {
    rx = new RegExp('^\s*(' + pattern + ') (.*)');
    COMMENTSCANS[pattern] = rx;
  }

  const results = [];

  const lines = body.split("\n");
  for (const line of lines) {
    const match = line.match(rx);
    if (match) {
      results.push(match[2]);
    }
  }

  return results;
}

function buildSearchStructure() {
  // Optimizing searches. This may eventually be put into localStorage
  SEARCHDATA.keywords = GENERATED.keywords;

  // Now the BIG one, which we actually generate.
  // allComments is a structure of:
  //
  // category:
  //   language:
  //     comment: {topic: "topic", line: linenum}
  //
  // e.g:
  //
  // programming:
  //   javascript:
  //     "Pattern Matching": {topic: 'regexps', line: 20}

  const ac = {};
  for (const [shortname, language] of Object.entries(GENERATED.languages)) {
    for (const [category, topics] of Object.entries(language.snippets)) {
      if (ac[category] === undefined) { ac[category] = {}; }
      if (ac[category][shortname] === undefined) { ac[category][shortname] = {}; }
      for (const [topic, body] of Object.entries(topics)) {
        let comments = findComments(body, language.comment);
        for (const comment of comments) {
          ac[category][shortname][comment] = topic;
        }
      }
    }
  }

  SEARCHDATA.allComments = ac;
}

function populateLanguages() {
  // Build the collection for category->(languages)
  let cats = {};
  for (const [shortname, language] of Object.entries(GENERATED.languages)) {
    for (const [category, topics] of Object.entries(language.snippets)) {
      if (cats[category] === undefined) { cats[category] = []; }
      cats[category].push(shortname);
    }
  }
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

function getStarted() {
  populateLanguages();
  buildSearchStructure();
  setupHeader();
}
