import { newSpecPage } from '@stencil/core/testing';
import { IconAlarmMinus } from '../alarm-minus';
import { createElement, AlarmMinus }  from 'lucide';

describe('icon-alarm-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlarmMinus],
      html: `<icon-alarm-minus></icon-alarm-minus>`,
    });

    const svg = createElement(AlarmMinus);

    expect(page.root).toEqualHtml(`
      <icon-alarm-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-alarm-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmMinus],
      html: `<icon-alarm-minus stroke="blue"></icon-alarm-minus>`,
    });

    const svg = createElement(AlarmMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-alarm-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-alarm-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlarmMinus],
      html: `<icon-alarm-minus stroke-width="2"></icon-alarm-minus>`,
    });

    const svg = createElement(AlarmMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-alarm-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-alarm-minus>
    `);
  });
});
