import { newE2EPage } from '@stencil/core/testing';

describe('icon-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tag></icon-tag>');

    const element = await page.find('icon-tag');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tag stroke="blue"></icon-tag>');

    const element = await page.find('icon-tag');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tag > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tag stroke-width="2"></icon-tag>');

    const element = await page.find('icon-tag');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tag > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
