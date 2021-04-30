import { newE2EPage } from '@stencil/core/testing';

describe('icon-bar-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart></icon-bar-chart>');

    const element = await page.find('icon-bar-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart stroke="blue"></icon-bar-chart>');

    const element = await page.find('icon-bar-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bar-chart > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart stroke-width="2"></icon-bar-chart>');

    const element = await page.find('icon-bar-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bar-chart > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
