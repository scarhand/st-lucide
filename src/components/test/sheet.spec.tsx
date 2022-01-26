import { newSpecPage } from '@stencil/core/testing';
import { IconSheet } from '../sheet';
import { createElement, Sheet }  from 'lucide';

describe('icon-sheet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSheet],
      html: `<icon-sheet></icon-sheet>`,
    });

    const svg = createElement(Sheet);

    expect(page.root).toEqualHtml(`
      <icon-sheet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sheet>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSheet],
      html: `<icon-sheet stroke="blue"></icon-sheet>`,
    });

    const svg = createElement(Sheet);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sheet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sheet>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSheet],
      html: `<icon-sheet stroke-width="2"></icon-sheet>`,
    });

    const svg = createElement(Sheet);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sheet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sheet>
    `);
  });
});
