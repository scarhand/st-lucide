import { newSpecPage } from '@stencil/core/testing';
import { IconHammer } from '../hammer';
import { createElement, Hammer }  from 'lucide';

describe('icon-hammer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHammer],
      html: `<icon-hammer></icon-hammer>`,
    });

    const svg = createElement(Hammer);

    expect(page.root).toEqualHtml(`
      <icon-hammer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-hammer>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHammer],
      html: `<icon-hammer stroke="blue"></icon-hammer>`,
    });

    const svg = createElement(Hammer);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-hammer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-hammer>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHammer],
      html: `<icon-hammer stroke-width="2"></icon-hammer>`,
    });

    const svg = createElement(Hammer);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-hammer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-hammer>
    `);
  });
});
