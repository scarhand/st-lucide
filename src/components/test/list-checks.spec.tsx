import { newSpecPage } from '@stencil/core/testing';
import { IconListChecks } from '../list-checks';
import { createElement, ListChecks }  from 'lucide';

describe('icon-list-checks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListChecks],
      html: `<icon-list-checks></icon-list-checks>`,
    });

    const svg = createElement(ListChecks);

    expect(page.root).toEqualHtml(`
      <icon-list-checks class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-checks>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListChecks],
      html: `<icon-list-checks stroke="blue"></icon-list-checks>`,
    });

    const svg = createElement(ListChecks);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-checks class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-checks>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListChecks],
      html: `<icon-list-checks stroke-width="2"></icon-list-checks>`,
    });

    const svg = createElement(ListChecks);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-checks class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-checks>
    `);
  });
});
