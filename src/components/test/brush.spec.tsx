import { newSpecPage } from '@stencil/core/testing';
import { IconBrush } from '../brush';
import { createElement, Brush }  from 'lucide';

describe('icon-brush', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBrush],
      html: `<icon-brush></icon-brush>`,
    });

    const svg = createElement(Brush);

    expect(page.root).toEqualHtml(`
      <icon-brush class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-brush>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBrush],
      html: `<icon-brush stroke="blue"></icon-brush>`,
    });

    const svg = createElement(Brush);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-brush class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-brush>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBrush],
      html: `<icon-brush stroke-width="2"></icon-brush>`,
    });

    const svg = createElement(Brush);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-brush class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-brush>
    `);
  });
});
