import { newE2EPage } from '@stencil/core/testing';

describe('icon-hash', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hash></icon-hash>');

    const element = await page.find('icon-hash');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hash stroke="blue"></icon-hash>');

    const element = await page.find('icon-hash');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-hash > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hash stroke-width="2"></icon-hash>');

    const element = await page.find('icon-hash');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-hash > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
