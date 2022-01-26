import { newE2EPage } from '@stencil/core/testing';

describe('icon-paperclip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paperclip></icon-paperclip>');

    const element = await page.find('icon-paperclip');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paperclip stroke="blue"></icon-paperclip>');

    const element = await page.find('icon-paperclip');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-paperclip > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-paperclip stroke-width="2"></icon-paperclip>');

    const element = await page.find('icon-paperclip');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-paperclip > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
