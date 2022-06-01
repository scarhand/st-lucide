import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-horizontal-justify-center', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-justify-center></icon-align-horizontal-justify-center>');

    const element = await page.find('icon-align-horizontal-justify-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-justify-center stroke="blue"></icon-align-horizontal-justify-center>');

    const element = await page.find('icon-align-horizontal-justify-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-horizontal-justify-center > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-horizontal-justify-center stroke-width="2"></icon-align-horizontal-justify-center>');

    const element = await page.find('icon-align-horizontal-justify-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-horizontal-justify-center > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
