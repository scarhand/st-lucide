import { newSpecPage } from '@stencil/core/testing';
import { IconPlugZap } from '../plug-zap';
import { createElement, PlugZap }  from 'lucide';

describe('icon-plug-zap', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPlugZap],
      html: `<icon-plug-zap></icon-plug-zap>`,
    });

    const svg = createElement(PlugZap);

    expect(page.root).toEqualHtml(`
      <icon-plug-zap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-plug-zap>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlugZap],
      html: `<icon-plug-zap stroke="blue"></icon-plug-zap>`,
    });

    const svg = createElement(PlugZap);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-plug-zap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-plug-zap>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlugZap],
      html: `<icon-plug-zap stroke-width="2"></icon-plug-zap>`,
    });

    const svg = createElement(PlugZap);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-plug-zap class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-plug-zap>
    `);
  });
});
