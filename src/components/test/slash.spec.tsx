import { newSpecPage } from '@stencil/core/testing';
import { IconSlash } from '../slash';
import { createElement, Slash }  from 'lucide';

describe('icon-slash', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSlash],
      html: `<icon-slash></icon-slash>`,
    });

    const svg = createElement(Slash);

    expect(page.root).toEqualHtml(`
      <icon-slash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-slash>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSlash],
      html: `<icon-slash stroke="blue"></icon-slash>`,
    });

    const svg = createElement(Slash);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-slash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-slash>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSlash],
      html: `<icon-slash stroke-width="2"></icon-slash>`,
    });

    const svg = createElement(Slash);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-slash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-slash>
    `);
  });
});
