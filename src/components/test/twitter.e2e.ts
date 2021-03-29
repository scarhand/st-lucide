import { newE2EPage } from '@stencil/core/testing';

describe('icon-twitter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-twitter></icon-twitter>');

    const element = await page.find('icon-twitter');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-twitter stroke="blue"></icon-twitter>');

    const element = await page.find('icon-twitter');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-twitter > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-twitter stroke-width="2"></icon-twitter>');

    const element = await page.find('icon-twitter');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-twitter > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
