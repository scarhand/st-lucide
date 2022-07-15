import { newE2EPage } from '@stencil/core/testing';

describe('icon-git-pull-request-closed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request-closed></icon-git-pull-request-closed>');

    const element = await page.find('icon-git-pull-request-closed');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request-closed stroke="blue"></icon-git-pull-request-closed>');

    const element = await page.find('icon-git-pull-request-closed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-git-pull-request-closed > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request-closed stroke-width="2"></icon-git-pull-request-closed>');

    const element = await page.find('icon-git-pull-request-closed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-git-pull-request-closed > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
