import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-question', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-question></icon-file-question>');

    const element = await page.find('icon-file-question');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-question stroke="blue"></icon-file-question>');

    const element = await page.find('icon-file-question');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-question > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-question stroke-width="2"></icon-file-question>');

    const element = await page.find('icon-file-question');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-question > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
