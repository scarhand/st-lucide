import { newE2EPage } from '@stencil/core/testing';

describe('icon-mouse-pointer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse-pointer></icon-mouse-pointer>');

    const element = await page.find('icon-mouse-pointer');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse-pointer stroke="blue"></icon-mouse-pointer>');

    const element = await page.find('icon-mouse-pointer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mouse-pointer > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse-pointer stroke-width="2"></icon-mouse-pointer>');

    const element = await page.find('icon-mouse-pointer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mouse-pointer > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
