import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-text></icon-file-text>');

    const element = await page.find('icon-file-text');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-text stroke="blue"></icon-file-text>');

    const element = await page.find('icon-file-text');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-text > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-text stroke-width="2"></icon-file-text>');

    const element = await page.find('icon-file-text');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-text > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
