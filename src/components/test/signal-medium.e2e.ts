import { newE2EPage } from '@stencil/core/testing';

describe('icon-signal-medium', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-medium></icon-signal-medium>');

    const element = await page.find('icon-signal-medium');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-medium stroke="blue"></icon-signal-medium>');

    const element = await page.find('icon-signal-medium');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-signal-medium > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-medium stroke-width="2"></icon-signal-medium>');

    const element = await page.find('icon-signal-medium');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-signal-medium > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
