import { newE2EPage } from '@stencil/core/testing';

describe('icon-eye-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eye-off></icon-eye-off>');

    const element = await page.find('icon-eye-off');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eye-off stroke="blue"></icon-eye-off>');

    const element = await page.find('icon-eye-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-eye-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eye-off stroke-width="2"></icon-eye-off>');

    const element = await page.find('icon-eye-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-eye-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
