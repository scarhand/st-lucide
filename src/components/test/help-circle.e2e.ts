import { newE2EPage } from '@stencil/core/testing';

describe('icon-help-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-help-circle></icon-help-circle>');

    const element = await page.find('icon-help-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-help-circle stroke="blue"></icon-help-circle>');

    const element = await page.find('icon-help-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-help-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-help-circle stroke-width="2"></icon-help-circle>');

    const element = await page.find('icon-help-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-help-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
