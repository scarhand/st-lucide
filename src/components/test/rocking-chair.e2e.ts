import { newE2EPage } from '@stencil/core/testing';

describe('icon-rocking-chair', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rocking-chair></icon-rocking-chair>');

    const element = await page.find('icon-rocking-chair');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rocking-chair stroke="blue"></icon-rocking-chair>');

    const element = await page.find('icon-rocking-chair');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-rocking-chair > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rocking-chair stroke-width="2"></icon-rocking-chair>');

    const element = await page.find('icon-rocking-chair');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-rocking-chair > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
