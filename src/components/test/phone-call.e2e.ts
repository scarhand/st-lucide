import { newE2EPage } from '@stencil/core/testing';

describe('icon-phone-call', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-call></icon-phone-call>');

    const element = await page.find('icon-phone-call');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-call stroke="blue"></icon-phone-call>');

    const element = await page.find('icon-phone-call');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-phone-call > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-call stroke-width="2"></icon-phone-call>');

    const element = await page.find('icon-phone-call');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-phone-call > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
