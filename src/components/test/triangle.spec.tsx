import { newSpecPage } from '@stencil/core/testing';
import { IconTriangle } from '../triangle';
import { createElement, Triangle }  from 'lucide';

describe('icon-triangle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTriangle],
      html: `<icon-triangle></icon-triangle>`,
    });

    const svg = createElement(Triangle);

    expect(page.root).toEqualHtml(`
      <icon-triangle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-triangle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTriangle],
      html: `<icon-triangle stroke="blue"></icon-triangle>`,
    });

    const svg = createElement(Triangle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-triangle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-triangle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTriangle],
      html: `<icon-triangle stroke-width="2"></icon-triangle>`,
    });

    const svg = createElement(Triangle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-triangle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-triangle>
    `);
  });
});
