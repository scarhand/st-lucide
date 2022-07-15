import { newE2EPage } from '@stencil/core/testing';

describe('icon-clipboard-signature', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-signature></icon-clipboard-signature>');

    const element = await page.find('icon-clipboard-signature');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-signature stroke="blue"></icon-clipboard-signature>');

    const element = await page.find('icon-clipboard-signature');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clipboard-signature > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-signature stroke-width="2"></icon-clipboard-signature>');

    const element = await page.find('icon-clipboard-signature');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clipboard-signature > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
