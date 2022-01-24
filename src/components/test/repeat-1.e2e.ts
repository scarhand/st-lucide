import { newE2EPage } from '@stencil/core/testing';

describe('icon-repeat-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-repeat-1></icon-repeat-1>');

    const element = await page.find('icon-repeat-1');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-repeat-1 stroke="blue"></icon-repeat-1>');

    const element = await page.find('icon-repeat-1');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-repeat-1 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-repeat-1 stroke-width="2"></icon-repeat-1>');

    const element = await page.find('icon-repeat-1');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-repeat-1 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
