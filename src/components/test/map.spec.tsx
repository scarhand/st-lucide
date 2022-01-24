import { newSpecPage } from '@stencil/core/testing';
import { IconMap } from '../map';
import { createElement, Map }  from 'lucide';

describe('icon-map', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMap],
      html: `<icon-map></icon-map>`,
    });

    const svg = createElement(Map);

    expect(page.root).toEqualHtml(`
      <icon-map class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-map>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMap],
      html: `<icon-map stroke="blue"></icon-map>`,
    });

    const svg = createElement(Map);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-map class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-map>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMap],
      html: `<icon-map stroke-width="2"></icon-map>`,
    });

    const svg = createElement(Map);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-map class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-map>
    `);
  });
});
