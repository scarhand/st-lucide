import { newSpecPage } from '@stencil/core/testing';
import { IconCpu } from '../cpu';
import { createElement, Cpu }  from 'lucide';

describe('icon-cpu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCpu],
      html: `<icon-cpu></icon-cpu>`,
    });

    const svg = createElement(Cpu);

    expect(page.root).toEqualHtml(`
      <icon-cpu class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cpu>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCpu],
      html: `<icon-cpu stroke="blue"></icon-cpu>`,
    });

    const svg = createElement(Cpu);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cpu class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cpu>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCpu],
      html: `<icon-cpu stroke-width="2"></icon-cpu>`,
    });

    const svg = createElement(Cpu);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cpu class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cpu>
    `);
  });
});
