import { newSpecPage } from '@stencil/core/testing';
import { IconSignal } from '../signal';
import { createElement, Signal }  from 'lucide';

describe('icon-signal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSignal],
      html: `<icon-signal></icon-signal>`,
    });

    const svg = createElement(Signal);

    expect(page.root).toEqualHtml(`
      <icon-signal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-signal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignal],
      html: `<icon-signal stroke="blue"></icon-signal>`,
    });

    const svg = createElement(Signal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-signal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-signal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSignal],
      html: `<icon-signal stroke-width="2"></icon-signal>`,
    });

    const svg = createElement(Signal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-signal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-signal>
    `);
  });
});
