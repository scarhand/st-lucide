import { newE2EPage } from '@stencil/core/testing';

describe('icon-bluetooth', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth></icon-bluetooth>');

    const element = await page.find('icon-bluetooth');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth stroke="blue"></icon-bluetooth>');

    const element = await page.find('icon-bluetooth');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bluetooth > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bluetooth stroke-width="2"></icon-bluetooth>');

    const element = await page.find('icon-bluetooth');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bluetooth > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
