import { newSpecPage } from '@stencil/core/testing';
import { IconFileInput } from '../file-input';
import { createElement, FileInput }  from 'lucide';

describe('icon-file-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileInput],
      html: `<icon-file-input></icon-file-input>`,
    });

    const svg = createElement(FileInput);

    expect(page.root).toEqualHtml(`
      <icon-file-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-input>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileInput],
      html: `<icon-file-input stroke="blue"></icon-file-input>`,
    });

    const svg = createElement(FileInput);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-input>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileInput],
      html: `<icon-file-input stroke-width="2"></icon-file-input>`,
    });

    const svg = createElement(FileInput);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-input>
    `);
  });
});
