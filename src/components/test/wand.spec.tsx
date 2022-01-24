import { newSpecPage } from '@stencil/core/testing';
import { IconWand } from '../wand';
import { createElement, Wand }  from 'lucide';

describe('icon-wand', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWand],
      html: `<icon-wand></icon-wand>`,
    });

    const svg = createElement(Wand);

    expect(page.root).toEqualHtml(`
      <icon-wand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wand>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWand],
      html: `<icon-wand stroke="blue"></icon-wand>`,
    });

    const svg = createElement(Wand);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wand>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWand],
      html: `<icon-wand stroke-width="2"></icon-wand>`,
    });

    const svg = createElement(Wand);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wand>
    `);
  });
});
