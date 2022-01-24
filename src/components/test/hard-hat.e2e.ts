import { newE2EPage } from '@stencil/core/testing';

describe('icon-hard-hat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hard-hat></icon-hard-hat>');

    const element = await page.find('icon-hard-hat');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hard-hat stroke="blue"></icon-hard-hat>');

    const element = await page.find('icon-hard-hat');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-hard-hat > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hard-hat stroke-width="2"></icon-hard-hat>');

    const element = await page.find('icon-hard-hat');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-hard-hat > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
