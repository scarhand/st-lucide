import { newE2EPage } from '@stencil/core/testing';

describe('icon-ruler', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ruler></icon-ruler>');

    const element = await page.find('icon-ruler');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ruler stroke="blue"></icon-ruler>');

    const element = await page.find('icon-ruler');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-ruler > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ruler stroke-width="2"></icon-ruler>');

    const element = await page.find('icon-ruler');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-ruler > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
