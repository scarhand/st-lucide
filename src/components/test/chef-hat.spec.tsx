import { newSpecPage } from '@stencil/core/testing';
import { IconChefHat } from '../chef-hat';
import { createElement, ChefHat }  from 'lucide';

describe('icon-chef-hat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChefHat],
      html: `<icon-chef-hat></icon-chef-hat>`,
    });

    const svg = createElement(ChefHat);

    expect(page.root).toEqualHtml(`
      <icon-chef-hat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chef-hat>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChefHat],
      html: `<icon-chef-hat stroke="blue"></icon-chef-hat>`,
    });

    const svg = createElement(ChefHat);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chef-hat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chef-hat>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChefHat],
      html: `<icon-chef-hat stroke-width="2"></icon-chef-hat>`,
    });

    const svg = createElement(ChefHat);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chef-hat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chef-hat>
    `);
  });
});
