import { newE2EPage } from '@stencil/core/testing';

describe('icon-pointer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pointer></icon-pointer>');

    const element = await page.find('icon-pointer');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pointer stroke="blue"></icon-pointer>');

    const element = await page.find('icon-pointer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pointer > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pointer stroke-width="2"></icon-pointer>');

    const element = await page.find('icon-pointer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pointer > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
