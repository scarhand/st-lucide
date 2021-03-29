import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-right></icon-align-right>');

    const element = await page.find('icon-align-right');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-right stroke="blue"></icon-align-right>');

    const element = await page.find('icon-align-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-right stroke-width="2"></icon-align-right>');

    const element = await page.find('icon-align-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
