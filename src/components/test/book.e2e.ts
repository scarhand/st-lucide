import { newE2EPage } from '@stencil/core/testing';

describe('icon-book', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-book></icon-book>');

    const element = await page.find('icon-book');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-book stroke="blue"></icon-book>');

    const element = await page.find('icon-book');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-book > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-book stroke-width="2"></icon-book>');

    const element = await page.find('icon-book');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-book > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
