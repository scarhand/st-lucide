import { newSpecPage } from '@stencil/core/testing';
import { IconSliders } from '../sliders';
import { createElement, Sliders }  from 'lucide';

describe('icon-sliders', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSliders],
      html: `<icon-sliders></icon-sliders>`,
    });

    const svg = createElement(Sliders);

    expect(page.root).toEqualHtml(`
      <icon-sliders class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sliders>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSliders],
      html: `<icon-sliders stroke="blue"></icon-sliders>`,
    });

    const svg = createElement(Sliders);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sliders class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sliders>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSliders],
      html: `<icon-sliders stroke-width="2"></icon-sliders>`,
    });

    const svg = createElement(Sliders);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sliders class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sliders>
    `);
  });
});
