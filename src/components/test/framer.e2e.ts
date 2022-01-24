import { newE2EPage } from '@stencil/core/testing';

describe('icon-framer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-framer></icon-framer>');

    const element = await page.find('icon-framer');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-framer stroke="blue"></icon-framer>');

    const element = await page.find('icon-framer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-framer > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-framer stroke-width="2"></icon-framer>');

    const element = await page.find('icon-framer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-framer > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
