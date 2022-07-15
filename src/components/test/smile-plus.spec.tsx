import { newSpecPage } from '@stencil/core/testing';
import { IconSmilePlus } from '../smile-plus';
import { createElement, SmilePlus }  from 'lucide';

describe('icon-smile-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSmilePlus],
      html: `<icon-smile-plus></icon-smile-plus>`,
    });

    const svg = createElement(SmilePlus);

    expect(page.root).toEqualHtml(`
      <icon-smile-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-smile-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSmilePlus],
      html: `<icon-smile-plus stroke="blue"></icon-smile-plus>`,
    });

    const svg = createElement(SmilePlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-smile-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-smile-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSmilePlus],
      html: `<icon-smile-plus stroke-width="2"></icon-smile-plus>`,
    });

    const svg = createElement(SmilePlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-smile-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-smile-plus>
    `);
  });
});
