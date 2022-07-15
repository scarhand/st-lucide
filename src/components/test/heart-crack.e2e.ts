import { newE2EPage } from '@stencil/core/testing';

describe('icon-heart-crack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart-crack></icon-heart-crack>');

    const element = await page.find('icon-heart-crack');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart-crack stroke="blue"></icon-heart-crack>');

    const element = await page.find('icon-heart-crack');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-heart-crack > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart-crack stroke-width="2"></icon-heart-crack>');

    const element = await page.find('icon-heart-crack');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-heart-crack > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
