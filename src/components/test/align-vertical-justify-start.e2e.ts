import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-vertical-justify-start', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-justify-start></icon-align-vertical-justify-start>');

    const element = await page.find('icon-align-vertical-justify-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-justify-start stroke="blue"></icon-align-vertical-justify-start>');

    const element = await page.find('icon-align-vertical-justify-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-vertical-justify-start > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-vertical-justify-start stroke-width="2"></icon-align-vertical-justify-start>');

    const element = await page.find('icon-align-vertical-justify-start');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-vertical-justify-start > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
