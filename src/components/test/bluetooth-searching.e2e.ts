import { newE2EPage } from '@stencil/core/testing';

describe('icon-bluetooth-searching', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-searching></icon-bluetooth-searching>');

    const element = await page.find('icon-bluetooth-searching');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-searching stroke="blue"></icon-bluetooth-searching>');

    const element = await page.find('icon-bluetooth-searching');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bluetooth-searching > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-searching stroke-width="2"></icon-bluetooth-searching>');

    const element = await page.find('icon-bluetooth-searching');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bluetooth-searching > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
