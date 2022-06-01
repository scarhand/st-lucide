import { newE2EPage } from '@stencil/core/testing';

describe('icon-cookie', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cookie></icon-cookie>');

    const element = await page.find('icon-cookie');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cookie stroke="blue"></icon-cookie>');

    const element = await page.find('icon-cookie');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cookie > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cookie stroke-width="2"></icon-cookie>');

    const element = await page.find('icon-cookie');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cookie > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
