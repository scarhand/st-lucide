import { newE2EPage } from '@stencil/core/testing';

describe('icon-milestone', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-milestone></icon-milestone>');

    const element = await page.find('icon-milestone');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-milestone stroke="blue"></icon-milestone>');

    const element = await page.find('icon-milestone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-milestone > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-milestone stroke-width="2"></icon-milestone>');

    const element = await page.find('icon-milestone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-milestone > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
