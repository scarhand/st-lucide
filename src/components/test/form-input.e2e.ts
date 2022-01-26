import { newE2EPage } from '@stencil/core/testing';

describe('icon-form-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-form-input></icon-form-input>');

    const element = await page.find('icon-form-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-form-input stroke="blue"></icon-form-input>');

    const element = await page.find('icon-form-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-form-input > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-form-input stroke-width="2"></icon-form-input>');

    const element = await page.find('icon-form-input');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-form-input > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
