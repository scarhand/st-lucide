import { newE2EPage } from '@stencil/core/testing';

describe('icon-umbrella', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-umbrella></icon-umbrella>');

    const element = await page.find('icon-umbrella');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-umbrella stroke="blue"></icon-umbrella>');

    const element = await page.find('icon-umbrella');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-umbrella > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-umbrella stroke-width="2"></icon-umbrella>');

    const element = await page.find('icon-umbrella');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-umbrella > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
