import { newE2EPage } from '@stencil/core/testing';

describe('icon-droplet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-droplet></icon-droplet>');

    const element = await page.find('icon-droplet');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-droplet stroke="blue"></icon-droplet>');

    const element = await page.find('icon-droplet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-droplet > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-droplet stroke-width="2"></icon-droplet>');

    const element = await page.find('icon-droplet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-droplet > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
