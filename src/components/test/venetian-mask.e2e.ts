import { newE2EPage } from '@stencil/core/testing';

describe('icon-venetian-mask', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-venetian-mask></icon-venetian-mask>');

    const element = await page.find('icon-venetian-mask');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-venetian-mask stroke="blue"></icon-venetian-mask>');

    const element = await page.find('icon-venetian-mask');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-venetian-mask > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-venetian-mask stroke-width="2"></icon-venetian-mask>');

    const element = await page.find('icon-venetian-mask');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-venetian-mask > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
