import { newE2EPage } from '@stencil/core/testing';

describe('icon-eye', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eye></icon-eye>');

    const element = await page.find('icon-eye');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eye stroke="blue"></icon-eye>');

    const element = await page.find('icon-eye');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-eye > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eye stroke-width="2"></icon-eye>');

    const element = await page.find('icon-eye');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-eye > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
