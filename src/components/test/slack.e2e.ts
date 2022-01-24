import { newE2EPage } from '@stencil/core/testing';

describe('icon-slack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slack></icon-slack>');

    const element = await page.find('icon-slack');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slack stroke="blue"></icon-slack>');

    const element = await page.find('icon-slack');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-slack > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slack stroke-width="2"></icon-slack>');

    const element = await page.find('icon-slack');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-slack > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
