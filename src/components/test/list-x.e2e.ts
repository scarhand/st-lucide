import { newE2EPage } from '@stencil/core/testing';

describe('icon-list-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-x></icon-list-x>');

    const element = await page.find('icon-list-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-x stroke="blue"></icon-list-x>');

    const element = await page.find('icon-list-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-list-x > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-x stroke-width="2"></icon-list-x>');

    const element = await page.find('icon-list-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-list-x > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
