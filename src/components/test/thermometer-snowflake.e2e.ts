import { newE2EPage } from '@stencil/core/testing';

describe('icon-thermometer-snowflake', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thermometer-snowflake></icon-thermometer-snowflake>');

    const element = await page.find('icon-thermometer-snowflake');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thermometer-snowflake stroke="blue"></icon-thermometer-snowflake>');

    const element = await page.find('icon-thermometer-snowflake');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-thermometer-snowflake > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-thermometer-snowflake stroke-width="2"></icon-thermometer-snowflake>');

    const element = await page.find('icon-thermometer-snowflake');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-thermometer-snowflake > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
