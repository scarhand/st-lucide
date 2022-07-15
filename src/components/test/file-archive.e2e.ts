import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-archive', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-archive></icon-file-archive>');

    const element = await page.find('icon-file-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-archive stroke="blue"></icon-file-archive>');

    const element = await page.find('icon-file-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-archive > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-archive stroke-width="2"></icon-file-archive>');

    const element = await page.find('icon-file-archive');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-archive > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
