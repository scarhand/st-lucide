import { newE2EPage } from '@stencil/core/testing';

describe('icon-lock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lock></icon-lock>');

    const element = await page.find('icon-lock');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lock stroke="blue"></icon-lock>');

    const element = await page.find('icon-lock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lock > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lock stroke-width="2"></icon-lock>');

    const element = await page.find('icon-lock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lock > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
