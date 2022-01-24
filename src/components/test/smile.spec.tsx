import { newSpecPage } from '@stencil/core/testing';
import { IconSmile } from '../smile';
import { createElement, Smile }  from 'lucide';

describe('icon-smile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSmile],
      html: `<icon-smile></icon-smile>`,
    });

    const svg = createElement(Smile);

    expect(page.root).toEqualHtml(`
      <icon-smile class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-smile>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSmile],
      html: `<icon-smile stroke="blue"></icon-smile>`,
    });

    const svg = createElement(Smile);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-smile class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-smile>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSmile],
      html: `<icon-smile stroke-width="2"></icon-smile>`,
    });

    const svg = createElement(Smile);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-smile class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-smile>
    `);
  });
});
