import { newE2EPage } from '@stencil/core/testing';

describe('icon-luggage', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-luggage></icon-luggage>');

    const element = await page.find('icon-luggage');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-luggage stroke="blue"></icon-luggage>');

    const element = await page.find('icon-luggage');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-luggage > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-luggage stroke-width="2"></icon-luggage>');

    const element = await page.find('icon-luggage');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-luggage > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
