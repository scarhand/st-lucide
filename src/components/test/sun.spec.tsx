import { newSpecPage } from '@stencil/core/testing';
import { IconSun } from '../sun';
import { createElement, Sun }  from 'lucide';

describe('icon-sun', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSun],
      html: `<icon-sun></icon-sun>`,
    });

    const svg = createElement(Sun);

    expect(page.root).toEqualHtml(`
      <icon-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sun>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSun],
      html: `<icon-sun stroke="blue"></icon-sun>`,
    });

    const svg = createElement(Sun);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sun>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSun],
      html: `<icon-sun stroke-width="2"></icon-sun>`,
    });

    const svg = createElement(Sun);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sun>
    `);
  });
});
