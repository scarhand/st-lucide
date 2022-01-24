import { newSpecPage } from '@stencil/core/testing';
import { IconFiles } from '../files';
import { createElement, Files }  from 'lucide';

describe('icon-files', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFiles],
      html: `<icon-files></icon-files>`,
    });

    const svg = createElement(Files);

    expect(page.root).toEqualHtml(`
      <icon-files class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-files>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFiles],
      html: `<icon-files stroke="blue"></icon-files>`,
    });

    const svg = createElement(Files);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-files class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-files>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFiles],
      html: `<icon-files stroke-width="2"></icon-files>`,
    });

    const svg = createElement(Files);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-files class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-files>
    `);
  });
});
