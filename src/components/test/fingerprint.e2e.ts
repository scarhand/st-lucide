import { newE2EPage } from '@stencil/core/testing';

describe('icon-fingerprint', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fingerprint></icon-fingerprint>');

    const element = await page.find('icon-fingerprint');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fingerprint stroke="blue"></icon-fingerprint>');

    const element = await page.find('icon-fingerprint');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-fingerprint > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-fingerprint stroke-width="2"></icon-fingerprint>');

    const element = await page.find('icon-fingerprint');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-fingerprint > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
