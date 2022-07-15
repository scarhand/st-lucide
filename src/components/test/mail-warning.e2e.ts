import { newE2EPage } from '@stencil/core/testing';

describe('icon-mail-warning', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-warning></icon-mail-warning>');

    const element = await page.find('icon-mail-warning');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-warning stroke="blue"></icon-mail-warning>');

    const element = await page.find('icon-mail-warning');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mail-warning > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-warning stroke-width="2"></icon-mail-warning>');

    const element = await page.find('icon-mail-warning');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mail-warning > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
