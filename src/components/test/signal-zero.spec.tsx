import { newSpecPage } from '@stencil/core/testing';
import { IconSignalZero } from '../signal-zero';
import { createElement, SignalZero }  from 'lucide';

describe('icon-signal-zero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSignalZero],
      html: `<icon-signal-zero></icon-signal-zero>`,
    });

    const svg = createElement(SignalZero);

    expect(page.root).toEqualHtml(`
      <icon-signal-zero class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-signal-zero>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignalZero],
      html: `<icon-signal-zero stroke="blue"></icon-signal-zero>`,
    });

    const svg = createElement(SignalZero);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-signal-zero class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-signal-zero>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignalZero],
      html: `<icon-signal-zero stroke-width="2"></icon-signal-zero>`,
    });

    const svg = createElement(SignalZero);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-signal-zero class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-signal-zero>
    `);
  });
});
