import { newE2EPage } from '@stencil/core/testing';

describe('icon-reply', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-reply></icon-reply>');

    const element = await page.find('icon-reply');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-reply stroke="blue"></icon-reply>');

    const element = await page.find('icon-reply');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-reply > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-reply stroke-width="2"></icon-reply>');

    const element = await page.find('icon-reply');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-reply > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
