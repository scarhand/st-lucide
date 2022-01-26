import { newE2EPage } from '@stencil/core/testing';

describe('icon-clock-8', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock-8></icon-clock-8>');

    const element = await page.find('icon-clock-8');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock-8 stroke="blue"></icon-clock-8>');

    const element = await page.find('icon-clock-8');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clock-8 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock-8 stroke-width="2"></icon-clock-8>');

    const element = await page.find('icon-clock-8');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clock-8 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
