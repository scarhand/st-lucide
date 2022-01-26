import { newE2EPage } from '@stencil/core/testing';

describe('icon-bot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bot></icon-bot>');

    const element = await page.find('icon-bot');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bot stroke="blue"></icon-bot>');

    const element = await page.find('icon-bot');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bot > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bot stroke-width="2"></icon-bot>');

    const element = await page.find('icon-bot');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bot > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
