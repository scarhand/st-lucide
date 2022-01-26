import { newSpecPage } from '@stencil/core/testing';
import { IconTimerOff } from '../timer-off';
import { createElement, TimerOff }  from 'lucide';

describe('icon-timer-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTimerOff],
      html: `<icon-timer-off></icon-timer-off>`,
    });

    const svg = createElement(TimerOff);

    expect(page.root).toEqualHtml(`
      <icon-timer-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-timer-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTimerOff],
      html: `<icon-timer-off stroke="blue"></icon-timer-off>`,
    });

    const svg = createElement(TimerOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-timer-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-timer-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTimerOff],
      html: `<icon-timer-off stroke-width="2"></icon-timer-off>`,
    });

    const svg = createElement(TimerOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-timer-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-timer-off>
    `);
  });
});
