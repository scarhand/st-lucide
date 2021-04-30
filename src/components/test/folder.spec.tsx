import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder></icon-folder>');

    const element = await page.find('icon-folder');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder stroke="blue"></icon-folder>');

    const element = await page.find('icon-folder');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder stroke-width="2"></icon-folder>');

    const element = await page.find('icon-folder');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
