import { newSpecPage } from '@stencil/core/testing';
import { IconSunMoon } from '../sun-moon';
import { createElement, SunMoon }  from 'lucide';

describe('icon-sun-moon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSunMoon],
      html: `<icon-sun-moon></icon-sun-moon>`,
    });

    const svg = createElement(SunMoon);

    expect(page.root).toEqualHtml(`
      <icon-sun-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sun-moon>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunMoon],
      html: `<icon-sun-moon stroke="blue"></icon-sun-moon>`,
    });

    const svg = createElement(SunMoon);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sun-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sun-moon>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunMoon],
      html: `<icon-sun-moon stroke-width="2"></icon-sun-moon>`,
    });

    const svg = createElement(SunMoon);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sun-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sun-moon>
    `);
  });
});
