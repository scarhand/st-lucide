import { newSpecPage } from '@stencil/core/testing';
import { IconFileQuestion } from '../file-question';
import { createElement, FileQuestion }  from 'lucide';

describe('icon-file-question', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileQuestion],
      html: `<icon-file-question></icon-file-question>`,
    });

    const svg = createElement(FileQuestion);

    expect(page.root).toEqualHtml(`
      <icon-file-question class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-question>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileQuestion],
      html: `<icon-file-question stroke="blue"></icon-file-question>`,
    });

    const svg = createElement(FileQuestion);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-question class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-question>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileQuestion],
      html: `<icon-file-question stroke-width="2"></icon-file-question>`,
    });

    const svg = createElement(FileQuestion);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-question class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-question>
    `);
  });
});
