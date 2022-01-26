import { newSpecPage } from '@stencil/core/testing';
import { IconHardDrive } from '../hard-drive';
import { createElement, HardDrive }  from 'lucide';

describe('icon-hard-drive', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHardDrive],
      html: `<icon-hard-drive></icon-hard-drive>`,
    });

    const svg = createElement(HardDrive);

    expect(page.root).toEqualHtml(`
      <icon-hard-drive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-hard-drive>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHardDrive],
      html: `<icon-hard-drive stroke="blue"></icon-hard-drive>`,
    });

    const svg = createElement(HardDrive);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-hard-drive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-hard-drive>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHardDrive],
      html: `<icon-hard-drive stroke-width="2"></icon-hard-drive>`,
    });

    const svg = createElement(HardDrive);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-hard-drive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-hard-drive>
    `);
  });
});
