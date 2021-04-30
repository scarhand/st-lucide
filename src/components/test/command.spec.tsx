import { newE2EPage } from '@stencil/core/testing';

describe('icon-command', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-command></icon-command>');

    const element = await page.find('icon-command');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-command stroke="blue"></icon-command>');

    const element = await page.find('icon-command');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-command > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-command stroke-width="2"></icon-command>');

    const element = await page.find('icon-command');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-command > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
