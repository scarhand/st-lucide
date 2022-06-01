import { newE2EPage } from '@stencil/core/testing';

describe('icon-frame', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-frame></icon-frame>');

    const element = await page.find('icon-frame');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-frame stroke="blue"></icon-frame>');

    const element = await page.find('icon-frame');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-frame > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-frame stroke-width="2"></icon-frame>');

    const element = await page.find('icon-frame');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-frame > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
