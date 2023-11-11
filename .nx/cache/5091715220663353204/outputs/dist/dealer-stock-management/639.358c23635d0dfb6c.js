"use strict";(self.webpackChunkdealer_stock_management=self.webpackChunkdealer_stock_management||[]).push([[639],{4639:(U,u,c)=>{c.r(u),c.d(u,{PartManagementModule:()=>P});var d=c(6814),l=c(95),p=c(4382),m=c(3628),t=c(9468),g=c(8806),h=c(965),_=c(2624),f=c(9862);let C=(()=>{class a{constructor(e){this.http=e,this.baseUrl="http://localhost:3000/cart"}getPartsByDealerId(e){return this.http.get(`${this.baseUrl}/parts?dealerId=${e}`)}addToCart(e,n,r){return this.http.post(`${this.baseUrl}/cart`,{partId:e,mechanicId:n,quantity:r})}getCartItems(){return this.http.get(`${this.baseUrl}`)}getCartItemsByDealer(e){return this.http.get(`${this.baseUrl}?dealerId=${e}`)}removeFromCart(e){return this.http.delete(`${this.baseUrl}/${e}`)}saveCartItems(e){return this.http.post(`${this.baseUrl}`,e)}static#t=this.\u0275fac=function(n){return new(n||a)(t.LFG(f.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Z=c(87);function M(a,o){if(1&a&&(t.TgZ(0,"option",11),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function x(a,o){if(1&a&&(t.TgZ(0,"option",11),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}const v=function(a,o,e){return{"background-color":a,color:o,cursor:e}};function y(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"strong"),t._uU(3,"Name:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"div",14)(6,"p")(7,"strong"),t._uU(8,"Description:"),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"p")(11,"strong"),t._uU(12,"Stock Quantity:"),t.qZA(),t._uU(13),t.ALo(14,"decimalSpace"),t.ALo(15,"number"),t.qZA(),t.TgZ(16,"label",15),t._uU(17,"Select Mechanic:"),t.qZA(),t.TgZ(18,"select",16),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.mechanicId=r)}),t.TgZ(19,"option",17),t._uU(20,"Select a Mechanic"),t.qZA(),t.YNc(21,x,2,2,"option",5),t.qZA(),t.TgZ(22,"div",18)(23,"label",15),t._uU(24,"Quantity:"),t.qZA(),t.TgZ(25,"div",19)(26,"button",20),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.decrementQuantity(i))}),t._uU(27,"-"),t.qZA(),t.TgZ(28,"span",21),t._uU(29),t.qZA(),t.TgZ(30,"button",20),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.incrementQuantity(i))}),t._uU(31,"+"),t.qZA()()(),t.TgZ(32,"button",22),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.addToCart(i))}),t._uU(33,"Add to Cart"),t.qZA()()()}if(2&a){const e=o.$implicit,n=t.oxw();t.xp6(4),t.hij(" ",e.part.name," "),t.xp6(5),t.hij(" ",e.part.description,""),t.xp6(4),t.hij(" ",t.lcZ(14,11,t.lcZ(15,13,e.part.stockQuantity)),""),t.xp6(3),t.MGl("for","mechanicSelect",e.part.id,""),t.xp6(2),t.MGl("id","mechanicSelect",e.part.id,""),t.Q6J("ngModel",e.mechanicId),t.xp6(3),t.Q6J("ngForOf",n.mechanics),t.xp6(2),t.MGl("for","quantityInput",e.part.id,""),t.xp6(6),t.Oqu(e.quantity),t.xp6(3),t.Q6J("ngStyle",t.kEZ(15,v,e.mechanicId&&e.quantity>0?"#428bca ":"#ddd",e.mechanicId&&e.quantity>0?"white":"#666",e.mechanicId&&e.quantity>0?"pointer":"not-allowed"))("disabled",!(e.mechanicId&&e.quantity>0))}}function q(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td")(13,"button",23),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.deleteCartItem(i))}),t._uU(14,"Delete"),t.qZA()()()}if(2&a){const e=o.$implicit,n=t.oxw();t.xp6(2),t.Oqu(n.getDealerName(e.dealerId)),t.xp6(2),t.Oqu(e.part.name),t.xp6(2),t.Oqu(n.getMechanicName(e.mechanicId)),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.Oqu(t.xi3(11,5,e.createdDate,"dd.MM.yyyy HH:mm:ss"))}}const b=[{path:"",component:(()=>{class a{constructor(e,n,r,i){this.dealerService=e,this.partService=n,this.mechanicService=r,this.partManagementService=i,this.dealers=[],this.parts=[],this.mechanics=[],this.filteredParts=[],this.selectedMechanic=null,this.selectedQuantity=null,this.selectedPart=null,this.cart=[],this.selectedDealerId=0,this.cartManagement=[]}ngOnInit(){this.loadDealers(),this.loadParts(),this.loadMechanics()}loadDealers(){this.dealerService.getDealers().subscribe(e=>{this.dealers=e})}loadParts(){this.partService.getParts().subscribe(e=>{this.parts=e})}loadMechanics(){this.mechanicService.getMechanics().subscribe(e=>{this.mechanics=e})}onDealerChange(e){this.selectedDealerId=e.target.value,this.filteredParts=this.parts.filter(n=>n.dealerId==this.selectedDealerId),this.cartManagement=[],this.clearCart(),this.loadCartItems()}addToCart(e){if(e&&e.mechanicId>0&&e.quantity>0){this.selectedMechanic=null,this.selectedQuantity=null,this.selectedPart=null;const r=(0,m.p)(new Date);e.createdDate=r,this.partManagementService.saveCartItems(e).subscribe(i=>{this.loadCartItems(),this.cartManagement=[],this.clearCart()},i=>{})}}getMechanicName(e){const n=this.mechanics.find(r=>r.id==e);return n?n.name:""}getDealerName(e){const n=this.dealers.find(r=>r.id==e);return n?n.name:""}clearCart(){this.filteredParts=this.parts.filter(e=>e.dealerId==this.selectedDealerId),this.cartManagement=[],this.filteredParts.forEach(e=>{this.cartManagement.push({part:e,mechanicId:0,dealerId:this.selectedDealerId,quantity:0})})}loadCartItems(){this.cart=[],this.partManagementService.getCartItemsByDealer(this.selectedDealerId).subscribe(e=>{this.cart=e},e=>{console.error("Error loading cart items:",e)})}deleteCartItem(e){const n=this.cart.indexOf(e);-1!==n&&(this.cart.splice(n,1),this.partManagementService.removeFromCart(e.id).subscribe(r=>{},r=>{}))}incrementQuantity(e){e.quantity<e.part.stockQuantity&&e.quantity++}decrementQuantity(e){e.quantity>1&&e.quantity--}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(g.X),t.Y36(h.H),t.Y36(_.p),t.Y36(C))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-part-management"]],decls:35,vars:3,consts:[[1,"part-management-container"],[1,"dealer-selection"],["for","dealerSelect"],["id","dealerSelect",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"part-list"],[1,"card-container"],["class","part-card",4,"ngFor","ngForOf"],[1,"cart-details"],[4,"ngFor","ngForOf"],[3,"value"],[1,"part-card"],[1,"card-header"],[1,"card-body"],[3,"for"],[3,"id","ngModel","ngModelChange"],["value","0","disabled",""],[1,"quantity-input"],[1,"input-group"],[1,"quantity-btn",3,"click"],[1,"quantity-label"],[3,"ngStyle","disabled","click"],[3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Part Management (Transaction Screen)"),t.qZA(),t.TgZ(3,"div",1)(4,"label",2),t._uU(5,"Select Dealer:"),t.qZA(),t.TgZ(6,"select",3),t.NdJ("change",function(s){return r.onDealerChange(s)}),t.TgZ(7,"option",4),t._uU(8,"Select a Dealer"),t.qZA(),t.YNc(9,M,2,2,"option",5),t.qZA()(),t.TgZ(10,"div",6)(11,"h3"),t._uU(12,"Parts Available"),t.qZA(),t.TgZ(13,"div",7),t.YNc(14,y,34,19,"div",8),t.qZA()(),t.TgZ(15,"div",9)(16,"h3"),t._uU(17,"Cart Details"),t.qZA(),t.TgZ(18,"table")(19,"thead")(20,"tr")(21,"th"),t._uU(22,"Dealer"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Part Name"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Mechanic Name"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Quantity"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Date"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"Action"),t.qZA()()(),t.TgZ(33,"tbody"),t.YNc(34,q,15,8,"tr",10),t.qZA()()()()),2&n&&(t.xp6(9),t.Q6J("ngForOf",r.dealers),t.xp6(5),t.Q6J("ngForOf",r.cartManagement),t.xp6(20),t.Q6J("ngForOf",r.cart))},dependencies:[d.sg,d.PC,l.YN,l.Kr,l.EJ,l.JJ,l.On,d.JJ,d.uU,Z.m],styles:[".part-management-container[_ngcontent-%COMP%]{padding:20px;background-color:#fff}.dealer-selection[_ngcontent-%COMP%], .part-list[_ngcontent-%COMP%]{margin-bottom:20px}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.part-card[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:8px;margin:10px;padding:10px}.add-to-cart[_ngcontent-%COMP%], .cart-details[_ngcontent-%COMP%]{margin-bottom:20px}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:left}th[_ngcontent-%COMP%]{background-color:#f2f2f2}.quantity-input[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:10px}.input-group[_ngcontent-%COMP%]{display:flex;margin-left:10px}button[_ngcontent-%COMP%]{cursor:pointer}.quantity-input[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:41px;margin-bottom:12px}.input-group[_ngcontent-%COMP%]{display:flex;align-items:center}.quantity-btn[_ngcontent-%COMP%]{padding:5px 10px;margin:0 5px;font-size:16px;background-color:#428bca;color:#fff;border:none;border-radius:5px;cursor:pointer}.quantity-btn[_ngcontent-%COMP%]:hover{background-color:#3071a9}.quantity-label[_ngcontent-%COMP%]{margin:0 5px;font-size:16px}"]})}return a})()}];let T=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(b),p.Bz]})}return a})();var A=c(1383);let P=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[d.ez,l.u5,T,A.m]})}return a})()}}]);