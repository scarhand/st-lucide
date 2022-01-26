import { newE2EPage } from '@stencil/core/testing';

describe('icon-stop-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stop-circle></icon-stop-circle>');

    const element = await page.find('icon-stop-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stop-circle stroke="blue"></icon-stop-circle>');

    const element = await page.find('icon-stop-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-stop-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stop-circle stroke-width="2"></icon-stop-circle>');

    const element = await page.find('icon-stop-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-stop-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
