import { newSpecPage } from '@stencil/core/testing';
import { IconReplyAll } from '../reply-all';
import { createElement, ReplyAll }  from 'lucide';

describe('icon-reply-all', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconReplyAll],
      html: `<icon-reply-all></icon-reply-all>`,
    });

    const svg = createElement(ReplyAll);

    expect(page.root).toEqualHtml(`
      <icon-reply-all class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-reply-all>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconReplyAll],
      html: `<icon-reply-all stroke="blue"></icon-reply-all>`,
    });

    const svg = createElement(ReplyAll);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-reply-all class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-reply-all>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconReplyAll],
      html: `<icon-reply-all stroke-width="2"></icon-reply-all>`,
    });

    const svg = createElement(ReplyAll);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-reply-all class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-reply-all>
    `);
  });
});
