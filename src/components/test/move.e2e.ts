import { newE2EPage } from '@stencil/core/testing';

describe('icon-move', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move></icon-move>');

    const element = await page.find('icon-move');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move stroke="blue"></icon-move>');

    const element = await page.find('icon-move');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-move > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move stroke-width="2"></icon-move>');

    const element = await page.find('icon-move');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-move > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
