import { newE2EPage } from '@stencil/core/testing';

describe('icon-git-compare', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-compare></icon-git-compare>');

    const element = await page.find('icon-git-compare');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-compare stroke="blue"></icon-git-compare>');

    const element = await page.find('icon-git-compare');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-git-compare > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-compare stroke-width="2"></icon-git-compare>');

    const element = await page.find('icon-git-compare');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-git-compare > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
