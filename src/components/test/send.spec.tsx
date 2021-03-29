import { newE2EPage } from '@stencil/core/testing';

describe('icon-send', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-send></icon-send>');

    const element = await page.find('icon-send');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-send stroke="blue"></icon-send>');

    const element = await page.find('icon-send');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-send > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-send stroke-width="2"></icon-send>');

    const element = await page.find('icon-send');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-send > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
