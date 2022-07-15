import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-image></icon-file-image>');

    const element = await page.find('icon-file-image');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-image stroke="blue"></icon-file-image>');

    const element = await page.find('icon-file-image');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-image > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-image stroke-width="2"></icon-file-image>');

    const element = await page.find('icon-file-image');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-image > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
