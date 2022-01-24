import { newSpecPage } from '@stencil/core/testing';
import { IconLayout } from '../layout';
import { createElement, Layout }  from 'lucide';

describe('icon-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLayout],
      html: `<icon-layout></icon-layout>`,
    });

    const svg = createElement(Layout);

    expect(page.root).toEqualHtml(`
      <icon-layout class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-layout>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayout],
      html: `<icon-layout stroke="blue"></icon-layout>`,
    });

    const svg = createElement(Layout);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-layout class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-layout>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayout],
      html: `<icon-layout stroke-width="2"></icon-layout>`,
    });

    const svg = createElement(Layout);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-layout class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-layout>
    `);
  });
});
