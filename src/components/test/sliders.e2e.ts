import { newE2EPage } from '@stencil/core/testing';

describe('icon-sliders', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sliders></icon-sliders>');

    const element = await page.find('icon-sliders');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sliders stroke="blue"></icon-sliders>');

    const element = await page.find('icon-sliders');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sliders > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sliders stroke-width="2"></icon-sliders>');

    const element = await page.find('icon-sliders');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sliders > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
