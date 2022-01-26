import { newE2EPage } from '@stencil/core/testing';

describe('icon-mail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail></icon-mail>');

    const element = await page.find('icon-mail');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail stroke="blue"></icon-mail>');

    const element = await page.find('icon-mail');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mail > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mail stroke-width="2"></icon-mail>');

    const element = await page.find('icon-mail');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mail > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
