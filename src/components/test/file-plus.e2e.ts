import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-plus></icon-file-plus>');

    const element = await page.find('icon-file-plus');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-plus stroke="blue"></icon-file-plus>');

    const element = await page.find('icon-file-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-plus stroke-width="2"></icon-file-plus>');

    const element = await page.find('icon-file-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
