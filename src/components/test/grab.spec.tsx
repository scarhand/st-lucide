import { newSpecPage } from '@stencil/core/testing';
import { IconGrab } from '../grab';
import { createElement, Grab }  from 'lucide';

describe('icon-grab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGrab],
      html: `<icon-grab></icon-grab>`,
    });

    const svg = createElement(Grab);

    expect(page.root).toEqualHtml(`
      <icon-grab class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-grab>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGrab],
      html: `<icon-grab stroke="blue"></icon-grab>`,
    });

    const svg = createElement(Grab);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-grab class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-grab>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGrab],
      html: `<icon-grab stroke-width="2"></icon-grab>`,
    });

    const svg = createElement(Grab);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-grab class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-grab>
    `);
  });
});
