import { newE2EPage } from '@stencil/core/testing';

describe('icon-smile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smile></icon-smile>');

    const element = await page.find('icon-smile');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smile stroke="blue"></icon-smile>');

    const element = await page.find('icon-smile');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-smile > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smile stroke-width="2"></icon-smile>');

    const element = await page.find('icon-smile');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-smile > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
