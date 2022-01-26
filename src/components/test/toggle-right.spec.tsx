import { newSpecPage } from '@stencil/core/testing';
import { IconToggleRight } from '../toggle-right';
import { createElement, ToggleRight }  from 'lucide';

describe('icon-toggle-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconToggleRight],
      html: `<icon-toggle-right></icon-toggle-right>`,
    });

    const svg = createElement(ToggleRight);

    expect(page.root).toEqualHtml(`
      <icon-toggle-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-toggle-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconToggleRight],
      html: `<icon-toggle-right stroke="blue"></icon-toggle-right>`,
    });

    const svg = createElement(ToggleRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-toggle-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-toggle-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconToggleRight],
      html: `<icon-toggle-right stroke-width="2"></icon-toggle-right>`,
    });

    const svg = createElement(ToggleRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-toggle-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-toggle-right>
    `);
  });
});
