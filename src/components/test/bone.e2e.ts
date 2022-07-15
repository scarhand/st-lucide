import { newE2EPage } from '@stencil/core/testing';

describe('icon-bone', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bone></icon-bone>');

    const element = await page.find('icon-bone');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bone stroke="blue"></icon-bone>');

    const element = await page.find('icon-bone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bone > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bone stroke-width="2"></icon-bone>');

    const element = await page.find('icon-bone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bone > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
