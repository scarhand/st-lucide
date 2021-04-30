import { newE2EPage } from '@stencil/core/testing';

describe('icon-aperture', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-aperture></icon-aperture>');

    const element = await page.find('icon-aperture');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-aperture stroke="blue"></icon-aperture>');

    const element = await page.find('icon-aperture');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-aperture > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-aperture stroke-width="2"></icon-aperture>');

    const element = await page.find('icon-aperture');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-aperture > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
