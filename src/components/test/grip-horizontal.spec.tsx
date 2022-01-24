import { newSpecPage } from '@stencil/core/testing';
import { IconGripHorizontal } from '../grip-horizontal';
import { createElement, GripHorizontal }  from 'lucide';

describe('icon-grip-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGripHorizontal],
      html: `<icon-grip-horizontal></icon-grip-horizontal>`,
    });

    const svg = createElement(GripHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-grip-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-grip-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGripHorizontal],
      html: `<icon-grip-horizontal stroke="blue"></icon-grip-horizontal>`,
    });

    const svg = createElement(GripHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-grip-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-grip-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGripHorizontal],
      html: `<icon-grip-horizontal stroke-width="2"></icon-grip-horizontal>`,
    });

    const svg = createElement(GripHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-grip-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-grip-horizontal>
    `);
  });
});
