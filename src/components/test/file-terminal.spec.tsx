import { newSpecPage } from '@stencil/core/testing';
import { IconFileTerminal } from '../file-terminal';
import { createElement, FileTerminal }  from 'lucide';

describe('icon-file-terminal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileTerminal],
      html: `<icon-file-terminal></icon-file-terminal>`,
    });

    const svg = createElement(FileTerminal);

    expect(page.root).toEqualHtml(`
      <icon-file-terminal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-terminal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileTerminal],
      html: `<icon-file-terminal stroke="blue"></icon-file-terminal>`,
    });

    const svg = createElement(FileTerminal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-terminal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-terminal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileTerminal],
      html: `<icon-file-terminal stroke-width="2"></icon-file-terminal>`,
    });

    const svg = createElement(FileTerminal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-terminal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-terminal>
    `);
  });
});
