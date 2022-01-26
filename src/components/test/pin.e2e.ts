import { newE2EPage } from '@stencil/core/testing';

describe('icon-pin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pin></icon-pin>');

    const element = await page.find('icon-pin');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pin stroke="blue"></icon-pin>');

    const element = await page.find('icon-pin');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pin > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pin stroke-width="2"></icon-pin>');

    const element = await page.find('icon-pin');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pin > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
