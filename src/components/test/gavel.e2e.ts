import { newE2EPage } from '@stencil/core/testing';

describe('icon-gavel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gavel></icon-gavel>');

    const element = await page.find('icon-gavel');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gavel stroke="blue"></icon-gavel>');

    const element = await page.find('icon-gavel');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-gavel > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gavel stroke-width="2"></icon-gavel>');

    const element = await page.find('icon-gavel');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-gavel > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
