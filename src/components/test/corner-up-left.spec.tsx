import { newE2EPage } from '@stencil/core/testing';

describe('icon-corner-up-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-up-left></icon-corner-up-left>');

    const element = await page.find('icon-corner-up-left');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-up-left stroke="blue"></icon-corner-up-left>');

    const element = await page.find('icon-corner-up-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-corner-up-left > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-up-left stroke-width="2"></icon-corner-up-left>');

    const element = await page.find('icon-corner-up-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-corner-up-left > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
