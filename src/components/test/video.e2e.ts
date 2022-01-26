import { newE2EPage } from '@stencil/core/testing';

describe('icon-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-video></icon-video>');

    const element = await page.find('icon-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-video stroke="blue"></icon-video>');

    const element = await page.find('icon-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-video > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-video stroke-width="2"></icon-video>');

    const element = await page.find('icon-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-video > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
