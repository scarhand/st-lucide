import { newSpecPage } from '@stencil/core/testing';
import { IconLock } from '../lock';
import { createElement, Lock }  from 'lucide';

describe('icon-lock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLock],
      html: `<icon-lock></icon-lock>`,
    });

    const svg = createElement(Lock);

    expect(page.root).toEqualHtml(`
      <icon-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLock],
      html: `<icon-lock stroke="blue"></icon-lock>`,
    });

    const svg = createElement(Lock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLock],
      html: `<icon-lock stroke-width="2"></icon-lock>`,
    });

    const svg = createElement(Lock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lock>
    `);
  });
});
