import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-input></icon-folder-input>');

    const element = await page.find('icon-folder-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-input stroke="blue"></icon-folder-input>');

    const element = await page.find('icon-folder-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-input > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-input stroke-width="2"></icon-folder-input>');

    const element = await page.find('icon-folder-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-input > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
