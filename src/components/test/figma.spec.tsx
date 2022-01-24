import { newSpecPage } from '@stencil/core/testing';
import { IconFigma } from '../figma';
import { createElement, Figma }  from 'lucide';

describe('icon-figma', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFigma],
      html: `<icon-figma></icon-figma>`,
    });

    const svg = createElement(Figma);

    expect(page.root).toEqualHtml(`
      <icon-figma class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-figma>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFigma],
      html: `<icon-figma stroke="blue"></icon-figma>`,
    });

    const svg = createElement(Figma);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-figma class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-figma>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFigma],
      html: `<icon-figma stroke-width="2"></icon-figma>`,
    });

    const svg = createElement(Figma);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-figma class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-figma>
    `);
  });
});
