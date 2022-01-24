import { newE2EPage } from '@stencil/core/testing';

describe('icon-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-home></icon-home>');

    const element = await page.find('icon-home');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-home stroke="blue"></icon-home>');

    const element = await page.find('icon-home');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-home > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-home stroke-width="2"></icon-home>');

    const element = await page.find('icon-home');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-home > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
