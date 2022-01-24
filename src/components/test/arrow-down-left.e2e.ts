import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-down-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down-left></icon-arrow-down-left>');

    const element = await page.find('icon-arrow-down-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down-left stroke="blue"></icon-arrow-down-left>');

    const element = await page.find('icon-arrow-down-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-down-left > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down-left stroke-width="2"></icon-arrow-down-left>');

    const element = await page.find('icon-arrow-down-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-down-left > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
