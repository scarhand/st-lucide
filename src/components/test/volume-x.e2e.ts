import { newE2EPage } from '@stencil/core/testing';

describe('icon-volume-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-volume-x></icon-volume-x>');

    const element = await page.find('icon-volume-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-volume-x stroke="blue"></icon-volume-x>');

    const element = await page.find('icon-volume-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-volume-x > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-volume-x stroke-width="2"></icon-volume-x>');

    const element = await page.find('icon-volume-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-volume-x > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
