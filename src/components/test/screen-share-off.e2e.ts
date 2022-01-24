import { newE2EPage } from '@stencil/core/testing';

describe('icon-screen-share-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-screen-share-off></icon-screen-share-off>');

    const element = await page.find('icon-screen-share-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-screen-share-off stroke="blue"></icon-screen-share-off>');

    const element = await page.find('icon-screen-share-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-screen-share-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-screen-share-off stroke-width="2"></icon-screen-share-off>');

    const element = await page.find('icon-screen-share-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-screen-share-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
