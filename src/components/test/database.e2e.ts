import { newE2EPage } from '@stencil/core/testing';

describe('icon-database', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-database></icon-database>');

    const element = await page.find('icon-database');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-database stroke="blue"></icon-database>');

    const element = await page.find('icon-database');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-database > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-database stroke-width="2"></icon-database>');

    const element = await page.find('icon-database');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-database > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
