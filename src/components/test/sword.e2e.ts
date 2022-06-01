import { newE2EPage } from '@stencil/core/testing';

describe('icon-sword', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sword></icon-sword>');

    const element = await page.find('icon-sword');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sword stroke="blue"></icon-sword>');

    const element = await page.find('icon-sword');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sword > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sword stroke-width="2"></icon-sword>');

    const element = await page.find('icon-sword');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sword > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
