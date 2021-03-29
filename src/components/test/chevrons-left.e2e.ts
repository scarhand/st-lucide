import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevrons-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-left></icon-chevrons-left>');

    const element = await page.find('icon-chevrons-left');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-left stroke="blue"></icon-chevrons-left>');

    const element = await page.find('icon-chevrons-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevrons-left > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-left stroke-width="2"></icon-chevrons-left>');

    const element = await page.find('icon-chevrons-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevrons-left > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
