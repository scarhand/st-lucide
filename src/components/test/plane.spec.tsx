import { newSpecPage } from '@stencil/core/testing';
import { IconPlane } from '../plane';
import { createElement, Plane }  from 'lucide';

describe('icon-plane', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPlane],
      html: `<icon-plane></icon-plane>`,
    });

    const svg = createElement(Plane);

    expect(page.root).toEqualHtml(`
      <icon-plane class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-plane>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlane],
      html: `<icon-plane stroke="blue"></icon-plane>`,
    });

    const svg = createElement(Plane);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-plane class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-plane>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlane],
      html: `<icon-plane stroke-width="2"></icon-plane>`,
    });

    const svg = createElement(Plane);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-plane class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-plane>
    `);
  });
});
