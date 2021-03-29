import { newE2EPage } from '@stencil/core/testing';

describe('icon-octagon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-octagon></icon-octagon>');

    const element = await page.find('icon-octagon');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-octagon stroke="blue"></icon-octagon>');

    const element = await page.find('icon-octagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-octagon > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-octagon stroke-width="2"></icon-octagon>');

    const element = await page.find('icon-octagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-octagon > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
