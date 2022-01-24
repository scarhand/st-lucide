import { newSpecPage } from '@stencil/core/testing';
import { IconCheckCircle } from '../check-circle';
import { createElement, CheckCircle }  from 'lucide';

describe('icon-check-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCheckCircle],
      html: `<icon-check-circle></icon-check-circle>`,
    });

    const svg = createElement(CheckCircle);

    expect(page.root).toEqualHtml(`
      <icon-check-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-check-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCheckCircle],
      html: `<icon-check-circle stroke="blue"></icon-check-circle>`,
    });

    const svg = createElement(CheckCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-check-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-check-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCheckCircle],
      html: `<icon-check-circle stroke-width="2"></icon-check-circle>`,
    });

    const svg = createElement(CheckCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-check-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-check-circle>
    `);
  });
});
