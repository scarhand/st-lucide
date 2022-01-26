import { newE2EPage } from '@stencil/core/testing';

describe('icon-smartphone-charging', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smartphone-charging></icon-smartphone-charging>');

    const element = await page.find('icon-smartphone-charging');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smartphone-charging stroke="blue"></icon-smartphone-charging>');

    const element = await page.find('icon-smartphone-charging');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-smartphone-charging > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smartphone-charging stroke-width="2"></icon-smartphone-charging>');

    const element = await page.find('icon-smartphone-charging');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-smartphone-charging > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
