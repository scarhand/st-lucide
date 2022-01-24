import { newE2EPage } from '@stencil/core/testing';

describe('icon-trash', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trash></icon-trash>');

    const element = await page.find('icon-trash');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trash stroke="blue"></icon-trash>');

    const element = await page.find('icon-trash');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-trash > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trash stroke-width="2"></icon-trash>');

    const element = await page.find('icon-trash');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-trash > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
