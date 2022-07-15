import { newSpecPage } from '@stencil/core/testing';
import { IconBone } from '../bone';
import { createElement, Bone }  from 'lucide';

describe('icon-bone', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBone],
      html: `<icon-bone></icon-bone>`,
    });

    const svg = createElement(Bone);

    expect(page.root).toEqualHtml(`
      <icon-bone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bone>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBone],
      html: `<icon-bone stroke="blue"></icon-bone>`,
    });

    const svg = createElement(Bone);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bone>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBone],
      html: `<icon-bone stroke-width="2"></icon-bone>`,
    });

    const svg = createElement(Bone);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bone>
    `);
  });
});
