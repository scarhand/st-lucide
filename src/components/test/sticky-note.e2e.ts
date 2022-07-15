import { newE2EPage } from '@stencil/core/testing';

describe('icon-sticky-note', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sticky-note></icon-sticky-note>');

    const element = await page.find('icon-sticky-note');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sticky-note stroke="blue"></icon-sticky-note>');

    const element = await page.find('icon-sticky-note');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sticky-note > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sticky-note stroke-width="2"></icon-sticky-note>');

    const element = await page.find('icon-sticky-note');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sticky-note > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
