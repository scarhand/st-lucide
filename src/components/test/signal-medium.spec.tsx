import { newSpecPage } from '@stencil/core/testing';
import { IconSignalMedium } from '../signal-medium';
import { createElement, SignalMedium }  from 'lucide';

describe('icon-signal-medium', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSignalMedium],
      html: `<icon-signal-medium></icon-signal-medium>`,
    });

    const svg = createElement(SignalMedium);

    expect(page.root).toEqualHtml(`
      <icon-signal-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-signal-medium>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignalMedium],
      html: `<icon-signal-medium stroke="blue"></icon-signal-medium>`,
    });

    const svg = createElement(SignalMedium);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-signal-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-signal-medium>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignalMedium],
      html: `<icon-signal-medium stroke-width="2"></icon-signal-medium>`,
    });

    const svg = createElement(SignalMedium);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-signal-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-signal-medium>
    `);
  });
});
