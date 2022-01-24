import { newE2EPage } from '@stencil/core/testing';

describe('icon-chrome', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chrome></icon-chrome>');

    const element = await page.find('icon-chrome');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chrome stroke="blue"></icon-chrome>');

    const element = await page.find('icon-chrome');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chrome > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chrome stroke-width="2"></icon-chrome>');

    const element = await page.find('icon-chrome');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chrome > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
