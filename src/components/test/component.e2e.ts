import { newE2EPage } from '@stencil/core/testing';

describe('icon-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-component></icon-component>');

    const element = await page.find('icon-component');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-component stroke="blue"></icon-component>');

    const element = await page.find('icon-component');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-component > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-component stroke-width="2"></icon-component>');

    const element = await page.find('icon-component');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-component > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
