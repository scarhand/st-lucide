import { newE2EPage } from '@stencil/core/testing';

describe('icon-webhook', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-webhook></icon-webhook>');

    const element = await page.find('icon-webhook');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-webhook stroke="blue"></icon-webhook>');

    const element = await page.find('icon-webhook');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-webhook > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-webhook stroke-width="2"></icon-webhook>');

    const element = await page.find('icon-webhook');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-webhook > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
