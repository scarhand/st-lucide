import { newSpecPage } from '@stencil/core/testing';
import { IconRefreshCcw } from '../refresh-ccw';
import { createElement, RefreshCcw }  from 'lucide';

describe('icon-refresh-ccw', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRefreshCcw],
      html: `<icon-refresh-ccw></icon-refresh-ccw>`,
    });

    const svg = createElement(RefreshCcw);

    expect(page.root).toEqualHtml(`
      <icon-refresh-ccw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-refresh-ccw>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRefreshCcw],
      html: `<icon-refresh-ccw stroke="blue"></icon-refresh-ccw>`,
    });

    const svg = createElement(RefreshCcw);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-refresh-ccw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-refresh-ccw>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRefreshCcw],
      html: `<icon-refresh-ccw stroke-width="2"></icon-refresh-ccw>`,
    });

    const svg = createElement(RefreshCcw);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-refresh-ccw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-refresh-ccw>
    `);
  });
});
