import { newE2EPage } from '@stencil/core/testing';

describe('icon-align-center', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center></icon-align-center>');

    const element = await page.find('icon-align-center');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center stroke="blue"></icon-align-center>');

    const element = await page.find('icon-align-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-align-center > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-align-center stroke-width="2"></icon-align-center>');

    const element = await page.find('icon-align-center');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-align-center > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
