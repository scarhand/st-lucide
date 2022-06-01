import { newE2EPage } from '@stencil/core/testing';

describe('icon-train', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-train></icon-train>');

    const element = await page.find('icon-train');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-train stroke="blue"></icon-train>');

    const element = await page.find('icon-train');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-train > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-train stroke-width="2"></icon-train>');

    const element = await page.find('icon-train');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-train > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
