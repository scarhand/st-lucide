import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-box></icon-file-box>');

    const element = await page.find('icon-file-box');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-box stroke="blue"></icon-file-box>');

    const element = await page.find('icon-file-box');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-box > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-box stroke-width="2"></icon-file-box>');

    const element = await page.find('icon-file-box');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-box > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
