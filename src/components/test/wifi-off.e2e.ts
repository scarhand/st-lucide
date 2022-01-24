import { newE2EPage } from '@stencil/core/testing';

describe('icon-wifi-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wifi-off></icon-wifi-off>');

    const element = await page.find('icon-wifi-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wifi-off stroke="blue"></icon-wifi-off>');

    const element = await page.find('icon-wifi-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-wifi-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wifi-off stroke-width="2"></icon-wifi-off>');

    const element = await page.find('icon-wifi-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-wifi-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
