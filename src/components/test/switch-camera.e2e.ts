import { newE2EPage } from '@stencil/core/testing';

describe('icon-switch-camera', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-switch-camera></icon-switch-camera>');

    const element = await page.find('icon-switch-camera');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-switch-camera stroke="blue"></icon-switch-camera>');

    const element = await page.find('icon-switch-camera');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-switch-camera > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-switch-camera stroke-width="2"></icon-switch-camera>');

    const element = await page.find('icon-switch-camera');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-switch-camera > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
