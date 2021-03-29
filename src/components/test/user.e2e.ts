import { newE2EPage } from '@stencil/core/testing';

describe('icon-user', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user></icon-user>');

    const element = await page.find('icon-user');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user stroke="blue"></icon-user>');

    const element = await page.find('icon-user');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-user > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user stroke-width="2"></icon-user>');

    const element = await page.find('icon-user');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-user > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
