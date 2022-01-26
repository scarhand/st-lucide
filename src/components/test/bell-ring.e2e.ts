import { newE2EPage } from '@stencil/core/testing';

describe('icon-bell-ring', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-ring></icon-bell-ring>');

    const element = await page.find('icon-bell-ring');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-ring stroke="blue"></icon-bell-ring>');

    const element = await page.find('icon-bell-ring');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bell-ring > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-ring stroke-width="2"></icon-bell-ring>');

    const element = await page.find('icon-bell-ring');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bell-ring > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
