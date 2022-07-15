import { newE2EPage } from '@stencil/core/testing';

describe('icon-annoyed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-annoyed></icon-annoyed>');

    const element = await page.find('icon-annoyed');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-annoyed stroke="blue"></icon-annoyed>');

    const element = await page.find('icon-annoyed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-annoyed > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-annoyed stroke-width="2"></icon-annoyed>');

    const element = await page.find('icon-annoyed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-annoyed > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
