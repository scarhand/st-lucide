import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-up-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up-right></icon-arrow-up-right>');

    const element = await page.find('icon-arrow-up-right');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up-right stroke="blue"></icon-arrow-up-right>');

    const element = await page.find('icon-arrow-up-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-up-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up-right stroke-width="2"></icon-arrow-up-right>');

    const element = await page.find('icon-arrow-up-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-up-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
