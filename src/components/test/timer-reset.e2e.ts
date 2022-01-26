import { newE2EPage } from '@stencil/core/testing';

describe('icon-timer-reset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer-reset></icon-timer-reset>');

    const element = await page.find('icon-timer-reset');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer-reset stroke="blue"></icon-timer-reset>');

    const element = await page.find('icon-timer-reset');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-timer-reset > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer-reset stroke-width="2"></icon-timer-reset>');

    const element = await page.find('icon-timer-reset');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-timer-reset > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
