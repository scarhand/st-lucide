import { newSpecPage } from '@stencil/core/testing';
import { IconXCircle } from '../x-circle';
import { createElement, XCircle }  from 'lucide';

describe('icon-x-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconXCircle],
      html: `<icon-x-circle></icon-x-circle>`,
    });

    const svg = createElement(XCircle);

    expect(page.root).toEqualHtml(`
      <icon-x-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-x-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconXCircle],
      html: `<icon-x-circle stroke="blue"></icon-x-circle>`,
    });

    const svg = createElement(XCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-x-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-x-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconXCircle],
      html: `<icon-x-circle stroke-width="2"></icon-x-circle>`,
    });

    const svg = createElement(XCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-x-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-x-circle>
    `);
  });
});
