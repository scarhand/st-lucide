import { newSpecPage } from '@stencil/core/testing';
import { IconAlertTriangle } from '../alert-triangle';
import { createElement, AlertTriangle }  from 'lucide';

describe('icon-alert-triangle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlertTriangle],
      html: `<icon-alert-triangle></icon-alert-triangle>`,
    });

    const svg = createElement(AlertTriangle);

    expect(page.root).toEqualHtml(`
      <icon-alert-triangle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-alert-triangle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlertTriangle],
      html: `<icon-alert-triangle stroke="blue"></icon-alert-triangle>`,
    });

    const svg = createElement(AlertTriangle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-alert-triangle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-alert-triangle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlertTriangle],
      html: `<icon-alert-triangle stroke-width="2"></icon-alert-triangle>`,
    });

    const svg = createElement(AlertTriangle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-alert-triangle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-alert-triangle>
    `);
  });
});
