import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-clock></icon-file-clock>');

    const element = await page.find('icon-file-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-clock stroke="blue"></icon-file-clock>');

    const element = await page.find('icon-file-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-clock > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-clock stroke-width="2"></icon-file-clock>');

    const element = await page.find('icon-file-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-clock > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
