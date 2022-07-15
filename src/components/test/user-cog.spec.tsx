import { newSpecPage } from '@stencil/core/testing';
import { IconUserCog } from '../user-cog';
import { createElement, UserCog }  from 'lucide';

describe('icon-user-cog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUserCog],
      html: `<icon-user-cog></icon-user-cog>`,
    });

    const svg = createElement(UserCog);

    expect(page.root).toEqualHtml(`
      <icon-user-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-user-cog>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserCog],
      html: `<icon-user-cog stroke="blue"></icon-user-cog>`,
    });

    const svg = createElement(UserCog);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-user-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-user-cog>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUserCog],
      html: `<icon-user-cog stroke-width="2"></icon-user-cog>`,
    });

    const svg = createElement(UserCog);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-user-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-user-cog>
    `);
  });
});
