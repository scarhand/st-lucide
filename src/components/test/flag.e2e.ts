import { newE2EPage } from '@stencil/core/testing';

describe('icon-flag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag></icon-flag>');

    const element = await page.find('icon-flag');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag stroke="blue"></icon-flag>');

    const element = await page.find('icon-flag');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flag > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flag stroke-width="2"></icon-flag>');

    const element = await page.find('icon-flag');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flag > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
