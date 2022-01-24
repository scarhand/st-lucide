import { newE2EPage } from '@stencil/core/testing';

describe('icon-upload-cloud', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-upload-cloud></icon-upload-cloud>');

    const element = await page.find('icon-upload-cloud');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-upload-cloud stroke="blue"></icon-upload-cloud>');

    const element = await page.find('icon-upload-cloud');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-upload-cloud > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-upload-cloud stroke-width="2"></icon-upload-cloud>');

    const element = await page.find('icon-upload-cloud');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-upload-cloud > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
