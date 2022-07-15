import { newE2EPage } from '@stencil/core/testing';

describe('icon-recycle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-recycle></icon-recycle>');

    const element = await page.find('icon-recycle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-recycle stroke="blue"></icon-recycle>');

    const element = await page.find('icon-recycle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-recycle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-recycle stroke-width="2"></icon-recycle>');

    const element = await page.find('icon-recycle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-recycle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
