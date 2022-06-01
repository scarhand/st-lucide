import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-center-horizontal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center-horizontal></icon-align-center-horizontal>');

    const element = await page.find('icon-align-center-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center-horizontal stroke="blue"></icon-align-center-horizontal>');

    const element = await page.find('icon-align-center-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-center-horizontal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center-horizontal stroke-width="2"></icon-align-center-horizontal>');

    const element = await page.find('icon-align-center-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-center-horizontal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
