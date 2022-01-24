import { newSpecPage } from '@stencil/core/testing';
import { IconItalic } from '../italic';
import { createElement, Italic }  from 'lucide';

describe('icon-italic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconItalic],
      html: `<icon-italic></icon-italic>`,
    });

    const svg = createElement(Italic);

    expect(page.root).toEqualHtml(`
      <icon-italic class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-italic>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconItalic],
      html: `<icon-italic stroke="blue"></icon-italic>`,
    });

    const svg = createElement(Italic);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-italic class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-italic>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconItalic],
      html: `<icon-italic stroke-width="2"></icon-italic>`,
    });

    const svg = createElement(Italic);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-italic class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-italic>
    `);
  });
});
