import { newSpecPage } from '@stencil/core/testing';
import { IconMonitorSpeaker } from '../monitor-speaker';
import { createElement, MonitorSpeaker }  from 'lucide';

describe('icon-monitor-speaker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMonitorSpeaker],
      html: `<icon-monitor-speaker></icon-monitor-speaker>`,
    });

    const svg = createElement(MonitorSpeaker);

    expect(page.root).toEqualHtml(`
      <icon-monitor-speaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-monitor-speaker>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMonitorSpeaker],
      html: `<icon-monitor-speaker stroke="blue"></icon-monitor-speaker>`,
    });

    const svg = createElement(MonitorSpeaker);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-monitor-speaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-monitor-speaker>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMonitorSpeaker],
      html: `<icon-monitor-speaker stroke-width="2"></icon-monitor-speaker>`,
    });

    const svg = createElement(MonitorSpeaker);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-monitor-speaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-monitor-speaker>
    `);
  });
});
