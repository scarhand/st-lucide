import { newSpecPage } from '@stencil/core/testing';
import { IconFastForward } from '../fast-forward';
import { createElement, FastForward }  from 'lucide';

describe('icon-fast-forward', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFastForward],
      html: `<icon-fast-forward></icon-fast-forward>`,
    });

    const svg = createElement(FastForward);

    expect(page.root).toEqualHtml(`
      <icon-fast-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-fast-forward>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFastForward],
      html: `<icon-fast-forward stroke="blue"></icon-fast-forward>`,
    });

    const svg = createElement(FastForward);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-fast-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-fast-forward>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFastForward],
      html: `<icon-fast-forward stroke-width="2"></icon-fast-forward>`,
    });

    const svg = createElement(FastForward);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-fast-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-fast-forward>
    `);
  });
});
