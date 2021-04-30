import { newE2EPage } from '@stencil/core/testing';

describe('icon-bell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell></icon-bell>');

    const element = await page.find('icon-bell');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell stroke="blue"></icon-bell>');

    const element = await page.find('icon-bell');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bell > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell stroke-width="2"></icon-bell>');

    const element = await page.find('icon-bell');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bell > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
