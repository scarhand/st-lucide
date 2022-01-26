import { newE2EPage } from '@stencil/core/testing';

describe('icon-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list></icon-list>');

    const element = await page.find('icon-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list stroke="blue"></icon-list>');

    const element = await page.find('icon-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-list > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list stroke-width="2"></icon-list>');

    const element = await page.find('icon-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-list > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
