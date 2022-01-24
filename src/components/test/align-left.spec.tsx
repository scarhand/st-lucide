import { newSpecPage } from '@stencil/core/testing';
import { IconAlignLeft } from '../align-left';
import { createElement, AlignLeft }  from 'lucide';

describe('icon-align-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignLeft],
      html: `<icon-align-left></icon-align-left>`,
    });

    const svg = createElement(AlignLeft);

    expect(page.root).toEqualHtml(`
      <icon-align-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignLeft],
      html: `<icon-align-left stroke="blue"></icon-align-left>`,
    });

    const svg = createElement(AlignLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignLeft],
      html: `<icon-align-left stroke-width="2"></icon-align-left>`,
    });

    const svg = createElement(AlignLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-left>
    `);
  });
});
