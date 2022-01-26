import { newE2EPage } from '@stencil/core/testing';

describe('icon-share', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-share></icon-share>');

    const element = await page.find('icon-share');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-share stroke="blue"></icon-share>');

    const element = await page.find('icon-share');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-share > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-share stroke-width="2"></icon-share>');

    const element = await page.find('icon-share');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-share > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
