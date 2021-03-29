import { newE2EPage } from '@stencil/core/testing';

describe('icon-italic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-italic></icon-italic>');

    const element = await page.find('icon-italic');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-italic stroke="blue"></icon-italic>');

    const element = await page.find('icon-italic');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-italic > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-italic stroke-width="2"></icon-italic>');

    const element = await page.find('icon-italic');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-italic > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
