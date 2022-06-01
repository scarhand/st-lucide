import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-start-horizontal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-start-horizontal></icon-align-start-horizontal>');

    const element = await page.find('icon-align-start-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-start-horizontal stroke="blue"></icon-align-start-horizontal>');

    const element = await page.find('icon-align-start-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-start-horizontal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-start-horizontal stroke-width="2"></icon-align-start-horizontal>');

    const element = await page.find('icon-align-start-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-start-horizontal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
