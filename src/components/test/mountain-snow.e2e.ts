import { newE2EPage } from '@stencil/core/testing';

describe('icon-mountain-snow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mountain-snow></icon-mountain-snow>');

    const element = await page.find('icon-mountain-snow');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mountain-snow stroke="blue"></icon-mountain-snow>');

    const element = await page.find('icon-mountain-snow');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mountain-snow > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mountain-snow stroke-width="2"></icon-mountain-snow>');

    const element = await page.find('icon-mountain-snow');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mountain-snow > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
