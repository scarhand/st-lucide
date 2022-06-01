import { newSpecPage } from '@stencil/core/testing';
import { IconRedo2 } from '../redo-2';
import { createElement, Redo2 }  from 'lucide';

describe('icon-redo-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRedo2],
      html: `<icon-redo-2></icon-redo-2>`,
    });

    const svg = createElement(Redo2);

    expect(page.root).toEqualHtml(`
      <icon-redo-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-redo-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRedo2],
      html: `<icon-redo-2 stroke="blue"></icon-redo-2>`,
    });

    const svg = createElement(Redo2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-redo-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-redo-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRedo2],
      html: `<icon-redo-2 stroke-width="2"></icon-redo-2>`,
    });

    const svg = createElement(Redo2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-redo-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-redo-2>
    `);
  });
});
