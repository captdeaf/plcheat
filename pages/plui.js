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
  let state = getSaved(stateKey, '' + defaultState) === 'true';

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

  if (callback) callback(state);

  return function(evt) {
    state = checkElement(evt.target);
    setSaved(stateKey, "" + state);
    if (callback) callback(state);
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
  let overrideCheckbox = get('#advanced-search');
  let highlightPartialCheckbox = get('#highlight-partials');
  let searchbox = get('#searchbox');

  const sheetLeft = get('#sheetleft');
  const sheetRight = get('#sheetright');

  let enableOverride = false;

  window.addEventListener("keydown",function (e) {
    if (e.ctrlKey && e.keyCode === 70) {
      if (enableOverride) {
        searchbox.focus();
        e.preventDefault();
      }
    } else if (e.keyCode == 27) {
      if (document.activeElement == searchbox) {
        searchbox.value = "";
        searchbox.focus();
        e.preventDefault();
      }
    }
  })

  overrideCheckbox.onchange = addToggle(
      'checked',
      'advanced-override',
      false,
      function(enabled) {
        enableOverride = enabled;
        overrideCheckbox.checked = enabled;
      }
  );

  highlightPartialCheckbox.onchange = addToggle(
      'checked',
      'highlight-partials',
      'false',
      function(enabled) {
        highlightPartialCheckbox.checked = enabled;
      },
  );

  let curSearch = undefined;
  const onchange = function(search) {
    if (searchbox.value.length >= 2) {
      if (curSearch !== search) {
        curSearch = search;
        clearHighlights();
        let found = false;
        if (searchAdvanced(sheetLeft, search)) found = true;
        if (searchAdvanced(sheetRight, search)) found = true;

        if (!found) {
          searchbox.style['border-color'] = 'red';
          setTimeout(function() {
            searchbox.style['border-color'] = null;
          }, 500);
        }
      }
    } else {
      clearHighlights();
    }
  };

  let timer = undefined;
  const watchbox = function() {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      let normalized = searchbox.value.toLowerCase().replace(/\s\s+/g, ' ').replace(/[^a-z ]/, '');
      if (normalized != searchbox.value) {
        searchbox.value = normalized;
      }
      onchange(normalized.trim());
    }, 100);
  };

  searchbox.onkeypress = watchbox;
  searchbox.onkeyup = watchbox;
}

function setupToggled() {
  function createToggle(section) {
    // We should receive a section.
    let toggler = section.querySelector(".toggler");
    let paras = section.querySelectorAll("p");

    let showSection = false;
    if (section.dataset['show'] === 'true') {
      showSection = true;
    }

    toggler.onclick = addToggle(undefined, section.id, showSection, function(enabled) {
      if (enabled) {
        for (const p of paras) {
          p.style.display = 'block';
        }
      } else {
        for (const p of paras) {
          p.style.display = 'none';
        }
      }
    });
  }

  for (const element of getAll(".toggledesc")) {
    createToggle(element);
  }
}

function setupUI() {
  setupAbout();
  setupAdvancedSearch();
  setupToggled();

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
