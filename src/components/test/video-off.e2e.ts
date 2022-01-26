import { newE2EPage } from '@stencil/core/testing';

describe('icon-video-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-video-off></icon-video-off>');

    const element = await page.find('icon-video-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-video-off stroke="blue"></icon-video-off>');

    const element = await page.find('icon-video-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-video-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-video-off stroke-width="2"></icon-video-off>');

    const element = await page.find('icon-video-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-video-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
