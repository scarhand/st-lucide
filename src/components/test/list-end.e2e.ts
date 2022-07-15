import { newE2EPage } from '@stencil/core/testing';

describe('icon-list-end', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-end></icon-list-end>');

    const element = await page.find('icon-list-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-end stroke="blue"></icon-list-end>');

    const element = await page.find('icon-list-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-list-end > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-end stroke-width="2"></icon-list-end>');

    const element = await page.find('icon-list-end');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-list-end > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
