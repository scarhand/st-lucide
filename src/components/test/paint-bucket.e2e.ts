import { newE2EPage } from '@stencil/core/testing';

describe('icon-paint-bucket', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paint-bucket></icon-paint-bucket>');

    const element = await page.find('icon-paint-bucket');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paint-bucket stroke="blue"></icon-paint-bucket>');

    const element = await page.find('icon-paint-bucket');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-paint-bucket > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paint-bucket stroke-width="2"></icon-paint-bucket>');

    const element = await page.find('icon-paint-bucket');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-paint-bucket > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
