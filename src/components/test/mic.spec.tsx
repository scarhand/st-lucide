import { newSpecPage } from '@stencil/core/testing';
import { IconMic } from '../mic';
import { createElement, Mic }  from 'lucide';

describe('icon-mic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMic],
      html: `<icon-mic></icon-mic>`,
    });

    const svg = createElement(Mic);

    expect(page.root).toEqualHtml(`
      <icon-mic class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mic>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMic],
      html: `<icon-mic stroke="blue"></icon-mic>`,
    });

    const svg = createElement(Mic);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mic class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mic>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMic],
      html: `<icon-mic stroke-width="2"></icon-mic>`,
    });

    const svg = createElement(Mic);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mic class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mic>
    `);
  });
});
