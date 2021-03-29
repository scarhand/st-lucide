import { newE2EPage } from '@stencil/core/testing';

describe('icon-navigation-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-navigation-2></icon-navigation-2>');

    const element = await page.find('icon-navigation-2');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-navigation-2 stroke="blue"></icon-navigation-2>');

    const element = await page.find('icon-navigation-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-navigation-2 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-navigation-2 stroke-width="2"></icon-navigation-2>');

    const element = await page.find('icon-navigation-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-navigation-2 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
