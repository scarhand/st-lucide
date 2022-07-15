import { newE2EPage } from '@stencil/core/testing';

describe('icon-medal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-medal></icon-medal>');

    const element = await page.find('icon-medal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-medal stroke="blue"></icon-medal>');

    const element = await page.find('icon-medal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-medal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-medal stroke-width="2"></icon-medal>');

    const element = await page.find('icon-medal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-medal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
