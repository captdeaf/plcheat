// plui.js
//
// UI management for plcheat, a programming language cheat sheet website.
//
// Using highlight.js for ... pretty much everything.
//
// Programming (default): C, Bash, python, rust, etc.
//
// Database: pgsql, sql, etc.
//
// Called from plui:
//   get(selector), getAll(selector)
//   getSaved(name, default), setSaved(name, value)
//
// Used from plcheat:
//   setRenderPanes(elements)
//   renderLanguageTo(element, selectedCategory, language)

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

  close.onclick = closeDescription;
  open.onclick = openDescription;

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

function setupUI() {
  setupDescription();

  const categorySelect = get('#category');
  const fromSelect = get('#langfrom');
  const toSelect = get('#langto');
  const sheetLeft = get('#sheetleft');
  const sheetRight = get('#sheetright');

  setRenderPanes([sheetRight, sheetLeft]);

  const allCategories = [];

  // Most of our structures are {name: {name: name, displayname: displayname}, ...{
  // Convert values into [{name: displayname}]
  function makeSelectObject(group) {
    const kvmap = {};
    for (const v of Object.values(group)) {
      kvmap[v.name] = v.displayname;
    }
    return kvmap;
  }

  buildSelect(categorySelect, makeSelectObject(GENERATED.categories));

  let selectedCategory = getSaved('selectedCategory', 'programming');
  let selectedFrom = getSaved('selectedFrom', 'python');
  let selectedTo = getSaved('selectedTo', 'js');

  function selectCategory(category) {
    let opt = categorySelect.querySelector('[value="' + category + '"]');
    if (!opt) {
      setSaved('selectedCategory', 'programming');
      return;
    }
    selectedCategory = setSaved('selectedCategory', category);
    const languageSelect = makeSelectObject(GENERATED.categories[category].languages);
    buildSelect(fromSelect, languageSelect);
    buildSelect(toSelect, languageSelect);
  }

  function selectFrom(language) {
    let opt = fromSelect.querySelector('[value="' + language + '"]');
    if (!opt) {
      setSaved('selectedFrom', 'python');
      return;
    }
    opt.selected = true;
    selectedFrom = setSaved('selectedFrom', language);
    renderLanguageTo(sheetLeft, selectedCategory, selectedFrom);
  }

  function selectTo(language) {
    let opt = toSelect.querySelector('[value="' + language + '"]');
    if (!opt) {
      setSaved('selectedTo', 'js');
      return;
    }
    opt.selected = true;
    selectedTo = setSaved('selectedTo', language);
    renderLanguageTo(sheetRight, selectedCategory, selectedTo);
  }

  selectCategory(selectedCategory);
  selectFrom(selectedFrom);
  selectTo(selectedTo);

  categorySelect.onchange = function() {
    const opt = categorySelect.querySelector('option:checked');
    selectCategory(opt.value);
  };

  fromSelect.onchange = function() {
    const opt = fromSelect.querySelector('option:checked');
    selectFrom(opt.value);
  };

  toSelect.onchange = function() {
    const opt = toSelect.querySelector('option:checked');
    selectTo(opt.value);
  };
}
