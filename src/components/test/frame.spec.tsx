import { newSpecPage } from '@stencil/core/testing';
import { IconFrame } from '../frame';
import { createElement, Frame }  from 'lucide';

describe('icon-frame', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFrame],
      html: `<icon-frame></icon-frame>`,
    });

    const svg = createElement(Frame);

    expect(page.root).toEqualHtml(`
      <icon-frame class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-frame>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFrame],
      html: `<icon-frame stroke="blue"></icon-frame>`,
    });

    const svg = createElement(Frame);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-frame class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-frame>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFrame],
      html: `<icon-frame stroke-width="2"></icon-frame>`,
    });

    const svg = createElement(Frame);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-frame class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-frame>
    `);
  });
});
