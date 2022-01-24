import { newSpecPage } from '@stencil/core/testing';
import { IconAlarmClock } from '../alarm-clock';
import { createElement, AlarmClock }  from 'lucide';

describe('icon-alarm-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlarmClock],
      html: `<icon-alarm-clock></icon-alarm-clock>`,
    });

    const svg = createElement(AlarmClock);

    expect(page.root).toEqualHtml(`
      <icon-alarm-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-alarm-clock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmClock],
      html: `<icon-alarm-clock stroke="blue"></icon-alarm-clock>`,
    });

    const svg = createElement(AlarmClock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-alarm-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-alarm-clock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmClock],
      html: `<icon-alarm-clock stroke-width="2"></icon-alarm-clock>`,
    });

    const svg = createElement(AlarmClock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-alarm-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-alarm-clock>
    `);
  });
});
