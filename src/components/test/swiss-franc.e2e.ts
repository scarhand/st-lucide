import { newE2EPage } from '@stencil/core/testing';

describe('icon-swiss-franc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-swiss-franc></icon-swiss-franc>');

    const element = await page.find('icon-swiss-franc');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-swiss-franc stroke="blue"></icon-swiss-franc>');

    const element = await page.find('icon-swiss-franc');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-swiss-franc > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-swiss-franc stroke-width="2"></icon-swiss-franc>');

    const element = await page.find('icon-swiss-franc');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-swiss-franc > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
