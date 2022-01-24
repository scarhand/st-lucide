import { newSpecPage } from '@stencil/core/testing';
import { IconFilePlus } from '../file-plus';
import { createElement, FilePlus }  from 'lucide';

describe('icon-file-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFilePlus],
      html: `<icon-file-plus></icon-file-plus>`,
    });

    const svg = createElement(FilePlus);

    expect(page.root).toEqualHtml(`
      <icon-file-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilePlus],
      html: `<icon-file-plus stroke="blue"></icon-file-plus>`,
    });

    const svg = createElement(FilePlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilePlus],
      html: `<icon-file-plus stroke-width="2"></icon-file-plus>`,
    });

    const svg = createElement(FilePlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-plus>
    `);
  });
});
