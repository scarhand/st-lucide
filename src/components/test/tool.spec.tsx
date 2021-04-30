import { newE2EPage } from '@stencil/core/testing';

describe('icon-tool', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tool></icon-tool>');

    const element = await page.find('icon-tool');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tool stroke="blue"></icon-tool>');

    const element = await page.find('icon-tool');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tool > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tool stroke-width="2"></icon-tool>');

    const element = await page.find('icon-tool');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tool > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
