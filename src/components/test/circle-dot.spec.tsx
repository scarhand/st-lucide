import { newSpecPage } from '@stencil/core/testing';
import { IconCircleDot } from '../circle-dot';
import { createElement, CircleDot }  from 'lucide';

describe('icon-circle-dot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCircleDot],
      html: `<icon-circle-dot></icon-circle-dot>`,
    });

    const svg = createElement(CircleDot);

    expect(page.root).toEqualHtml(`
      <icon-circle-dot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-circle-dot>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCircleDot],
      html: `<icon-circle-dot stroke="blue"></icon-circle-dot>`,
    });

    const svg = createElement(CircleDot);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-circle-dot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-circle-dot>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCircleDot],
      html: `<icon-circle-dot stroke-width="2"></icon-circle-dot>`,
    });

    const svg = createElement(CircleDot);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-circle-dot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-circle-dot>
    `);
  });
});
