import { newE2EPage } from '@stencil/core/testing';

describe('icon-mouse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse></icon-mouse>');

    const element = await page.find('icon-mouse');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse stroke="blue"></icon-mouse>');

    const element = await page.find('icon-mouse');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mouse > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse stroke-width="2"></icon-mouse>');

    const element = await page.find('icon-mouse');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mouse > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
