import { newE2EPage } from '@stencil/core/testing';

describe('icon-flask-round', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flask-round></icon-flask-round>');

    const element = await page.find('icon-flask-round');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flask-round stroke="blue"></icon-flask-round>');

    const element = await page.find('icon-flask-round');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flask-round > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flask-round stroke-width="2"></icon-flask-round>');

    const element = await page.find('icon-flask-round');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flask-round > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
