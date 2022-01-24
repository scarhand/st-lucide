import { newSpecPage } from '@stencil/core/testing';
import { IconPenTool } from '../pen-tool';
import { createElement, PenTool }  from 'lucide';

describe('icon-pen-tool', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPenTool],
      html: `<icon-pen-tool></icon-pen-tool>`,
    });

    const svg = createElement(PenTool);

    expect(page.root).toEqualHtml(`
      <icon-pen-tool class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pen-tool>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPenTool],
      html: `<icon-pen-tool stroke="blue"></icon-pen-tool>`,
    });

    const svg = createElement(PenTool);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pen-tool class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pen-tool>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPenTool],
      html: `<icon-pen-tool stroke-width="2"></icon-pen-tool>`,
    });

    const svg = createElement(PenTool);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pen-tool class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pen-tool>
    `);
  });
});
