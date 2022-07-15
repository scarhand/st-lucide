import { newE2EPage } from '@stencil/core/testing';

describe('icon-party-popper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-party-popper></icon-party-popper>');

    const element = await page.find('icon-party-popper');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-party-popper stroke="blue"></icon-party-popper>');

    const element = await page.find('icon-party-popper');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-party-popper > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-party-popper stroke-width="2"></icon-party-popper>');

    const element = await page.find('icon-party-popper');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-party-popper > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
