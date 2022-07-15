import { newE2EPage } from '@stencil/core/testing';

describe('icon-flip-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flip-vertical></icon-flip-vertical>');

    const element = await page.find('icon-flip-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flip-vertical stroke="blue"></icon-flip-vertical>');

    const element = await page.find('icon-flip-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flip-vertical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flip-vertical stroke-width="2"></icon-flip-vertical>');

    const element = await page.find('icon-flip-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flip-vertical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
