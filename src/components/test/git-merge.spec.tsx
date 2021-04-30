import { newE2EPage } from '@stencil/core/testing';

describe('icon-git-merge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-merge></icon-git-merge>');

    const element = await page.find('icon-git-merge');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-merge stroke="blue"></icon-git-merge>');

    const element = await page.find('icon-git-merge');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-git-merge > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-merge stroke-width="2"></icon-git-merge>');

    const element = await page.find('icon-git-merge');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-git-merge > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
