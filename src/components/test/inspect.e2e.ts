import { newE2EPage } from '@stencil/core/testing';

describe('icon-inspect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-inspect></icon-inspect>');

    const element = await page.find('icon-inspect');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-inspect stroke="blue"></icon-inspect>');

    const element = await page.find('icon-inspect');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-inspect > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-inspect stroke-width="2"></icon-inspect>');

    const element = await page.find('icon-inspect');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-inspect > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
