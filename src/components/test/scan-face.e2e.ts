import { newE2EPage } from '@stencil/core/testing';

describe('icon-scan-face', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan-face></icon-scan-face>');

    const element = await page.find('icon-scan-face');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan-face stroke="blue"></icon-scan-face>');

    const element = await page.find('icon-scan-face');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-scan-face > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan-face stroke-width="2"></icon-scan-face>');

    const element = await page.find('icon-scan-face');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-scan-face > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
