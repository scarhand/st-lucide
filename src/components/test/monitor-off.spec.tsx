import { newSpecPage } from '@stencil/core/testing';
import { IconMonitorOff } from '../monitor-off';
import { createElement, MonitorOff }  from 'lucide';

describe('icon-monitor-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMonitorOff],
      html: `<icon-monitor-off></icon-monitor-off>`,
    });

    const svg = createElement(MonitorOff);

    expect(page.root).toEqualHtml(`
      <icon-monitor-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-monitor-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMonitorOff],
      html: `<icon-monitor-off stroke="blue"></icon-monitor-off>`,
    });

    const svg = createElement(MonitorOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-monitor-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-monitor-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMonitorOff],
      html: `<icon-monitor-off stroke-width="2"></icon-monitor-off>`,
    });

    const svg = createElement(MonitorOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-monitor-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-monitor-off>
    `);
  });
});
