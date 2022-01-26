import { newE2EPage } from '@stencil/core/testing';

describe('icon-drumstick', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-drumstick></icon-drumstick>');

    const element = await page.find('icon-drumstick');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-drumstick stroke="blue"></icon-drumstick>');

    const element = await page.find('icon-drumstick');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-drumstick > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-drumstick stroke-width="2"></icon-drumstick>');

    const element = await page.find('icon-drumstick');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-drumstick > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
