import { newE2EPage } from '@stencil/core/testing';

describe('icon-boxes', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-boxes></icon-boxes>');

    const element = await page.find('icon-boxes');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-boxes stroke="blue"></icon-boxes>');

    const element = await page.find('icon-boxes');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-boxes > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-boxes stroke-width="2"></icon-boxes>');

    const element = await page.find('icon-boxes');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-boxes > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
