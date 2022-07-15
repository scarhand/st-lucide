import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-video></icon-file-video>');

    const element = await page.find('icon-file-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-video stroke="blue"></icon-file-video>');

    const element = await page.find('icon-file-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-video > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-video stroke-width="2"></icon-file-video>');

    const element = await page.find('icon-file-video');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-video > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
