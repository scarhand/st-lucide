import { newSpecPage } from '@stencil/core/testing';
import { IconFolders } from '../folders';
import { createElement, Folders }  from 'lucide';

describe('icon-folders', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolders],
      html: `<icon-folders></icon-folders>`,
    });

    const svg = createElement(Folders);

    expect(page.root).toEqualHtml(`
      <icon-folders class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folders>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolders],
      html: `<icon-folders stroke="blue"></icon-folders>`,
    });

    const svg = createElement(Folders);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folders class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folders>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolders],
      html: `<icon-folders stroke-width="2"></icon-folders>`,
    });

    const svg = createElement(Folders);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folders class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folders>
    `);
  });
});
