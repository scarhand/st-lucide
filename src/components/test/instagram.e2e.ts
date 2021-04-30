import { newE2EPage } from '@stencil/core/testing';

describe('icon-instagram', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-instagram></icon-instagram>');

    const element = await page.find('icon-instagram');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-instagram stroke="blue"></icon-instagram>');

    const element = await page.find('icon-instagram');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-instagram > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-instagram stroke-width="2"></icon-instagram>');

    const element = await page.find('icon-instagram');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-instagram > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
