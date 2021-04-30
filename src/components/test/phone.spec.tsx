import { newE2EPage } from '@stencil/core/testing';

describe('icon-phone', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone></icon-phone>');

    const element = await page.find('icon-phone');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone stroke="blue"></icon-phone>');

    const element = await page.find('icon-phone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-phone > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone stroke-width="2"></icon-phone>');

    const element = await page.find('icon-phone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-phone > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
