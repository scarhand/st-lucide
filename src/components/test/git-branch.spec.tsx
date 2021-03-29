import { newE2EPage } from '@stencil/core/testing';

describe('icon-git-branch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-branch></icon-git-branch>');

    const element = await page.find('icon-git-branch');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-branch stroke="blue"></icon-git-branch>');

    const element = await page.find('icon-git-branch');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-git-branch > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-branch stroke-width="2"></icon-git-branch>');

    const element = await page.find('icon-git-branch');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-git-branch > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
