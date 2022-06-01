import { newE2EPage } from '@stencil/core/testing';

describe('icon-keyboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-keyboard></icon-keyboard>');

    const element = await page.find('icon-keyboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-keyboard stroke="blue"></icon-keyboard>');

    const element = await page.find('icon-keyboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-keyboard > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-keyboard stroke-width="2"></icon-keyboard>');

    const element = await page.find('icon-keyboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-keyboard > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
