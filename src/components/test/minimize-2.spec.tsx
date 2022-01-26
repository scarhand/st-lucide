import { newSpecPage } from '@stencil/core/testing';
import { IconMinimize2 } from '../minimize-2';
import { createElement, Minimize2 }  from 'lucide';

describe('icon-minimize-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMinimize2],
      html: `<icon-minimize-2></icon-minimize-2>`,
    });

    const svg = createElement(Minimize2);

    expect(page.root).toEqualHtml(`
      <icon-minimize-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-minimize-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinimize2],
      html: `<icon-minimize-2 stroke="blue"></icon-minimize-2>`,
    });

    const svg = createElement(Minimize2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-minimize-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-minimize-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinimize2],
      html: `<icon-minimize-2 stroke-width="2"></icon-minimize-2>`,
    });

    const svg = createElement(Minimize2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-minimize-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-minimize-2>
    `);
  });
});
