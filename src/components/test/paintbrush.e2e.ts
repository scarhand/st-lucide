import { newE2EPage } from '@stencil/core/testing';

describe('icon-paintbrush', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paintbrush></icon-paintbrush>');

    const element = await page.find('icon-paintbrush');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paintbrush stroke="blue"></icon-paintbrush>');

    const element = await page.find('icon-paintbrush');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-paintbrush > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paintbrush stroke-width="2"></icon-paintbrush>');

    const element = await page.find('icon-paintbrush');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-paintbrush > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
