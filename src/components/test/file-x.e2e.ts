import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-x></icon-file-x>');

    const element = await page.find('icon-file-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-x stroke="blue"></icon-file-x>');

    const element = await page.find('icon-file-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-x > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-x stroke-width="2"></icon-file-x>');

    const element = await page.find('icon-file-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-x > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
