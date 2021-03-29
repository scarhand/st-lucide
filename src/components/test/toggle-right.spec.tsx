import { newE2EPage } from '@stencil/core/testing';

describe('icon-toggle-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-toggle-right></icon-toggle-right>');

    const element = await page.find('icon-toggle-right');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-toggle-right stroke="blue"></icon-toggle-right>');

    const element = await page.find('icon-toggle-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-toggle-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-toggle-right stroke-width="2"></icon-toggle-right>');

    const element = await page.find('icon-toggle-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-toggle-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
