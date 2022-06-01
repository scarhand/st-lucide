import { newSpecPage } from '@stencil/core/testing';
import { IconAlignStartVertical } from '../align-start-vertical';
import { createElement, AlignStartVertical }  from 'lucide';

describe('icon-align-start-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignStartVertical],
      html: `<icon-align-start-vertical></icon-align-start-vertical>`,
    });

    const svg = createElement(AlignStartVertical);

    expect(page.root).toEqualHtml(`
      <icon-align-start-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-start-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignStartVertical],
      html: `<icon-align-start-vertical stroke="blue"></icon-align-start-vertical>`,
    });

    const svg = createElement(AlignStartVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-start-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-start-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignStartVertical],
      html: `<icon-align-start-vertical stroke-width="2"></icon-align-start-vertical>`,
    });

    const svg = createElement(AlignStartVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-start-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-start-vertical>
    `);
  });
});
