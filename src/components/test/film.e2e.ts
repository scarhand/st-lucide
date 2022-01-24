import { newE2EPage } from '@stencil/core/testing';

describe('icon-film', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-film></icon-film>');

    const element = await page.find('icon-film');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-film stroke="blue"></icon-film>');

    const element = await page.find('icon-film');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-film > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-film stroke-width="2"></icon-film>');

    const element = await page.find('icon-film');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-film > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
