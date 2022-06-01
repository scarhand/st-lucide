import { newE2EPage } from '@stencil/core/testing';

describe('icon-clapperboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clapperboard></icon-clapperboard>');

    const element = await page.find('icon-clapperboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clapperboard stroke="blue"></icon-clapperboard>');

    const element = await page.find('icon-clapperboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clapperboard > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clapperboard stroke-width="2"></icon-clapperboard>');

    const element = await page.find('icon-clapperboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clapperboard > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
