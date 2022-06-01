import { newSpecPage } from '@stencil/core/testing';
import { IconSunMedium } from '../sun-medium';
import { createElement, SunMedium }  from 'lucide';

describe('icon-sun-medium', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSunMedium],
      html: `<icon-sun-medium></icon-sun-medium>`,
    });

    const svg = createElement(SunMedium);

    expect(page.root).toEqualHtml(`
      <icon-sun-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sun-medium>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunMedium],
      html: `<icon-sun-medium stroke="blue"></icon-sun-medium>`,
    });

    const svg = createElement(SunMedium);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sun-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sun-medium>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunMedium],
      html: `<icon-sun-medium stroke-width="2"></icon-sun-medium>`,
    });

    const svg = createElement(SunMedium);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sun-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sun-medium>
    `);
  });
});
