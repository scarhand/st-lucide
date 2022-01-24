import { newSpecPage } from '@stencil/core/testing';
import { IconAlarmPlus } from '../alarm-plus';
import { createElement, AlarmPlus }  from 'lucide';

describe('icon-alarm-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlarmPlus],
      html: `<icon-alarm-plus></icon-alarm-plus>`,
    });

    const svg = createElement(AlarmPlus);

    expect(page.root).toEqualHtml(`
      <icon-alarm-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-alarm-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmPlus],
      html: `<icon-alarm-plus stroke="blue"></icon-alarm-plus>`,
    });

    const svg = createElement(AlarmPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-alarm-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-alarm-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmPlus],
      html: `<icon-alarm-plus stroke-width="2"></icon-alarm-plus>`,
    });

    const svg = createElement(AlarmPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-alarm-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-alarm-plus>
    `);
  });
});
