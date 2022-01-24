import { newE2EPage } from '@stencil/core/testing';

describe('icon-cloud-rain-wind', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-rain-wind></icon-cloud-rain-wind>');

    const element = await page.find('icon-cloud-rain-wind');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-rain-wind stroke="blue"></icon-cloud-rain-wind>');

    const element = await page.find('icon-cloud-rain-wind');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cloud-rain-wind > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-rain-wind stroke-width="2"></icon-cloud-rain-wind>');

    const element = await page.find('icon-cloud-rain-wind');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cloud-rain-wind > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
