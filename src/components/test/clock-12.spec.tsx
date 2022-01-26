import { newSpecPage } from '@stencil/core/testing';
import { IconClock12 } from '../clock-12';
import { createElement, Clock12 }  from 'lucide';

describe('icon-clock-12', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock12],
      html: `<icon-clock-12></icon-clock-12>`,
    });

    const svg = createElement(Clock12);

    expect(page.root).toEqualHtml(`
      <icon-clock-12 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-12>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock12],
      html: `<icon-clock-12 stroke="blue"></icon-clock-12>`,
    });

    const svg = createElement(Clock12);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-12 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-12>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock12],
      html: `<icon-clock-12 stroke-width="2"></icon-clock-12>`,
    });

    const svg = createElement(Clock12);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-12 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-12>
    `);
  });
});
