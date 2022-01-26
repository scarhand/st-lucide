import { newE2EPage } from '@stencil/core/testing';

describe('icon-copyleft', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copyleft></icon-copyleft>');

    const element = await page.find('icon-copyleft');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copyleft stroke="blue"></icon-copyleft>');

    const element = await page.find('icon-copyleft');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-copyleft > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copyleft stroke-width="2"></icon-copyleft>');

    const element = await page.find('icon-copyleft');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-copyleft > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
