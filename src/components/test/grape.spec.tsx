import { newSpecPage } from '@stencil/core/testing';
import { IconGrape } from '../grape';
import { createElement, Grape }  from 'lucide';

describe('icon-grape', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGrape],
      html: `<icon-grape></icon-grape>`,
    });

    const svg = createElement(Grape);

    expect(page.root).toEqualHtml(`
      <icon-grape class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-grape>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGrape],
      html: `<icon-grape stroke="blue"></icon-grape>`,
    });

    const svg = createElement(Grape);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-grape class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-grape>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGrape],
      html: `<icon-grape stroke-width="2"></icon-grape>`,
    });

    const svg = createElement(Grape);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-grape class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-grape>
    `);
  });
});
