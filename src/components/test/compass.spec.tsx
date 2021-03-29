import { newE2EPage } from '@stencil/core/testing';

describe('icon-compass', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-compass></icon-compass>');

    const element = await page.find('icon-compass');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-compass stroke="blue"></icon-compass>');

    const element = await page.find('icon-compass');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-compass > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-compass stroke-width="2"></icon-compass>');

    const element = await page.find('icon-compass');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-compass > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
