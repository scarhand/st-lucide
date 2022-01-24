import { newE2EPage } from '@stencil/core/testing';

describe('icon-cloud-fog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-fog></icon-cloud-fog>');

    const element = await page.find('icon-cloud-fog');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-fog stroke="blue"></icon-cloud-fog>');

    const element = await page.find('icon-cloud-fog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cloud-fog > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-fog stroke-width="2"></icon-cloud-fog>');

    const element = await page.find('icon-cloud-fog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cloud-fog > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
