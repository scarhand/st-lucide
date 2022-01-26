import { newE2EPage } from '@stencil/core/testing';

describe('icon-move-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move-vertical></icon-move-vertical>');

    const element = await page.find('icon-move-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move-vertical stroke="blue"></icon-move-vertical>');

    const element = await page.find('icon-move-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-move-vertical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move-vertical stroke-width="2"></icon-move-vertical>');

    const element = await page.find('icon-move-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-move-vertical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
