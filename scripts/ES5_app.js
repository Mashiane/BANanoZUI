var _banano_smarthome=new banano_smarthome();var _banano_bananozui_bananoshared=new banano_bananozui_bananoshared();var _banano_smarthome_pgdevice=new banano_smarthome_pgdevice();var _banano_smarthome_pgsearch=new banano_smarthome_pgsearch();var _banano_smarthome_pgsettings=new banano_smarthome_pgsettings();var _banano_smarthome_pgstatus=new banano_smarthome_pgstatus();var _banano_smarthome_pgtv=new banano_smarthome_pgtv();var _banano_smarthome_pgdevices=new banano_smarthome_pgdevices();var _banano_smarthome_pgfamily=new banano_smarthome_pgfamily();var _banano_smarthome_pghome=new banano_smarthome_pghome();var _banano_smarthome_pgindex=new banano_smarthome_pgindex();var _banano_smarthome_pgliving=new banano_smarthome_pgliving();var _banano_smarthome_pglogs=new banano_smarthome_pglogs();var _banano_smarthome_pgrooms=new banano_smarthome_pgrooms();var _banano_smarthome_pgscenes=new banano_smarthome_pgscenes();

/* App */
/* =========================== pgDEVICE  =========================== */
function banano_smarthome_pgdevice() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"device","device");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"deviceview","deviceview");
// [21]  zview.Text = {4} 
_zview.settext("Device");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgSEARCH  =========================== */
function banano_smarthome_pgsearch() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"search","search");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"searchview","searchview");
// [21]  zview.Text = {4} 
_zview.settext("Search");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgSETTINGS  =========================== */
function banano_smarthome_pgsettings() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [10] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview,_els,_elements;
// [12]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [13]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [15]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [17]  comp.Initialize(Me, {2} , {3} ) 
_comp.initialize(_B,"settings","settings");
// [20]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [21]  zview.Initialize(Me, {4} , {5} ) 
_zview.initialize(_B,"settingsview","settingsview");
// [23]  zview.AddText( {6} ).AddBR 
_zview.addtext("Theme").addbr();
// [24]  zview.AddText( {7} ) 
_zview.addtext("{{ $store.mode }} - {{ $store.theme }}");
// [27]  zview.AddDivSlotExtension 
_zview.adddivslotextension();
// [28]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [31]  Dim els As ZUIZspot 
_els= new banano_bananozui_zuizspot();
// [32]  els.Initialize(Me, {8} , {9} ) 
_els.initialize(_B,"settingszpot","settingszpot");
// [34]  els.VFor = {10} 
_els.setvfor("(el, index) in elements");
// [36]  els.Button = True 
_els.setbutton(true);
// [38]  els.Size = zui.SIZE_XS 
_els.setsize(_B._zui._size_xs);
// [39]  els.Distance = 120 
_els.setdistance(120);
// [41]  els.Angle = {11} 
_els.setangle(":el.angle");
// [42]  els.Label = {12} 
_els.setlabel(":el.label");
// [43]  els.LabelPos = {13} 
_els.setlabelpos(":el.labelpos");
// [44]  els.Key = {14} 
_els.setkey(":index");
// [46]  els.AddAttr( {15} , {16} ) 
_els.addattr(":class","getclassname(el)");
// [49]  els.VOnClickNative = {17} 
_els.setvonclicknative("changestyle(el)");
// [51]  els.AddToViewSlot(zview) 
_els.addtoviewslot(_zview);
// [54]  comp.setdata( {18} , {19} ) 
_comp.setdata("theme","Select your theme");
// [56]  comp.setmethod(Me, {20} ) 
_comp.setmethod(_B,"changestyle");
// [57]  comp.setmethod(Me, {21} ) 
_comp.setmethod(_B,"getclassname");
// [59]  Dim elements As List = sh.newlist 
_elements=_B._sh.newlist();
// [60]  elements.add(CreateMap( {22} : {23} , {24} : -50, {25} : {26} , {27} : {28} )) 
_elements.push({"type":"theme", "angle":-50, "label":"blue", "labelpos":"right"});
// [61]  elements.add(CreateMap( {29} : {30} , {31} : -30, {32} : {33} , {34} : {35} )) 
_elements.push({"type":"theme", "angle":-30, "label":"black", "labelpos":"right"});
// [62]  elements.add(CreateMap( {36} : {37} , {38} : -10, {39} : {40} , {41} : {42} )) 
_elements.push({"type":"theme", "angle":-10, "label":"green", "labelpos":"right"});
// [63]  elements.add(CreateMap( {43} : {44} , {45} : 10, {46} : {47} , {48} : {49} )) 
_elements.push({"type":"theme", "angle":10, "label":"red", "labelpos":"right"});
// [64]  elements.add(CreateMap( {50} : {51} , {52} : 30, {53} : {54} , {55} : {56} )) 
_elements.push({"type":"theme", "angle":30, "label":"light-blue", "labelpos":"right"});
// [65]  elements.add(CreateMap( {57} : {58} , {59} : 50, {60} : {61} , {62} : {63} )) 
_elements.push({"type":"theme", "angle":50, "label":"gray", "labelpos":"right"});
// [66]  elements.add(CreateMap( {64} : {65} , {66} : 210, {67} : {68} , {69} : {70} )) 
_elements.push({"type":"mode", "angle":210, "label":"dark", "labelpos":"left"});
// [67]  elements.add(CreateMap( {71} : {72} , {73} : 190, {74} : {75} , {76} : {77} )) 
_elements.push({"type":"mode", "angle":190, "label":"dark-filled", "labelpos":"left"});
// [68]  elements.add(CreateMap( {78} : {79} , {80} : 170, {81} : {82} , {83} : {84} )) 
_elements.push({"type":"mode", "angle":170, "label":"light", "labelpos":"left"});
// [69]  elements.add(CreateMap( {85} : {86} , {87} : 150, {88} : {89} , {90} : {91} )) 
_elements.push({"type":"mode", "angle":150, "label":"light-filled", "labelpos":"left"});
// [71]  comp.SetData( {92} , elements) 
_comp.setdata("elements",_elements);
// [73]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

