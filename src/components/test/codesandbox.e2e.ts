import { newE2EPage } from '@stencil/core/testing';

describe('icon-codesandbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-codesandbox></icon-codesandbox>');

    const element = await page.find('icon-codesandbox');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-codesandbox stroke="blue"></icon-codesandbox>');

    const element = await page.find('icon-codesandbox');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-codesandbox > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-codesandbox stroke-width="2"></icon-codesandbox>');

    const element = await page.find('icon-codesandbox');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-codesandbox > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
