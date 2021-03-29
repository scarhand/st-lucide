import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-minus></icon-file-minus>');

    const element = await page.find('icon-file-minus');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-minus stroke="blue"></icon-file-minus>');

    const element = await page.find('icon-file-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-minus stroke-width="2"></icon-file-minus>');

    const element = await page.find('icon-file-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
