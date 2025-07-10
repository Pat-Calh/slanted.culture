import React from 'react';
import { render } from '@testing-library/react';
import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

const Button = ({ children }) => (
  <button style={{ 
    padding: '8px 16px', 
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white'
  }}>
    {children}
  </button>
);

test('Button renders consistently across browsers', async () => {
  const { container } = render(<Button>Test</Button>);
  
  // Launch Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport and content
  await page.setViewport({ width: 800, height: 600 });
  await page.setContent(container.innerHTML);
  
  // Capture screenshot
  const image = await page.screenshot();
  await browser.close();
  
  // Compare against snapshot
  expect(image).toMatchImageSnapshot({
    failureThreshold: 0.01,
    failureThresholdType: 'percent'
  });
});
