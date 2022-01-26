import { newSpecPage } from '@stencil/core/testing';
import { IconHistory } from '../history';
import { createElement, History }  from 'lucide';

describe('icon-history', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHistory],
      html: `<icon-history></icon-history>`,
    });

    const svg = createElement(History);

    expect(page.root).toEqualHtml(`
      <icon-history class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-history>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHistory],
      html: `<icon-history stroke="blue"></icon-history>`,
    });

    const svg = createElement(History);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-history class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-history>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHistory],
      html: `<icon-history stroke-width="2"></icon-history>`,
    });

    const svg = createElement(History);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-history class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-history>
    `);
  });
});
