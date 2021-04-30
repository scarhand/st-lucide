import { newE2EPage } from '@stencil/core/testing';

describe('icon-figma', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-figma></icon-figma>');

    const element = await page.find('icon-figma');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-figma stroke="blue"></icon-figma>');

    const element = await page.find('icon-figma');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-figma > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-figma stroke-width="2"></icon-figma>');

    const element = await page.find('icon-figma');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-figma > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
