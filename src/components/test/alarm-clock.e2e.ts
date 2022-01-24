import { newE2EPage } from '@stencil/core/testing';

describe('icon-alarm-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-clock></icon-alarm-clock>');

    const element = await page.find('icon-alarm-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-clock stroke="blue"></icon-alarm-clock>');

    const element = await page.find('icon-alarm-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-alarm-clock > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-clock stroke-width="2"></icon-alarm-clock>');

    const element = await page.find('icon-alarm-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-alarm-clock > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
