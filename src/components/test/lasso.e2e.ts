import { newE2EPage } from '@stencil/core/testing';

describe('icon-lasso', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lasso></icon-lasso>');

    const element = await page.find('icon-lasso');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lasso stroke="blue"></icon-lasso>');

    const element = await page.find('icon-lasso');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lasso > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lasso stroke-width="2"></icon-lasso>');

    const element = await page.find('icon-lasso');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lasso > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
