import { newSpecPage } from '@stencil/core/testing';
import { IconUserX } from '../user-x';
import { createElement, UserX }  from 'lucide';

describe('icon-user-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUserX],
      html: `<icon-user-x></icon-user-x>`,
    });

    const svg = createElement(UserX);

    expect(page.root).toEqualHtml(`
      <icon-user-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-user-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserX],
      html: `<icon-user-x stroke="blue"></icon-user-x>`,
    });

    const svg = createElement(UserX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-user-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-user-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserX],
      html: `<icon-user-x stroke-width="2"></icon-user-x>`,
    });

    const svg = createElement(UserX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-user-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-user-x>
    `);
  });
});
