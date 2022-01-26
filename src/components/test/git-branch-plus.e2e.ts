import { newE2EPage } from '@stencil/core/testing';

describe('icon-git-branch-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-branch-plus></icon-git-branch-plus>');

    const element = await page.find('icon-git-branch-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-branch-plus stroke="blue"></icon-git-branch-plus>');

    const element = await page.find('icon-git-branch-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-git-branch-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-branch-plus stroke-width="2"></icon-git-branch-plus>');

    const element = await page.find('icon-git-branch-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-git-branch-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
