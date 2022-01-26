import { newSpecPage } from '@stencil/core/testing';
import { IconEqualNot } from '../equal-not';
import { createElement, EqualNot }  from 'lucide';

describe('icon-equal-not', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEqualNot],
      html: `<icon-equal-not></icon-equal-not>`,
    });

    const svg = createElement(EqualNot);

    expect(page.root).toEqualHtml(`
      <icon-equal-not class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-equal-not>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEqualNot],
      html: `<icon-equal-not stroke="blue"></icon-equal-not>`,
    });

    const svg = createElement(EqualNot);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-equal-not class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-equal-not>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEqualNot],
      html: `<icon-equal-not stroke-width="2"></icon-equal-not>`,
    });

    const svg = createElement(EqualNot);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-equal-not class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-equal-not>
    `);
  });
});
