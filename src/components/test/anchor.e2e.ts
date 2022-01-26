import { newE2EPage } from '@stencil/core/testing';

describe('icon-anchor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-anchor></icon-anchor>');

    const element = await page.find('icon-anchor');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-anchor stroke="blue"></icon-anchor>');

    const element = await page.find('icon-anchor');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-anchor > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-anchor stroke-width="2"></icon-anchor>');

    const element = await page.find('icon-anchor');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-anchor > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
