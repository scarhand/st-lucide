import { newE2EPage } from '@stencil/core/testing';

describe('icon-phone-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-off></icon-phone-off>');

    const element = await page.find('icon-phone-off');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-off stroke="blue"></icon-phone-off>');

    const element = await page.find('icon-phone-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-phone-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-off stroke-width="2"></icon-phone-off>');

    const element = await page.find('icon-phone-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-phone-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
