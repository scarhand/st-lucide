import { newSpecPage } from '@stencil/core/testing';
import { IconSkipForward } from '../skip-forward';
import { createElement, SkipForward }  from 'lucide';

describe('icon-skip-forward', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSkipForward],
      html: `<icon-skip-forward></icon-skip-forward>`,
    });

    const svg = createElement(SkipForward);

    expect(page.root).toEqualHtml(`
      <icon-skip-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-skip-forward>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSkipForward],
      html: `<icon-skip-forward stroke="blue"></icon-skip-forward>`,
    });

    const svg = createElement(SkipForward);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-skip-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-skip-forward>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSkipForward],
      html: `<icon-skip-forward stroke-width="2"></icon-skip-forward>`,
    });

    const svg = createElement(SkipForward);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-skip-forward class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-skip-forward>
    `);
  });
});
