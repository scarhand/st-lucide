import { newE2EPage } from '@stencil/core/testing';

describe('icon-flask-conical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flask-conical></icon-flask-conical>');

    const element = await page.find('icon-flask-conical');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flask-conical stroke="blue"></icon-flask-conical>');

    const element = await page.find('icon-flask-conical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flask-conical > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flask-conical stroke-width="2"></icon-flask-conical>');

    const element = await page.find('icon-flask-conical');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flask-conical > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
