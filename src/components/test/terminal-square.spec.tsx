import { newSpecPage } from '@stencil/core/testing';
import { IconTerminalSquare } from '../terminal-square';
import { createElement, TerminalSquare }  from 'lucide';

describe('icon-terminal-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTerminalSquare],
      html: `<icon-terminal-square></icon-terminal-square>`,
    });

    const svg = createElement(TerminalSquare);

    expect(page.root).toEqualHtml(`
      <icon-terminal-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-terminal-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTerminalSquare],
      html: `<icon-terminal-square stroke="blue"></icon-terminal-square>`,
    });

    const svg = createElement(TerminalSquare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-terminal-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-terminal-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTerminalSquare],
      html: `<icon-terminal-square stroke-width="2"></icon-terminal-square>`,
    });

    const svg = createElement(TerminalSquare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-terminal-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-terminal-square>
    `);
  });
});
