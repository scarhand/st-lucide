import { newSpecPage } from '@stencil/core/testing';
import { IconServerOff } from '../server-off';
import { createElement, ServerOff }  from 'lucide';

describe('icon-server-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconServerOff],
      html: `<icon-server-off></icon-server-off>`,
    });

    const svg = createElement(ServerOff);

    expect(page.root).toEqualHtml(`
      <icon-server-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-server-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconServerOff],
      html: `<icon-server-off stroke="blue"></icon-server-off>`,
    });

    const svg = createElement(ServerOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-server-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-server-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconServerOff],
      html: `<icon-server-off stroke-width="2"></icon-server-off>`,
    });

    const svg = createElement(ServerOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-server-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-server-off>
    `);
  });
});
