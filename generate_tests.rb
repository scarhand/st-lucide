#!/usr/bin/env ruby

def capitalize(str)
  str.split('-').map(&:capitalize).join
end

def generate_e2e(icon)
  content = <<-BODY.chomp
import { newE2EPage } from '@stencil/core/testing';

describe('icon-#{icon}', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon}></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon} stroke="blue"></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-#{icon} > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon} stroke-width="2"></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-#{icon} > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});

BODY
end

def generate_spec(icon)
  content = <<-BODY.chomp
import { newSpecPage } from '@stencil/core/testing';
import { capitalize(icon) } from '../#{icon}';
import feather from 'feather-icons';

describe('icon-#{icon}', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [capitalize(icon)],
      html: `<icon-#{icon}></icon-#{icon}>`,
    });
    const svg = feather.icons['#{icon}'].toSvg();
    expect(page.root).toEqualHtml(`
      <icon-#{icon} innerhtml="${svg.replaceAll('"', '&quot;')}">
        ${svg}
      </icon-#{icon}
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [capitalize(icon)],
      html: `<icon-#{icon} stroke="blue"></icon-#{icon}>`,
    });
    const svg = feather.icons['#{icon}'].toSvg({stroke: 'blue'});
    expect(page.root).toEqualHtml(`
      <icon-#{icon} innerhtml="${svg.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg}
      </icon-#{icon}
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [capitalize(icon)],
      html: `<icon-#{icon} stroke-width="2"></icon-#{icon}>`,
    });
    const svg = feather.icons['#{icon}'].toSvg({'stroke-width': 2});
    expect(page.root).toEqualHtml(`
      <icon-#{icon} innerhtml="${svg.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg}
      </icon-#{icon}>
    `);
  });
});

BODY
end

icons = %W(activity airplay alert-circle alert-octagon alert-triangle align-center align-justify align-left align-right anchor aperture archive arrow-down-circle arrow-down-left arrow-down-right arrow-down arrow-left-circle arrow-left arrow-right-circle arrow-right arrow-up-circle arrow-up-left arrow-up-right arrow-up at-sign award bar-chart-2 bar-chart battery-charging battery bell-off bell bluetooth bold book-open book bookmark box briefcase calendar camera-off camera cast check-circle check-square check chevron-down chevron-left chevron-right chevron-up chevrons-down chevrons-left chevrons-right chevrons-up chrome circle clipboard clock cloud-drizzle cloud-lightning cloud-off cloud-rain cloud-snow cloud code codepen codesandbox coffee columns command compass copy corner-down-left corner-down-right corner-left-down corner-left-up corner-right-down corner-right-up corner-up-left corner-up-right cpu credit-card crop crosshair database delete disc divide-circle divide-square divide dollar-sign download-cloud download dribbble droplet edit-2 edit-3 edit external-link eye-off eye facebook fast-forward feather figma file-minus file-plus file-text file film filter flag folder-minus folder-plus folder framer frown gift git-branch git-commit git-merge git-pull-request github gitlab globe grid hard-drive hash headphones heart help-circle hexagon home image inbox info instagram italic key layers layout life-buoy link-2 link linkedin list loader lock log-in log-out mail map-pin map maximize-2 maximize meh menu message-circle message-square mic-off mic minimize-2 minimize minus-circle minus-square minus monitor moon more-horizontal more-vertical mouse-pointer move music navigation-2 navigation octagon package paperclip pause-circle pause pen-tool percent phone-call phone-forwarded phone-incoming phone-missed phone-off phone-outgoing phone pie-chart play-circle play plus-circle plus-square plus pocket power printer radio refresh-ccw refresh-cw repeat rewind rotate-ccw rotate-cw rss save scissors search send server settings share-2 share shield-off shield shopping-bag shopping-cart shuffle sidebar skip-back skip-forward slack slash sliders smartphone smile speaker square star stop-circle sun sunrise sunset tablet tag target terminal thermometer thumbs-down thumbs-up toggle-left toggle-right tool trash-2 trash trello trending-down trending-up triangle truck tv twitch twitter type umbrella underline unlock upload-cloud upload user-check user-minus user-plus user-x user users video-off video voicemail volume-1 volume-2 volume-x volume watch wifi-off wifi wind x-circle x-octagon x-square x youtube zap-off zap zoom-in zoom-out)
icons.each do |icon|
  e2e_file = File.join(File.dirname(__FILE__), "src", "components", "test", "#{icon}.e2e.ts")
  File.open(e2e_file, 'w') do |f|
    puts "Generating e2e test for #{icon} in #{e2e_file}..."
    f.write(generate_e2e(icon))
    f.flush
  end
  spec_file = File.join(File.dirname(__FILE__), "src", "components", "test", "#{icon}.spec.tsx")
  File.open(spec_file, 'w') do |f|
    puts "Generating spec test for #{icon} in #{spec_file}..."
    f.write(generate_e2e(icon))
    f.flush
  end
end
