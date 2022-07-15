import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-badge></icon-file-badge>');

    const element = await page.find('icon-file-badge');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-badge stroke="blue"></icon-file-badge>');

    const element = await page.find('icon-file-badge');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-badge > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-badge stroke-width="2"></icon-file-badge>');

    const element = await page.find('icon-file-badge');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-badge > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
