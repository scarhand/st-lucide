import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-archive', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-archive></icon-folder-archive>');

    const element = await page.find('icon-folder-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-archive stroke="blue"></icon-folder-archive>');

    const element = await page.find('icon-folder-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-archive > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-archive stroke-width="2"></icon-folder-archive>');

    const element = await page.find('icon-folder-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-archive > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
