import { newSpecPage } from '@stencil/core/testing';
import { IconLibrary } from '../library';
import { createElement, Library }  from 'lucide';

describe('icon-library', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLibrary],
      html: `<icon-library></icon-library>`,
    });

    const svg = createElement(Library);

    expect(page.root).toEqualHtml(`
      <icon-library class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-library>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLibrary],
      html: `<icon-library stroke="blue"></icon-library>`,
    });

    const svg = createElement(Library);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-library class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-library>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLibrary],
      html: `<icon-library stroke-width="2"></icon-library>`,
    });

    const svg = createElement(Library);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-library class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-library>
    `);
  });
});
