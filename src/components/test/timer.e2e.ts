import { newE2EPage } from '@stencil/core/testing';

describe('icon-timer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer></icon-timer>');

    const element = await page.find('icon-timer');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer stroke="blue"></icon-timer>');

    const element = await page.find('icon-timer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-timer > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer stroke-width="2"></icon-timer>');

    const element = await page.find('icon-timer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-timer > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
