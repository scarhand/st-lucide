import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-vertical-space-around', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-space-around></icon-align-vertical-space-around>');

    const element = await page.find('icon-align-vertical-space-around');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-space-around stroke="blue"></icon-align-vertical-space-around>');

    const element = await page.find('icon-align-vertical-space-around');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-vertical-space-around > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-space-around stroke-width="2"></icon-align-vertical-space-around>');

    const element = await page.find('icon-align-vertical-space-around');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-vertical-space-around > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
