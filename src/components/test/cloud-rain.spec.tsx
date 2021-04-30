import { newE2EPage } from '@stencil/core/testing';

describe('icon-cloud-rain', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-rain></icon-cloud-rain>');

    const element = await page.find('icon-cloud-rain');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-rain stroke="blue"></icon-cloud-rain>');

    const element = await page.find('icon-cloud-rain');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cloud-rain > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-rain stroke-width="2"></icon-cloud-rain>');

    const element = await page.find('icon-cloud-rain');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cloud-rain > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
