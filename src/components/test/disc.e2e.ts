import { newE2EPage } from '@stencil/core/testing';

describe('icon-disc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-disc></icon-disc>');

    const element = await page.find('icon-disc');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-disc stroke="blue"></icon-disc>');

    const element = await page.find('icon-disc');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-disc > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-disc stroke-width="2"></icon-disc>');

    const element = await page.find('icon-disc');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-disc > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
