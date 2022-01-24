import { newE2EPage } from '@stencil/core/testing';

describe('icon-alarm-check', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-check></icon-alarm-check>');

    const element = await page.find('icon-alarm-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-check stroke="blue"></icon-alarm-check>');

    const element = await page.find('icon-alarm-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-alarm-check > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-check stroke-width="2"></icon-alarm-check>');

    const element = await page.find('icon-alarm-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-alarm-check > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
