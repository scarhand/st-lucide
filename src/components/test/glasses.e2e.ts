import { newE2EPage } from '@stencil/core/testing';

describe('icon-glasses', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-glasses></icon-glasses>');

    const element = await page.find('icon-glasses');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-glasses stroke="blue"></icon-glasses>');

    const element = await page.find('icon-glasses');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-glasses > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-glasses stroke-width="2"></icon-glasses>');

    const element = await page.find('icon-glasses');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-glasses > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
