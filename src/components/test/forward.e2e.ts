import { newE2EPage } from '@stencil/core/testing';

describe('icon-forward', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-forward></icon-forward>');

    const element = await page.find('icon-forward');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-forward stroke="blue"></icon-forward>');

    const element = await page.find('icon-forward');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-forward > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-forward stroke-width="2"></icon-forward>');

    const element = await page.find('icon-forward');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-forward > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
