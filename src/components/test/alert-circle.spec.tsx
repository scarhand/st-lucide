import { newE2EPage } from '@stencil/core/testing';

describe('icon-alert-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-circle></icon-alert-circle>');

    const element = await page.find('icon-alert-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-circle stroke="blue"></icon-alert-circle>');

    const element = await page.find('icon-alert-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-alert-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-circle stroke-width="2"></icon-alert-circle>');

    const element = await page.find('icon-alert-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-alert-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
