import { newSpecPage } from '@stencil/core/testing';
import { IconAward } from '../award';
import { createElement, Award }  from 'lucide';

describe('icon-award', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAward],
      html: `<icon-award></icon-award>`,
    });

    const svg = createElement(Award);

    expect(page.root).toEqualHtml(`
      <icon-award class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-award>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAward],
      html: `<icon-award stroke="blue"></icon-award>`,
    });

    const svg = createElement(Award);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-award class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-award>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAward],
      html: `<icon-award stroke-width="2"></icon-award>`,
    });

    const svg = createElement(Award);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-award class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-award>
    `);
  });
});
