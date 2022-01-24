import { newSpecPage } from '@stencil/core/testing';
import { IconRussianRuble } from '../russian-ruble';
import { createElement, RussianRuble }  from 'lucide';

describe('icon-russian-ruble', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRussianRuble],
      html: `<icon-russian-ruble></icon-russian-ruble>`,
    });

    const svg = createElement(RussianRuble);

    expect(page.root).toEqualHtml(`
      <icon-russian-ruble class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-russian-ruble>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRussianRuble],
      html: `<icon-russian-ruble stroke="blue"></icon-russian-ruble>`,
    });

    const svg = createElement(RussianRuble);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-russian-ruble class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-russian-ruble>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRussianRuble],
      html: `<icon-russian-ruble stroke-width="2"></icon-russian-ruble>`,
    });

    const svg = createElement(RussianRuble);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-russian-ruble class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-russian-ruble>
    `);
  });
});
