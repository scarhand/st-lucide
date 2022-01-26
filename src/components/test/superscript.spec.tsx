import { newSpecPage } from '@stencil/core/testing';
import { IconSuperscript } from '../superscript';
import { createElement, Superscript }  from 'lucide';

describe('icon-superscript', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSuperscript],
      html: `<icon-superscript></icon-superscript>`,
    });

    const svg = createElement(Superscript);

    expect(page.root).toEqualHtml(`
      <icon-superscript class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-superscript>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSuperscript],
      html: `<icon-superscript stroke="blue"></icon-superscript>`,
    });

    const svg = createElement(Superscript);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-superscript class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-superscript>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSuperscript],
      html: `<icon-superscript stroke-width="2"></icon-superscript>`,
    });

    const svg = createElement(Superscript);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-superscript class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-superscript>
    `);
  });
});
