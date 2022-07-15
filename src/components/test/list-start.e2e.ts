import { newE2EPage } from '@stencil/core/testing';

describe('icon-list-start', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-start></icon-list-start>');

    const element = await page.find('icon-list-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-start stroke="blue"></icon-list-start>');

    const element = await page.find('icon-list-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-list-start > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-start stroke-width="2"></icon-list-start>');

    const element = await page.find('icon-list-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-list-start > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
