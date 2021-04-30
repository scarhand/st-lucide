import { newE2EPage } from '@stencil/core/testing';

describe('icon-zap', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-zap></icon-zap>');

    const element = await page.find('icon-zap');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-zap stroke="blue"></icon-zap>');

    const element = await page.find('icon-zap');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-zap > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-zap stroke-width="2"></icon-zap>');

    const element = await page.find('icon-zap');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-zap > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
