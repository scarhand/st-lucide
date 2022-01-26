import { newE2EPage } from '@stencil/core/testing';

describe('icon-pause', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pause></icon-pause>');

    const element = await page.find('icon-pause');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pause stroke="blue"></icon-pause>');

    const element = await page.find('icon-pause');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pause > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pause stroke-width="2"></icon-pause>');

    const element = await page.find('icon-pause');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pause > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
