import { newE2EPage } from '@stencil/core/testing';

describe('icon-activity', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-activity></icon-activity>');

    const element = await page.find('icon-activity');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-activity stroke="blue"></icon-activity>');

    const element = await page.find('icon-activity');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-activity > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-activity stroke-width="2"></icon-activity>');

    const element = await page.find('icon-activity');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-activity > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
