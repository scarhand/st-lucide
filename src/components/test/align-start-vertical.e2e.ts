import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-start-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-start-vertical></icon-align-start-vertical>');

    const element = await page.find('icon-align-start-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-start-vertical stroke="blue"></icon-align-start-vertical>');

    const element = await page.find('icon-align-start-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-start-vertical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-start-vertical stroke-width="2"></icon-align-start-vertical>');

    const element = await page.find('icon-align-start-vertical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-start-vertical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
