import { newSpecPage } from '@stencil/core/testing';
import { IconFileOutput } from '../file-output';
import { createElement, FileOutput }  from 'lucide';

describe('icon-file-output', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileOutput],
      html: `<icon-file-output></icon-file-output>`,
    });

    const svg = createElement(FileOutput);

    expect(page.root).toEqualHtml(`
      <icon-file-output class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-output>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileOutput],
      html: `<icon-file-output stroke="blue"></icon-file-output>`,
    });

    const svg = createElement(FileOutput);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-output class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-output>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileOutput],
      html: `<icon-file-output stroke-width="2"></icon-file-output>`,
    });

    const svg = createElement(FileOutput);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-output class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-output>
    `);
  });
});
