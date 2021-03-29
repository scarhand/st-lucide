import { newE2EPage } from '@stencil/core/testing';

describe('icon-book-open', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-book-open></icon-book-open>');

    const element = await page.find('icon-book-open');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-book-open stroke="blue"></icon-book-open>');

    const element = await page.find('icon-book-open');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-book-open > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-book-open stroke-width="2"></icon-book-open>');

    const element = await page.find('icon-book-open');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-book-open > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
