import { newE2EPage } from '@stencil/core/testing';

describe('icon-stretch-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stretch-vertical></icon-stretch-vertical>');

    const element = await page.find('icon-stretch-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stretch-vertical stroke="blue"></icon-stretch-vertical>');

    const element = await page.find('icon-stretch-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-stretch-vertical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stretch-vertical stroke-width="2"></icon-stretch-vertical>');

    const element = await page.find('icon-stretch-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-stretch-vertical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
