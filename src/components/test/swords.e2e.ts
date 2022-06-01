import { newE2EPage } from '@stencil/core/testing';

describe('icon-swords', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-swords></icon-swords>');

    const element = await page.find('icon-swords');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-swords stroke="blue"></icon-swords>');

    const element = await page.find('icon-swords');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-swords > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-swords stroke-width="2"></icon-swords>');

    const element = await page.find('icon-swords');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-swords > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
