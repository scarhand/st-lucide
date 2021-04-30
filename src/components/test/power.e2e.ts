import { newE2EPage } from '@stencil/core/testing';

describe('icon-power', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-power></icon-power>');

    const element = await page.find('icon-power');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-power stroke="blue"></icon-power>');

    const element = await page.find('icon-power');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-power > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-power stroke-width="2"></icon-power>');

    const element = await page.find('icon-power');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-power > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
