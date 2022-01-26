import { newSpecPage } from '@stencil/core/testing';
import { IconFormInput } from '../form-input';
import { createElement, FormInput }  from 'lucide';

describe('icon-form-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFormInput],
      html: `<icon-form-input></icon-form-input>`,
    });

    const svg = createElement(FormInput);

    expect(page.root).toEqualHtml(`
      <icon-form-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-form-input>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFormInput],
      html: `<icon-form-input stroke="blue"></icon-form-input>`,
    });

    const svg = createElement(FormInput);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-form-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-form-input>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFormInput],
      html: `<icon-form-input stroke-width="2"></icon-form-input>`,
    });

    const svg = createElement(FormInput);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-form-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-form-input>
    `);
  });
});
