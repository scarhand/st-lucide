import { newE2EPage } from '@stencil/core/testing';

describe('icon-flame', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flame></icon-flame>');

    const element = await page.find('icon-flame');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flame stroke="blue"></icon-flame>');

    const element = await page.find('icon-flame');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flame > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flame stroke-width="2"></icon-flame>');

    const element = await page.find('icon-flame');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flame > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
