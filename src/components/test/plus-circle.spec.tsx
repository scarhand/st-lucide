import { newSpecPage } from '@stencil/core/testing';
import { IconPlusCircle } from '../plus-circle';
import { createElement, PlusCircle }  from 'lucide';

describe('icon-plus-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPlusCircle],
      html: `<icon-plus-circle></icon-plus-circle>`,
    });

    const svg = createElement(PlusCircle);

    expect(page.root).toEqualHtml(`
      <icon-plus-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-plus-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlusCircle],
      html: `<icon-plus-circle stroke="blue"></icon-plus-circle>`,
    });

    const svg = createElement(PlusCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-plus-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-plus-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlusCircle],
      html: `<icon-plus-circle stroke-width="2"></icon-plus-circle>`,
    });

    const svg = createElement(PlusCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-plus-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-plus-circle>
    `);
  });
});
