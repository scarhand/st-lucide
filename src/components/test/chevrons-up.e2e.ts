import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevrons-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-up></icon-chevrons-up>');

    const element = await page.find('icon-chevrons-up');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-up stroke="blue"></icon-chevrons-up>');

    const element = await page.find('icon-chevrons-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevrons-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-up stroke-width="2"></icon-chevrons-up>');

    const element = await page.find('icon-chevrons-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevrons-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
