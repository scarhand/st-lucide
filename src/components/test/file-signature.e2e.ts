import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-signature', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-signature></icon-file-signature>');

    const element = await page.find('icon-file-signature');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-signature stroke="blue"></icon-file-signature>');

    const element = await page.find('icon-file-signature');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-signature > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-signature stroke-width="2"></icon-file-signature>');

    const element = await page.find('icon-file-signature');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-signature > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
