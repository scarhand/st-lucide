import { newE2EPage } from '@stencil/core/testing';

describe('icon-copyright', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copyright></icon-copyright>');

    const element = await page.find('icon-copyright');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copyright stroke="blue"></icon-copyright>');

    const element = await page.find('icon-copyright');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-copyright > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copyright stroke-width="2"></icon-copyright>');

    const element = await page.find('icon-copyright');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-copyright > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
