import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-down></icon-file-down>');

    const element = await page.find('icon-file-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-down stroke="blue"></icon-file-down>');

    const element = await page.find('icon-file-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-down stroke-width="2"></icon-file-down>');

    const element = await page.find('icon-file-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
