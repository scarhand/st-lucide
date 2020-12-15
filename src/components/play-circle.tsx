import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-play-circle'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['play-circle'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

