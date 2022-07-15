import { newSpecPage } from '@stencil/core/testing';
import { IconListMusic } from '../list-music';
import { createElement, ListMusic }  from 'lucide';

describe('icon-list-music', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListMusic],
      html: `<icon-list-music></icon-list-music>`,
    });

    const svg = createElement(ListMusic);

    expect(page.root).toEqualHtml(`
      <icon-list-music class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-music>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListMusic],
      html: `<icon-list-music stroke="blue"></icon-list-music>`,
    });

    const svg = createElement(ListMusic);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-music class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-music>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListMusic],
      html: `<icon-list-music stroke-width="2"></icon-list-music>`,
    });

    const svg = createElement(ListMusic);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-music class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-music>
    `);
  });
});
