import { newE2EPage } from '@stencil/core/testing';

describe('icon-wallet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wallet></icon-wallet>');

    const element = await page.find('icon-wallet');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wallet stroke="blue"></icon-wallet>');

    const element = await page.find('icon-wallet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-wallet > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wallet stroke-width="2"></icon-wallet>');

    const element = await page.find('icon-wallet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-wallet > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
