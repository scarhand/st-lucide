import { newSpecPage } from '@stencil/core/testing';
import { IconTerminal } from '../terminal';
import { createElement, Terminal }  from 'lucide';

describe('icon-terminal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTerminal],
      html: `<icon-terminal></icon-terminal>`,
    });

    const svg = createElement(Terminal);

    expect(page.root).toEqualHtml(`
      <icon-terminal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-terminal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTerminal],
      html: `<icon-terminal stroke="blue"></icon-terminal>`,
    });

    const svg = createElement(Terminal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-terminal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-terminal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTerminal],
      html: `<icon-terminal stroke-width="2"></icon-terminal>`,
    });

    const svg = createElement(Terminal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-terminal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-terminal>
    `);
  });
});