// [78] Sub changestyle(el As Map) 
this.changestyle=function(_el) {
if (_B==null) _B=this;
var _stheme,_stype;
// [80]  Dim stheme As String = el.get( {93} ) 
_stheme=_el["label"];
// [81]  Dim stype As String = el.Get( {94} ) 
_stype=_el["type"];
// [82]  Select Case stype 
switch ("" + _stype) {
// [83]  Case {95} 
case "" + "theme":
// [85]  sh.SetData( {96} , stheme) 
_B._sh.setdata("theme",_stheme);
// [87]  Case {97} 
break;
case "" + "mode":
// [89]  sh.SetData( {98} , stheme) 
_B._sh.setdata("mode",_stheme);
// [91]  End Select 
break;
}
// End Sub
};

// [96] Sub getclassname(el As Map) As String 
this.getclassname=function(_el) {
if (_B==null) _B=this;
var _stheme,_stype;
// [98]  Dim stheme As String = el.get( {99} ) 
_stheme=_el["label"];
// [99]  Dim stype As String = el.Get( {100} ) 
_stype=_el["type"];
// [100]  Select Case stype 
switch ("" + _stype) {
// [101]  Case {101} 
case "" + "theme":
// [102]  Return {0} 
return "theme-" + _stheme + "";
// [103]  Case {102} 
case "" + "mode":
// [104]  Return {1} 
return "mode-" + _stheme + "";
// [105]  End Select 
}
// End Sub
};

}
/* =========================== pgSTATUS  =========================== */
function banano_smarthome_pgstatus() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"status","status");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"statusview","statussview");
// [21]  zview.Text = {4} 
_zview.settext("Status");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgTV  =========================== */
function banano_smarthome_pgtv() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"tv","tv");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"tvview","tvsview");
// [21]  zview.Text = {4} 
_zview.settext("TV");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgDEVICES  =========================== */
function banano_smarthome_pgdevices() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"devices","devices");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"devicesview","devicesview");
// [21]  zview.Text = {4} 
_zview.settext("Devices");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgFAMILY  =========================== */
function banano_smarthome_pgfamily() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"family","family");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"familyview","familyview");
// [21]  zview.Text = {4} 
_zview.settext("Family");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgHOME  =========================== */
function banano_smarthome_pghome() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview,_status,_family,_scenes,_rooms,_devices,_settings;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"home","home");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"homeview","homeview");
// [21]  zview.AddText( {4} ).AddBR 
_zview.addtext("11:53 PM").addbr();
// [22]  zview.AddText( {5} ).AddBR.AddBR 
_zview.addtext("Monday, Oct.").addbr().addbr();
// [23]  zview.AddElement( {6} , {7} , Null, Null, Null, Null, {8} ).AddBR 
_zview.addelement("","h2",null,null,null,null,"Night mode").addbr();
// [24]  zview.AddText( {9} ).AddBR 
_zview.addtext("Outside 29˚C, sunny").addbr();
// [25]  zview.AddText( {10} ) 
_zview.addtext("Inside 25˚C");
// [27]  zview.AddDivSlotExtension ' the name will be 'homeviewslot' 
_zview.adddivslotextension();
// [28]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [31]  Dim status As ZUIZspot 
_status= new banano_bananozui_zuizspot();
// [32]  status.Initialize(Me, {11} , {12} ) 
_status.initialize(_B,"status","status");
// [33]  status.BackgroundColor = sh.COLOR_ORANGE 
_status.setbackgroundcolor(_B._sh._color_orange);
// [34]  status.BorderWidth = {13} 
_status.setborderwidth("4px");
// [35]  status.BorderColor = {14} 
_status.setbordercolor("var(--background-color)");
// [36]  status.angle = -145 
_status.setangle(-145);
// [37]  status.Size = zui.SIZE_M 
_status.setsize(_B._zui._size_m);
// [38]  status.Distance = 120 
_status.setdistance(120);
// [39]  status.ToView = {15} 
_status.settoview("status");
// [40]  status.AddIcon( {16} , {17} ) 
_status.addicon("var(--accent-text-color)","fas fa-bell");
// [41]  status.AddSpan( {18} , {19} ) 
_status.addspan("var(--accent-text-color)","15");
// [43]  status.AddToViewSlot(zview) 
_status.addtoviewslot(_zview);
// [46]  Dim family As ZUIZspot 
_family= new banano_bananozui_zuizspot();
// [47]  family.Initialize(Me, {20} , {21} ) 
_family.initialize(_B,"family","family");
// [48]  family.angle = -30 
_family.setangle(-30);
// [49]  family.Size = zui.SIZE_S 
_family.setsize(_B._zui._size_s);
// [50]  family.Distance = 120 
_family.setdistance(120);
// [51]  family.Label = {22} 
_family.setlabel("Family");
// [52]  family.labelpos = zui.POS_RIGHT 
_family.setlabelpos(_B._zui._pos_right);
// [53]  family.ToView = {23} 
_family.settoview("family");
// [54]  family.AddIcon( {24} , {25} ) 
_family.addicon("","fa fa-map-marker-alt");
// [55]  family.AddToViewSlot(zview) 
_family.addtoviewslot(_zview);
// [58]  Dim scenes As ZUIZspot 
_scenes= new banano_bananozui_zuizspot();
// [59]  scenes.Initialize(Me, {26} , {27} ) 
_scenes.initialize(_B,"scenes","scenes");
// [60]  scenes.Angle = 0 
_scenes.setangle(0);
// [61]  scenes.Size = zui.SIZE_S 
_scenes.setsize(_B._zui._size_s);
// [62]  scenes.Distance = 120 
_scenes.setdistance(120);
// [63]  scenes.label = {28} 
_scenes.setlabel("Scenes");
// [64]  scenes.LabelPos = zui.POS_RIGHT 
_scenes.setlabelpos(_B._zui._pos_right);
// [65]  scenes.ToView = {29} 
_scenes.settoview("scenes");
// [66]  scenes.Text = {30} 
_scenes.settext("4");
// [67]  scenes.AddToViewSlot(zview) 
_scenes.addtoviewslot(_zview);
// [70]  Dim rooms As ZUIZspot 
_rooms= new banano_bananozui_zuizspot();
// [71]  rooms.Initialize(Me, {31} , {32} ) 
_rooms.initialize(_B,"rooms","rooms");
// [72]  rooms.Angle = 30 
_rooms.setangle(30);
// [73]  rooms.size = zui.size_s 
_rooms.setsize(_B._zui._size_s);
// [74]  rooms.Distance = 120 
_rooms.setdistance(120);
// [75]  rooms.label = {33} 
_rooms.setlabel("Rooms");
// [76]  rooms.LabelPos = zui.POS_RIGHT 
_rooms.setlabelpos(_B._zui._pos_right);
// [77]  rooms.toview = {34} 
_rooms.settoview("rooms");
// [78]  rooms.Text = {35} 
_rooms.settext("5");
// [79]  rooms.AddToViewSlot(zview) 
_rooms.addtoviewslot(_zview);
// [82]  Dim devices As ZUIZspot 
_devices= new banano_bananozui_zuizspot();
// [83]  devices.Initialize(Me, {36} , {37} ) 
_devices.initialize(_B,"devices","devices");
// [84]  devices.Angle = 60 
_devices.setangle(60);
// [85]  devices.Distance = 120 
_devices.setdistance(120);
// [86]  devices.size = zui.SIZE_S 
_devices.setsize(_B._zui._size_s);
// [87]  devices.label = {38} 
_devices.setlabel("Devices");
// [88]  devices.LabelPos = zui.POS_RIGHT 
_devices.setlabelpos(_B._zui._pos_right);
// [89]  devices.toview = {39} 
_devices.settoview("Devices");
// [90]  devices.Text = {40} 
_devices.settext("45");
// [91]  devices.AddToViewSlot(zview) 
_devices.addtoviewslot(_zview);
// [94]  Dim settings As ZUIZspot 
_settings= new banano_bananozui_zuizspot();
// [95]  settings.Initialize(Me, {41} , {42} ) 
_settings.initialize(_B,"settings","settings");
// [96]  settings.Angle = 150 
_settings.setangle(150);
// [97]  settings.Distance = 120 
_settings.setdistance(120);
// [98]  settings.Size = zui.SIZE_S 
_settings.setsize(_B._zui._size_s);
// [99]  settings.Label = {43} 
_settings.setlabel("Settings");
// [100]  settings.ToView = {44} 
_settings.settoview("settings");
// [101]  settings.AddIcon( {45} , {46} ) 
_settings.addicon("","fas fa-sliders-h");
// [102]  settings.AddToViewSlot(zview) 
_settings.addtoviewslot(_zview);
// [105]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgIndex  =========================== */
function banano_smarthome_pgindex() {
var _B;
this._myapp= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [11] Sub Init 
this.init=function() {
if (_B==null) _B=this;
// [12]  MyApp.Initialize(Me) 
_B._myapp.initialize(_B);
// [14]  MyApp.SetData( {0} , {1} ) 
_B._myapp.setdata("theme","black");
// [15]  MyApp.SetData( {2} , {3} ) 
_B._myapp.setdata("mode","dark");
// [17]  pgHOME.Initialize 
_banano_smarthome_pghome.initialize();
// [18]  pgDEVICE.Initialize 
_banano_smarthome_pgdevice.initialize();
// [19]  pgDEVICES.Initialize 
_banano_smarthome_pgdevices.initialize();
// [20]  pgFAMILY.Initialize 
_banano_smarthome_pgfamily.initialize();
// [21]  pgLIVING.Initialize 
_banano_smarthome_pgliving.initialize();
// [22]  pgLOGS.Initialize 
_banano_smarthome_pglogs.initialize();
// [23]  pgROOMS.Initialize 
_banano_smarthome_pgrooms.initialize();
// [24]  pgSCENES.Initialize 
_banano_smarthome_pgscenes.initialize();
// [25]  pgSEARCH.Initialize 
_banano_smarthome_pgsearch.initialize();
// [26]  pgSETTINGS.Initialize 
_banano_smarthome_pgsettings.initialize();
// [27]  pgSTATUS.Initialize 
_banano_smarthome_pgstatus.initialize();
// [28]  pgTV.Initialize 
_banano_smarthome_pgtv.initialize();
// [35]  MyApp.SetWatch(Me, {4} , True, True, {5} ) 
_B._myapp.setwatch(_B,"theme",true,true,"themechanged");
// [36]  MyApp.SetWatch(Me, {6} , True, True, {7} ) 
_B._myapp.setwatch(_B,"mode",true,true,"modechanged");
// [39]  MyApp.Serve 
_B._myapp.serve();
// [41]  zui = MyApp.zui 
_B._zui=_B._myapp._zui;
// [46]  zui.SetFullMode 
_B._zui.setfullmode();
// [53]  zui.SetView( {8} ) 
_B._zui.setview("home");
// End Sub
};

// [57] Sub themechanged 
this.themechanged=function() {
if (_B==null) _B=this;
var _stheme;
// [58]  Try 
try {
// [60]  Dim stheme As String = MyApp.GetData( {9} ) 
_stheme=_B._myapp.getdata("theme");
// [62]  zui.SetTheme(stheme).refresh 
_B._zui.settheme(_stheme).refresh();
// [63]  Catch 
} catch(err) {
// [64]  Log( {10} ) 
console.log("Error: themechanged");
// [65]  End Try 
}
// End Sub
};

// [69] Sub modechanged 
this.modechanged=function() {
if (_B==null) _B=this;
var _smode;
// [70]  Try 
try {
// [72]  Dim smode As String = MyApp.GetData( {11} ) 
_smode=_B._myapp.getdata("mode");
// [74]  zui.SetMode(smode).refresh 
_B._zui.setmode(_smode).refresh();
// [75]  Catch 
} catch(err) {
// [76]  Log( {12} ) 
console.log("Error: modechanged");
// [77]  End Try 
}
// End Sub
};

}
/* =========================== pgLIVING  =========================== */
function banano_smarthome_pgliving() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"living","living");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"livingview","livingview");
// [21]  zview.Text = {4} 
_zview.settext("Living");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgLOGS  =========================== */
function banano_smarthome_pglogs() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"logs","logs");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"logsview","logsview");
// [21]  zview.Text = {4} 
_zview.settext("Logs");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgROOMS  =========================== */
function banano_smarthome_pgrooms() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"rooms","rooms");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"roomsview","roomsview");
// [21]  zview.Text = {4} 
_zview.settext("Rooms");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgSCENES  =========================== */
function banano_smarthome_pgscenes() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"scenes","scenes");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"scenesview","scenesview");
// [21]  zview.Text = {4} 
_zview.settext("Scenes");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== SmartHome  =========================== */
function banano_smarthome() {
var _B;
this._appname="ZUISmartHome";

this._version="1.00";

this._apptitle="ZUI SmartHome";

this._publish="C:\laragon\www";

this._serverip="localhost";

this._port="8080";

// [72] Sub BANano_Ready() 
this.banano_ready=function() {
if (_B==null) _B=this;
// [73]  pgIndex.init 
_banano_smarthome_pgindex.init();
// End Sub
};

}
/* =========================== fileobject  =========================== */
function banano_bananozui_fileobject() {
var _B=this;
_B._filename="";

_B._filedate="";

_B._filesize=0;

_B._filetype="";

// [0] public sub initialize
_B.initialize=function() {
// End Sub
};

}
/* =========================== pgDEVICE  =========================== */
function banano_smarthome_pgdevice() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"device","device");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"deviceview","deviceview");
// [21]  zview.Text = {4} 
_zview.settext("Device");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgSEARCH  =========================== */
function banano_smarthome_pgsearch() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"search","search");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"searchview","searchview");
// [21]  zview.Text = {4} 
_zview.settext("Search");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgSETTINGS  =========================== */
function banano_smarthome_pgsettings() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [10] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview,_els,_elements;
// [12]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [13]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [15]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [17]  comp.Initialize(Me, {2} , {3} ) 
_comp.initialize(_B,"settings","settings");
// [20]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [21]  zview.Initialize(Me, {4} , {5} ) 
_zview.initialize(_B,"settingsview","settingsview");
// [23]  zview.AddText( {6} ).AddBR 
_zview.addtext("Theme").addbr();
// [24]  zview.AddText( {7} ) 
_zview.addtext("{{ $store.mode }} - {{ $store.theme }}");
// [27]  zview.AddDivSlotExtension 
_zview.adddivslotextension();
// [28]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [31]  Dim els As ZUIZspot 
_els= new banano_bananozui_zuizspot();
// [32]  els.Initialize(Me, {8} , {9} ) 
_els.initialize(_B,"settingszpot","settingszpot");
// [34]  els.VFor = {10} 
_els.setvfor("(el, index) in elements");
// [36]  els.Button = True 
_els.setbutton(true);
// [38]  els.Size = zui.SIZE_XS 
_els.setsize(_B._zui._size_xs);
// [39]  els.Distance = 120 
_els.setdistance(120);
// [41]  els.Angle = {11} 
_els.setangle(":el.angle");
// [42]  els.Label = {12} 
_els.setlabel(":el.label");
// [43]  els.LabelPos = {13} 
_els.setlabelpos(":el.labelpos");
// [44]  els.Key = {14} 
_els.setkey(":index");
// [46]  els.AddAttr( {15} , {16} ) 
_els.addattr(":class","getclassname(el)");
// [49]  els.VOnClickNative = {17} 
_els.setvonclicknative("changestyle(el)");
// [51]  els.AddToViewSlot(zview) 
_els.addtoviewslot(_zview);
// [54]  comp.setdata( {18} , {19} ) 
_comp.setdata("theme","Select your theme");
// [56]  comp.setmethod(Me, {20} ) 
_comp.setmethod(_B,"changestyle");
// [57]  comp.setmethod(Me, {21} ) 
_comp.setmethod(_B,"getclassname");
// [59]  Dim elements As List = sh.newlist 
_elements=_B._sh.newlist();
// [60]  elements.add(CreateMap( {22} : {23} , {24} : -50, {25} : {26} , {27} : {28} )) 
_elements.push({"type":"theme", "angle":-50, "label":"blue", "labelpos":"right"});
// [61]  elements.add(CreateMap( {29} : {30} , {31} : -30, {32} : {33} , {34} : {35} )) 
_elements.push({"type":"theme", "angle":-30, "label":"black", "labelpos":"right"});
// [62]  elements.add(CreateMap( {36} : {37} , {38} : -10, {39} : {40} , {41} : {42} )) 
_elements.push({"type":"theme", "angle":-10, "label":"green", "labelpos":"right"});
// [63]  elements.add(CreateMap( {43} : {44} , {45} : 10, {46} : {47} , {48} : {49} )) 
_elements.push({"type":"theme", "angle":10, "label":"red", "labelpos":"right"});
// [64]  elements.add(CreateMap( {50} : {51} , {52} : 30, {53} : {54} , {55} : {56} )) 
_elements.push({"type":"theme", "angle":30, "label":"light-blue", "labelpos":"right"});
// [65]  elements.add(CreateMap( {57} : {58} , {59} : 50, {60} : {61} , {62} : {63} )) 
_elements.push({"type":"theme", "angle":50, "label":"gray", "labelpos":"right"});
// [66]  elements.add(CreateMap( {64} : {65} , {66} : 210, {67} : {68} , {69} : {70} )) 
_elements.push({"type":"mode", "angle":210, "label":"dark", "labelpos":"left"});
// [67]  elements.add(CreateMap( {71} : {72} , {73} : 190, {74} : {75} , {76} : {77} )) 
_elements.push({"type":"mode", "angle":190, "label":"dark-filled", "labelpos":"left"});
// [68]  elements.add(CreateMap( {78} : {79} , {80} : 170, {81} : {82} , {83} : {84} )) 
_elements.push({"type":"mode", "angle":170, "label":"light", "labelpos":"left"});
// [69]  elements.add(CreateMap( {85} : {86} , {87} : 150, {88} : {89} , {90} : {91} )) 
_elements.push({"type":"mode", "angle":150, "label":"light-filled", "labelpos":"left"});
// [71]  comp.SetData( {92} , elements) 
_comp.setdata("elements",_elements);
// [73]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

