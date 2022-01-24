import { newSpecPage } from '@stencil/core/testing';
import { IconClock10 } from '../clock-10';
import { createElement, Clock10 }  from 'lucide';

describe('icon-clock-10', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock10],
      html: `<icon-clock-10></icon-clock-10>`,
    });

    const svg = createElement(Clock10);

    expect(page.root).toEqualHtml(`
      <icon-clock-10 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-10>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock10],
      html: `<icon-clock-10 stroke="blue"></icon-clock-10>`,
    });

    const svg = createElement(Clock10);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-10 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-10>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock10],
      html: `<icon-clock-10 stroke-width="2"></icon-clock-10>`,
    });

    const svg = createElement(Clock10);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-10 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-10>
    `);
  });
});
