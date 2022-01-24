import { newE2EPage } from '@stencil/core/testing';

describe('icon-droplets', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-droplets></icon-droplets>');

    const element = await page.find('icon-droplets');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-droplets stroke="blue"></icon-droplets>');

    const element = await page.find('icon-droplets');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-droplets > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-droplets stroke-width="2"></icon-droplets>');

    const element = await page.find('icon-droplets');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-droplets > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
