import { newE2EPage } from '@stencil/core/testing';

describe('icon-cigarette-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cigarette-off></icon-cigarette-off>');

    const element = await page.find('icon-cigarette-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cigarette-off stroke="blue"></icon-cigarette-off>');

    const element = await page.find('icon-cigarette-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cigarette-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cigarette-off stroke-width="2"></icon-cigarette-off>');

    const element = await page.find('icon-cigarette-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cigarette-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
