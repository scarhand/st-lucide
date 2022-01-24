import { newSpecPage } from '@stencil/core/testing';
import { IconBell } from '../bell';
import { createElement, Bell }  from 'lucide';

describe('icon-bell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBell],
      html: `<icon-bell></icon-bell>`,
    });

    const svg = createElement(Bell);

    expect(page.root).toEqualHtml(`
      <icon-bell class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bell>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBell],
      html: `<icon-bell stroke="blue"></icon-bell>`,
    });

    const svg = createElement(Bell);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bell class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bell>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBell],
      html: `<icon-bell stroke-width="2"></icon-bell>`,
    });

    const svg = createElement(Bell);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bell class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bell>
    `);
  });
});
