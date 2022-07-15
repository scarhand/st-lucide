import { newE2EPage } from '@stencil/core/testing';

describe('icon-mail-open', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-open></icon-mail-open>');

    const element = await page.find('icon-mail-open');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-open stroke="blue"></icon-mail-open>');

    const element = await page.find('icon-mail-open');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mail-open > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-open stroke-width="2"></icon-mail-open>');

    const element = await page.find('icon-mail-open');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mail-open > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
