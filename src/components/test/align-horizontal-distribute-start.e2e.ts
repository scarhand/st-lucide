import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-horizontal-distribute-start', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-distribute-start></icon-align-horizontal-distribute-start>');

    const element = await page.find('icon-align-horizontal-distribute-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-distribute-start stroke="blue"></icon-align-horizontal-distribute-start>');

    const element = await page.find('icon-align-horizontal-distribute-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-horizontal-distribute-start > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-distribute-start stroke-width="2"></icon-align-horizontal-distribute-start>');

    const element = await page.find('icon-align-horizontal-distribute-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-horizontal-distribute-start > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
