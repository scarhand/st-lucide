import { newE2EPage } from '@stencil/core/testing';

describe('icon-laptop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-laptop></icon-laptop>');

    const element = await page.find('icon-laptop');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-laptop stroke="blue"></icon-laptop>');

    const element = await page.find('icon-laptop');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-laptop > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-laptop stroke-width="2"></icon-laptop>');

    const element = await page.find('icon-laptop');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-laptop > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
