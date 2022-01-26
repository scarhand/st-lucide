import { newE2EPage } from '@stencil/core/testing';

describe('icon-server-crash', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server-crash></icon-server-crash>');

    const element = await page.find('icon-server-crash');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server-crash stroke="blue"></icon-server-crash>');

    const element = await page.find('icon-server-crash');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-server-crash > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server-crash stroke-width="2"></icon-server-crash>');

    const element = await page.find('icon-server-crash');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-server-crash > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
