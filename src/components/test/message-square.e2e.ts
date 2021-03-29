import { newE2EPage } from '@stencil/core/testing';

describe('icon-message-square', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-message-square></icon-message-square>');

    const element = await page.find('icon-message-square');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-message-square stroke="blue"></icon-message-square>');

    const element = await page.find('icon-message-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-message-square > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-message-square stroke-width="2"></icon-message-square>');

    const element = await page.find('icon-message-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-message-square > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
