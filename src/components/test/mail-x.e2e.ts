import { newE2EPage } from '@stencil/core/testing';

describe('icon-mail-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-x></icon-mail-x>');

    const element = await page.find('icon-mail-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-x stroke="blue"></icon-mail-x>');

    const element = await page.find('icon-mail-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mail-x > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail-x stroke-width="2"></icon-mail-x>');

    const element = await page.find('icon-mail-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mail-x > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
