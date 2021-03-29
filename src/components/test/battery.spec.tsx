import { newE2EPage } from '@stencil/core/testing';

describe('icon-battery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery></icon-battery>');

    const element = await page.find('icon-battery');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery stroke="blue"></icon-battery>');

    const element = await page.find('icon-battery');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-battery > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery stroke-width="2"></icon-battery>');

    const element = await page.find('icon-battery');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-battery > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
