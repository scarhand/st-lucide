import { newE2EPage } from '@stencil/core/testing';

describe('icon-usb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-usb></icon-usb>');

    const element = await page.find('icon-usb');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-usb stroke="blue"></icon-usb>');

    const element = await page.find('icon-usb');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-usb > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-usb stroke-width="2"></icon-usb>');

    const element = await page.find('icon-usb');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-usb > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
