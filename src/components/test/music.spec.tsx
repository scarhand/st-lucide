import { newSpecPage } from '@stencil/core/testing';
import { IconMusic } from '../music';
import { createElement, Music }  from 'lucide';

describe('icon-music', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMusic],
      html: `<icon-music></icon-music>`,
    });

    const svg = createElement(Music);

    expect(page.root).toEqualHtml(`
      <icon-music class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-music>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMusic],
      html: `<icon-music stroke="blue"></icon-music>`,
    });

    const svg = createElement(Music);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-music class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-music>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMusic],
      html: `<icon-music stroke-width="2"></icon-music>`,
    });

    const svg = createElement(Music);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-music class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-music>
    `);
  });
});
