import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-output', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-output></icon-file-output>');

    const element = await page.find('icon-file-output');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-output stroke="blue"></icon-file-output>');

    const element = await page.find('icon-file-output');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-output > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-output stroke-width="2"></icon-file-output>');

    const element = await page.find('icon-file-output');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-output > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
