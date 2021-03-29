import { newE2EPage } from '@stencil/core/testing';

describe('icon-rotate-ccw', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-ccw></icon-rotate-ccw>');

    const element = await page.find('icon-rotate-ccw');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-ccw stroke="blue"></icon-rotate-ccw>');

    const element = await page.find('icon-rotate-ccw');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-rotate-ccw > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-ccw stroke-width="2"></icon-rotate-ccw>');

    const element = await page.find('icon-rotate-ccw');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-rotate-ccw > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
