import { newE2EPage } from '@stencil/core/testing';

describe('icon-clock-5', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock-5></icon-clock-5>');

    const element = await page.find('icon-clock-5');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock-5 stroke="blue"></icon-clock-5>');

    const element = await page.find('icon-clock-5');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clock-5 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock-5 stroke-width="2"></icon-clock-5>');

    const element = await page.find('icon-clock-5');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clock-5 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
