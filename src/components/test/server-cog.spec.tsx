import { newSpecPage } from '@stencil/core/testing';
import { IconServerCog } from '../server-cog';
import { createElement, ServerCog }  from 'lucide';

describe('icon-server-cog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconServerCog],
      html: `<icon-server-cog></icon-server-cog>`,
    });

    const svg = createElement(ServerCog);

    expect(page.root).toEqualHtml(`
      <icon-server-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-server-cog>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconServerCog],
      html: `<icon-server-cog stroke="blue"></icon-server-cog>`,
    });

    const svg = createElement(ServerCog);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-server-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-server-cog>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconServerCog],
      html: `<icon-server-cog stroke-width="2"></icon-server-cog>`,
    });

    const svg = createElement(ServerCog);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-server-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-server-cog>
    `);
  });
});
