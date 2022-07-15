import { newSpecPage } from '@stencil/core/testing';
import { IconWand2 } from '../wand-2';
import { createElement, Wand2 }  from 'lucide';

describe('icon-wand-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWand2],
      html: `<icon-wand-2></icon-wand-2>`,
    });

    const svg = createElement(Wand2);

    expect(page.root).toEqualHtml(`
      <icon-wand-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wand-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWand2],
      html: `<icon-wand-2 stroke="blue"></icon-wand-2>`,
    });

    const svg = createElement(Wand2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wand-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wand-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWand2],
      html: `<icon-wand-2 stroke-width="2"></icon-wand-2>`,
    });

    const svg = createElement(Wand2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wand-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wand-2>
    `);
  });
});
