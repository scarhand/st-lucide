import { newSpecPage } from '@stencil/core/testing';
import { IconBellOff } from '../bell-off';
import { createElement, BellOff }  from 'lucide';

describe('icon-bell-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBellOff],
      html: `<icon-bell-off></icon-bell-off>`,
    });

    const svg = createElement(BellOff);

    expect(page.root).toEqualHtml(`
      <icon-bell-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bell-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBellOff],
      html: `<icon-bell-off stroke="blue"></icon-bell-off>`,
    });

    const svg = createElement(BellOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bell-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bell-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBellOff],
      html: `<icon-bell-off stroke-width="2"></icon-bell-off>`,
    });

    const svg = createElement(BellOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bell-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bell-off>
    `);
  });
});
