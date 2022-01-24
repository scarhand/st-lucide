import { newE2EPage } from '@stencil/core/testing';

describe('icon-bike', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bike></icon-bike>');

    const element = await page.find('icon-bike');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bike stroke="blue"></icon-bike>');

    const element = await page.find('icon-bike');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bike > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bike stroke-width="2"></icon-bike>');

    const element = await page.find('icon-bike');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bike > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
