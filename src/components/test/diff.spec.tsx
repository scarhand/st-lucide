import { newSpecPage } from '@stencil/core/testing';
import { IconDiff } from '../diff';
import { createElement, Diff }  from 'lucide';

describe('icon-diff', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDiff],
      html: `<icon-diff></icon-diff>`,
    });

    const svg = createElement(Diff);

    expect(page.root).toEqualHtml(`
      <icon-diff class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-diff>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDiff],
      html: `<icon-diff stroke="blue"></icon-diff>`,
    });

    const svg = createElement(Diff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-diff class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-diff>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDiff],
      html: `<icon-diff stroke-width="2"></icon-diff>`,
    });

    const svg = createElement(Diff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-diff class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-diff>
    `);
  });
});
