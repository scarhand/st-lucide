import { newSpecPage } from '@stencil/core/testing';
import { IconTimerReset } from '../timer-reset';
import { createElement, TimerReset }  from 'lucide';

describe('icon-timer-reset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTimerReset],
      html: `<icon-timer-reset></icon-timer-reset>`,
    });

    const svg = createElement(TimerReset);

    expect(page.root).toEqualHtml(`
      <icon-timer-reset class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-timer-reset>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTimerReset],
      html: `<icon-timer-reset stroke="blue"></icon-timer-reset>`,
    });

    const svg = createElement(TimerReset);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-timer-reset class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-timer-reset>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTimerReset],
      html: `<icon-timer-reset stroke-width="2"></icon-timer-reset>`,
    });

    const svg = createElement(TimerReset);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-timer-reset class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-timer-reset>
    `);
  });
});
