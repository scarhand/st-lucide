import { newE2EPage } from '@stencil/core/testing';

describe('icon-strikethrough', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-strikethrough></icon-strikethrough>');

    const element = await page.find('icon-strikethrough');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-strikethrough stroke="blue"></icon-strikethrough>');

    const element = await page.find('icon-strikethrough');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-strikethrough > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-strikethrough stroke-width="2"></icon-strikethrough>');

    const element = await page.find('icon-strikethrough');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-strikethrough > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
