import { newE2EPage } from '@stencil/core/testing';

describe('icon-banknote', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-banknote></icon-banknote>');

    const element = await page.find('icon-banknote');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-banknote stroke="blue"></icon-banknote>');

    const element = await page.find('icon-banknote');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-banknote > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-banknote stroke-width="2"></icon-banknote>');

    const element = await page.find('icon-banknote');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-banknote > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
