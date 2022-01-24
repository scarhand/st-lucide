import { newSpecPage } from '@stencil/core/testing';
import { IconSignalHigh } from '../signal-high';
import { createElement, SignalHigh }  from 'lucide';

describe('icon-signal-high', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSignalHigh],
      html: `<icon-signal-high></icon-signal-high>`,
    });

    const svg = createElement(SignalHigh);

    expect(page.root).toEqualHtml(`
      <icon-signal-high class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-signal-high>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignalHigh],
      html: `<icon-signal-high stroke="blue"></icon-signal-high>`,
    });

    const svg = createElement(SignalHigh);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-signal-high class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-signal-high>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignalHigh],
      html: `<icon-signal-high stroke-width="2"></icon-signal-high>`,
    });

    const svg = createElement(SignalHigh);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-signal-high class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-signal-high>
    `);
  });
});
