import { newE2EPage } from '@stencil/core/testing';

describe('icon-shield-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shield-alert></icon-shield-alert>');

    const element = await page.find('icon-shield-alert');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shield-alert stroke="blue"></icon-shield-alert>');

    const element = await page.find('icon-shield-alert');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-shield-alert > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shield-alert stroke-width="2"></icon-shield-alert>');

    const element = await page.find('icon-shield-alert');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-shield-alert > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
