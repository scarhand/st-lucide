import { newSpecPage } from '@stencil/core/testing';
import { IconBed } from '../bed';
import { createElement, Bed }  from 'lucide';

describe('icon-bed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBed],
      html: `<icon-bed></icon-bed>`,
    });

    const svg = createElement(Bed);

    expect(page.root).toEqualHtml(`
      <icon-bed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bed>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBed],
      html: `<icon-bed stroke="blue"></icon-bed>`,
    });

    const svg = createElement(Bed);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bed>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBed],
      html: `<icon-bed stroke-width="2"></icon-bed>`,
    });

    const svg = createElement(Bed);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bed>
    `);
  });
});
