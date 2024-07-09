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
//   searchAdvanced(phrase)

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

function addToggle(attr, stateKey, defaultState, callback) {
  // checkbox.onchange = addToggle('checked',
  //                               'advancedSearch', 
  //                               false,
  //                               function(enabled) {
  //                                 if (enabled) {
  //                                   ...
  //                                 }
  //                               });
  //  if attr is a function, it's called instead of element[attr] boolean.
  //  if attr is undefined, it's a toggle.
  let state = getSaved(stateKey, defaultState) === 'true';

  let checkElement = function(target) {
    return target[attr];
  };
  if (attr === undefined) {
    checkElement = function() {
      return !state;
    };
  } else if (typeof(attr) === typeof(checkElement)) {
    checkElement = attr;
  }

  callback(state);

  return function(target) {
    state = checkElement(target);
    setSaved(stateKey, "" + state);
    callback(state);
  }
}

function setupAbout() {
  const desc = get('#about');
  const toggles = getAll('.toggle-about');

  const descdisplay = desc.style.display;

  const toggleAbout = addToggle(undefined, 'about-shown', false, function(enabled) {
    if (enabled) {
      desc.style.display = 'none';
    } else {
      desc.style.display = descdisplay;
    }
  });

  for (const toggle of toggles) {
    toggle.onclick = toggleAbout;
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

function setupAdvancedSearch() {
  const stateKey = 'advanced-override';
  let checkbox = get('#advanced-search');
  let searchbox = get('#searchbox');

  const sheetLeft = get('#sheetleft');
  const sheetRight = get('#sheetright');

  let enableOverride = false;

  const toggleAbout = addToggle('checked', 'advanced-override', false, function(enabled) {
    enableOverride = enabled;
  });

  let curSearch = undefined;
  const onchange = function(search) {
    if (searchbox.value.length >= 2) {
      if (curSearch !== search) {
        curSearch = search;
        console.log("Searching " + search);
        if (searchAdvanced(sheetLeft, search)) return;
        if (searchAdvanced(sheetRight, search)) return;

        searchbox.style['border-color'] = 'red';
        setTimeout(function() {
          searchbox.style['border-color'] = null;
        }, 500);
      }
    }
  };

  let timer = undefined;
  const watchbox = function() {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      let normalized = searchbox.value.trim().replace(/\s\s+/g, ' ').replace(/[^a-z ]/, '').toLowerCase();
      if (normalized != searchbox.value) {
        searchbox.value = normalized;
      }
      onchange(normalized);
    }, 100);
  };

  searchbox.onkeypress = watchbox;
  searchbox.onkeyup = watchbox;
}

function setupUI() {
  setupAbout();
  setupAdvancedSearch();

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
