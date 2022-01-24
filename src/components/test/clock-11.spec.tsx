import { newSpecPage } from '@stencil/core/testing';
import { IconClock11 } from '../clock-11';
import { createElement, Clock11 }  from 'lucide';

describe('icon-clock-11', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock11],
      html: `<icon-clock-11></icon-clock-11>`,
    });

    const svg = createElement(Clock11);

    expect(page.root).toEqualHtml(`
      <icon-clock-11 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-11>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock11],
      html: `<icon-clock-11 stroke="blue"></icon-clock-11>`,
    });

    const svg = createElement(Clock11);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-11 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-11>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock11],
      html: `<icon-clock-11 stroke-width="2"></icon-clock-11>`,
    });

    const svg = createElement(Clock11);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-11 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-11>
    `);
  });
});
