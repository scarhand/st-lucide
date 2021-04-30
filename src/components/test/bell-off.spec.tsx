import { newE2EPage } from '@stencil/core/testing';

describe('icon-bell-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-off></icon-bell-off>');

    const element = await page.find('icon-bell-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-off stroke="blue"></icon-bell-off>');

    const element = await page.find('icon-bell-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bell-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-off stroke-width="2"></icon-bell-off>');

    const element = await page.find('icon-bell-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bell-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
