import { newSpecPage } from '@stencil/core/testing';
import { IconPauseCircle } from '../pause-circle';
import { createElement, PauseCircle }  from 'lucide';

describe('icon-pause-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPauseCircle],
      html: `<icon-pause-circle></icon-pause-circle>`,
    });

    const svg = createElement(PauseCircle);

    expect(page.root).toEqualHtml(`
      <icon-pause-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pause-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPauseCircle],
      html: `<icon-pause-circle stroke="blue"></icon-pause-circle>`,
    });

    const svg = createElement(PauseCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pause-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pause-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPauseCircle],
      html: `<icon-pause-circle stroke-width="2"></icon-pause-circle>`,
    });

    const svg = createElement(PauseCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pause-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pause-circle>
    `);
  });
});
