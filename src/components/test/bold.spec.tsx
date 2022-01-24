import { newSpecPage } from '@stencil/core/testing';
import { IconBold } from '../bold';
import { createElement, Bold }  from 'lucide';

describe('icon-bold', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBold],
      html: `<icon-bold></icon-bold>`,
    });

    const svg = createElement(Bold);

    expect(page.root).toEqualHtml(`
      <icon-bold class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bold>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBold],
      html: `<icon-bold stroke="blue"></icon-bold>`,
    });

    const svg = createElement(Bold);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bold class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bold>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBold],
      html: `<icon-bold stroke-width="2"></icon-bold>`,
    });

    const svg = createElement(Bold);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bold class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bold>
    `);
  });
});
