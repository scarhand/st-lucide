import { newSpecPage } from '@stencil/core/testing';
import { IconSkipBack } from '../skip-back';
import { createElement, SkipBack }  from 'lucide';

describe('icon-skip-back', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSkipBack],
      html: `<icon-skip-back></icon-skip-back>`,
    });

    const svg = createElement(SkipBack);

    expect(page.root).toEqualHtml(`
      <icon-skip-back class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-skip-back>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSkipBack],
      html: `<icon-skip-back stroke="blue"></icon-skip-back>`,
    });

    const svg = createElement(SkipBack);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-skip-back class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-skip-back>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSkipBack],
      html: `<icon-skip-back stroke-width="2"></icon-skip-back>`,
    });

    const svg = createElement(SkipBack);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-skip-back class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-skip-back>
    `);
  });
});
