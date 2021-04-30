import { newE2EPage } from '@stencil/core/testing';

describe('icon-coffee', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-coffee></icon-coffee>');

    const element = await page.find('icon-coffee');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-coffee stroke="blue"></icon-coffee>');

    const element = await page.find('icon-coffee');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-coffee > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-coffee stroke-width="2"></icon-coffee>');

    const element = await page.find('icon-coffee');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-coffee > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
