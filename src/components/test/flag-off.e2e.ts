import { newE2EPage } from '@stencil/core/testing';

describe('icon-flag-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag-off></icon-flag-off>');

    const element = await page.find('icon-flag-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag-off stroke="blue"></icon-flag-off>');

    const element = await page.find('icon-flag-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flag-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag-off stroke-width="2"></icon-flag-off>');

    const element = await page.find('icon-flag-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flag-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
