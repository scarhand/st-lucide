import { newSpecPage } from '@stencil/core/testing';
import { IconUnlink2 } from '../unlink-2';
import { createElement, Unlink2 }  from 'lucide';

describe('icon-unlink-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUnlink2],
      html: `<icon-unlink-2></icon-unlink-2>`,
    });

    const svg = createElement(Unlink2);

    expect(page.root).toEqualHtml(`
      <icon-unlink-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-unlink-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUnlink2],
      html: `<icon-unlink-2 stroke="blue"></icon-unlink-2>`,
    });

    const svg = createElement(Unlink2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-unlink-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-unlink-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUnlink2],
      html: `<icon-unlink-2 stroke-width="2"></icon-unlink-2>`,
    });

    const svg = createElement(Unlink2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-unlink-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-unlink-2>
    `);
  });
});
