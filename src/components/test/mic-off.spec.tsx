import { newSpecPage } from '@stencil/core/testing';
import { IconMicOff } from '../mic-off';
import { createElement, MicOff }  from 'lucide';

describe('icon-mic-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMicOff],
      html: `<icon-mic-off></icon-mic-off>`,
    });

    const svg = createElement(MicOff);

    expect(page.root).toEqualHtml(`
      <icon-mic-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mic-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMicOff],
      html: `<icon-mic-off stroke="blue"></icon-mic-off>`,
    });

    const svg = createElement(MicOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mic-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mic-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMicOff],
      html: `<icon-mic-off stroke-width="2"></icon-mic-off>`,
    });

    const svg = createElement(MicOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mic-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mic-off>
    `);
  });
});
