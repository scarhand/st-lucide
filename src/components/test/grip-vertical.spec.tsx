import { newSpecPage } from '@stencil/core/testing';
import { IconGripVertical } from '../grip-vertical';
import { createElement, GripVertical }  from 'lucide';

describe('icon-grip-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGripVertical],
      html: `<icon-grip-vertical></icon-grip-vertical>`,
    });

    const svg = createElement(GripVertical);

    expect(page.root).toEqualHtml(`
      <icon-grip-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-grip-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGripVertical],
      html: `<icon-grip-vertical stroke="blue"></icon-grip-vertical>`,
    });

    const svg = createElement(GripVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-grip-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-grip-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGripVertical],
      html: `<icon-grip-vertical stroke-width="2"></icon-grip-vertical>`,
    });

    const svg = createElement(GripVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-grip-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-grip-vertical>
    `);
  });
});
