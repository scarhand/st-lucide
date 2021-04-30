import { newE2EPage } from '@stencil/core/testing';

describe('icon-pie-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pie-chart></icon-pie-chart>');

    const element = await page.find('icon-pie-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pie-chart stroke="blue"></icon-pie-chart>');

    const element = await page.find('icon-pie-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pie-chart > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pie-chart stroke-width="2"></icon-pie-chart>');

    const element = await page.find('icon-pie-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pie-chart > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
