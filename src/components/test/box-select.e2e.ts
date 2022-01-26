import { newE2EPage } from '@stencil/core/testing';

describe('icon-box-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-box-select></icon-box-select>');

    const element = await page.find('icon-box-select');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-box-select stroke="blue"></icon-box-select>');

    const element = await page.find('icon-box-select');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-box-select > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-box-select stroke-width="2"></icon-box-select>');

    const element = await page.find('icon-box-select');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-box-select > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
