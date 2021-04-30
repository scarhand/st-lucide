import { newE2EPage } from '@stencil/core/testing';

describe('icon-user-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-plus></icon-user-plus>');

    const element = await page.find('icon-user-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-plus stroke="blue"></icon-user-plus>');

    const element = await page.find('icon-user-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-user-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-plus stroke-width="2"></icon-user-plus>');

    const element = await page.find('icon-user-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-user-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
