import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-axis-3d', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-axis-3d></icon-file-axis-3d>');

    const element = await page.find('icon-file-axis-3d');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-axis-3d stroke="blue"></icon-file-axis-3d>');

    const element = await page.find('icon-file-axis-3d');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-axis-3d > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-axis-3d stroke-width="2"></icon-file-axis-3d>');

    const element = await page.find('icon-file-axis-3d');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-axis-3d > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
