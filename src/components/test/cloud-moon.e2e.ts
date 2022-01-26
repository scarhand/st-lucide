import { newE2EPage } from '@stencil/core/testing';

describe('icon-cloud-moon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-moon></icon-cloud-moon>');

    const element = await page.find('icon-cloud-moon');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-moon stroke="blue"></icon-cloud-moon>');

    const element = await page.find('icon-cloud-moon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cloud-moon > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-moon stroke-width="2"></icon-cloud-moon>');

    const element = await page.find('icon-cloud-moon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cloud-moon > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
