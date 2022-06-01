import { newE2EPage } from '@stencil/core/testing';

describe('icon-fuel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fuel></icon-fuel>');

    const element = await page.find('icon-fuel');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fuel stroke="blue"></icon-fuel>');

    const element = await page.find('icon-fuel');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-fuel > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fuel stroke-width="2"></icon-fuel>');

    const element = await page.find('icon-fuel');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-fuel > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
