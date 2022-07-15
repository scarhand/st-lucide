import { newSpecPage } from '@stencil/core/testing';
import { IconFolderClock } from '../folder-clock';
import { createElement, FolderClock }  from 'lucide';

describe('icon-folder-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderClock],
      html: `<icon-folder-clock></icon-folder-clock>`,
    });

    const svg = createElement(FolderClock);

    expect(page.root).toEqualHtml(`
      <icon-folder-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-clock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderClock],
      html: `<icon-folder-clock stroke="blue"></icon-folder-clock>`,
    });

    const svg = createElement(FolderClock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-clock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderClock],
      html: `<icon-folder-clock stroke-width="2"></icon-folder-clock>`,
    });

    const svg = createElement(FolderClock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-clock>
    `);
  });
});
