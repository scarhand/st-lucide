import { newE2EPage } from '@stencil/core/testing';

describe('icon-wifi', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wifi></icon-wifi>');

    const element = await page.find('icon-wifi');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wifi stroke="blue"></icon-wifi>');

    const element = await page.find('icon-wifi');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-wifi > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wifi stroke-width="2"></icon-wifi>');

    const element = await page.find('icon-wifi');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-wifi > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
