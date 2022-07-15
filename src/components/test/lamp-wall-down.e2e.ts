import { newE2EPage } from '@stencil/core/testing';

describe('icon-lamp-wall-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-wall-down></icon-lamp-wall-down>');

    const element = await page.find('icon-lamp-wall-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-wall-down stroke="blue"></icon-lamp-wall-down>');

    const element = await page.find('icon-lamp-wall-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lamp-wall-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-wall-down stroke-width="2"></icon-lamp-wall-down>');

    const element = await page.find('icon-lamp-wall-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lamp-wall-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
