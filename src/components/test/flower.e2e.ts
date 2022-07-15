import { newE2EPage } from '@stencil/core/testing';

describe('icon-flower', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flower></icon-flower>');

    const element = await page.find('icon-flower');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flower stroke="blue"></icon-flower>');

    const element = await page.find('icon-flower');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flower > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flower stroke-width="2"></icon-flower>');

    const element = await page.find('icon-flower');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flower > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
