import { newE2EPage } from '@stencil/core/testing';

describe('icon-award', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-award></icon-award>');

    const element = await page.find('icon-award');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-award stroke="blue"></icon-award>');

    const element = await page.find('icon-award');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-award > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-award stroke-width="2"></icon-award>');

    const element = await page.find('icon-award');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-award > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
