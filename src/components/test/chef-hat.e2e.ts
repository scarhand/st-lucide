import { newE2EPage } from '@stencil/core/testing';

describe('icon-chef-hat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chef-hat></icon-chef-hat>');

    const element = await page.find('icon-chef-hat');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chef-hat stroke="blue"></icon-chef-hat>');

    const element = await page.find('icon-chef-hat');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chef-hat > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chef-hat stroke-width="2"></icon-chef-hat>');

    const element = await page.find('icon-chef-hat');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chef-hat > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
