import { newSpecPage } from '@stencil/core/testing';
import { IconServer } from '../server';
import { createElement, Server }  from 'lucide';

describe('icon-server', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconServer],
      html: `<icon-server></icon-server>`,
    });

    const svg = createElement(Server);

    expect(page.root).toEqualHtml(`
      <icon-server class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-server>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconServer],
      html: `<icon-server stroke="blue"></icon-server>`,
    });

    const svg = createElement(Server);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-server class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-server>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconServer],
      html: `<icon-server stroke-width="2"></icon-server>`,
    });

    const svg = createElement(Server);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-server class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-server>
    `);
  });
});
