import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-left></icon-align-left>');

    const element = await page.find('icon-align-left');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-left stroke="blue"></icon-align-left>');

    const element = await page.find('icon-align-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-left > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-left stroke-width="2"></icon-align-left>');

    const element = await page.find('icon-align-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-left > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
