import { newE2EPage } from '@stencil/core/testing';

describe('icon-download-cloud', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-download-cloud></icon-download-cloud>');

    const element = await page.find('icon-download-cloud');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-download-cloud stroke="blue"></icon-download-cloud>');

    const element = await page.find('icon-download-cloud');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-download-cloud > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-download-cloud stroke-width="2"></icon-download-cloud>');

    const element = await page.find('icon-download-cloud');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-download-cloud > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
