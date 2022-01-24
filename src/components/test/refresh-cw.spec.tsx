import { newSpecPage } from '@stencil/core/testing';
import { IconRefreshCw } from '../refresh-cw';
import { createElement, RefreshCw }  from 'lucide';

describe('icon-refresh-cw', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRefreshCw],
      html: `<icon-refresh-cw></icon-refresh-cw>`,
    });

    const svg = createElement(RefreshCw);

    expect(page.root).toEqualHtml(`
      <icon-refresh-cw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-refresh-cw>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRefreshCw],
      html: `<icon-refresh-cw stroke="blue"></icon-refresh-cw>`,
    });

    const svg = createElement(RefreshCw);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-refresh-cw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-refresh-cw>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRefreshCw],
      html: `<icon-refresh-cw stroke-width="2"></icon-refresh-cw>`,
    });

    const svg = createElement(RefreshCw);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-refresh-cw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-refresh-cw>
    `);
  });
});
