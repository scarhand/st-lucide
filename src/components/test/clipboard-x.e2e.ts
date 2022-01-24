import { newE2EPage } from '@stencil/core/testing';

describe('icon-clipboard-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-x></icon-clipboard-x>');

    const element = await page.find('icon-clipboard-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-x stroke="blue"></icon-clipboard-x>');

    const element = await page.find('icon-clipboard-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clipboard-x > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-x stroke-width="2"></icon-clipboard-x>');

    const element = await page.find('icon-clipboard-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clipboard-x > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
