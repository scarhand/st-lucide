import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-end-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-end-vertical></icon-align-end-vertical>');

    const element = await page.find('icon-align-end-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-end-vertical stroke="blue"></icon-align-end-vertical>');

    const element = await page.find('icon-align-end-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-end-vertical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-end-vertical stroke-width="2"></icon-align-end-vertical>');

    const element = await page.find('icon-align-end-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-end-vertical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
