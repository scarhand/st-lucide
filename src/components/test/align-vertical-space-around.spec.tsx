import { newSpecPage } from '@stencil/core/testing';
import { IconAlignVerticalSpaceAround } from '../align-vertical-space-around';
import { createElement, AlignVerticalSpaceAround }  from 'lucide';

describe('icon-align-vertical-space-around', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalSpaceAround],
      html: `<icon-align-vertical-space-around></icon-align-vertical-space-around>`,
    });

    const svg = createElement(AlignVerticalSpaceAround);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-space-around class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-vertical-space-around>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalSpaceAround],
      html: `<icon-align-vertical-space-around stroke="blue"></icon-align-vertical-space-around>`,
    });

    const svg = createElement(AlignVerticalSpaceAround);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-space-around class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-vertical-space-around>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalSpaceAround],
      html: `<icon-align-vertical-space-around stroke-width="2"></icon-align-vertical-space-around>`,
    });

    const svg = createElement(AlignVerticalSpaceAround);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-space-around class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-vertical-space-around>
    `);
  });
});
