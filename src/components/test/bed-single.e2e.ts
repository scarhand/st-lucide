import { newE2EPage } from '@stencil/core/testing';

describe('icon-bed-single', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed-single></icon-bed-single>');

    const element = await page.find('icon-bed-single');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed-single stroke="blue"></icon-bed-single>');

    const element = await page.find('icon-bed-single');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bed-single > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed-single stroke-width="2"></icon-bed-single>');

    const element = await page.find('icon-bed-single');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bed-single > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
