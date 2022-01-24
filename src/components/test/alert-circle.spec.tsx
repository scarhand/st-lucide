import { newSpecPage } from '@stencil/core/testing';
import { IconAlertCircle } from '../alert-circle';
import { createElement, AlertCircle }  from 'lucide';

describe('icon-alert-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlertCircle],
      html: `<icon-alert-circle></icon-alert-circle>`,
    });

    const svg = createElement(AlertCircle);

    expect(page.root).toEqualHtml(`
      <icon-alert-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-alert-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlertCircle],
      html: `<icon-alert-circle stroke="blue"></icon-alert-circle>`,
    });

    const svg = createElement(AlertCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-alert-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-alert-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlertCircle],
      html: `<icon-alert-circle stroke-width="2"></icon-alert-circle>`,
    });

    const svg = createElement(AlertCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-alert-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-alert-circle>
    `);
  });
});
