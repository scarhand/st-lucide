import { newE2EPage } from '@stencil/core/testing';

describe('icon-flashlight', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flashlight></icon-flashlight>');

    const element = await page.find('icon-flashlight');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flashlight stroke="blue"></icon-flashlight>');

    const element = await page.find('icon-flashlight');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flashlight > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flashlight stroke-width="2"></icon-flashlight>');

    const element = await page.find('icon-flashlight');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flashlight > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
