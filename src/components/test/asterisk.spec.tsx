import { newSpecPage } from '@stencil/core/testing';
import { IconAsterisk } from '../asterisk';
import { createElement, Asterisk }  from 'lucide';

describe('icon-asterisk', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAsterisk],
      html: `<icon-asterisk></icon-asterisk>`,
    });

    const svg = createElement(Asterisk);

    expect(page.root).toEqualHtml(`
      <icon-asterisk class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-asterisk>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAsterisk],
      html: `<icon-asterisk stroke="blue"></icon-asterisk>`,
    });

    const svg = createElement(Asterisk);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-asterisk class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-asterisk>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAsterisk],
      html: `<icon-asterisk stroke-width="2"></icon-asterisk>`,
    });

    const svg = createElement(Asterisk);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-asterisk class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-asterisk>
    `);
  });
});
