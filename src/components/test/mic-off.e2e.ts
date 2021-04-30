import { newE2EPage } from '@stencil/core/testing';

describe('icon-mic-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mic-off></icon-mic-off>');

    const element = await page.find('icon-mic-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mic-off stroke="blue"></icon-mic-off>');

    const element = await page.find('icon-mic-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mic-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mic-off stroke-width="2"></icon-mic-off>');

    const element = await page.find('icon-mic-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mic-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
