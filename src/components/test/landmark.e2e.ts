import { newE2EPage } from '@stencil/core/testing';

describe('icon-landmark', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-landmark></icon-landmark>');

    const element = await page.find('icon-landmark');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-landmark stroke="blue"></icon-landmark>');

    const element = await page.find('icon-landmark');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-landmark > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-landmark stroke-width="2"></icon-landmark>');

    const element = await page.find('icon-landmark');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-landmark > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
