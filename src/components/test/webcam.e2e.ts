import { newE2EPage } from '@stencil/core/testing';

describe('icon-webcam', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-webcam></icon-webcam>');

    const element = await page.find('icon-webcam');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-webcam stroke="blue"></icon-webcam>');

    const element = await page.find('icon-webcam');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-webcam > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-webcam stroke-width="2"></icon-webcam>');

    const element = await page.find('icon-webcam');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-webcam > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
