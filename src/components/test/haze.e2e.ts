import { newE2EPage } from '@stencil/core/testing';

describe('icon-haze', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-haze></icon-haze>');

    const element = await page.find('icon-haze');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-haze stroke="blue"></icon-haze>');

    const element = await page.find('icon-haze');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-haze > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-haze stroke-width="2"></icon-haze>');

    const element = await page.find('icon-haze');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-haze > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
