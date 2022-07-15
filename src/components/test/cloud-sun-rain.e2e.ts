import { newE2EPage } from '@stencil/core/testing';

describe('icon-cloud-sun-rain', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-sun-rain></icon-cloud-sun-rain>');

    const element = await page.find('icon-cloud-sun-rain');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-sun-rain stroke="blue"></icon-cloud-sun-rain>');

    const element = await page.find('icon-cloud-sun-rain');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cloud-sun-rain > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-sun-rain stroke-width="2"></icon-cloud-sun-rain>');

    const element = await page.find('icon-cloud-sun-rain');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cloud-sun-rain > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
