import { newE2EPage } from '@stencil/core/testing';

describe('icon-text-cursor-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-text-cursor-input></icon-text-cursor-input>');

    const element = await page.find('icon-text-cursor-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-text-cursor-input stroke="blue"></icon-text-cursor-input>');

    const element = await page.find('icon-text-cursor-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-text-cursor-input > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-text-cursor-input stroke-width="2"></icon-text-cursor-input>');

    const element = await page.find('icon-text-cursor-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-text-cursor-input > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
