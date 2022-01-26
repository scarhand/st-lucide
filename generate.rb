#!/usr/bin/env ruby

def capitalize(str)
  str.split('-').map(&:capitalize).join
end

def generate(icon)
  content = <<-BODY.chomp
import { Component, Element, h, Host, Prop } from '@stencil/core';
import { #{capitalize(icon)}, createElement } from 'lucide';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-#{icon}'
})
export class Icon#{capitalize(icon)} {
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
    const inner = createElement(#{capitalize(icon)});
    Object.entries(Object.assign({},attributesToObject(this.el), this.getProps())).forEach(([name,value]) => inner.setAttribute(name, value as string) );
    return <Host innerHTML={inner.outerHTML} class="st-lucide-icon"></Host>;
  }

  private getProps() {
    const props = ['color','cursor','cx','cy','d','direction','display','fill','filter','font','height','isolation','marker','mask','opacity','overflow','r','rx','ry','stroke','transform','visibility','width','x','y'];
    return props.reduce((acc, prop) => {
      if(this[prop] !== undefined && this[prop] !== null) {
        acc[prop] = this[prop];
      }
      return acc;
    }, {});
  }
}

BODY
end

icons = %W(activity airplay alarm-check alarm-clock-off alarm-clock alarm-minus alarm-plus album alert-circle alert-octagon alert-triangle align-center align-justify align-left align-right anchor aperture archive arrow-big-down arrow-big-left arrow-big-right arrow-big-up arrow-down-circle arrow-down-left arrow-down-right arrow-down arrow-left-circle arrow-left-right arrow-left arrow-right-circle arrow-right arrow-up-circle arrow-up-left arrow-up-right arrow-up asterisk at-sign award axe banknote bar-chart-2 bar-chart battery-charging battery-full battery-low battery-medium battery beaker bell-minus bell-off bell-plus bell-ring bell bike binary bitcoin bluetooth-connected bluetooth-off bluetooth-searching bluetooth bold book-open book bookmark-minus bookmark-plus bookmark bot box-select box briefcase brush bug building bus calculator calendar camera-off camera car carrot cast check-circle-2 check-circle check-square check chevron-down chevron-first chevron-last chevron-left chevron-right chevron-up chevrons-down-up chevrons-down chevrons-left chevrons-right chevrons-up-down chevrons-up chrome circle-slashed circle clipboard-check clipboard-copy clipboard-list clipboard-x clipboard clock-1 clock-10 clock-11 clock-12 clock-2 clock-3 clock-4 clock-5 clock-6 clock-7 clock-8 clock-9 clock cloud-drizzle cloud-fog cloud-hail cloud-lightning cloud-moon cloud-off cloud-rain-wind cloud-rain cloud-snow cloud-sun cloud cloudy clover code-2 code codepen codesandbox coffee coins columns command compass contact contrast copy copyleft copyright corner-down-left corner-down-right corner-left-down corner-left-up corner-right-down corner-right-up corner-up-left corner-up-right cpu credit-card crop cross crosshair crown currency database delete disc divide-circle divide-square divide dollar-sign download-cloud download dribbble droplet droplets drumstick edit-2 edit-3 edit egg equal-not equal euro expand external-link eye-off eye facebook fast-forward feather figma file-check-2 file-check file-code file-digit file-input file-minus-2 file-minus file-output file-plus-2 file-plus file-search file-text file-x-2 file-x file files film filter flag-triangle-left flag-triangle-right flag flame flashlight-off flashlight flask-conical flask-round folder-minus folder-open folder-plus folder form-input forward framer frown function-square gamepad-2 gamepad gauge gavel gem ghost gift git-branch-plus git-branch git-commit git-merge git-pull-request github gitlab glasses globe-2 globe grab graduation-cap grid grip-horizontal grip-vertical hammer hand-metal hand hard-drive hard-hat hash haze headphones heart help-circle hexagon highlighter history home image-minus image-off image-plus image import inbox indent indian-rupee infinity info inspect instagram italic japanese-yen key landmark languages laptop-2 laptop lasso-select lasso layers layout-dashboard layout-grid layout-list layout-template layout library life-buoy lightbulb-off lightbulb link-2-off link-2 link linkedin list-checks list-minus list-ordered list-plus list-x list loader-2 loader locate-fixed locate lock log-in log-out mail map-pin map maximize-2 maximize megaphone meh menu message-circle message-square mic-off mic minimize-2 minimize minus-circle minus-square minus monitor-off monitor-speaker monitor moon more-horizontal more-vertical mountain-snow mountain mouse-pointer-2 mouse-pointer-click mouse-pointer move-diagonal-2 move-diagonal move-horizontal move-vertical move music navigation-2 navigation network octagon option outdent package palette paperclip pause-circle pause-octagon pause pen-tool pencil percent person-standing phone-call phone-forwarded phone-incoming phone-missed phone-off phone-outgoing phone pie-chart piggy-bank pin pipette plane play-circle play plug-zap plus-circle plus-square plus pocket podcast pointer pound-sterling power-off power printer qr-code quote radio-receiver radio redo refresh-ccw refresh-cw regex repeat-1 repeat reply-all reply rewind rocking-chair rotate-ccw rotate-cw rss ruler russian-ruble save scale scan-line scan scissors screen-share-off screen-share search send separator-horizontal separator-vertical server-crash server-off server settings-2 settings share-2 share sheet shield-alert shield-check shield-close shield-off shield shirt shopping-bag shopping-cart shovel shrink shuffle sidebar-close sidebar-open sidebar sigma signal-high signal-low signal-medium signal-zero signal skip-back skip-forward skull slack slash sliders smartphone-charging smartphone smile snowflake sort-asc sort-desc speaker sprout square star-half star stop-circle strikethrough subscript sun sunrise sunset superscript swiss-franc switch-camera table tablet tag target tent terminal-square terminal thermometer-snowflake thermometer-sun thermometer thumbs-down thumbs-up ticket timer-off timer-reset timer toggle-left toggle-right tornado trash-2 trash trello trending-down trending-up triangle truck tv-2 tv twitch twitter type umbrella underline undo unlink-2 unlink unlock upload-cloud upload user-check user-minus user-plus user-x user users verified vibrate video-off video view voicemail volume-1 volume-2 volume-x volume wallet wand watch webcam wifi-off wifi wind wrap-text wrench x-circle x-octagon x-square x youtube zap-off zap zoom-in zoom-out)
icons.each do |icon|
  file = File.join(File.dirname(__FILE__), "src", "components", "#{icon}.tsx")
  File.open(file, 'w') do |f|
    puts "Generating #{icon} in #{file}..."
    f.write(generate(icon))
    f.flush
  end
end
