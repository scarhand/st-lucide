import { newE2EPage } from '@stencil/core/testing';

describe('icon-voicemail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-voicemail></icon-voicemail>');

    const element = await page.find('icon-voicemail');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-voicemail stroke="blue"></icon-voicemail>');

    const element = await page.find('icon-voicemail');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-voicemail > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-voicemail stroke-width="2"></icon-voicemail>');

    const element = await page.find('icon-voicemail');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-voicemail > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
