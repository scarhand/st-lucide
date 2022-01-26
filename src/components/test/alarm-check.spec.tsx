import { newSpecPage } from '@stencil/core/testing';
import { IconAlarmCheck } from '../alarm-check';
import { createElement, AlarmCheck }  from 'lucide';

describe('icon-alarm-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlarmCheck],
      html: `<icon-alarm-check></icon-alarm-check>`,
    });

    const svg = createElement(AlarmCheck);

    expect(page.root).toEqualHtml(`
      <icon-alarm-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-alarm-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmCheck],
      html: `<icon-alarm-check stroke="blue"></icon-alarm-check>`,
    });

    const svg = createElement(AlarmCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-alarm-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-alarm-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmCheck],
      html: `<icon-alarm-check stroke-width="2"></icon-alarm-check>`,
    });

    const svg = createElement(AlarmCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-alarm-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-alarm-check>
    `);
  });
});
