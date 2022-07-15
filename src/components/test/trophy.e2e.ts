import { newE2EPage } from '@stencil/core/testing';

describe('icon-trophy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trophy></icon-trophy>');

    const element = await page.find('icon-trophy');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trophy stroke="blue"></icon-trophy>');

    const element = await page.find('icon-trophy');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-trophy > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trophy stroke-width="2"></icon-trophy>');

    const element = await page.find('icon-trophy');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-trophy > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
