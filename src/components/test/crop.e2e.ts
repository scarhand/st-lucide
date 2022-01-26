import { newE2EPage } from '@stencil/core/testing';

describe('icon-crop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-crop></icon-crop>');

    const element = await page.find('icon-crop');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-crop stroke="blue"></icon-crop>');

    const element = await page.find('icon-crop');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-crop > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-crop stroke-width="2"></icon-crop>');

    const element = await page.find('icon-crop');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-crop > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
