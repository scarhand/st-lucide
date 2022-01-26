import { newE2EPage } from '@stencil/core/testing';

describe('icon-clipboard-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-list></icon-clipboard-list>');

    const element = await page.find('icon-clipboard-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-list stroke="blue"></icon-clipboard-list>');

    const element = await page.find('icon-clipboard-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clipboard-list > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-list stroke-width="2"></icon-clipboard-list>');

    const element = await page.find('icon-clipboard-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clipboard-list > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
