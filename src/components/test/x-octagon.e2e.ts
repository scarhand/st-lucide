import { newE2EPage } from '@stencil/core/testing';

describe('icon-x-octagon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-octagon></icon-x-octagon>');

    const element = await page.find('icon-x-octagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-octagon stroke="blue"></icon-x-octagon>');

    const element = await page.find('icon-x-octagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-x-octagon > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-octagon stroke-width="2"></icon-x-octagon>');

    const element = await page.find('icon-x-octagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-x-octagon > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
