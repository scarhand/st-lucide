import { newE2EPage } from '@stencil/core/testing';

describe('icon-globe-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-globe-2></icon-globe-2>');

    const element = await page.find('icon-globe-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-globe-2 stroke="blue"></icon-globe-2>');

    const element = await page.find('icon-globe-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-globe-2 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-globe-2 stroke-width="2"></icon-globe-2>');

    const element = await page.find('icon-globe-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-globe-2 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
