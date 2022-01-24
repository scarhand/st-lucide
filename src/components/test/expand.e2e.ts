import { newE2EPage } from '@stencil/core/testing';

describe('icon-expand', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-expand></icon-expand>');

    const element = await page.find('icon-expand');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-expand stroke="blue"></icon-expand>');

    const element = await page.find('icon-expand');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-expand > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-expand stroke-width="2"></icon-expand>');

    const element = await page.find('icon-expand');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-expand > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
