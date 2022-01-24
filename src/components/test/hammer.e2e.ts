import { newE2EPage } from '@stencil/core/testing';

describe('icon-hammer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hammer></icon-hammer>');

    const element = await page.find('icon-hammer');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hammer stroke="blue"></icon-hammer>');

    const element = await page.find('icon-hammer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-hammer > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hammer stroke-width="2"></icon-hammer>');

    const element = await page.find('icon-hammer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-hammer > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
