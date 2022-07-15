import { newSpecPage } from '@stencil/core/testing';
import { IconFolderOutput } from '../folder-output';
import { createElement, FolderOutput }  from 'lucide';

describe('icon-folder-output', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderOutput],
      html: `<icon-folder-output></icon-folder-output>`,
    });

    const svg = createElement(FolderOutput);

    expect(page.root).toEqualHtml(`
      <icon-folder-output class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-output>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderOutput],
      html: `<icon-folder-output stroke="blue"></icon-folder-output>`,
    });

    const svg = createElement(FolderOutput);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-output class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-output>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderOutput],
      html: `<icon-folder-output stroke-width="2"></icon-folder-output>`,
    });

    const svg = createElement(FolderOutput);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-output class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-output>
    `);
  });
});
