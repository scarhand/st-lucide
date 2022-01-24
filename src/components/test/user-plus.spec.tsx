import { newSpecPage } from '@stencil/core/testing';
import { IconUserPlus } from '../user-plus';
import { createElement, UserPlus }  from 'lucide';

describe('icon-user-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUserPlus],
      html: `<icon-user-plus></icon-user-plus>`,
    });

    const svg = createElement(UserPlus);

    expect(page.root).toEqualHtml(`
      <icon-user-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-user-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserPlus],
      html: `<icon-user-plus stroke="blue"></icon-user-plus>`,
    });

    const svg = createElement(UserPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-user-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-user-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserPlus],
      html: `<icon-user-plus stroke-width="2"></icon-user-plus>`,
    });

    const svg = createElement(UserPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-user-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-user-plus>
    `);
  });
});
