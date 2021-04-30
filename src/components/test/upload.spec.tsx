import { newE2EPage } from '@stencil/core/testing';

describe('icon-upload', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-upload></icon-upload>');

    const element = await page.find('icon-upload');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-upload stroke="blue"></icon-upload>');

    const element = await page.find('icon-upload');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-upload > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-upload stroke-width="2"></icon-upload>');

    const element = await page.find('icon-upload');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-upload > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
