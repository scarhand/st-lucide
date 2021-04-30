import { newE2EPage } from '@stencil/core/testing';

describe('icon-info', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-info></icon-info>');

    const element = await page.find('icon-info');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-info stroke="blue"></icon-info>');

    const element = await page.find('icon-info');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-info > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-info stroke-width="2"></icon-info>');

    const element = await page.find('icon-info');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-info > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
