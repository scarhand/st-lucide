import { newE2EPage } from '@stencil/core/testing';

describe('icon-underline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-underline></icon-underline>');

    const element = await page.find('icon-underline');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-underline stroke="blue"></icon-underline>');

    const element = await page.find('icon-underline');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-underline > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-underline stroke-width="2"></icon-underline>');

    const element = await page.find('icon-underline');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-underline > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
