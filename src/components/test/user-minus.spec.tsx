import { newE2EPage } from '@stencil/core/testing';

describe('icon-user-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-minus></icon-user-minus>');

    const element = await page.find('icon-user-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-minus stroke="blue"></icon-user-minus>');

    const element = await page.find('icon-user-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-user-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-minus stroke-width="2"></icon-user-minus>');

    const element = await page.find('icon-user-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-user-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
