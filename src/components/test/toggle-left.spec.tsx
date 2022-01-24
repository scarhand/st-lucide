import { newSpecPage } from '@stencil/core/testing';
import { IconToggleLeft } from '../toggle-left';
import { createElement, ToggleLeft }  from 'lucide';

describe('icon-toggle-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconToggleLeft],
      html: `<icon-toggle-left></icon-toggle-left>`,
    });

    const svg = createElement(ToggleLeft);

    expect(page.root).toEqualHtml(`
      <icon-toggle-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-toggle-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconToggleLeft],
      html: `<icon-toggle-left stroke="blue"></icon-toggle-left>`,
    });

    const svg = createElement(ToggleLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-toggle-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-toggle-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconToggleLeft],
      html: `<icon-toggle-left stroke-width="2"></icon-toggle-left>`,
    });

    const svg = createElement(ToggleLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-toggle-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-toggle-left>
    `);
  });
});
