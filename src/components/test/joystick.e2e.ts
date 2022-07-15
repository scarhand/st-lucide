import { newE2EPage } from '@stencil/core/testing';

describe('icon-joystick', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-joystick></icon-joystick>');

    const element = await page.find('icon-joystick');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-joystick stroke="blue"></icon-joystick>');

    const element = await page.find('icon-joystick');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-joystick > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-joystick stroke-width="2"></icon-joystick>');

    const element = await page.find('icon-joystick');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-joystick > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
