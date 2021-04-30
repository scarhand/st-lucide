import { newE2EPage } from '@stencil/core/testing';

describe('icon-message-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-message-circle></icon-message-circle>');

    const element = await page.find('icon-message-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-message-circle stroke="blue"></icon-message-circle>');

    const element = await page.find('icon-message-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-message-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-message-circle stroke-width="2"></icon-message-circle>');

    const element = await page.find('icon-message-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-message-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
