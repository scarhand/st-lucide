import { newE2EPage } from '@stencil/core/testing';

describe('icon-currency', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-currency></icon-currency>');

    const element = await page.find('icon-currency');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-currency stroke="blue"></icon-currency>');

    const element = await page.find('icon-currency');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-currency > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-currency stroke-width="2"></icon-currency>');

    const element = await page.find('icon-currency');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-currency > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
