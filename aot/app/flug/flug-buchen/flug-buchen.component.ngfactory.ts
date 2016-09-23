/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../app/flug/flug-buchen/flug-buchen.component';
import * as import4 from '../../../../app/flug/services/flug.service';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/router/src/directives/router_link';
import * as import13 from '@angular/router/src/directives/router_outlet';
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/core/src/security';
var renderType_FlugBuchenComponent_Host:import0.RenderComponentType = (null as any);
class _View_FlugBuchenComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _FlugBuchenComponent_0_4:import3.FlugBuchenComponent;
  __FlugService_0_5:import4.FlugService;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_FlugBuchenComponent_Host0,renderType_FlugBuchenComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  get _FlugService_0_5():import4.FlugService {
    if ((this.__FlugService_0_5 == (null as any))) { (this.__FlugService_0_5 = new import4.FlugService(this.parentInjector.get(import9.Http))); }
    return this.__FlugService_0_5;
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_FlugBuchenComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._FlugBuchenComponent_0_4 = new import3.FlugBuchenComponent();
    this._appEl_0.initComponent(this._FlugBuchenComponent_0_4,[],compView_0);
    compView_0.create(this._FlugBuchenComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.FlugBuchenComponent) && (0 === requestNodeIndex))) { return this._FlugBuchenComponent_0_4; }
    if (((token === import4.FlugService) && (0 === requestNodeIndex))) { return this._FlugService_0_5; }
    return notFoundResult;
  }
}
function viewFactory_FlugBuchenComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_FlugBuchenComponent_Host === (null as any))) { (renderType_FlugBuchenComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_FlugBuchenComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const FlugBuchenComponentNgFactory:import11.ComponentFactory<import3.FlugBuchenComponent> = new import11.ComponentFactory<import3.FlugBuchenComponent>('ng-component',viewFactory_FlugBuchenComponent_Host0,import3.FlugBuchenComponent);
const styles_FlugBuchenComponent:any[] = [];
var renderType_FlugBuchenComponent:import0.RenderComponentType = (null as any);
class _View_FlugBuchenComponent0 extends import1.AppView<import3.FlugBuchenComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _el_6:any;
  _RouterLinkWithHref_6_3:import12.RouterLinkWithHref;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _el_11:any;
  _RouterLinkWithHref_11_3:import12.RouterLinkWithHref;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _RouterOutlet_18_5:import13.RouterOutlet;
  _text_19:any;
  _text_20:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  _arr_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_FlugBuchenComponent0,renderType_FlugBuchenComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','col-sm-3');
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','nav nav-pills nav-stacked');
    this.renderer.setElementAttribute(this._el_3,'style','margin-top:20px;');
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'li',(null as any));
    this._el_6 = this.renderer.createElement(this._el_5,'a',(null as any));
    this._RouterLinkWithHref_6_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import14.Router),this.parentInjector.get(import15.ActivatedRoute),this.parentInjector.get(import16.LocationStrategy));
    this._text_7 = this.renderer.createText(this._el_6,'Flug auswählen',(null as any));
    this._text_8 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_3,'li',(null as any));
    this._el_11 = this.renderer.createElement(this._el_10,'a',(null as any));
    this._RouterLinkWithHref_11_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import14.Router),this.parentInjector.get(import15.ActivatedRoute),this.parentInjector.get(import16.LocationStrategy));
    this._text_12 = this.renderer.createText(this._el_11,'Passagier auswählen',(null as any));
    this._text_13 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_15 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_16 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','col-sm-9');
    this._text_17 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_16,'router-outlet',(null as any));
    this._appEl_18 = new import2.AppElement(18,16,this,this._el_18);
    this._RouterOutlet_18_5 = new import13.RouterOutlet(this.parentInjector.get(import17.RouterOutletMap),this._appEl_18.vcRef,this.parentInjector.get(import18.ComponentFactoryResolver),(null as any));
    this._text_19 = this.renderer.createText(this._el_16,'\n',(null as any));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._arr_0 = import5.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_11,'click',this.eventHandler(this._handle_click_11_0.bind(this)));
    this._arr_1 = import5.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.RouterLinkWithHref) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._RouterLinkWithHref_6_3; }
    if (((token === import12.RouterLinkWithHref) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._RouterLinkWithHref_11_3; }
    if (((token === import13.RouterOutlet) && (18 === requestNodeIndex))) { return this._RouterOutlet_18_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0('flug-suchen');
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_6_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_6_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_4:any = this._arr_1('passagier-suchen');
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkWithHref_11_3.routerLink = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_11_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_6_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_6,'href',this.viewUtils.sanitizer.sanitize(import19.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = this._RouterLinkWithHref_11_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_11,'href',this.viewUtils.sanitizer.sanitize(import19.SecurityContext.URL,currVal_5));
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_6_3.ngOnDestroy();
    this._RouterLinkWithHref_11_3.ngOnDestroy();
    this._RouterOutlet_18_5.ngOnDestroy();
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_6_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_11_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_FlugBuchenComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import3.FlugBuchenComponent> {
  if ((renderType_FlugBuchenComponent === (null as any))) { (renderType_FlugBuchenComponent = viewUtils.createRenderComponentType('c:/Users/Manfred/Documents/artikel/Blog/angular2-aot/aot/app/flug/flug-buchen/flug-buchen.component.html',0,import10.ViewEncapsulation.None,styles_FlugBuchenComponent,{})); }
  return new _View_FlugBuchenComponent0(viewUtils,parentInjector,declarationEl);
}