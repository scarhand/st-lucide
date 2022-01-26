import { newE2EPage } from '@stencil/core/testing';

describe('icon-move-diagonal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move-diagonal></icon-move-diagonal>');

    const element = await page.find('icon-move-diagonal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move-diagonal stroke="blue"></icon-move-diagonal>');

    const element = await page.find('icon-move-diagonal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-move-diagonal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-move-diagonal stroke-width="2"></icon-move-diagonal>');

    const element = await page.find('icon-move-diagonal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-move-diagonal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
