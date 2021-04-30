import { newE2EPage } from '@stencil/core/testing';

describe('icon-thumbs-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thumbs-down></icon-thumbs-down>');

    const element = await page.find('icon-thumbs-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thumbs-down stroke="blue"></icon-thumbs-down>');

    const element = await page.find('icon-thumbs-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-thumbs-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thumbs-down stroke-width="2"></icon-thumbs-down>');

    const element = await page.find('icon-thumbs-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-thumbs-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
