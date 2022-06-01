import { newE2EPage } from '@stencil/core/testing';

describe('icon-croissant', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-croissant></icon-croissant>');

    const element = await page.find('icon-croissant');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-croissant stroke="blue"></icon-croissant>');

    const element = await page.find('icon-croissant');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-croissant > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-croissant stroke-width="2"></icon-croissant>');

    const element = await page.find('icon-croissant');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-croissant > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
