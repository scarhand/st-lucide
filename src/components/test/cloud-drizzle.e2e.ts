import { newE2EPage } from '@stencil/core/testing';

describe('icon-cloud-drizzle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-drizzle></icon-cloud-drizzle>');

    const element = await page.find('icon-cloud-drizzle');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-drizzle stroke="blue"></icon-cloud-drizzle>');

    const element = await page.find('icon-cloud-drizzle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cloud-drizzle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-drizzle stroke-width="2"></icon-cloud-drizzle>');

    const element = await page.find('icon-cloud-drizzle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cloud-drizzle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
