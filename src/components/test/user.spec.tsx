import { newSpecPage } from '@stencil/core/testing';
import { IconUser } from '../user';
import { createElement, User }  from 'lucide';

describe('icon-user', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUser],
      html: `<icon-user></icon-user>`,
    });

    const svg = createElement(User);

    expect(page.root).toEqualHtml(`
      <icon-user class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-user>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUser],
      html: `<icon-user stroke="blue"></icon-user>`,
    });

    const svg = createElement(User);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-user class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-user>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUser],
      html: `<icon-user stroke-width="2"></icon-user>`,
    });

    const svg = createElement(User);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-user class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-user>
    `);
  });
});
