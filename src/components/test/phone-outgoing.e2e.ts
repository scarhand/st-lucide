import { newE2EPage } from '@stencil/core/testing';

describe('icon-phone-outgoing', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-outgoing></icon-phone-outgoing>');

    const element = await page.find('icon-phone-outgoing');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-outgoing stroke="blue"></icon-phone-outgoing>');

    const element = await page.find('icon-phone-outgoing');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-phone-outgoing > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-outgoing stroke-width="2"></icon-phone-outgoing>');

    const element = await page.find('icon-phone-outgoing');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-phone-outgoing > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
