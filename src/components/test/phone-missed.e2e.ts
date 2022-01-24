import { newE2EPage } from '@stencil/core/testing';

describe('icon-phone-missed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-missed></icon-phone-missed>');

    const element = await page.find('icon-phone-missed');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-missed stroke="blue"></icon-phone-missed>');

    const element = await page.find('icon-phone-missed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-phone-missed > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-phone-missed stroke-width="2"></icon-phone-missed>');

    const element = await page.find('icon-phone-missed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-phone-missed > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
