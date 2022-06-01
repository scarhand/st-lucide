import { newSpecPage } from '@stencil/core/testing';
import { IconBaseline } from '../baseline';
import { createElement, Baseline }  from 'lucide';

describe('icon-baseline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBaseline],
      html: `<icon-baseline></icon-baseline>`,
    });

    const svg = createElement(Baseline);

    expect(page.root).toEqualHtml(`
      <icon-baseline class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-baseline>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBaseline],
      html: `<icon-baseline stroke="blue"></icon-baseline>`,
    });

    const svg = createElement(Baseline);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-baseline class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-baseline>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBaseline],
      html: `<icon-baseline stroke-width="2"></icon-baseline>`,
    });

    const svg = createElement(Baseline);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-baseline class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-baseline>
    `);
  });
});
