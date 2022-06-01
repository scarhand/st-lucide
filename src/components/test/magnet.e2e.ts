import { newE2EPage } from '@stencil/core/testing';

describe('icon-magnet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-magnet></icon-magnet>');

    const element = await page.find('icon-magnet');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-magnet stroke="blue"></icon-magnet>');

    const element = await page.find('icon-magnet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-magnet > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-magnet stroke-width="2"></icon-magnet>');

    const element = await page.find('icon-magnet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-magnet > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
