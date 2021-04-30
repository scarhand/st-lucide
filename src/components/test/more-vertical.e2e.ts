import { newE2EPage } from '@stencil/core/testing';

describe('icon-more-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-more-vertical></icon-more-vertical>');

    const element = await page.find('icon-more-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-more-vertical stroke="blue"></icon-more-vertical>');

    const element = await page.find('icon-more-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-more-vertical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-more-vertical stroke-width="2"></icon-more-vertical>');

    const element = await page.find('icon-more-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-more-vertical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
