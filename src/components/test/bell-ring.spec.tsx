import { newSpecPage } from '@stencil/core/testing';
import { IconBellRing } from '../bell-ring';
import { createElement, BellRing }  from 'lucide';

describe('icon-bell-ring', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBellRing],
      html: `<icon-bell-ring></icon-bell-ring>`,
    });

    const svg = createElement(BellRing);

    expect(page.root).toEqualHtml(`
      <icon-bell-ring class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bell-ring>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBellRing],
      html: `<icon-bell-ring stroke="blue"></icon-bell-ring>`,
    });

    const svg = createElement(BellRing);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bell-ring class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bell-ring>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBellRing],
      html: `<icon-bell-ring stroke-width="2"></icon-bell-ring>`,
    });

    const svg = createElement(BellRing);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bell-ring class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bell-ring>
    `);
  });
});
