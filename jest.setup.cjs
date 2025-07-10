require('@testing-library/jest-dom');

// Mock any global browser APIs if needed
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};
