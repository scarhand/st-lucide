import { newE2EPage } from '@stencil/core/testing';

describe('icon-equal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-equal></icon-equal>');

    const element = await page.find('icon-equal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-equal stroke="blue"></icon-equal>');

    const element = await page.find('icon-equal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-equal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-equal stroke-width="2"></icon-equal>');

    const element = await page.find('icon-equal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-equal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
