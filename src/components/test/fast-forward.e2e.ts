import { newE2EPage } from '@stencil/core/testing';

describe('icon-fast-forward', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fast-forward></icon-fast-forward>');

    const element = await page.find('icon-fast-forward');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fast-forward stroke="blue"></icon-fast-forward>');

    const element = await page.find('icon-fast-forward');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-fast-forward > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fast-forward stroke-width="2"></icon-fast-forward>');

    const element = await page.find('icon-fast-forward');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-fast-forward > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
