import { newE2EPage } from '@stencil/core/testing';

describe('icon-settings', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-settings></icon-settings>');

    const element = await page.find('icon-settings');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-settings stroke="blue"></icon-settings>');

    const element = await page.find('icon-settings');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-settings > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-settings stroke-width="2"></icon-settings>');

    const element = await page.find('icon-settings');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-settings > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
