import { newE2EPage } from '@stencil/core/testing';

describe('icon-bluetooth-connected', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-connected></icon-bluetooth-connected>');

    const element = await page.find('icon-bluetooth-connected');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-connected stroke="blue"></icon-bluetooth-connected>');

    const element = await page.find('icon-bluetooth-connected');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bluetooth-connected > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth-connected stroke-width="2"></icon-bluetooth-connected>');

    const element = await page.find('icon-bluetooth-connected');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bluetooth-connected > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
