import { newSpecPage } from '@stencil/core/testing';
import { IconMaximize2 } from '../maximize-2';
import { createElement, Maximize2 }  from 'lucide';

describe('icon-maximize-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMaximize2],
      html: `<icon-maximize-2></icon-maximize-2>`,
    });

    const svg = createElement(Maximize2);

    expect(page.root).toEqualHtml(`
      <icon-maximize-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-maximize-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMaximize2],
      html: `<icon-maximize-2 stroke="blue"></icon-maximize-2>`,
    });

    const svg = createElement(Maximize2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-maximize-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-maximize-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMaximize2],
      html: `<icon-maximize-2 stroke-width="2"></icon-maximize-2>`,
    });

    const svg = createElement(Maximize2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-maximize-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-maximize-2>
    `);
  });
});
