import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-output', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-output></icon-folder-output>');

    const element = await page.find('icon-folder-output');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-output stroke="blue"></icon-folder-output>');

    const element = await page.find('icon-folder-output');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-output > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-output stroke-width="2"></icon-folder-output>');

    const element = await page.find('icon-folder-output');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-output > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
