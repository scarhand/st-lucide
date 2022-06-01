import { newE2EPage } from '@stencil/core/testing';

describe('icon-accessibility', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-accessibility></icon-accessibility>');

    const element = await page.find('icon-accessibility');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-accessibility stroke="blue"></icon-accessibility>');

    const element = await page.find('icon-accessibility');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-accessibility > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-accessibility stroke-width="2"></icon-accessibility>');

    const element = await page.find('icon-accessibility');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-accessibility > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
