import { newE2EPage } from '@stencil/core/testing';

describe('icon-log-in', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-log-in></icon-log-in>');

    const element = await page.find('icon-log-in');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-log-in stroke="blue"></icon-log-in>');

    const element = await page.find('icon-log-in');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-log-in > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-log-in stroke-width="2"></icon-log-in>');

    const element = await page.find('icon-log-in');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-log-in > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
