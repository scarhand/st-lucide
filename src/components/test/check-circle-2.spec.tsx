import { newSpecPage } from '@stencil/core/testing';
import { IconCheckCircle2 } from '../check-circle-2';
import { createElement, CheckCircle2 }  from 'lucide';

describe('icon-check-circle-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCheckCircle2],
      html: `<icon-check-circle-2></icon-check-circle-2>`,
    });

    const svg = createElement(CheckCircle2);

    expect(page.root).toEqualHtml(`
      <icon-check-circle-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-check-circle-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCheckCircle2],
      html: `<icon-check-circle-2 stroke="blue"></icon-check-circle-2>`,
    });

    const svg = createElement(CheckCircle2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-check-circle-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-check-circle-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCheckCircle2],
      html: `<icon-check-circle-2 stroke-width="2"></icon-check-circle-2>`,
    });

    const svg = createElement(CheckCircle2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-check-circle-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-check-circle-2>
    `);
  });
});
