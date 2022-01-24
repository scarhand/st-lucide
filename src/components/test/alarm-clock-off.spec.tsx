import { newSpecPage } from '@stencil/core/testing';
import { IconAlarmClockOff } from '../alarm-clock-off';
import { createElement, AlarmClockOff }  from 'lucide';

describe('icon-alarm-clock-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlarmClockOff],
      html: `<icon-alarm-clock-off></icon-alarm-clock-off>`,
    });

    const svg = createElement(AlarmClockOff);

    expect(page.root).toEqualHtml(`
      <icon-alarm-clock-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-alarm-clock-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmClockOff],
      html: `<icon-alarm-clock-off stroke="blue"></icon-alarm-clock-off>`,
    });

    const svg = createElement(AlarmClockOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-alarm-clock-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-alarm-clock-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmClockOff],
      html: `<icon-alarm-clock-off stroke-width="2"></icon-alarm-clock-off>`,
    });

    const svg = createElement(AlarmClockOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-alarm-clock-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-alarm-clock-off>
    `);
  });
});
