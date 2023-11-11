"use strict";(self.webpackChunkdealer_stock_management=self.webpackChunkdealer_stock_management||[]).push([[422],{6422:(C,g,d)=>{d.r(g),d.d(g,{DealerModule:()=>Z});var s=d(6814),l=d(95),u=d(4382),p=d(3628),e=d(9468),m=d(8806);function f(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"li")(1,"div",18)(2,"div")(3,"strong"),e._uU(4,"Name:"),e.qZA(),e._uU(5),e.qZA(),e.TgZ(6,"div")(7,"strong"),e._uU(8,"Email:"),e.qZA(),e._uU(9),e.qZA(),e.TgZ(10,"div")(11,"strong"),e._uU(12,"Contact Number:"),e.qZA(),e._uU(13),e.qZA(),e.TgZ(14,"div")(15,"strong"),e._uU(16,"Address:"),e.qZA(),e._uU(17),e.qZA(),e.TgZ(18,"div")(19,"strong"),e._uU(20,"Created/Update Date:"),e.qZA(),e._uU(21),e.ALo(22,"date"),e.qZA()(),e.TgZ(23,"div",19)(24,"button",20),e.NdJ("click",function(){const a=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.editDealer(a))}),e._uU(25,"Edit"),e.qZA()()()}if(2&n){const t=c.$implicit;e.xp6(5),e.hij(" ",t.name," "),e.xp6(4),e.hij(" ",t.email," "),e.xp6(4),e.hij(" ",t.contactNo," "),e.xp6(4),e.hij(" ",t.address," "),e.xp6(4),e.hij(" ",e.xi3(22,5,t.createdDate,"dd.MM.yyyy HH:mm:ss")," ")}}const b=function(n,c,t){return{"background-color":n,color:c,cursor:t}},h=[{path:"",component:(()=>{class n{constructor(t){this.dealerService=t,this.dealers=[],this.dealer={id:0,name:"",address:"",contactNo:"",email:"",createdDate:""},this.isEditing=!1}ngOnInit(){this.loadDealers()}loadDealers(){this.dealerService.getDealers().subscribe(t=>{this.dealers=t})}viewDealer(t){}editDealer(t){this.isEditing=!0,this.dealer={...t}}submitForm(){const t=(0,p.p)(new Date);this.dealer.createdDate=t,this.isEditing?this.dealerService.updateDealer(this.dealer).subscribe(()=>{this.loadDealers(),this.resetForm()}):this.dealerService.addDealer(this.dealer).subscribe(r=>{this.dealers.push(r),this.resetForm()})}resetForm(){this.dealer={id:0,name:"",address:"",contactNo:"",email:"",createdDate:""},this.isEditing=!1}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(m.X))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-dealer"]],decls:43,vars:13,consts:[[1,"dealer-container"],[1,"dealer-list"],[4,"ngFor","ngForOf"],[1,"dealer-form"],[3,"ngSubmit"],["dealerForm","ngForm"],[1,"form-group"],[1,"flex"],["for","name"],[1,"required-label"],["type","text","id","name","name","name","required","",3,"ngModel","ngModelChange"],["for","email"],["type","email","id","email","name","email","required","",3,"ngModel","ngModelChange"],["for","contactNo"],["type","text","id","contactNo","name","contactNo","required","",3,"ngModel","ngModelChange"],["for","address"],["type","text","id","address","name","address","required","",3,"ngModel","ngModelChange"],["type","submit",3,"ngStyle","disabled"],[1,"dealer-info"],[1,"dealer-actions"],[3,"click"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Dealer Details"),e.qZA(),e.TgZ(3,"div",1)(4,"h3"),e._uU(5,"Dealer List"),e.qZA(),e.TgZ(6,"ul"),e.YNc(7,f,26,8,"li",2),e.qZA()(),e.TgZ(8,"div",3)(9,"h3"),e._uU(10),e.qZA(),e.TgZ(11,"form",4,5),e.NdJ("ngSubmit",function(){return o.submitForm()}),e.TgZ(13,"div",6)(14,"div",7)(15,"label",8),e._uU(16,"Name:"),e.qZA(),e.TgZ(17,"label",9),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"input",10),e.NdJ("ngModelChange",function(i){return o.dealer.name=i}),e.qZA()(),e.TgZ(20,"div",6)(21,"div",7)(22,"label",11),e._uU(23,"Email:"),e.qZA(),e.TgZ(24,"label",9),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"input",12),e.NdJ("ngModelChange",function(i){return o.dealer.email=i}),e.qZA()(),e.TgZ(27,"div",6)(28,"div",7)(29,"label",13),e._uU(30,"Contact Number:"),e.qZA(),e.TgZ(31,"label",9),e._uU(32,"*"),e.qZA()(),e.TgZ(33,"input",14),e.NdJ("ngModelChange",function(i){return o.dealer.contactNo=i}),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label",15),e._uU(37,"Address:"),e.qZA(),e.TgZ(38,"label",9),e._uU(39,"*"),e.qZA()(),e.TgZ(40,"input",16),e.NdJ("ngModelChange",function(i){return o.dealer.address=i}),e.qZA()(),e.TgZ(41,"button",17),e._uU(42),e.qZA()()()()),2&r){const a=e.MAs(12);e.xp6(7),e.Q6J("ngForOf",o.dealers),e.xp6(3),e.Oqu(o.isEditing?"Edit Dealer":"Add Dealer"),e.xp6(9),e.Q6J("ngModel",o.dealer.name),e.xp6(7),e.Q6J("ngModel",o.dealer.email),e.xp6(7),e.Q6J("ngModel",o.dealer.contactNo),e.xp6(7),e.Q6J("ngModel",o.dealer.address),e.xp6(1),e.Q6J("ngStyle",e.kEZ(9,b,a.form.valid?"#428bca ":"#ddd",a.form.valid?"white":"#666",a.form.valid?"pointer":"not-allowed"))("disabled",!a.form.valid),e.xp6(1),e.Oqu(o.isEditing?"Update Dealer":"Add Dealer")}},dependencies:[s.sg,s.PC,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.On,l.F,s.uU],styles:[".dealer-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px}h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:20px}.dealer-list[_ngcontent-%COMP%]{border:1px solid #e1e1e1;padding:10px;border-radius:5px;margin-bottom:20px;background-color:#f9f9f9}.dealer-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-bottom:10px}ul[_ngcontent-%COMP%]{list-style:none;padding:0}li[_ngcontent-%COMP%]{margin:10px 0;display:flex;justify-content:space-between;align-items:center;padding:10px;background-color:#fff;border:1px solid #dcdcdc;border-radius:5px;box-shadow:0 2px 4px #0000001a}button[_ngcontent-%COMP%]{background-color:#428bca;color:#fff;border:none;border-radius:4px;padding:5px 10px;cursor:pointer;font-size:14px}button[_ngcontent-%COMP%]:hover{background-color:#357ebd}.dealer-form[_ngcontent-%COMP%]{border:1px solid #e1e1e1;padding:20px;border-radius:5px;background-color:#fff}.dealer-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-bottom:20px}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-weight:700}input[type=text][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dcdcdc;border-radius:4px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{background-color:#5bc0de;color:#fff;border:none;border-radius:4px;padding:10px 20px;cursor:pointer;font-size:16px}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#46b8da}"]})}return n})()}];let _=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(h),u.Bz]})}return n})(),Z=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[s.ez,l.u5,_]})}return n})()}}]);