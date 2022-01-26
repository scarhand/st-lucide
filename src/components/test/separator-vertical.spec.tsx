import { newSpecPage } from '@stencil/core/testing';
import { IconSeparatorVertical } from '../separator-vertical';
import { createElement, SeparatorVertical }  from 'lucide';

describe('icon-separator-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSeparatorVertical],
      html: `<icon-separator-vertical></icon-separator-vertical>`,
    });

    const svg = createElement(SeparatorVertical);

    expect(page.root).toEqualHtml(`
      <icon-separator-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-separator-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSeparatorVertical],
      html: `<icon-separator-vertical stroke="blue"></icon-separator-vertical>`,
    });

    const svg = createElement(SeparatorVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-separator-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-separator-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSeparatorVertical],
      html: `<icon-separator-vertical stroke-width="2"></icon-separator-vertical>`,
    });

    const svg = createElement(SeparatorVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-separator-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-separator-vertical>
    `);
  });
});
