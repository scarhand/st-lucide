import { newE2EPage } from '@stencil/core/testing';

describe('icon-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-option></icon-option>');

    const element = await page.find('icon-option');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-option stroke="blue"></icon-option>');

    const element = await page.find('icon-option');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-option > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-option stroke-width="2"></icon-option>');

    const element = await page.find('icon-option');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-option > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
