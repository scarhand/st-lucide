import { newE2EPage } from '@stencil/core/testing';

describe('icon-pause-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pause-circle></icon-pause-circle>');

    const element = await page.find('icon-pause-circle');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pause-circle stroke="blue"></icon-pause-circle>');

    const element = await page.find('icon-pause-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pause-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pause-circle stroke-width="2"></icon-pause-circle>');

    const element = await page.find('icon-pause-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pause-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
