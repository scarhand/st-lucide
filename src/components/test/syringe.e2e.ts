import { newE2EPage } from '@stencil/core/testing';

describe('icon-syringe', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-syringe></icon-syringe>');

    const element = await page.find('icon-syringe');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-syringe stroke="blue"></icon-syringe>');

    const element = await page.find('icon-syringe');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-syringe > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-syringe stroke-width="2"></icon-syringe>');

    const element = await page.find('icon-syringe');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-syringe > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
