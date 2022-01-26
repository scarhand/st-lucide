import { newE2EPage } from '@stencil/core/testing';

describe('icon-slash', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slash></icon-slash>');

    const element = await page.find('icon-slash');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slash stroke="blue"></icon-slash>');

    const element = await page.find('icon-slash');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-slash > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slash stroke-width="2"></icon-slash>');

    const element = await page.find('icon-slash');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-slash > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
