import { newSpecPage } from '@stencil/core/testing';
import { IconFolderInput } from '../folder-input';
import { createElement, FolderInput }  from 'lucide';

describe('icon-folder-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderInput],
      html: `<icon-folder-input></icon-folder-input>`,
    });

    const svg = createElement(FolderInput);

    expect(page.root).toEqualHtml(`
      <icon-folder-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-input>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderInput],
      html: `<icon-folder-input stroke="blue"></icon-folder-input>`,
    });

    const svg = createElement(FolderInput);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-input>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderInput],
      html: `<icon-folder-input stroke-width="2"></icon-folder-input>`,
    });

    const svg = createElement(FolderInput);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-input>
    `);
  });
});
