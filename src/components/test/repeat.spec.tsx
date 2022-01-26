import { newSpecPage } from '@stencil/core/testing';
import { IconRepeat } from '../repeat';
import { createElement, Repeat }  from 'lucide';

describe('icon-repeat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRepeat],
      html: `<icon-repeat></icon-repeat>`,
    });

    const svg = createElement(Repeat);

    expect(page.root).toEqualHtml(`
      <icon-repeat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-repeat>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRepeat],
      html: `<icon-repeat stroke="blue"></icon-repeat>`,
    });

    const svg = createElement(Repeat);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-repeat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-repeat>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRepeat],
      html: `<icon-repeat stroke-width="2"></icon-repeat>`,
    });

    const svg = createElement(Repeat);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-repeat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-repeat>
    `);
  });
});
