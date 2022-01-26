import { newSpecPage } from '@stencil/core/testing';
import { IconUserMinus } from '../user-minus';
import { createElement, UserMinus }  from 'lucide';

describe('icon-user-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUserMinus],
      html: `<icon-user-minus></icon-user-minus>`,
    });

    const svg = createElement(UserMinus);

    expect(page.root).toEqualHtml(`
      <icon-user-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-user-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserMinus],
      html: `<icon-user-minus stroke="blue"></icon-user-minus>`,
    });

    const svg = createElement(UserMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-user-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-user-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserMinus],
      html: `<icon-user-minus stroke-width="2"></icon-user-minus>`,
    });

    const svg = createElement(UserMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-user-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-user-minus>
    `);
  });
});
