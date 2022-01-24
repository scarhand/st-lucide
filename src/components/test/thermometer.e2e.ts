import { newE2EPage } from '@stencil/core/testing';

describe('icon-thermometer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thermometer></icon-thermometer>');

    const element = await page.find('icon-thermometer');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thermometer stroke="blue"></icon-thermometer>');

    const element = await page.find('icon-thermometer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-thermometer > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thermometer stroke-width="2"></icon-thermometer>');

    const element = await page.find('icon-thermometer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-thermometer > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
