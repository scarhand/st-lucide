import { newSpecPage } from '@stencil/core/testing';
import { IconPointer } from '../pointer';
import { createElement, Pointer }  from 'lucide';

describe('icon-pointer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPointer],
      html: `<icon-pointer></icon-pointer>`,
    });

    const svg = createElement(Pointer);

    expect(page.root).toEqualHtml(`
      <icon-pointer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pointer>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPointer],
      html: `<icon-pointer stroke="blue"></icon-pointer>`,
    });

    const svg = createElement(Pointer);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pointer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pointer>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPointer],
      html: `<icon-pointer stroke-width="2"></icon-pointer>`,
    });

    const svg = createElement(Pointer);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pointer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pointer>
    `);
  });
});
