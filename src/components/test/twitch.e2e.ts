import { newE2EPage } from '@stencil/core/testing';

describe('icon-twitch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-twitch></icon-twitch>');

    const element = await page.find('icon-twitch');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-twitch stroke="blue"></icon-twitch>');

    const element = await page.find('icon-twitch');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-twitch > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-twitch stroke-width="2"></icon-twitch>');

    const element = await page.find('icon-twitch');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-twitch > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
