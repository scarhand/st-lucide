import { newE2EPage } from '@stencil/core/testing';

describe('icon-screen-share', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-screen-share></icon-screen-share>');

    const element = await page.find('icon-screen-share');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-screen-share stroke="blue"></icon-screen-share>');

    const element = await page.find('icon-screen-share');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-screen-share > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-screen-share stroke-width="2"></icon-screen-share>');

    const element = await page.find('icon-screen-share');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-screen-share > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
