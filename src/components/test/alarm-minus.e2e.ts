import { newE2EPage } from '@stencil/core/testing';

describe('icon-alarm-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-minus></icon-alarm-minus>');

    const element = await page.find('icon-alarm-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-minus stroke="blue"></icon-alarm-minus>');

    const element = await page.find('icon-alarm-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-alarm-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-minus stroke-width="2"></icon-alarm-minus>');

    const element = await page.find('icon-alarm-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-alarm-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
