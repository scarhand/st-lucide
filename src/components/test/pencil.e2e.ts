import { newE2EPage } from '@stencil/core/testing';

describe('icon-pencil', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pencil></icon-pencil>');

    const element = await page.find('icon-pencil');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pencil stroke="blue"></icon-pencil>');

    const element = await page.find('icon-pencil');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pencil > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pencil stroke-width="2"></icon-pencil>');

    const element = await page.find('icon-pencil');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pencil > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
