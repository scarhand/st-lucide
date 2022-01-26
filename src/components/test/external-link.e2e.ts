import { newE2EPage } from '@stencil/core/testing';

describe('icon-external-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-external-link></icon-external-link>');

    const element = await page.find('icon-external-link');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-external-link stroke="blue"></icon-external-link>');

    const element = await page.find('icon-external-link');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-external-link > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-external-link stroke-width="2"></icon-external-link>');

    const element = await page.find('icon-external-link');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-external-link > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
