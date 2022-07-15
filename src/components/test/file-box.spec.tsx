import { newSpecPage } from '@stencil/core/testing';
import { IconFileBox } from '../file-box';
import { createElement, FileBox }  from 'lucide';

describe('icon-file-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileBox],
      html: `<icon-file-box></icon-file-box>`,
    });

    const svg = createElement(FileBox);

    expect(page.root).toEqualHtml(`
      <icon-file-box class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-box>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBox],
      html: `<icon-file-box stroke="blue"></icon-file-box>`,
    });

    const svg = createElement(FileBox);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-box class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-box>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBox],
      html: `<icon-file-box stroke-width="2"></icon-file-box>`,
    });

    const svg = createElement(FileBox);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-box class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-box>
    `);
  });
});
