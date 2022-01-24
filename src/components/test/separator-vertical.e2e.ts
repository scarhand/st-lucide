import { newE2EPage } from '@stencil/core/testing';

describe('icon-separator-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-separator-vertical></icon-separator-vertical>');

    const element = await page.find('icon-separator-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-separator-vertical stroke="blue"></icon-separator-vertical>');

    const element = await page.find('icon-separator-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-separator-vertical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-separator-vertical stroke-width="2"></icon-separator-vertical>');

    const element = await page.find('icon-separator-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-separator-vertical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
