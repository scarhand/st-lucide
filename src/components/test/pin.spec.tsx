import { newSpecPage } from '@stencil/core/testing';
import { IconPin } from '../pin';
import { createElement, Pin }  from 'lucide';

describe('icon-pin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPin],
      html: `<icon-pin></icon-pin>`,
    });

    const svg = createElement(Pin);

    expect(page.root).toEqualHtml(`
      <icon-pin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pin>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPin],
      html: `<icon-pin stroke="blue"></icon-pin>`,
    });

    const svg = createElement(Pin);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pin>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPin],
      html: `<icon-pin stroke-width="2"></icon-pin>`,
    });

    const svg = createElement(Pin);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pin>
    `);
  });
});
