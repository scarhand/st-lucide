import { newE2EPage } from '@stencil/core/testing';

describe('icon-apple', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-apple></icon-apple>');

    const element = await page.find('icon-apple');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-apple stroke="blue"></icon-apple>');

    const element = await page.find('icon-apple');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-apple > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-apple stroke-width="2"></icon-apple>');

    const element = await page.find('icon-apple');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-apple > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
