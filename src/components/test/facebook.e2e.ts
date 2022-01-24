import { newE2EPage } from '@stencil/core/testing';

describe('icon-facebook', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-facebook></icon-facebook>');

    const element = await page.find('icon-facebook');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-facebook stroke="blue"></icon-facebook>');

    const element = await page.find('icon-facebook');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-facebook > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-facebook stroke-width="2"></icon-facebook>');

    const element = await page.find('icon-facebook');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-facebook > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
