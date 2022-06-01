import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-vertical-distribute-end', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-distribute-end></icon-align-vertical-distribute-end>');

    const element = await page.find('icon-align-vertical-distribute-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-distribute-end stroke="blue"></icon-align-vertical-distribute-end>');

    const element = await page.find('icon-align-vertical-distribute-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-vertical-distribute-end > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-distribute-end stroke-width="2"></icon-align-vertical-distribute-end>');

    const element = await page.find('icon-align-vertical-distribute-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-vertical-distribute-end > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
