import { newE2EPage } from '@stencil/core/testing';

describe('icon-sun-medium', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-medium></icon-sun-medium>');

    const element = await page.find('icon-sun-medium');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-medium stroke="blue"></icon-sun-medium>');

    const element = await page.find('icon-sun-medium');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sun-medium > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-medium stroke-width="2"></icon-sun-medium>');

    const element = await page.find('icon-sun-medium');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sun-medium > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
