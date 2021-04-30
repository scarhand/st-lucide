import { newE2EPage } from '@stencil/core/testing';

describe('icon-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x></icon-x>');

    const element = await page.find('icon-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x stroke="blue"></icon-x>');

    const element = await page.find('icon-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-x > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x stroke-width="2"></icon-x>');

    const element = await page.find('icon-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-x > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
