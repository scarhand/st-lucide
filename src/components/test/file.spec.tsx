import { newE2EPage } from '@stencil/core/testing';

describe('icon-file', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file></icon-file>');

    const element = await page.find('icon-file');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file stroke="blue"></icon-file>');

    const element = await page.find('icon-file');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file stroke-width="2"></icon-file>');

    const element = await page.find('icon-file');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
