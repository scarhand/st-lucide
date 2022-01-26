import { newSpecPage } from '@stencil/core/testing';
import { IconServerCrash } from '../server-crash';
import { createElement, ServerCrash }  from 'lucide';

describe('icon-server-crash', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconServerCrash],
      html: `<icon-server-crash></icon-server-crash>`,
    });

    const svg = createElement(ServerCrash);

    expect(page.root).toEqualHtml(`
      <icon-server-crash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-server-crash>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconServerCrash],
      html: `<icon-server-crash stroke="blue"></icon-server-crash>`,
    });

    const svg = createElement(ServerCrash);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-server-crash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-server-crash>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconServerCrash],
      html: `<icon-server-crash stroke-width="2"></icon-server-crash>`,
    });

    const svg = createElement(ServerCrash);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-server-crash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-server-crash>
    `);
  });
});
