import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-justify', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-justify></icon-align-justify>');

    const element = await page.find('icon-align-justify');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-justify stroke="blue"></icon-align-justify>');

    const element = await page.find('icon-align-justify');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-justify > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-justify stroke-width="2"></icon-align-justify>');

    const element = await page.find('icon-align-justify');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-justify > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
