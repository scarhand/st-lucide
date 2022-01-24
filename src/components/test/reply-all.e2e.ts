import { newE2EPage } from '@stencil/core/testing';

describe('icon-reply-all', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-reply-all></icon-reply-all>');

    const element = await page.find('icon-reply-all');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-reply-all stroke="blue"></icon-reply-all>');

    const element = await page.find('icon-reply-all');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-reply-all > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-reply-all stroke-width="2"></icon-reply-all>');

    const element = await page.find('icon-reply-all');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-reply-all > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
