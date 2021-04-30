import { newE2EPage } from '@stencil/core/testing';

describe('icon-repeat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-repeat></icon-repeat>');

    const element = await page.find('icon-repeat');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-repeat stroke="blue"></icon-repeat>');

    const element = await page.find('icon-repeat');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-repeat > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-repeat stroke-width="2"></icon-repeat>');

    const element = await page.find('icon-repeat');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-repeat > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
