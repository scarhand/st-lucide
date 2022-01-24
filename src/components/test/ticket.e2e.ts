import { newE2EPage } from '@stencil/core/testing';

describe('icon-ticket', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ticket></icon-ticket>');

    const element = await page.find('icon-ticket');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ticket stroke="blue"></icon-ticket>');

    const element = await page.find('icon-ticket');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-ticket > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ticket stroke-width="2"></icon-ticket>');

    const element = await page.find('icon-ticket');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-ticket > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
