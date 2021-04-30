import { newE2EPage } from '@stencil/core/testing';

describe('icon-server', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server></icon-server>');

    const element = await page.find('icon-server');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server stroke="blue"></icon-server>');

    const element = await page.find('icon-server');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-server > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server stroke-width="2"></icon-server>');

    const element = await page.find('icon-server');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-server > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
