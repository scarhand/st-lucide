import { newE2EPage } from '@stencil/core/testing';

describe('icon-sun-snow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-snow></icon-sun-snow>');

    const element = await page.find('icon-sun-snow');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-snow stroke="blue"></icon-sun-snow>');

    const element = await page.find('icon-sun-snow');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sun-snow > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun-snow stroke-width="2"></icon-sun-snow>');

    const element = await page.find('icon-sun-snow');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sun-snow > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
