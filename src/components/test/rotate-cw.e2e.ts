import { newE2EPage } from '@stencil/core/testing';

describe('icon-rotate-cw', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-cw></icon-rotate-cw>');

    const element = await page.find('icon-rotate-cw');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-cw stroke="blue"></icon-rotate-cw>');

    const element = await page.find('icon-rotate-cw');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-rotate-cw > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-cw stroke-width="2"></icon-rotate-cw>');

    const element = await page.find('icon-rotate-cw');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-rotate-cw > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
