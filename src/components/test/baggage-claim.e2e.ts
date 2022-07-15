import { newE2EPage } from '@stencil/core/testing';

describe('icon-baggage-claim', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baggage-claim></icon-baggage-claim>');

    const element = await page.find('icon-baggage-claim');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baggage-claim stroke="blue"></icon-baggage-claim>');

    const element = await page.find('icon-baggage-claim');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-baggage-claim > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baggage-claim stroke-width="2"></icon-baggage-claim>');

    const element = await page.find('icon-baggage-claim');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-baggage-claim > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
