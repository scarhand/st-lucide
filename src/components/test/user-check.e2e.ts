import { newE2EPage } from '@stencil/core/testing';

describe('icon-user-check', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-check></icon-user-check>');

    const element = await page.find('icon-user-check');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-check stroke="blue"></icon-user-check>');

    const element = await page.find('icon-user-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-user-check > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-check stroke-width="2"></icon-user-check>');

    const element = await page.find('icon-user-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-user-check > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
