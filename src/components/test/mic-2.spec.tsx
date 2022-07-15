import { newSpecPage } from '@stencil/core/testing';
import { IconMic2 } from '../mic-2';
import { createElement, Mic2 }  from 'lucide';

describe('icon-mic-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMic2],
      html: `<icon-mic-2></icon-mic-2>`,
    });

    const svg = createElement(Mic2);

    expect(page.root).toEqualHtml(`
      <icon-mic-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mic-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMic2],
      html: `<icon-mic-2 stroke="blue"></icon-mic-2>`,
    });

    const svg = createElement(Mic2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mic-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mic-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMic2],
      html: `<icon-mic-2 stroke-width="2"></icon-mic-2>`,
    });

    const svg = createElement(Mic2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mic-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mic-2>
    `);
  });
});
