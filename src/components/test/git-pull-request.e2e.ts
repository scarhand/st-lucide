import { newE2EPage } from '@stencil/core/testing';

describe('icon-git-pull-request', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request></icon-git-pull-request>');

    const element = await page.find('icon-git-pull-request');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request stroke="blue"></icon-git-pull-request>');

    const element = await page.find('icon-git-pull-request');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-git-pull-request > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-git-pull-request stroke-width="2"></icon-git-pull-request>');

    const element = await page.find('icon-git-pull-request');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-git-pull-request > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
