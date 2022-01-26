import { newE2EPage } from '@stencil/core/testing';

describe('icon-camera', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-camera></icon-camera>');

    const element = await page.find('icon-camera');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-camera stroke="blue"></icon-camera>');

    const element = await page.find('icon-camera');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-camera > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-camera stroke-width="2"></icon-camera>');

    const element = await page.find('icon-camera');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-camera > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
