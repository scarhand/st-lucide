import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-line-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-line-chart></icon-file-line-chart>');

    const element = await page.find('icon-file-line-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-line-chart stroke="blue"></icon-file-line-chart>');

    const element = await page.find('icon-file-line-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-line-chart > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-line-chart stroke-width="2"></icon-file-line-chart>');

    const element = await page.find('icon-file-line-chart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-line-chart > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
