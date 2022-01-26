import { newE2EPage } from '@stencil/core/testing';

describe('icon-verified', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-verified></icon-verified>');

    const element = await page.find('icon-verified');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-verified stroke="blue"></icon-verified>');

    const element = await page.find('icon-verified');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-verified > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-verified stroke-width="2"></icon-verified>');

    const element = await page.find('icon-verified');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-verified > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
