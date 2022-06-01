import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-horizontal-distribute-center', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-distribute-center></icon-align-horizontal-distribute-center>');

    const element = await page.find('icon-align-horizontal-distribute-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-distribute-center stroke="blue"></icon-align-horizontal-distribute-center>');

    const element = await page.find('icon-align-horizontal-distribute-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-horizontal-distribute-center > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-distribute-center stroke-width="2"></icon-align-horizontal-distribute-center>');

    const element = await page.find('icon-align-horizontal-distribute-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-horizontal-distribute-center > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
