import { newSpecPage } from '@stencil/core/testing';
import { IconCodepen } from '../codepen';
import { createElement, Codepen }  from 'lucide';

describe('icon-codepen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCodepen],
      html: `<icon-codepen></icon-codepen>`,
    });

    const svg = createElement(Codepen);

    expect(page.root).toEqualHtml(`
      <icon-codepen class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-codepen>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCodepen],
      html: `<icon-codepen stroke="blue"></icon-codepen>`,
    });

    const svg = createElement(Codepen);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-codepen class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-codepen>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCodepen],
      html: `<icon-codepen stroke-width="2"></icon-codepen>`,
    });

    const svg = createElement(Codepen);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-codepen class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-codepen>
    `);
  });
});
