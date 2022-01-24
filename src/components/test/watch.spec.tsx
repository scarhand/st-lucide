import { newSpecPage } from '@stencil/core/testing';
import { IconWatch } from '../watch';
import { createElement, Watch }  from 'lucide';

describe('icon-watch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWatch],
      html: `<icon-watch></icon-watch>`,
    });

    const svg = createElement(Watch);

    expect(page.root).toEqualHtml(`
      <icon-watch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-watch>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWatch],
      html: `<icon-watch stroke="blue"></icon-watch>`,
    });

    const svg = createElement(Watch);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-watch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-watch>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWatch],
      html: `<icon-watch stroke-width="2"></icon-watch>`,
    });

    const svg = createElement(Watch);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-watch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-watch>
    `);
  });
});
