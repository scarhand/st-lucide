import { newE2EPage } from '@stencil/core/testing';

describe('icon-hard-drive', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hard-drive></icon-hard-drive>');

    const element = await page.find('icon-hard-drive');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hard-drive stroke="blue"></icon-hard-drive>');

    const element = await page.find('icon-hard-drive');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-hard-drive > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hard-drive stroke-width="2"></icon-hard-drive>');

    const element = await page.find('icon-hard-drive');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-hard-drive > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
