import { newSpecPage } from '@stencil/core/testing';
import { IconTornado } from '../tornado';
import { createElement, Tornado }  from 'lucide';

describe('icon-tornado', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTornado],
      html: `<icon-tornado></icon-tornado>`,
    });

    const svg = createElement(Tornado);

    expect(page.root).toEqualHtml(`
      <icon-tornado class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tornado>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTornado],
      html: `<icon-tornado stroke="blue"></icon-tornado>`,
    });

    const svg = createElement(Tornado);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tornado class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tornado>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTornado],
      html: `<icon-tornado stroke-width="2"></icon-tornado>`,
    });

    const svg = createElement(Tornado);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tornado class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tornado>
    `);
  });
});
