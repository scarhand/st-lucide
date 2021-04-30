import { newE2EPage } from '@stencil/core/testing';

describe('icon-thumbs-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thumbs-up></icon-thumbs-up>');

    const element = await page.find('icon-thumbs-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thumbs-up stroke="blue"></icon-thumbs-up>');

    const element = await page.find('icon-thumbs-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-thumbs-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thumbs-up stroke-width="2"></icon-thumbs-up>');

    const element = await page.find('icon-thumbs-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-thumbs-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
