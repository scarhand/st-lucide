import { newE2EPage } from '@stencil/core/testing';

describe('icon-cloud-hail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-hail></icon-cloud-hail>');

    const element = await page.find('icon-cloud-hail');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-hail stroke="blue"></icon-cloud-hail>');

    const element = await page.find('icon-cloud-hail');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cloud-hail > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-hail stroke-width="2"></icon-cloud-hail>');

    const element = await page.find('icon-cloud-hail');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cloud-hail > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
