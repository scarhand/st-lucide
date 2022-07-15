import { newE2EPage } from '@stencil/core/testing';

describe('icon-mails', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mails></icon-mails>');

    const element = await page.find('icon-mails');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mails stroke="blue"></icon-mails>');

    const element = await page.find('icon-mails');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mails > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mails stroke-width="2"></icon-mails>');

    const element = await page.find('icon-mails');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mails > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
