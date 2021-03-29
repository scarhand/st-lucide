import { newE2EPage } from '@stencil/core/testing';

describe('icon-git-commit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-commit></icon-git-commit>');

    const element = await page.find('icon-git-commit');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-commit stroke="blue"></icon-git-commit>');

    const element = await page.find('icon-git-commit');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-git-commit > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-commit stroke-width="2"></icon-git-commit>');

    const element = await page.find('icon-git-commit');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-git-commit > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
