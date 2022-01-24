import { newE2EPage } from '@stencil/core/testing';

describe('icon-link-2-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-link-2-off></icon-link-2-off>');

    const element = await page.find('icon-link-2-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-link-2-off stroke="blue"></icon-link-2-off>');

    const element = await page.find('icon-link-2-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-link-2-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-link-2-off stroke-width="2"></icon-link-2-off>');

    const element = await page.find('icon-link-2-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-link-2-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
