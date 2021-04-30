import { newE2EPage } from '@stencil/core/testing';

describe('icon-feather', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-feather></icon-feather>');

    const element = await page.find('icon-feather');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-feather stroke="blue"></icon-feather>');

    const element = await page.find('icon-feather');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-feather > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-feather stroke-width="2"></icon-feather>');

    const element = await page.find('icon-feather');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-feather > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
