import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-left></icon-arrow-left>');

    const element = await page.find('icon-arrow-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-left stroke="blue"></icon-arrow-left>');

    const element = await page.find('icon-arrow-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-left > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-left stroke-width="2"></icon-arrow-left>');

    const element = await page.find('icon-arrow-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-left > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
