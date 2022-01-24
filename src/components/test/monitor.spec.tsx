import { newSpecPage } from '@stencil/core/testing';
import { IconMonitor } from '../monitor';
import { createElement, Monitor }  from 'lucide';

describe('icon-monitor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMonitor],
      html: `<icon-monitor></icon-monitor>`,
    });

    const svg = createElement(Monitor);

    expect(page.root).toEqualHtml(`
      <icon-monitor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-monitor>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMonitor],
      html: `<icon-monitor stroke="blue"></icon-monitor>`,
    });

    const svg = createElement(Monitor);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-monitor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-monitor>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMonitor],
      html: `<icon-monitor stroke-width="2"></icon-monitor>`,
    });

    const svg = createElement(Monitor);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-monitor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-monitor>
    `);
  });
});
