import { newE2EPage } from '@stencil/core/testing';

describe('icon-stethoscope', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stethoscope></icon-stethoscope>');

    const element = await page.find('icon-stethoscope');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stethoscope stroke="blue"></icon-stethoscope>');

    const element = await page.find('icon-stethoscope');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-stethoscope > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stethoscope stroke-width="2"></icon-stethoscope>');

    const element = await page.find('icon-stethoscope');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-stethoscope > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
