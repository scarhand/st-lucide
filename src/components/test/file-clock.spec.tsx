import { newSpecPage } from '@stencil/core/testing';
import { IconFileClock } from '../file-clock';
import { createElement, FileClock }  from 'lucide';

describe('icon-file-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileClock],
      html: `<icon-file-clock></icon-file-clock>`,
    });

    const svg = createElement(FileClock);

    expect(page.root).toEqualHtml(`
      <icon-file-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-clock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileClock],
      html: `<icon-file-clock stroke="blue"></icon-file-clock>`,
    });

    const svg = createElement(FileClock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-clock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileClock],
      html: `<icon-file-clock stroke-width="2"></icon-file-clock>`,
    });

    const svg = createElement(FileClock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-clock>
    `);
  });
});
