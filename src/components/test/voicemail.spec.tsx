import { newSpecPage } from '@stencil/core/testing';
import { IconVoicemail } from '../voicemail';
import { createElement, Voicemail }  from 'lucide';

describe('icon-voicemail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVoicemail],
      html: `<icon-voicemail></icon-voicemail>`,
    });

    const svg = createElement(Voicemail);

    expect(page.root).toEqualHtml(`
      <icon-voicemail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-voicemail>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVoicemail],
      html: `<icon-voicemail stroke="blue"></icon-voicemail>`,
    });

    const svg = createElement(Voicemail);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-voicemail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-voicemail>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVoicemail],
      html: `<icon-voicemail stroke-width="2"></icon-voicemail>`,
    });

    const svg = createElement(Voicemail);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-voicemail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-voicemail>
    `);
  });
});
