import { newSpecPage } from '@stencil/core/testing';
import { IconSave } from '../save';
import { createElement, Save }  from 'lucide';

describe('icon-save', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSave],
      html: `<icon-save></icon-save>`,
    });

    const svg = createElement(Save);

    expect(page.root).toEqualHtml(`
      <icon-save class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-save>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSave],
      html: `<icon-save stroke="blue"></icon-save>`,
    });

    const svg = createElement(Save);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-save class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-save>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSave],
      html: `<icon-save stroke-width="2"></icon-save>`,
    });

    const svg = createElement(Save);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-save class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-save>
    `);
  });
});
