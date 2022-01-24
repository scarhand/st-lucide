import { newSpecPage } from '@stencil/core/testing';
import { IconSignalLow } from '../signal-low';
import { createElement, SignalLow }  from 'lucide';

describe('icon-signal-low', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSignalLow],
      html: `<icon-signal-low></icon-signal-low>`,
    });

    const svg = createElement(SignalLow);

    expect(page.root).toEqualHtml(`
      <icon-signal-low class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-signal-low>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignalLow],
      html: `<icon-signal-low stroke="blue"></icon-signal-low>`,
    });

    const svg = createElement(SignalLow);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-signal-low class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-signal-low>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignalLow],
      html: `<icon-signal-low stroke-width="2"></icon-signal-low>`,
    });

    const svg = createElement(SignalLow);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-signal-low class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-signal-low>
    `);
  });
});
