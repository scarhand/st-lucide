import { newE2EPage } from '@stencil/core/testing';

describe('icon-dice-3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-dice-3></icon-dice-3>');

    const element = await page.find('icon-dice-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-dice-3 stroke="blue"></icon-dice-3>');

    const element = await page.find('icon-dice-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-dice-3 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-dice-3 stroke-width="2"></icon-dice-3>');

    const element = await page.find('icon-dice-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-dice-3 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
