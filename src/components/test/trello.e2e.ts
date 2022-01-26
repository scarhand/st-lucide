import { newE2EPage } from '@stencil/core/testing';

describe('icon-trello', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trello></icon-trello>');

    const element = await page.find('icon-trello');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trello stroke="blue"></icon-trello>');

    const element = await page.find('icon-trello');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-trello > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trello stroke-width="2"></icon-trello>');

    const element = await page.find('icon-trello');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-trello > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
