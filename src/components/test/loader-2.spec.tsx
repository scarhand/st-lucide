import { newSpecPage } from '@stencil/core/testing';
import { IconLoader2 } from '../loader-2';
import { createElement, Loader2 }  from 'lucide';

describe('icon-loader-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLoader2],
      html: `<icon-loader-2></icon-loader-2>`,
    });

    const svg = createElement(Loader2);

    expect(page.root).toEqualHtml(`
      <icon-loader-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-loader-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLoader2],
      html: `<icon-loader-2 stroke="blue"></icon-loader-2>`,
    });

    const svg = createElement(Loader2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-loader-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-loader-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLoader2],
      html: `<icon-loader-2 stroke-width="2"></icon-loader-2>`,
    });

    const svg = createElement(Loader2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-loader-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-loader-2>
    `);
  });
});
