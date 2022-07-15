import { newE2EPage } from '@stencil/core/testing';

describe('icon-grape', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grape></icon-grape>');

    const element = await page.find('icon-grape');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grape stroke="blue"></icon-grape>');

    const element = await page.find('icon-grape');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-grape > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grape stroke-width="2"></icon-grape>');

    const element = await page.find('icon-grape');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-grape > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
