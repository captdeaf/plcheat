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

function setupHeader() {
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

function getStarted() {
  setupHeader();
}
