import { newE2EPage } from '@stencil/core/testing';

describe('icon-bluetooth-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-off></icon-bluetooth-off>');

    const element = await page.find('icon-bluetooth-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-off stroke="blue"></icon-bluetooth-off>');

    const element = await page.find('icon-bluetooth-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bluetooth-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-off stroke-width="2"></icon-bluetooth-off>');

    const element = await page.find('icon-bluetooth-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bluetooth-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
