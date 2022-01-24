import { newE2EPage } from '@stencil/core/testing';

describe('icon-lightbulb-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lightbulb-off></icon-lightbulb-off>');

    const element = await page.find('icon-lightbulb-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lightbulb-off stroke="blue"></icon-lightbulb-off>');

    const element = await page.find('icon-lightbulb-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lightbulb-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lightbulb-off stroke-width="2"></icon-lightbulb-off>');

    const element = await page.find('icon-lightbulb-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lightbulb-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
