import { newE2EPage } from '@stencil/core/testing';

describe('icon-git-pull-request-draft', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request-draft></icon-git-pull-request-draft>');

    const element = await page.find('icon-git-pull-request-draft');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request-draft stroke="blue"></icon-git-pull-request-draft>');

    const element = await page.find('icon-git-pull-request-draft');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-git-pull-request-draft > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request-draft stroke-width="2"></icon-git-pull-request-draft>');

    const element = await page.find('icon-git-pull-request-draft');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-git-pull-request-draft > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
