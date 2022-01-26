import { newSpecPage } from '@stencil/core/testing';
import { IconUsers } from '../users';
import { createElement, Users }  from 'lucide';

describe('icon-users', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUsers],
      html: `<icon-users></icon-users>`,
    });

    const svg = createElement(Users);

    expect(page.root).toEqualHtml(`
      <icon-users class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-users>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUsers],
      html: `<icon-users stroke="blue"></icon-users>`,
    });

    const svg = createElement(Users);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-users class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-users>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUsers],
      html: `<icon-users stroke-width="2"></icon-users>`,
    });

    const svg = createElement(Users);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-users class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-users>
    `);
  });
});
