import { newE2EPage } from '@stencil/core/testing';

describe('icon-list-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-video></icon-list-video>');

    const element = await page.find('icon-list-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-video stroke="blue"></icon-list-video>');

    const element = await page.find('icon-list-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-list-video > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-video stroke-width="2"></icon-list-video>');

    const element = await page.find('icon-list-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-list-video > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
