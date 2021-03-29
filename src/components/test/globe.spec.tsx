import { newE2EPage } from '@stencil/core/testing';

describe('icon-globe', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-globe></icon-globe>');

    const element = await page.find('icon-globe');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-globe stroke="blue"></icon-globe>');

    const element = await page.find('icon-globe');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-globe > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-globe stroke-width="2"></icon-globe>');

    const element = await page.find('icon-globe');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-globe > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
