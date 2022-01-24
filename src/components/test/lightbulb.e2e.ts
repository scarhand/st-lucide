import { newE2EPage } from '@stencil/core/testing';

describe('icon-lightbulb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lightbulb></icon-lightbulb>');

    const element = await page.find('icon-lightbulb');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lightbulb stroke="blue"></icon-lightbulb>');

    const element = await page.find('icon-lightbulb');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lightbulb > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lightbulb stroke-width="2"></icon-lightbulb>');

    const element = await page.find('icon-lightbulb');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lightbulb > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
