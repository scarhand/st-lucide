import { newE2EPage } from '@stencil/core/testing';

describe('icon-megaphone', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-megaphone></icon-megaphone>');

    const element = await page.find('icon-megaphone');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-megaphone stroke="blue"></icon-megaphone>');

    const element = await page.find('icon-megaphone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-megaphone > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-megaphone stroke-width="2"></icon-megaphone>');

    const element = await page.find('icon-megaphone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-megaphone > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
