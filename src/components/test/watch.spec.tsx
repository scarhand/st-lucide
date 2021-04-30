import { newE2EPage } from '@stencil/core/testing';

describe('icon-watch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-watch></icon-watch>');

    const element = await page.find('icon-watch');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-watch stroke="blue"></icon-watch>');

    const element = await page.find('icon-watch');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-watch > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-watch stroke-width="2"></icon-watch>');

    const element = await page.find('icon-watch');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-watch > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
