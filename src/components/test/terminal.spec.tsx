import { newE2EPage } from '@stencil/core/testing';

describe('icon-terminal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-terminal></icon-terminal>');

    const element = await page.find('icon-terminal');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-terminal stroke="blue"></icon-terminal>');

    const element = await page.find('icon-terminal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-terminal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-terminal stroke-width="2"></icon-terminal>');

    const element = await page.find('icon-terminal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-terminal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
