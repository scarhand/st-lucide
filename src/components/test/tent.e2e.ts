import { newE2EPage } from '@stencil/core/testing';

describe('icon-tent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tent></icon-tent>');

    const element = await page.find('icon-tent');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tent stroke="blue"></icon-tent>');

    const element = await page.find('icon-tent');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tent > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tent stroke-width="2"></icon-tent>');

    const element = await page.find('icon-tent');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tent > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
