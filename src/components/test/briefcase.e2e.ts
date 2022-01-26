import { newE2EPage } from '@stencil/core/testing';

describe('icon-briefcase', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-briefcase></icon-briefcase>');

    const element = await page.find('icon-briefcase');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-briefcase stroke="blue"></icon-briefcase>');

    const element = await page.find('icon-briefcase');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-briefcase > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-briefcase stroke-width="2"></icon-briefcase>');

    const element = await page.find('icon-briefcase');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-briefcase > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
