import { newE2EPage } from '@stencil/core/testing';

describe('icon-wrench', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wrench></icon-wrench>');

    const element = await page.find('icon-wrench');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wrench stroke="blue"></icon-wrench>');

    const element = await page.find('icon-wrench');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-wrench > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wrench stroke-width="2"></icon-wrench>');

    const element = await page.find('icon-wrench');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-wrench > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
