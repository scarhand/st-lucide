import { newE2EPage } from '@stencil/core/testing';

describe('icon-codepen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-codepen></icon-codepen>');

    const element = await page.find('icon-codepen');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-codepen stroke="blue"></icon-codepen>');

    const element = await page.find('icon-codepen');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-codepen > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-codepen stroke-width="2"></icon-codepen>');

    const element = await page.find('icon-codepen');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-codepen > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
