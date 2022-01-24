import { newE2EPage } from '@stencil/core/testing';

describe('icon-users', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-users></icon-users>');

    const element = await page.find('icon-users');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-users stroke="blue"></icon-users>');

    const element = await page.find('icon-users');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-users > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-users stroke-width="2"></icon-users>');

    const element = await page.find('icon-users');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-users > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
