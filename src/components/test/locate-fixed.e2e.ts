import { newE2EPage } from '@stencil/core/testing';

describe('icon-locate-fixed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-locate-fixed></icon-locate-fixed>');

    const element = await page.find('icon-locate-fixed');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-locate-fixed stroke="blue"></icon-locate-fixed>');

    const element = await page.find('icon-locate-fixed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-locate-fixed > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-locate-fixed stroke-width="2"></icon-locate-fixed>');

    const element = await page.find('icon-locate-fixed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-locate-fixed > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
