import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar></icon-calendar>');

    const element = await page.find('icon-calendar');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar stroke="blue"></icon-calendar>');

    const element = await page.find('icon-calendar');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar stroke-width="2"></icon-calendar>');

    const element = await page.find('icon-calendar');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
