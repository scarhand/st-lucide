import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-volume', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-volume></icon-file-volume>');

    const element = await page.find('icon-file-volume');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-volume stroke="blue"></icon-file-volume>');

    const element = await page.find('icon-file-volume');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-volume > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-volume stroke-width="2"></icon-file-volume>');

    const element = await page.find('icon-file-volume');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-volume > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
