import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-folder-plus'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['folder-plus'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

