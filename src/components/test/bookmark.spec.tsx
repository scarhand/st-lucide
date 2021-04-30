import { newE2EPage } from '@stencil/core/testing';

describe('icon-bookmark', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bookmark></icon-bookmark>');

    const element = await page.find('icon-bookmark');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bookmark stroke="blue"></icon-bookmark>');

    const element = await page.find('icon-bookmark');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bookmark > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bookmark stroke-width="2"></icon-bookmark>');

    const element = await page.find('icon-bookmark');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bookmark > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
