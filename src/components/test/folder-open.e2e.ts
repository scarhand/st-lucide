import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-open', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-open></icon-folder-open>');

    const element = await page.find('icon-folder-open');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-open stroke="blue"></icon-folder-open>');

    const element = await page.find('icon-folder-open');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-open > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-open stroke-width="2"></icon-folder-open>');

    const element = await page.find('icon-folder-open');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-open > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
