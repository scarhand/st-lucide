import { newE2EPage } from '@stencil/core/testing';

describe('icon-archive-restore', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-archive-restore></icon-archive-restore>');

    const element = await page.find('icon-archive-restore');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-archive-restore stroke="blue"></icon-archive-restore>');

    const element = await page.find('icon-archive-restore');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-archive-restore > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-archive-restore stroke-width="2"></icon-archive-restore>');

    const element = await page.find('icon-archive-restore');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-archive-restore > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
