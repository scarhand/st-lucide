import { newE2EPage } from '@stencil/core/testing';

describe('icon-gitlab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gitlab></icon-gitlab>');

    const element = await page.find('icon-gitlab');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gitlab stroke="blue"></icon-gitlab>');

    const element = await page.find('icon-gitlab');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-gitlab > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gitlab stroke-width="2"></icon-gitlab>');

    const element = await page.find('icon-gitlab');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-gitlab > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
