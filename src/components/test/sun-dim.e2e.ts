import { newE2EPage } from '@stencil/core/testing';

describe('icon-sun-dim', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-dim></icon-sun-dim>');

    const element = await page.find('icon-sun-dim');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-dim stroke="blue"></icon-sun-dim>');

    const element = await page.find('icon-sun-dim');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sun-dim > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-dim stroke-width="2"></icon-sun-dim>');

    const element = await page.find('icon-sun-dim');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sun-dim > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
