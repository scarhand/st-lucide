import { newE2EPage } from '@stencil/core/testing';

describe('icon-archive', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-archive></icon-archive>');

    const element = await page.find('icon-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-archive stroke="blue"></icon-archive>');

    const element = await page.find('icon-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-archive > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-archive stroke-width="2"></icon-archive>');

    const element = await page.find('icon-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-archive > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
