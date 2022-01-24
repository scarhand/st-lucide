import { newSpecPage } from '@stencil/core/testing';
import { IconLogIn } from '../log-in';
import { createElement, LogIn }  from 'lucide';

describe('icon-log-in', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLogIn],
      html: `<icon-log-in></icon-log-in>`,
    });

    const svg = createElement(LogIn);

    expect(page.root).toEqualHtml(`
      <icon-log-in class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-log-in>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLogIn],
      html: `<icon-log-in stroke="blue"></icon-log-in>`,
    });

    const svg = createElement(LogIn);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-log-in class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-log-in>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLogIn],
      html: `<icon-log-in stroke-width="2"></icon-log-in>`,
    });

    const svg = createElement(LogIn);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-log-in class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-log-in>
    `);
  });
});
