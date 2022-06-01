import { newSpecPage } from '@stencil/core/testing';
import { IconCookie } from '../cookie';
import { createElement, Cookie }  from 'lucide';

describe('icon-cookie', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCookie],
      html: `<icon-cookie></icon-cookie>`,
    });

    const svg = createElement(Cookie);

    expect(page.root).toEqualHtml(`
      <icon-cookie class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cookie>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCookie],
      html: `<icon-cookie stroke="blue"></icon-cookie>`,
    });

    const svg = createElement(Cookie);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cookie class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cookie>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCookie],
      html: `<icon-cookie stroke-width="2"></icon-cookie>`,
    });

    const svg = createElement(Cookie);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cookie class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cookie>
    `);
  });
});
