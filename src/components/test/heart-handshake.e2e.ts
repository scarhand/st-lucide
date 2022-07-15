import { newE2EPage } from '@stencil/core/testing';

describe('icon-heart-handshake', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart-handshake></icon-heart-handshake>');

    const element = await page.find('icon-heart-handshake');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart-handshake stroke="blue"></icon-heart-handshake>');

    const element = await page.find('icon-heart-handshake');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-heart-handshake > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart-handshake stroke-width="2"></icon-heart-handshake>');

    const element = await page.find('icon-heart-handshake');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-heart-handshake > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
