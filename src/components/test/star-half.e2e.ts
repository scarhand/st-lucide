import { newE2EPage } from '@stencil/core/testing';

describe('icon-star-half', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-star-half></icon-star-half>');

    const element = await page.find('icon-star-half');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-star-half stroke="blue"></icon-star-half>');

    const element = await page.find('icon-star-half');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-star-half > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-star-half stroke-width="2"></icon-star-half>');

    const element = await page.find('icon-star-half');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-star-half > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
