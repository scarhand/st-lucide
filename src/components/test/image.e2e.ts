import { newE2EPage } from '@stencil/core/testing';

describe('icon-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image></icon-image>');

    const element = await page.find('icon-image');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image stroke="blue"></icon-image>');

    const element = await page.find('icon-image');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-image > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image stroke-width="2"></icon-image>');

    const element = await page.find('icon-image');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-image > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
