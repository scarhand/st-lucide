import { newE2EPage } from '@stencil/core/testing';

describe('icon-unlink', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-unlink></icon-unlink>');

    const element = await page.find('icon-unlink');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-unlink stroke="blue"></icon-unlink>');

    const element = await page.find('icon-unlink');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-unlink > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-unlink stroke-width="2"></icon-unlink>');

    const element = await page.find('icon-unlink');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-unlink > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
