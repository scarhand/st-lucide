import { newSpecPage } from '@stencil/core/testing';
import { IconMartini } from '../martini';
import { createElement, Martini }  from 'lucide';

describe('icon-martini', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMartini],
      html: `<icon-martini></icon-martini>`,
    });

    const svg = createElement(Martini);

    expect(page.root).toEqualHtml(`
      <icon-martini class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-martini>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMartini],
      html: `<icon-martini stroke="blue"></icon-martini>`,
    });

    const svg = createElement(Martini);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-martini class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-martini>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMartini],
      html: `<icon-martini stroke-width="2"></icon-martini>`,
    });

    const svg = createElement(Martini);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-martini class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-martini>
    `);
  });
});
