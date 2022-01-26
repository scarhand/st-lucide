import { newE2EPage } from '@stencil/core/testing';

describe('icon-skull', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-skull></icon-skull>');

    const element = await page.find('icon-skull');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-skull stroke="blue"></icon-skull>');

    const element = await page.find('icon-skull');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-skull > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-skull stroke-width="2"></icon-skull>');

    const element = await page.find('icon-skull');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-skull > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
