import { newSpecPage } from '@stencil/core/testing';
import { IconStrikethrough } from '../strikethrough';
import { createElement, Strikethrough }  from 'lucide';

describe('icon-strikethrough', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStrikethrough],
      html: `<icon-strikethrough></icon-strikethrough>`,
    });

    const svg = createElement(Strikethrough);

    expect(page.root).toEqualHtml(`
      <icon-strikethrough class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-strikethrough>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStrikethrough],
      html: `<icon-strikethrough stroke="blue"></icon-strikethrough>`,
    });

    const svg = createElement(Strikethrough);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-strikethrough class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-strikethrough>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStrikethrough],
      html: `<icon-strikethrough stroke-width="2"></icon-strikethrough>`,
    });

    const svg = createElement(Strikethrough);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-strikethrough class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-strikethrough>
    `);
  });
});
