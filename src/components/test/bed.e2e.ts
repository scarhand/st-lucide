import { newE2EPage } from '@stencil/core/testing';

describe('icon-bed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed></icon-bed>');

    const element = await page.find('icon-bed');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed stroke="blue"></icon-bed>');

    const element = await page.find('icon-bed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bed > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed stroke-width="2"></icon-bed>');

    const element = await page.find('icon-bed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bed > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
