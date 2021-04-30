import { newE2EPage } from '@stencil/core/testing';

describe('icon-monitor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor></icon-monitor>');

    const element = await page.find('icon-monitor');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor stroke="blue"></icon-monitor>');

    const element = await page.find('icon-monitor');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-monitor > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor stroke-width="2"></icon-monitor>');

    const element = await page.find('icon-monitor');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-monitor > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
