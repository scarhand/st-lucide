import { newE2EPage } from '@stencil/core/testing';

describe('icon-maximize', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-maximize></icon-maximize>');

    const element = await page.find('icon-maximize');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-maximize stroke="blue"></icon-maximize>');

    const element = await page.find('icon-maximize');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-maximize > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-maximize stroke-width="2"></icon-maximize>');

    const element = await page.find('icon-maximize');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-maximize > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
