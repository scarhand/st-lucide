import { newSpecPage } from '@stencil/core/testing';
import { IconFileJson } from '../file-json';
import { createElement, FileJson }  from 'lucide';

describe('icon-file-json', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileJson],
      html: `<icon-file-json></icon-file-json>`,
    });

    const svg = createElement(FileJson);

    expect(page.root).toEqualHtml(`
      <icon-file-json class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-json>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileJson],
      html: `<icon-file-json stroke="blue"></icon-file-json>`,
    });

    const svg = createElement(FileJson);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-json class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-json>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileJson],
      html: `<icon-file-json stroke-width="2"></icon-file-json>`,
    });

    const svg = createElement(FileJson);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-json class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-json>
    `);
  });
});
