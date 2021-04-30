import { newE2EPage } from '@stencil/core/testing';

describe('icon-mic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mic></icon-mic>');

    const element = await page.find('icon-mic');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mic stroke="blue"></icon-mic>');

    const element = await page.find('icon-mic');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mic > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mic stroke-width="2"></icon-mic>');

    const element = await page.find('icon-mic');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mic > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
