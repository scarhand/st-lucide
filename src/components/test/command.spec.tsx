import { newSpecPage } from '@stencil/core/testing';
import { IconCommand } from '../command';
import { createElement, Command }  from 'lucide';

describe('icon-command', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCommand],
      html: `<icon-command></icon-command>`,
    });

    const svg = createElement(Command);

    expect(page.root).toEqualHtml(`
      <icon-command class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-command>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCommand],
      html: `<icon-command stroke="blue"></icon-command>`,
    });

    const svg = createElement(Command);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-command class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-command>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCommand],
      html: `<icon-command stroke-width="2"></icon-command>`,
    });

    const svg = createElement(Command);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-command class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-command>
    `);
  });
});
