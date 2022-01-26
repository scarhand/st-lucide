import { newSpecPage } from '@stencil/core/testing';
import { IconOutdent } from '../outdent';
import { createElement, Outdent }  from 'lucide';

describe('icon-outdent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconOutdent],
      html: `<icon-outdent></icon-outdent>`,
    });

    const svg = createElement(Outdent);

    expect(page.root).toEqualHtml(`
      <icon-outdent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-outdent>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconOutdent],
      html: `<icon-outdent stroke="blue"></icon-outdent>`,
    });

    const svg = createElement(Outdent);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-outdent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-outdent>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconOutdent],
      html: `<icon-outdent stroke-width="2"></icon-outdent>`,
    });

    const svg = createElement(Outdent);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-outdent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-outdent>
    `);
  });
});
