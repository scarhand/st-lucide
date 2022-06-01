import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-vertical-distribute-center', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-distribute-center></icon-align-vertical-distribute-center>');

    const element = await page.find('icon-align-vertical-distribute-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-distribute-center stroke="blue"></icon-align-vertical-distribute-center>');

    const element = await page.find('icon-align-vertical-distribute-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-vertical-distribute-center > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-distribute-center stroke-width="2"></icon-align-vertical-distribute-center>');

    const element = await page.find('icon-align-vertical-distribute-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-vertical-distribute-center > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
