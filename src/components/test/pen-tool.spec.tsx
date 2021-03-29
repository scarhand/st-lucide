import { newE2EPage } from '@stencil/core/testing';

describe('icon-pen-tool', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pen-tool></icon-pen-tool>');

    const element = await page.find('icon-pen-tool');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pen-tool stroke="blue"></icon-pen-tool>');

    const element = await page.find('icon-pen-tool');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pen-tool > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pen-tool stroke-width="2"></icon-pen-tool>');

    const element = await page.find('icon-pen-tool');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pen-tool > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
