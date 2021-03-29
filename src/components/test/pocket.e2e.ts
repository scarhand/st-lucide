import { newE2EPage } from '@stencil/core/testing';

describe('icon-pocket', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pocket></icon-pocket>');

    const element = await page.find('icon-pocket');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pocket stroke="blue"></icon-pocket>');

    const element = await page.find('icon-pocket');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pocket > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pocket stroke-width="2"></icon-pocket>');

    const element = await page.find('icon-pocket');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pocket > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
