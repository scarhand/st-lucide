import { newSpecPage } from '@stencil/core/testing';
import { IconUserCheck } from '../user-check';
import { createElement, UserCheck }  from 'lucide';

describe('icon-user-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUserCheck],
      html: `<icon-user-check></icon-user-check>`,
    });

    const svg = createElement(UserCheck);

    expect(page.root).toEqualHtml(`
      <icon-user-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-user-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserCheck],
      html: `<icon-user-check stroke="blue"></icon-user-check>`,
    });

    const svg = createElement(UserCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-user-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-user-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserCheck],
      html: `<icon-user-check stroke-width="2"></icon-user-check>`,
    });

    const svg = createElement(UserCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-user-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-user-check>
    `);
  });
});
