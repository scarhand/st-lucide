import { newSpecPage } from '@stencil/core/testing';
import { IconAtSign } from '../at-sign';
import { createElement, AtSign }  from 'lucide';

describe('icon-at-sign', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAtSign],
      html: `<icon-at-sign></icon-at-sign>`,
    });

    const svg = createElement(AtSign);

    expect(page.root).toEqualHtml(`
      <icon-at-sign class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-at-sign>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAtSign],
      html: `<icon-at-sign stroke="blue"></icon-at-sign>`,
    });

    const svg = createElement(AtSign);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-at-sign class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-at-sign>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAtSign],
      html: `<icon-at-sign stroke-width="2"></icon-at-sign>`,
    });

    const svg = createElement(AtSign);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-at-sign class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-at-sign>
    `);
  });
});
