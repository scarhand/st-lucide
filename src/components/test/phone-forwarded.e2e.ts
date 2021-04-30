import { newE2EPage } from '@stencil/core/testing';

describe('icon-phone-forwarded', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-forwarded></icon-phone-forwarded>');

    const element = await page.find('icon-phone-forwarded');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-forwarded stroke="blue"></icon-phone-forwarded>');

    const element = await page.find('icon-phone-forwarded');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-phone-forwarded > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-forwarded stroke-width="2"></icon-phone-forwarded>');

    const element = await page.find('icon-phone-forwarded');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-phone-forwarded > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
