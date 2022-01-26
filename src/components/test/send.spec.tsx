import { newSpecPage } from '@stencil/core/testing';
import { IconSend } from '../send';
import { createElement, Send }  from 'lucide';

describe('icon-send', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSend],
      html: `<icon-send></icon-send>`,
    });

    const svg = createElement(Send);

    expect(page.root).toEqualHtml(`
      <icon-send class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-send>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSend],
      html: `<icon-send stroke="blue"></icon-send>`,
    });

    const svg = createElement(Send);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-send class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-send>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSend],
      html: `<icon-send stroke-width="2"></icon-send>`,
    });

    const svg = createElement(Send);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-send class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-send>
    `);
  });
});
