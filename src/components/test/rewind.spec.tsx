import { newE2EPage } from '@stencil/core/testing';

describe('icon-rewind', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rewind></icon-rewind>');

    const element = await page.find('icon-rewind');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rewind stroke="blue"></icon-rewind>');

    const element = await page.find('icon-rewind');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-rewind > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rewind stroke-width="2"></icon-rewind>');

    const element = await page.find('icon-rewind');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-rewind > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
