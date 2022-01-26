import { newE2EPage } from '@stencil/core/testing';

describe('icon-toggle-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-toggle-left></icon-toggle-left>');

    const element = await page.find('icon-toggle-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-toggle-left stroke="blue"></icon-toggle-left>');

    const element = await page.find('icon-toggle-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-toggle-left > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-toggle-left stroke-width="2"></icon-toggle-left>');

    const element = await page.find('icon-toggle-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-toggle-left > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
