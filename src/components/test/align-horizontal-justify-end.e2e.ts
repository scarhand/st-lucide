import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-horizontal-justify-end', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-justify-end></icon-align-horizontal-justify-end>');

    const element = await page.find('icon-align-horizontal-justify-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-justify-end stroke="blue"></icon-align-horizontal-justify-end>');

    const element = await page.find('icon-align-horizontal-justify-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-horizontal-justify-end > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-justify-end stroke-width="2"></icon-align-horizontal-justify-end>');

    const element = await page.find('icon-align-horizontal-justify-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-horizontal-justify-end > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
