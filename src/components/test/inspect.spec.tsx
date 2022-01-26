import { newSpecPage } from '@stencil/core/testing';
import { IconInspect } from '../inspect';
import { createElement, Inspect }  from 'lucide';

describe('icon-inspect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconInspect],
      html: `<icon-inspect></icon-inspect>`,
    });

    const svg = createElement(Inspect);

    expect(page.root).toEqualHtml(`
      <icon-inspect class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-inspect>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInspect],
      html: `<icon-inspect stroke="blue"></icon-inspect>`,
    });

    const svg = createElement(Inspect);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-inspect class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-inspect>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInspect],
      html: `<icon-inspect stroke-width="2"></icon-inspect>`,
    });

    const svg = createElement(Inspect);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-inspect class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-inspect>
    `);
  });
});
