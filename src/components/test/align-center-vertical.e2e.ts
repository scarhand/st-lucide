import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-center-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center-vertical></icon-align-center-vertical>');

    const element = await page.find('icon-align-center-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center-vertical stroke="blue"></icon-align-center-vertical>');

    const element = await page.find('icon-align-center-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-center-vertical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center-vertical stroke-width="2"></icon-align-center-vertical>');

    const element = await page.find('icon-align-center-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-center-vertical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
