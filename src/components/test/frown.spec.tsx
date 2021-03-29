import { newE2EPage } from '@stencil/core/testing';

describe('icon-frown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-frown></icon-frown>');

    const element = await page.find('icon-frown');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-frown stroke="blue"></icon-frown>');

    const element = await page.find('icon-frown');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-frown > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-frown stroke-width="2"></icon-frown>');

    const element = await page.find('icon-frown');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-frown > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
