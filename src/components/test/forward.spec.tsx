import { newSpecPage } from '@stencil/core/testing';
import { IconForward } from '../forward';
import { createElement, Forward }  from 'lucide';

describe('icon-forward', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconForward],
      html: `<icon-forward></icon-forward>`,
    });

    const svg = createElement(Forward);

    expect(page.root).toEqualHtml(`
      <icon-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-forward>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconForward],
      html: `<icon-forward stroke="blue"></icon-forward>`,
    });

    const svg = createElement(Forward);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-forward>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconForward],
      html: `<icon-forward stroke-width="2"></icon-forward>`,
    });

    const svg = createElement(Forward);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-forward>
    `);
  });
});
