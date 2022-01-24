import { newE2EPage } from '@stencil/core/testing';

describe('icon-flag-triangle-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag-triangle-right></icon-flag-triangle-right>');

    const element = await page.find('icon-flag-triangle-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag-triangle-right stroke="blue"></icon-flag-triangle-right>');

    const element = await page.find('icon-flag-triangle-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flag-triangle-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag-triangle-right stroke-width="2"></icon-flag-triangle-right>');

    const element = await page.find('icon-flag-triangle-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flag-triangle-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
