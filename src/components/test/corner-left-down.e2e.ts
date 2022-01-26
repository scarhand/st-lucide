import { newE2EPage } from '@stencil/core/testing';

describe('icon-corner-left-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-left-down></icon-corner-left-down>');

    const element = await page.find('icon-corner-left-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-left-down stroke="blue"></icon-corner-left-down>');

    const element = await page.find('icon-corner-left-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-corner-left-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-left-down stroke-width="2"></icon-corner-left-down>');

    const element = await page.find('icon-corner-left-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-corner-left-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