// [78] Sub changestyle(el As Map) 
this.changestyle=function(_el) {
if (_B==null) _B=this;
var _stheme,_stype;
// [80]  Dim stheme As String = el.get( {93} ) 
_stheme=_el["label"];
// [81]  Dim stype As String = el.Get( {94} ) 
_stype=_el["type"];
// [82]  Select Case stype 
switch ("" + _stype) {
// [83]  Case {95} 
case "" + "theme":
// [85]  sh.SetData( {96} , stheme) 
_B._sh.setdata("theme",_stheme);
// [87]  Case {97} 
break;
case "" + "mode":
// [89]  sh.SetData( {98} , stheme) 
_B._sh.setdata("mode",_stheme);
// [91]  End Select 
break;
}
// End Sub
};

// [96] Sub getclassname(el As Map) As String 
this.getclassname=function(_el) {
if (_B==null) _B=this;
var _stheme,_stype;
// [98]  Dim stheme As String = el.get( {99} ) 
_stheme=_el["label"];
// [99]  Dim stype As String = el.Get( {100} ) 
_stype=_el["type"];
// [100]  Select Case stype 
switch ("" + _stype) {
// [101]  Case {101} 
case "" + "theme":
// [102]  Return {0} 
return "theme-" + _stheme + "";
// [103]  Case {102} 
case "" + "mode":
// [104]  Return {1} 
return "mode-" + _stheme + "";
// [105]  End Select 
}
// End Sub
};

}
/* =========================== pgSTATUS  =========================== */
function banano_smarthome_pgstatus() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"status","status");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"statusview","statussview");
// [21]  zview.Text = {4} 
_zview.settext("Status");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgTV  =========================== */
function banano_smarthome_pgtv() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"tv","tv");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"tvview","tvsview");
// [21]  zview.Text = {4} 
_zview.settext("TV");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgDEVICES  =========================== */
function banano_smarthome_pgdevices() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"devices","devices");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"devicesview","devicesview");
// [21]  zview.Text = {4} 
_zview.settext("Devices");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgFAMILY  =========================== */
function banano_smarthome_pgfamily() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"family","family");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"familyview","familyview");
// [21]  zview.Text = {4} 
_zview.settext("Family");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgHOME  =========================== */
function banano_smarthome_pghome() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview,_status,_family,_scenes,_rooms,_devices,_settings;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"home","home");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"homeview","homeview");
// [21]  zview.AddText( {4} ).AddBR 
_zview.addtext("11:53 PM").addbr();
// [22]  zview.AddText( {5} ).AddBR.AddBR 
_zview.addtext("Monday, Oct.").addbr().addbr();
// [23]  zview.AddElement( {6} , {7} , Null, Null, Null, Null, {8} ).AddBR 
_zview.addelement("","h2",null,null,null,null,"Night mode").addbr();
// [24]  zview.AddText( {9} ).AddBR 
_zview.addtext("Outside 29˚C, sunny").addbr();
// [25]  zview.AddText( {10} ) 
_zview.addtext("Inside 25˚C");
// [27]  zview.AddDivSlotExtension ' the name will be 'homeviewslot' 
_zview.adddivslotextension();
// [28]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [31]  Dim status As ZUIZspot 
_status= new banano_bananozui_zuizspot();
// [32]  status.Initialize(Me, {11} , {12} ) 
_status.initialize(_B,"status","status");
// [33]  status.BackgroundColor = sh.COLOR_ORANGE 
_status.setbackgroundcolor(_B._sh._color_orange);
// [34]  status.BorderWidth = {13} 
_status.setborderwidth("4px");
// [35]  status.BorderColor = {14} 
_status.setbordercolor("var(--background-color)");
// [36]  status.angle = -145 
_status.setangle(-145);
// [37]  status.Size = zui.SIZE_M 
_status.setsize(_B._zui._size_m);
// [38]  status.Distance = 120 
_status.setdistance(120);
// [39]  status.ToView = {15} 
_status.settoview("status");
// [40]  status.AddIcon( {16} , {17} ) 
_status.addicon("var(--accent-text-color)","fas fa-bell");
// [41]  status.AddSpan( {18} , {19} ) 
_status.addspan("var(--accent-text-color)","15");
// [43]  status.AddToViewSlot(zview) 
_status.addtoviewslot(_zview);
// [46]  Dim family As ZUIZspot 
_family= new banano_bananozui_zuizspot();
// [47]  family.Initialize(Me, {20} , {21} ) 
_family.initialize(_B,"family","family");
// [48]  family.angle = -30 
_family.setangle(-30);
// [49]  family.Size = zui.SIZE_S 
_family.setsize(_B._zui._size_s);
// [50]  family.Distance = 120 
_family.setdistance(120);
// [51]  family.Label = {22} 
_family.setlabel("Family");
// [52]  family.labelpos = zui.POS_RIGHT 
_family.setlabelpos(_B._zui._pos_right);
// [53]  family.ToView = {23} 
_family.settoview("family");
// [54]  family.AddIcon( {24} , {25} ) 
_family.addicon("","fa fa-map-marker-alt");
// [55]  family.AddToViewSlot(zview) 
_family.addtoviewslot(_zview);
// [58]  Dim scenes As ZUIZspot 
_scenes= new banano_bananozui_zuizspot();
// [59]  scenes.Initialize(Me, {26} , {27} ) 
_scenes.initialize(_B,"scenes","scenes");
// [60]  scenes.Angle = 0 
_scenes.setangle(0);
// [61]  scenes.Size = zui.SIZE_S 
_scenes.setsize(_B._zui._size_s);
// [62]  scenes.Distance = 120 
_scenes.setdistance(120);
// [63]  scenes.label = {28} 
_scenes.setlabel("Scenes");
// [64]  scenes.LabelPos = zui.POS_RIGHT 
_scenes.setlabelpos(_B._zui._pos_right);
// [65]  scenes.ToView = {29} 
_scenes.settoview("scenes");
// [66]  scenes.Text = {30} 
_scenes.settext("4");
// [67]  scenes.AddToViewSlot(zview) 
_scenes.addtoviewslot(_zview);
// [70]  Dim rooms As ZUIZspot 
_rooms= new banano_bananozui_zuizspot();
// [71]  rooms.Initialize(Me, {31} , {32} ) 
_rooms.initialize(_B,"rooms","rooms");
// [72]  rooms.Angle = 30 
_rooms.setangle(30);
// [73]  rooms.size = zui.size_s 
_rooms.setsize(_B._zui._size_s);
// [74]  rooms.Distance = 120 
_rooms.setdistance(120);
// [75]  rooms.label = {33} 
_rooms.setlabel("Rooms");
// [76]  rooms.LabelPos = zui.POS_RIGHT 
_rooms.setlabelpos(_B._zui._pos_right);
// [77]  rooms.toview = {34} 
_rooms.settoview("rooms");
// [78]  rooms.Text = {35} 
_rooms.settext("5");
// [79]  rooms.AddToViewSlot(zview) 
_rooms.addtoviewslot(_zview);
// [82]  Dim devices As ZUIZspot 
_devices= new banano_bananozui_zuizspot();
// [83]  devices.Initialize(Me, {36} , {37} ) 
_devices.initialize(_B,"devices","devices");
// [84]  devices.Angle = 60 
_devices.setangle(60);
// [85]  devices.Distance = 120 
_devices.setdistance(120);
// [86]  devices.size = zui.SIZE_S 
_devices.setsize(_B._zui._size_s);
// [87]  devices.label = {38} 
_devices.setlabel("Devices");
// [88]  devices.LabelPos = zui.POS_RIGHT 
_devices.setlabelpos(_B._zui._pos_right);
// [89]  devices.toview = {39} 
_devices.settoview("Devices");
// [90]  devices.Text = {40} 
_devices.settext("45");
// [91]  devices.AddToViewSlot(zview) 
_devices.addtoviewslot(_zview);
// [94]  Dim settings As ZUIZspot 
_settings= new banano_bananozui_zuizspot();
// [95]  settings.Initialize(Me, {41} , {42} ) 
_settings.initialize(_B,"settings","settings");
// [96]  settings.Angle = 150 
_settings.setangle(150);
// [97]  settings.Distance = 120 
_settings.setdistance(120);
// [98]  settings.Size = zui.SIZE_S 
_settings.setsize(_B._zui._size_s);
// [99]  settings.Label = {43} 
_settings.setlabel("Settings");
// [100]  settings.ToView = {44} 
_settings.settoview("settings");
// [101]  settings.AddIcon( {45} , {46} ) 
_settings.addicon("","fas fa-sliders-h");
// [102]  settings.AddToViewSlot(zview) 
_settings.addtoviewslot(_zview);
// [105]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgIndex  =========================== */
function banano_smarthome_pgindex() {
var _B;
this._myapp= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [11] Sub Init 
this.init=function() {
if (_B==null) _B=this;
// [12]  MyApp.Initialize(Me) 
_B._myapp.initialize(_B);
// [14]  MyApp.SetData( {0} , {1} ) 
_B._myapp.setdata("theme","black");
// [15]  MyApp.SetData( {2} , {3} ) 
_B._myapp.setdata("mode","dark");
// [17]  pgHOME.Initialize 
_banano_smarthome_pghome.initialize();
// [18]  pgDEVICE.Initialize 
_banano_smarthome_pgdevice.initialize();
// [19]  pgDEVICES.Initialize 
_banano_smarthome_pgdevices.initialize();
// [20]  pgFAMILY.Initialize 
_banano_smarthome_pgfamily.initialize();
// [21]  pgLIVING.Initialize 
_banano_smarthome_pgliving.initialize();
// [22]  pgLOGS.Initialize 
_banano_smarthome_pglogs.initialize();
// [23]  pgROOMS.Initialize 
_banano_smarthome_pgrooms.initialize();
// [24]  pgSCENES.Initialize 
_banano_smarthome_pgscenes.initialize();
// [25]  pgSEARCH.Initialize 
_banano_smarthome_pgsearch.initialize();
// [26]  pgSETTINGS.Initialize 
_banano_smarthome_pgsettings.initialize();
// [27]  pgSTATUS.Initialize 
_banano_smarthome_pgstatus.initialize();
// [28]  pgTV.Initialize 
_banano_smarthome_pgtv.initialize();
// [35]  MyApp.SetWatch(Me, {4} , True, True, {5} ) 
_B._myapp.setwatch(_B,"theme",true,true,"themechanged");
// [36]  MyApp.SetWatch(Me, {6} , True, True, {7} ) 
_B._myapp.setwatch(_B,"mode",true,true,"modechanged");
// [39]  MyApp.Serve 
_B._myapp.serve();
// [41]  zui = MyApp.zui 
_B._zui=_B._myapp._zui;
// [46]  zui.SetFullMode 
_B._zui.setfullmode();
// [53]  zui.SetView( {8} ) 
_B._zui.setview("home");
// End Sub
};

// [57] Sub themechanged 
this.themechanged=function() {
if (_B==null) _B=this;
var _stheme;
// [58]  Try 
try {
// [60]  Dim stheme As String = MyApp.GetData( {9} ) 
_stheme=_B._myapp.getdata("theme");
// [62]  zui.SetTheme(stheme).refresh 
_B._zui.settheme(_stheme).refresh();
// [63]  Catch 
} catch(err) {
// [64]  Log( {10} ) 
console.log("Error: themechanged");
// [65]  End Try 
}
// End Sub
};

// [69] Sub modechanged 
this.modechanged=function() {
if (_B==null) _B=this;
var _smode;
// [70]  Try 
try {
// [72]  Dim smode As String = MyApp.GetData( {11} ) 
_smode=_B._myapp.getdata("mode");
// [74]  zui.SetMode(smode).refresh 
_B._zui.setmode(_smode).refresh();
// [75]  Catch 
} catch(err) {
// [76]  Log( {12} ) 
console.log("Error: modechanged");
// [77]  End Try 
}
// End Sub
};

}
/* =========================== pgLIVING  =========================== */
function banano_smarthome_pgliving() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"living","living");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"livingview","livingview");
// [21]  zview.Text = {4} 
_zview.settext("Living");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgLOGS  =========================== */
function banano_smarthome_pglogs() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"logs","logs");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"logsview","logsview");
// [21]  zview.Text = {4} 
_zview.settext("Logs");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgROOMS  =========================== */
function banano_smarthome_pgrooms() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"rooms","rooms");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"roomsview","roomsview");
// [21]  zview.Text = {4} 
_zview.settext("Rooms");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== pgSCENES  =========================== */
function banano_smarthome_pgscenes() {
var _B;
this._sh= new banano_bananozui_vueapp();

this._zui= new banano_bananozui_zircleui();

// [9] Sub Initialize 
this.initialize=function() {
if (_B==null) _B=this;
var _comp,_zview;
// [11]  sh = pgIndex.myapp 
_B._sh=_banano_smarthome_pgindex._myapp;
// [12]  zui = pgIndex.zui 
_B._zui=_banano_smarthome_pgindex._zui;
// [14]  Dim comp As VMElement 
_comp= new banano_bananozui_vmelement();
// [16]  comp.Initialize(Me, {0} , {1} ) 
_comp.initialize(_B,"scenes","scenes");
// [19]  Dim zview As ZUIZview 
_zview= new banano_bananozui_zuizview();
// [20]  zview.Initialize(Me, {2} , {3} ) 
_zview.initialize(_B,"scenesview","scenesview");
// [21]  zview.Text = {4} 
_zview.settext("Scenes");
// [22]  zview.AddToPlaceholder 
_zview.addtoplaceholder();
// [26]  sh.AddComponentZUI(comp) 
_B._sh.addcomponentzui(_comp);
// End Sub
};

}
/* =========================== SmartHome  =========================== */
function banano_smarthome() {
var _B;
this._appname="ZUISmartHome";

this._version="1.00";

this._apptitle="ZUI SmartHome";

this._publish="C:\laragon\www";

this._serverip="localhost";

this._port="8080";

// [72] Sub BANano_Ready() 
this.banano_ready=function() {
if (_B==null) _B=this;
// [73]  pgIndex.init 
_banano_smarthome_pgindex.init();
// End Sub
};

}
/* =========================== fileobject  =========================== */
function banano_bananozui_fileobject() {
var _B=this;
_B._filename="";

_B._filedate="";

_B._filesize=0;

_B._filetype="";

// [0] public sub initialize
_B.initialize=function() {
// End Sub
};

}
var BANLive=1595797906813;u('#body').html("");var BANversion=1595797906813;_banano_smarthome.banano_ready();