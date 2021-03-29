import { newE2EPage } from '@stencil/core/testing';

describe('icon-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map></icon-map>');

    const element = await page.find('icon-map');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map stroke="blue"></icon-map>');

    const element = await page.find('icon-map');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-map > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map stroke-width="2"></icon-map>');

    const element = await page.find('icon-map');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-map > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
