import { newE2EPage } from '@stencil/core/testing';

describe('icon-grab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grab></icon-grab>');

    const element = await page.find('icon-grab');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grab stroke="blue"></icon-grab>');

    const element = await page.find('icon-grab');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-grab > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grab stroke-width="2"></icon-grab>');

    const element = await page.find('icon-grab');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-grab > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
