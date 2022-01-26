import { newSpecPage } from '@stencil/core/testing';
import { IconStopCircle } from '../stop-circle';
import { createElement, StopCircle }  from 'lucide';

describe('icon-stop-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStopCircle],
      html: `<icon-stop-circle></icon-stop-circle>`,
    });

    const svg = createElement(StopCircle);

    expect(page.root).toEqualHtml(`
      <icon-stop-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-stop-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStopCircle],
      html: `<icon-stop-circle stroke="blue"></icon-stop-circle>`,
    });

    const svg = createElement(StopCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-stop-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-stop-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStopCircle],
      html: `<icon-stop-circle stroke-width="2"></icon-stop-circle>`,
    });

    const svg = createElement(StopCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-stop-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-stop-circle>
    `);
  });
});
