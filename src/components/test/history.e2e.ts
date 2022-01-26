import { newE2EPage } from '@stencil/core/testing';

describe('icon-history', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-history></icon-history>');

    const element = await page.find('icon-history');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-history stroke="blue"></icon-history>');

    const element = await page.find('icon-history');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-history > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-history stroke-width="2"></icon-history>');

    const element = await page.find('icon-history');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-history > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
