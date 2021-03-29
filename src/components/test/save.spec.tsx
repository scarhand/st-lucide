import { newE2EPage } from '@stencil/core/testing';

describe('icon-save', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-save></icon-save>');

    const element = await page.find('icon-save');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-save stroke="blue"></icon-save>');

    const element = await page.find('icon-save');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-save > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-save stroke-width="2"></icon-save>');

    const element = await page.find('icon-save');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-save > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
