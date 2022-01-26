import { newE2EPage } from '@stencil/core/testing';

describe('icon-github', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-github></icon-github>');

    const element = await page.find('icon-github');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-github stroke="blue"></icon-github>');

    const element = await page.find('icon-github');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-github > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-github stroke-width="2"></icon-github>');

    const element = await page.find('icon-github');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-github > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
