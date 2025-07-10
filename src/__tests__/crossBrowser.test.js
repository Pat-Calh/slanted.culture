import '@testing-library/jest-dom';

describe('Cross-browser compatibility tests', () => {
  test('Basic DOM APIs should work', () => {
    document.body.innerHTML = '<div id="test">Hello</div>';
    expect(document.getElementById('test')).toHaveTextContent('Hello');
  });

  test('Modern JavaScript features should work', () => {
    const testObj = { a: 1, b: 2 };
    expect({ ...testObj, c: 3 }).toEqual({ a: 1, b: 2, c: 3 }); // Tests object spread
  });

  test('CSS Grid should be supported', () => {
    const el = document.createElement('div');
    el.style.display = 'grid';
    expect(el.style.display).toBe('grid');
  });
});
