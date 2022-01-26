import { newSpecPage } from '@stencil/core/testing';
import { IconWrench } from '../wrench';
import { createElement, Wrench }  from 'lucide';

describe('icon-wrench', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWrench],
      html: `<icon-wrench></icon-wrench>`,
    });

    const svg = createElement(Wrench);

    expect(page.root).toEqualHtml(`
      <icon-wrench class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wrench>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWrench],
      html: `<icon-wrench stroke="blue"></icon-wrench>`,
    });

    const svg = createElement(Wrench);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wrench class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wrench>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWrench],
      html: `<icon-wrench stroke-width="2"></icon-wrench>`,
    });

    const svg = createElement(Wrench);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wrench class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wrench>
    `);
  });
});
