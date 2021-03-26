#!/usr/bin/env ruby

def capitalize(str)
  str.split('-').map(&:capitalize).join
end

def generate(icon)
  content = <<-BODY.chomp
import { Component, Element, h, Host, Prop } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-#{icon}'
})
export class #{capitalize(icon)} {
  @Element() el: any;

  @Prop({ attribute: 'alignment-baseline' }) alignmentBaseline: any;
  @Prop({ attribute: 'baseline-shift' }) baselineShift: any;
  @Prop({ attribute: 'clip-path' }) clipPath: any;
  @Prop({ attribute: 'clip-rule' }) clipRule: any;
  @Prop({ attribute: 'color' }) color: any;
  @Prop({ attribute: 'color-interpolation' }) colorInterpolation: any;
  @Prop({ attribute: 'color-interpolation-filters' }) colorInterpolationFilters: any;
  @Prop({ attribute: 'color-rendering' }) colorRendering: any;
  @Prop({ attribute: 'cursor' }) cursor: any;
  @Prop({ attribute: 'cx' }) cx: any;
  @Prop({ attribute: 'cy' }) cy: any;
  @Prop({ attribute: 'd' }) d: any;
  @Prop({ attribute: 'direction' }) direction: any;
  @Prop({ attribute: 'display' }) display: any;
  @Prop({ attribute: 'dominant-baseline' }) dominantBaseline: any;
  @Prop({ attribute: 'fill' }) fill: any;
  @Prop({ attribute: 'fill-opacity' }) fillOpacity: any;
  @Prop({ attribute: 'fill-rule' }) fillRule: any;
  @Prop({ attribute: 'filter' }) filter: any;
  @Prop({ attribute: 'flood-color' }) floodColor: any;
  @Prop({ attribute: 'flood-opacity' }) floodOpacity: any;
  @Prop({ attribute: 'font' }) font: any;
  @Prop({ attribute: 'font-family' }) fontFamily: any;
  @Prop({ attribute: 'font-kerning' }) fontKerning: any;
  @Prop({ attribute: 'font-size' }) fontSize: any;
  @Prop({ attribute: 'font-size-adjust' }) fontSizeAdjust: any;
  @Prop({ attribute: 'font-stretch' }) fontStretch: any;
  @Prop({ attribute: 'font-style' }) fontStyle: any;
  @Prop({ attribute: 'font-variant' }) fontVariant: any;
  @Prop({ attribute: 'font-weight' }) fontWeight: any;
  @Prop({ attribute: 'height' }) height: any;
  @Prop({ attribute: 'image-rendering' }) imageRendering: any;
  @Prop({ attribute: 'isolation' }) isolation: any;
  @Prop({ attribute: 'letter-spacing' }) letterSpacing: any;
  @Prop({ attribute: 'lighting-color' }) lightingColor: any;
  @Prop({ attribute: 'marker' }) marker: any;
  @Prop({ attribute: 'marker-end' }) markerEnd: any;
  @Prop({ attribute: 'marker-mid' }) markerMid: any;
  @Prop({ attribute: 'marker-start' }) markerStart: any;
  @Prop({ attribute: 'mask' }) mask: any;
  @Prop({ attribute: 'mask-clip' }) maskClip: any;
  @Prop({ attribute: 'mask-composite' }) maskComposite: any;
  @Prop({ attribute: 'mask-image' }) maskImage: any;
  @Prop({ attribute: 'mask-mode' }) maskMode: any;
  @Prop({ attribute: 'mask-origin' }) maskOrigin: any;
  @Prop({ attribute: 'mask-position' }) maskPosition: any;
  @Prop({ attribute: 'mask-repeat' }) maskRepeat: any;
  @Prop({ attribute: 'mask-size' }) maskSize: any;
  @Prop({ attribute: 'mask-type' }) maskType: any;
  @Prop({ attribute: 'opacity' }) opacity: any;
  @Prop({ attribute: 'overflow' }) overflow: any;
  @Prop({ attribute: 'pointer-events' }) pointerEvents: any;
  @Prop({ attribute: 'r' }) r: any;
  @Prop({ attribute: 'rx' }) rx: any;
  @Prop({ attribute: 'ry' }) ry: any;
  @Prop({ attribute: 'shape-rendering' }) shapeRendering: any;
  @Prop({ attribute: 'stop-color' }) stopColor: any;
  @Prop({ attribute: 'stop-opacity' }) stopOpacity: any;
  @Prop({ attribute: 'stroke' }) stroke: any;
  @Prop({ attribute: 'stroke-dasharray' }) strokeDasharray: any;
  @Prop({ attribute: 'stroke-dashoffset' }) strokeDashoffset: any;
  @Prop({ attribute: 'stroke-linecap' }) strokeLinecap: any;
  @Prop({ attribute: 'stroke-linejoin' }) strokeLinejoin: any;
  @Prop({ attribute: 'stroke-miterlimit' }) strokeMiterlimit: any;
  @Prop({ attribute: 'stroke-opacity' }) strokeOpacity: any;
  @Prop({ attribute: 'stroke-width' }) strokeWidth: any;
  @Prop({ attribute: 'text-anchor' }) textAnchor: any;
  @Prop({ attribute: 'text-decoration' }) textDecoration: any;
  @Prop({ attribute: 'text-orientation' }) textOrientation: any;
  @Prop({ attribute: 'text-rendering' }) textRendering: any;
  @Prop({ attribute: 'transform' }) transform: any;
  @Prop({ attribute: 'transform-box' }) transformBox: any;
  @Prop({ attribute: 'transform-origin' }) transformOrigin: any;
  @Prop({ attribute: 'unicode-bidi' }) unicodeBidi: any;
  @Prop({ attribute: 'visibility' }) visibility: any;
  @Prop({ attribute: 'width' }) width: any;
  @Prop({ attribute: 'word-spacing' }) wordSpacing: any;
  @Prop({ attribute: 'writing-mode' }) writingMode: any;
  @Prop({ attribute: 'x' }) x: any;
  @Prop({ attribute: 'y' }) y: any;

  render() {
    return <Host innerHTML={feather.icons['#{icon}'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

BODY
end

icons = %W(activity airplay alert-circle alert-octagon alert-triangle align-center align-justify align-left align-right anchor aperture archive arrow-down-circle arrow-down-left arrow-down-right arrow-down arrow-left-circle arrow-left arrow-right-circle arrow-right arrow-up-circle arrow-up-left arrow-up-right arrow-up at-sign award bar-chart-2 bar-chart battery-charging battery bell-off bell bluetooth bold book-open book bookmark box briefcase calendar camera-off camera cast check-circle check-square check chevron-down chevron-left chevron-right chevron-up chevrons-down chevrons-left chevrons-right chevrons-up chrome circle clipboard clock cloud-drizzle cloud-lightning cloud-off cloud-rain cloud-snow cloud code codepen codesandbox coffee columns command compass copy corner-down-left corner-down-right corner-left-down corner-left-up corner-right-down corner-right-up corner-up-left corner-up-right cpu credit-card crop crosshair database delete disc divide-circle divide-square divide dollar-sign download-cloud download dribbble droplet edit-2 edit-3 edit external-link eye-off eye facebook fast-forward feather figma file-minus file-plus file-text file film filter flag folder-minus folder-plus folder framer frown gift git-branch git-commit git-merge git-pull-request github gitlab globe grid hard-drive hash headphones heart help-circle hexagon home image inbox info instagram italic key layers layout life-buoy link-2 link linkedin list loader lock log-in log-out mail map-pin map maximize-2 maximize meh menu message-circle message-square mic-off mic minimize-2 minimize minus-circle minus-square minus monitor moon more-horizontal more-vertical mouse-pointer move music navigation-2 navigation octagon package paperclip pause-circle pause pen-tool percent phone-call phone-forwarded phone-incoming phone-missed phone-off phone-outgoing phone pie-chart play-circle play plus-circle plus-square plus pocket power printer radio refresh-ccw refresh-cw repeat rewind rotate-ccw rotate-cw rss save scissors search send server settings share-2 share shield-off shield shopping-bag shopping-cart shuffle sidebar skip-back skip-forward slack slash sliders smartphone smile speaker square star stop-circle sun sunrise sunset tablet tag target terminal thermometer thumbs-down thumbs-up toggle-left toggle-right tool trash-2 trash trello trending-down trending-up triangle truck tv twitch twitter type umbrella underline unlock upload-cloud upload user-check user-minus user-plus user-x user users video-off video voicemail volume-1 volume-2 volume-x volume watch wifi-off wifi wind x-circle x-octagon x-square x youtube zap-off zap zoom-in zoom-out)
icons.each do |icon|
  file = File.join(File.dirname(__FILE__), "src", "components", "#{icon}.tsx")
  File.open(file, 'w') do |f|
    puts "Generating #{icon} in #{file}..."
    f.write(generate(icon))
    f.flush
  end
end
