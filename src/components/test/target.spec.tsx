import { newSpecPage } from '@stencil/core/testing';
import { IconTarget } from '../target';
import { createElement, Target }  from 'lucide';

describe('icon-target', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTarget],
      html: `<icon-target></icon-target>`,
    });

    const svg = createElement(Target);

    expect(page.root).toEqualHtml(`
      <icon-target class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-target>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTarget],
      html: `<icon-target stroke="blue"></icon-target>`,
    });

    const svg = createElement(Target);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-target class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-target>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTarget],
      html: `<icon-target stroke-width="2"></icon-target>`,
    });

    const svg = createElement(Target);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-target class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-target>
    `);
  });
});
