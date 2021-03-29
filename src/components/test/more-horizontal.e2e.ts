import { newE2EPage } from '@stencil/core/testing';

describe('icon-more-horizontal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-more-horizontal></icon-more-horizontal>');

    const element = await page.find('icon-more-horizontal');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-more-horizontal stroke="blue"></icon-more-horizontal>');

    const element = await page.find('icon-more-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-more-horizontal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-more-horizontal stroke-width="2"></icon-more-horizontal>');

    const element = await page.find('icon-more-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-more-horizontal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
