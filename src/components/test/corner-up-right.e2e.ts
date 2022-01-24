import { newE2EPage } from '@stencil/core/testing';

describe('icon-corner-up-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-up-right></icon-corner-up-right>');

    const element = await page.find('icon-corner-up-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-up-right stroke="blue"></icon-corner-up-right>');

    const element = await page.find('icon-corner-up-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-corner-up-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-up-right stroke-width="2"></icon-corner-up-right>');

    const element = await page.find('icon-corner-up-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-corner-up-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
