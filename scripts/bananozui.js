

/* bananozui */
/* =========================== BANanoShared  =========================== */
function banano_bananozui_bananoshared() {
var _B;
// [7] Sub NewList As List 
this.newlist=function() {
if (_B==null) _B=this;
var _elx;
// [8]  Dim elx As List 
_elx=[];
// [9]  elx.Initialize 
_elx.length=0;
// [10]  Return elx 
return _elx;
// End Sub
};

// [14] Sub BuildPHPEmail(sfrom As String, sto As String, scc As String, ssubject As String, smsg As String) As Map 
this.buildphpemail=function(_sfrom,_sto,_scc,_ssubject,_smsg) {
if (_B==null) _B=this;
var _se;
// [15]  Dim se As Map = CreateMap( {24} :sfrom, {25} :sto, {26} :scc, {27} :ssubject, {28} :smsg) 
_se={"from":_sfrom, "to":_sto, "cc":_scc, "subject":_ssubject, "msg":_smsg};
// [16]  Return se 
return _se;
// End Sub
};

// [20] Sub GetIDFromEvent(e As BANanoEvent) As String 
this.getidfromevent=function(_e) {
if (_B==null) _B=this;
var _cureve,_id;
// [21]  Dim curEve As BANanoElement = BANano.ToElement(e.OtherField( {29} )) 
_cureve=u(_e["currentTarget"]);
// [22]  Dim ID As String = curEve.GetField( {30} ).Result 
_id=_cureve.nodes[0]["id"];
// [23]  Return ID 
return _id;
// End Sub
};

// [27] Sub GetKeyFromEvent(e As BANanoEvent) As String 
this.getkeyfromevent=function(_e) {
if (_B==null) _B=this;
var _cureve,_id;
// [28]  Dim curEve As BANanoElement = BANano.ToElement(e.OtherField( {31} )) 
_cureve=u(_e["currentTarget"]);
// [29]  Dim ID As String = curEve.GetField( {32} ).Result 
_id=_cureve.nodes[0]["key"];
// [30]  Return ID 
return _id;
// End Sub
};

// [33] Sub GetEventTargetProperty(e As BANanoEvent, prop As String) As String 
this.geteventtargetproperty=function(_e,_prop) {
if (_B==null) _B=this;
var _sid;
// [34]  Dim sid As String = e.OtherField( {33} ).GetField(prop).Result 
_sid=_e["target"][_prop];
// [35]  Return sid 
return _sid;
// End Sub
};

// [38] Sub GetFileListFromTarget(e As BANanoEvent) As List 
this.getfilelistfromtarget=function(_e) {
if (_B==null) _B=this;
var _files;
// [39]  Dim files As List = e.OtherField( {34} ).GetField( {35} ).Result 
_files=_e["target"]["files"];
// [40]  Return files 
return _files;
// End Sub
};

// [44] Sub BeautifyName(idName As String) As String 
this.beautifyname=function(_idname) {
if (_B==null) _B=this;
var _ls,_slen,_i,_mout,_sname;
// [45]  idName = idName.trim 
_idname=_idname.trim();
// [46]  If idName = {36} Then Return {37} 
if (_idname=="") { return "";}
// [47]  Dim ls As StringBuilder 
_ls=new StringBuilder();
// [48]  ls.Initialize 
_ls.init();
_ls.isinitialized=true;
// [49]  Dim slen As Int = idName.Length 
_slen=_idname.length;
// [50]  Dim i As Int = 0 
_i=0;
// [51]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [52]  Dim mout As String = idName.CharAt(i) 
_mout=_idname.charAt(_i);
// [53]  If {38} .IndexOf(mout) = -1 Then 
if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".indexOf(_mout)==-1) {
// [54]  ls.Append( {39} ) 
_ls.append("-");
// [55]  Else 
} else {
// [56]  ls.Append(mout) 
_ls.append(_mout);
// [57]  End If 
}
// [58]  Next 
}
// [59]  Dim sname As String = ls.tostring 
_sname=_ls.toString();
// [60]  sname = ProperSubName(sname, False) 
_sname=_B.propersubname(_sname,false,_B);
// [61]  Return sname 
return _sname;
// End Sub
};

// [64] Sub ProperSubName(vx As String, removePref As Boolean) As String 
this.propersubname=function(_vx,_removepref) {
if (_B==null) _B=this;
var _varlist,_vartot,_varcnt,_varitem,_subname1;
// [65]  vx = vx.Replace( {40} , {41} ) 
_vx=_vx.split(":").join("-");
// [66]  vx = vx.Replace( {42} , {43} ) 
_vx=_vx.split(".").join("-");
// [67]  Dim varList As List = StrParse( {44} , vx) 
_varlist=_B.strparse("-",_vx,_B);
// [68]  If removePref Then 
if (_removepref) {
// [69]  varList.RemoveAt(0) 
_varlist.splice(0,1);
// [70]  End If 
}
// [71]  Dim varTot As Int = varList.Size - 1 
_vartot=_varlist.length-1;
// [72]  Dim varCnt As Int 
_varcnt=0;
// [73]  For varCnt = 0 To varTot 
for (_varcnt=0;_varcnt<=_vartot;_varcnt++) {
// [74]  Dim varItem As String = varList.Get(varCnt) 
_varitem=_varlist[_varcnt];
// [75]  varItem = ProperCase(varItem) 
_varitem=_B.propercase(_varitem,_B);
// [76]  varList.Set(varCnt, varItem) 
_varlist[_varcnt]=_varitem;
// [77]  Next 
}
// [78]  Dim subName1 As String = Join( {45} ,varList) 
_subname1=_B.join("",_varlist,_B);
// [79]  Return subName1 
return _subname1;
// End Sub
};

// [82] Sub Capitalize(t As String) As String 
this.capitalize=function(_t) {
if (_B==null) _B=this;
// [83]  Return ProperCase(t) 
return _B.propercase(_t,_B);
// End Sub
};

// [86] Sub StrParse(delim As String, inputString As String) As List 
this.strparse=function(_delim,_inputstring) {
if (_B==null) _B=this;
var _nl,_values;
// [87]  Dim nl As List 
_nl=[];
// [88]  nl.Initialize 
_nl.length=0;
// [89]  inputString = CStr(inputString) 
_inputstring=_B.cstr(_inputstring,_B);
// [90]  If inputString = {46} Then inputString = {47} 
if (_inputstring=="null") {_inputstring="";}
// [91]  If inputString = {48} Then inputString = {49} 
if (_inputstring=="undefined") {_inputstring="";}
// [92]  If inputString = {50} Then Return nl 
if (_inputstring=="") { return _nl;}
// [93]  Dim values() As String = BANano.Split(delim,inputString) 
_values=_inputstring.split(_delim);
// [94]  nl.AddAll(values) 
_nl.splice(_nl.length,0,..._values);
// [95]  Return nl 
return _nl;
// End Sub
};

// [99] Sub Join(delimiter As String, lst As List) As String 
this.join=function(_delimiter,_lst) {
if (_B==null) _B=this;
var _i,_sbx,_fld;
// [100]  Dim i As Int 
_i=0;
// [101]  Dim sbx As StringBuilder 
_sbx=new StringBuilder();
// [102]  Dim fld As String 
_fld="";
// [103]  sbx.Initialize 
_sbx.init();
_sbx.isinitialized=true;
// [104]  fld = lst.Get(0) 
_fld=_lst[0];
// [105]  sbx.Append(fld) 
_sbx.append(_fld);
// [106]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [107]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [108]  sbx.Append(delimiter).Append(fld) 
_sbx.append(_delimiter).append(_fld);
// [109]  Next 
}
// [110]  Return sbx.ToString 
return _sbx.toString();
// End Sub
};

// [114] Sub CorrectName(oldName As String) As String 
this.correctname=function(_oldname) {
if (_B==null) _B=this;
var _strname;
// [115]  Dim strName As String = StringBreakAtUpperCase(oldName) 
_strname=_B.stringbreakatuppercase(_oldname,_B);
// [116]  strName = strName.replace( {51} , {52} ) 
_strname=_strname.split(" ").join("-");
// [117]  strName = strName.tolowercase 
_strname=_strname.toLowerCase();
// [118]  Return strName 
return _strname;
// End Sub
};

// [123] Sub MVQuoteItems(delim As String, mvstring As String) As String 
this.mvquoteitems=function(_delim,_mvstring) {
if (_B==null) _B=this;
var _sbout,_litems,_k,_sout;
// [124]  Dim sbOut As StringBuilder 
_sbout=new StringBuilder();
// [125]  sbOut.Initialize 
_sbout.init();
_sbout.isinitialized=true;
// [126]  Dim lItems As List = StrParse(delim, mvstring) 
_litems=_B.strparse(_delim,_mvstring,_B);
// [127]  For Each k As String In lItems 
for (var _kindex=0;_kindex<_litems.length;_kindex++) {
_k=_litems[_kindex];
// [128]  k = CStr(k) 
_k=_B.cstr(_k,_B);
// [129]  k = k.Trim 
_k=_k.trim();
// [130]  sbOut.Append( {0} ).Append(delim) 
_sbout.append("\"" + _k + "\"").append(_delim);
// [131]  Next 
}
// [132]  Dim sout As String = sbOut.ToString 
_sout=_sbout.toString();
// [133]  sout = RemDelim(sout, delim) 
_sout=_B.remdelim(_sout,_delim,_B);
// [134]  Return sout 
return _sout;
// End Sub
};

// [138] Sub MVSingleQuoteItems(delim As String, mvstring As String) As String 
this.mvsinglequoteitems=function(_delim,_mvstring) {
if (_B==null) _B=this;
var _sbout,_litems,_k,_sout;
// [139]  Dim sbOut As StringBuilder 
_sbout=new StringBuilder();
// [140]  sbOut.Initialize 
_sbout.init();
_sbout.isinitialized=true;
// [141]  Dim lItems As List = StrParse(delim, mvstring) 
_litems=_B.strparse(_delim,_mvstring,_B);
// [142]  For Each k As String In lItems 
for (var _kindex=0;_kindex<_litems.length;_kindex++) {
_k=_litems[_kindex];
// [143]  k = CStr(k) 
_k=_B.cstr(_k,_B);
// [144]  k = k.Trim 
_k=_k.trim();
// [145]  sbOut.Append( {1} ).Append(delim) 
_sbout.append("'" + _k + "'").append(_delim);
// [146]  Next 
}
// [147]  Dim sout As String = sbOut.ToString 
_sout=_sbout.toString();
// [148]  sout = RemDelim(sout, delim) 
_sout=_B.remdelim(_sout,_delim,_B);
// [149]  Return sout 
return _sout;
// End Sub
};

// [154] Sub GetReadyState As String 
this.getreadystate=function() {
if (_B==null) _B=this;
var _rs;
// [155]  Dim rs As String = BANano.Window.GetField( {53} ).GetField( {54} ).Result 
_rs=window["document"]["readyState"];
// [156]  Return rs 
return _rs;
// End Sub
};

// [160] Sub SetOnReadyChange(EventHandler As Object) 
this.setonreadychange=function(_eventhandler) {
if (_B==null) _B=this;
var _cb;
// [161]  If SubExists(EventHandler, {55} ) = False Then Return 
if ((typeof _eventhandler[("ReadyChange").toLowerCase()]==="function")==false) { return ;}
// [162]  Dim cb As BANanoObject = BANano.callback(EventHandler, {56} , Null) 
_cb=function() {if (typeof _eventhandler[("ReadyChange").toLowerCase()]==="function") {return _eventhandler[("ReadyChange").toLowerCase()](_B)};};
// [163]  BANano.Window.GetField( {57} ).AddEventListener( {58} , cb, True) 
window["document"].addEventListener("readystatechange", _cb, true);
// End Sub
};

// [167] Sub YesNoToBoolean(xvalue As String) As Boolean 
this.yesnotoboolean=function(_xvalue) {
if (_B==null) _B=this;
// [168]  Select Case xvalue 
switch ("" + _xvalue) {
// [169]  Case {59} , {60} 
case "" + "Yes":
case "" + "yes":
// [170]  Return True 
return true;
// [171]  Case Else 
default:
// [172]  Return False 
return false;
// [173]  End Select 
}
// End Sub
};

// [177] Sub DateIsAfter(date1 As String, date2 As String) As Boolean 
this.dateisafter=function(_date1,_date2) {
if (_B==null) _B=this;
var _d1,_d2,_b;
// [178]  Dim d1 As Int = DateIconv(date1) 
_d1=_B.dateiconv(_date1,_B);
// [179]  Dim d2 As Int = DateIconv(date2) 
_d2=_B.dateiconv(_date2,_B);
// [180]  d1 = BANano.parseint(d1) 
_d1=parseInt(_d1);
// [181]  d2 = BANano.parseInt(d2) 
_d2=parseInt(_d2);
// [182]  Dim b As Boolean = BANano.IIf(d1 > d2, True, False) 
_b=(_d1>_d2) ? true : false;
// [183]  Return b 
return _b;
// End Sub
};

// [188] Sub RemDelim(sValue As String, Delim As String) As String 
this.remdelim=function(_svalue,_delim) {
if (_B==null) _B=this;
var _sw,_ldelim,_nvalue;
// [189]  Dim sw As Boolean = sValue.EndsWith(Delim) 
_sw=_svalue.endsWith(_delim);
// [190]  If sw Then 
if (_sw) {
// [191]  Dim lDelim As Int = Delim.Length 
_ldelim=_delim.length;
// [192]  Dim nValue As String = sValue 
_nvalue=_svalue;
// [193]  sw = nValue.EndsWith(Delim) 
_sw=_nvalue.endsWith(_delim);
// [194]  If sw Then 
if (_sw) {
// [195]  nValue = nValue.SubString2(0, nValue.Length-lDelim) 
_nvalue=_nvalue.substring(0,_nvalue.length-_ldelim);
// [196]  End If 
}
// [197]  Return nValue 
return _nvalue;
// [198]  Else 
} else {
// [199]  Return sValue 
return _svalue;
// [200]  End If 
}
// End Sub
};

// [203] Sub DateIconv(sdate As String) As Long 
this.dateiconv=function(_sdate) {
if (_B==null) _B=this;
var _lps;
// [204]  Dim lps As Long = DateTime.DateParse(sdate) 
_lps=DateTime.DateParse(_sdate);
// [205]  Return lps 
return _lps;
// End Sub
};

// [208] Sub DateOconv(lDate As Long) As String 
this.dateoconv=function(_ldate) {
if (_B==null) _B=this;
var _sdate;
// [209]  DateTime.DateFormat = {61} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [210]  Dim sdate As String = DateTime.Date(lDate) 
_sdate=DateTime.Date(_ldate);
// [211]  Return sdate 
return _sdate;
// End Sub
};

// [215] Sub StringBreakAtUpperCase(st As String) As String 
this.stringbreakatuppercase=function(_st) {
if (_B==null) _B=this;
var _k,_s,_newst,_i;
// [216]  If st.Length = 0 Then Return {62} 
if (_st.length==0) { return "";}
// [217]  Dim k As Int 
_k=0;
// [218]  Dim s As String 
_s="";
// [219]  Dim newst As String = st.CharAt(0) 
_newst=_st.charAt(0);
// [220]  For i = 1 To st.Length - 1 
for (_i=1;_i<=_st.length-1;_i++) {
// [221]  s = st.CharAt(i) 
_s=_st.charAt(_i);
// [222]  k = Asc(s) 
_k=_s.charCodeAt(0);
// [223]  If (k > 64) And (k < 91) And (st.CharAt(i-1) <> {63} ) Then 
if ((_k>64) && (_k<91) && (_st.charAt(_i-1)!=" ")) {
// [224]  newst = newst & {64} & s 
_newst=_newst+" "+_s;
// [225]  Else 
} else {
// [226]  newst = newst & s 
_newst=_newst+_s;
// [227]  End If 
}
// [228]  Next 
}
// [229]  Return newst 
return _newst;
// End Sub
};

// [234] Sub BuildStyle(styles As Map) As String 
this.buildstyle=function(_styles) {
if (_B==null) _B=this;
var _sbx,_k,_v;
// [235]  Dim sbx As StringBuilder 
_sbx=new StringBuilder();
// [236]  sbx.Initialize 
_sbx.init();
_sbx.isinitialized=true;
// [237]  For Each k As String In styles.keys 
var _kKeys = Object.keys(_styles);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [238]  Dim v As String = styles.get(k) 
_v=_styles[_k];
// [239]  If BANano.IsUndefined(v) Then v = {65} 
if (is.undefined(_v)) {_v="";}
// [240]  If BANano.IsNull(v) Then v = {66} 
if (is.null(_v)) {_v="";}
// [241]  k = k.trim 
_k=_k.trim();
// [242]  v = v.trim 
_v=_v.trim();
// [243]  If k = {67} Then Continue 
if (_k=="") {continue;}
// [244]  If v = {68} Then Continue 
if (_v=="") {continue;}
// [245]  sbx.Append( {2} ) 
_sbx.append("" + _k + ":" + _v + ";");
// [246]  Next 
}
// [247]  Return sbx.tostring 
return _sbx.toString();
// End Sub
};

// [250] Sub BuildAttributes(properties As Map) As String 
this.buildattributes=function(_properties) {
if (_B==null) _B=this;
var _sbx,_k,_v;
// [251]  If properties.ContainsKey( {69} ) Then 
if (("tagname" in _properties)) {
// [252]  properties.remove( {70} ) 
delete _properties["tagname"];
// [253]  End If 
}
// [254]  Dim sbx As StringBuilder 
_sbx=new StringBuilder();
// [255]  sbx.Initialize 
_sbx.init();
_sbx.isinitialized=true;
// [256]  For Each k As String In properties.keys 
var _kKeys = Object.keys(_properties);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [257]  Dim v As String = properties.get(k) 
_v=_properties[_k];
// [258]  If BANano.IsUndefined(v) Then v = {71} 
if (is.undefined(_v)) {_v="";}
// [259]  If BANano.IsNull(v) Then v = {72} 
if (is.null(_v)) {_v="";}
// [260]  If BANano.IsBoolean(v) Then 
if (is.boolean(_v)) {
// [261]  sbx.Append( {3} ) 
_sbx.append("" + _k + "=\"" + _v + "\" ");
// [262]  Else 
} else {
// [263]  k = k.trim 
_k=_k.trim();
// [264]  v = v.trim 
_v=_v.trim();
// [265]  If k = {73} Then Continue 
if (_k=="") {continue;}
// [266]  If v = {74} Then Continue 
if (_v=="") {continue;}
// [267]  sbx.Append( {4} ) 
_sbx.append("" + _k + "=\"" + _v + "\" ");
// [268]  End If 
}
// [269]  Next 
}
// [270]  Return sbx.tostring 
return _sbx.toString();
// End Sub
};

// [273] Sub JoinMapKeys(m As Map, delim As String) As String 
this.joinmapkeys=function(_m,_delim) {
if (_B==null) _B=this;
var _sb,_ktot,_kcnt,_strkey;
// [274]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [275]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [276]  Dim kTot As Int = m.Size - 1 
_ktot=Object.keys(_m).length-1;
// [277]  Dim kCnt As Int 
_kcnt=0;
// [278]  Dim strKey As String = m.getkeyat(0) 
_strkey=banano_getB4JKeyAt(_m,0);
// [279]  sb.Append(strKey) 
_sb.append(_strkey);
// [280]  For kCnt = 1 To kTot 
for (_kcnt=1;_kcnt<=_ktot;_kcnt++) {
// [281]  Dim strKey As String = m.getkeyat(kCnt) 
_strkey=banano_getB4JKeyAt(_m,_kcnt);
// [282]  sb.Append(delim).append(strKey) 
_sb.append(_delim).append(_strkey);
// [283]  Next 
}
// [284]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [287] Sub LoremIpsum(count As String) As String 
this.loremipsum=function(_count) {
if (_B==null) _B=this;
// [288]  Return Rand_LoremIpsum(count) 
return _B.rand_loremipsum(_count,_B);
// End Sub
};

// [292] Sub Rand_LoremIpsum(count As Int) As String 
this.rand_loremipsum=function(_count) {
if (_B==null) _B=this;
var _str,_sb,_i;
// [293]  Dim str As String = {5} 
_str="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// [294]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [295]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [296]  For i = 1 To count 
for (_i=1;_i<=_count;_i++) {
// [297]  sb.Append(str).Append(CRLF) 
_sb.append(_str).append("\n");
// [298]  Next 
}
// [299]  Return sb.tostring 
return _sb.toString();
// End Sub
};

// [304] Sub ListOfMapsRecordPos(lst As List, k As String, v As String) As Int 
this.listofmapsrecordpos=function(_lst,_k,_v) {
if (_B==null) _B=this;
var _ltot,_lcnt,_m,_sk;
// [305]  Dim lTot As Int = lst.Size - 1 
_ltot=_lst.length-1;
// [306]  Dim lCnt As Int 
_lcnt=0;
// [307]  For lCnt = 0 To lTot 
for (_lcnt=0;_lcnt<=_ltot;_lcnt++) {
// [308]  Dim m As Map = lst.Get(lCnt) 
_m=_lst[_lcnt];
// [309]  Dim sk As String = m.GetDefault(k, {75} ) 
_sk=(_m[_k] || "");
// [310]  If sk.EqualsIgnoreCase(v) Then 
if (_sk.equalsIgnoreCase(_v)) {
// [311]  Return lCnt 
return _lcnt;
// [312]  End If 
}
// [313]  Next 
}
// [314]  Return -1 
return -1;
// End Sub
};

// [317] Sub MvDistinct(delim As String, strmv As String) As String 
this.mvdistinct=function(_delim,_strmv) {
if (_B==null) _B=this;
var _items,_mi,_k,_nl,_sout;
// [318]  Dim items As List = StrParse(delim, strmv) 
_items=_B.strparse(_delim,_strmv,_B);
// [319]  Dim mi As Map = CreateMap() 
_mi={};
// [320]  For Each k As String In items 
for (var _kindex=0;_kindex<_items.length;_kindex++) {
_k=_items[_kindex];
// [321]  mi.Put(k, k) 
_mi[_k]=_k;
// [322]  Next 
}
// [323]  Dim nl As List = NewList 
_nl=_B.newlist(_B);
// [324]  For Each k As String In mi.Keys 
var _kKeys = Object.keys(_mi);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [325]  nl.Add(k) 
_nl.push(_k);
// [326]  Next 
}
// [327]  Dim sout As String = Join(delim, nl) 
_sout=_B.join(_delim,_nl,_B);
// [328]  Return sout 
return _sout;
// End Sub
};

// [332] Sub KeyValues2Map(delim As String, keys As String, values As String) As Map 
this.keyvalues2map=function(_delim,_keys,_values) {
if (_B==null) _B=this;
var _rkeys,_rvalues,_optm,_rtot,_vtot,_rcnt,_k,_v;
// [333]  Dim rkeys As List = StrParse(delim, keys) 
_rkeys=_B.strparse(_delim,_keys,_B);
// [334]  Dim rvalues As List = StrParse(delim, values) 
_rvalues=_B.strparse(_delim,_values,_B);
// [336]  Dim optm As Map = CreateMap() 
_optm={};
// [338]  Dim rTot As Int = rkeys.Size -1 
_rtot=_rkeys.length-1;
// [339]  Dim vTot As Int = rvalues.Size - 1 
_vtot=_rvalues.length-1;
// [340]  If rTot <> vTot Then 
if (_rtot!=_vtot) {
// [341]  Else 
} else {
// [342]  Dim rCnt As Int 
_rcnt=0;
// [343]  For rCnt = 0 To rTot 
for (_rcnt=0;_rcnt<=_rtot;_rcnt++) {
// [344]  Dim k As String = rkeys.Get(rCnt) 
_k=_rkeys[_rcnt];
// [345]  Dim v As String = rvalues.Get(rCnt) 
_v=_rvalues[_rcnt];
// [346]  optm.put(k, v) 
_optm[_k]=_v;
// [347]  Next 
}
// [348]  End If 
}
// [349]  Return optm 
return _optm;
// End Sub
};

// [352] Sub NewMap As Map 
this.newmap=function() {
if (_B==null) _B=this;
var _nm;
// [353]  Dim nm As Map 
_nm={};
// [354]  nm.Initialize 
_nm={};
// [355]  Return nm 
return _nm;
// End Sub
};

// [359] Sub getElementById(sid As String) As BANanoObject 
this.getelementbyid=function(_sid) {
if (_B==null) _B=this;
var _el;
// [360]  Dim el As BANanoObject = BANano.Window.GetField( {76} ).RunMethod( {77} , Array(sid)) 
_el=window["document"]["getElementById"](_sid);
// [361]  Return el 
return _el;
// End Sub
};

// [372] Sub ListRemoveDuplicates(lst As List) As List 
this.listremoveduplicates=function(_lst) {
if (_B==null) _B=this;
var _nd,_k,_nl;
// [373]  Dim nd As Map = CreateMap() 
_nd={};
// [374]  For Each k As String In lst 
for (var _kindex=0;_kindex<_lst.length;_kindex++) {
_k=_lst[_kindex];
// [375]  nd.Put(k, k) 
_nd[_k]=_k;
// [376]  Next 
}
// [377]  Dim nl As List 
_nl=[];
// [378]  nl.Initialize 
_nl.length=0;
// [379]  For Each k As String In nd.Keys 
var _kKeys = Object.keys(_nd);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [380]  nl.Add(k) 
_nl.push(_k);
// [381]  Next 
}
// [382]  nl.Sort(True) 
if (!isNaN(parseFloat(_nl[0])) && isFinite(_nl[0])) {
_nl.sort(function(a, b){return a - b});
} else {
_nl.sort();
};
// [383]  Return nl 
return _nl;
// End Sub
};

// [387] Sub GetFileDetails(fileObj As Map) As FileObject 
this.getfiledetails=function(_fileobj) {
if (_B==null) _B=this;
var _sname,_slastmodifieddate,_ssize,_stype,_yyyy,_dd,_mm,_hh,_minutes,_fd,_ff;
// [388]  Dim sname As String = fileObj.Get( {82} ) 
_sname=_fileobj["name"];
// [389]  Dim slastModifiedDate As BANanoObject = fileObj.Get( {83} ) 
_slastmodifieddate=_fileobj["lastModifiedDate"];
// [390]  Dim ssize As String = fileObj.Get( {84} ) 
_ssize=_fileobj["size"];
// [391]  Dim stype As String = fileObj.Get( {85} ) 
_stype=_fileobj["type"];
// [393]  Dim yyyy As String = slastModifiedDate.RunMethod( {86} , Null).Result 
_yyyy=_slastmodifieddate["getFullYear"]();
// [394]  Dim dd As String = slastModifiedDate.RunMethod( {87} , Null).Result 
_dd=_slastmodifieddate["getDate"]();
// [395]  Dim mm As String = slastModifiedDate.RunMethod( {88} , Null).Result 
_mm=_slastmodifieddate["getMonth"]();
// [396]  Dim hh As String = slastModifiedDate.RunMethod( {89} , Null).Result 
_hh=_slastmodifieddate["getHours"]();
// [397]  Dim minutes As String = slastModifiedDate.RunMethod( {90} , Null).Result 
_minutes=_slastmodifieddate["getMinutes"]();
// [399]  dd = PadRight(dd, 2, {91} ) 
_dd=_B.padright(_dd,2,"0",_B);
// [400]  mm = PadRight(mm, 2, {92} ) 
_mm=_B.padright(_mm,2,"0",_B);
// [401]  hh = PadRight(hh, 2, {93} ) 
_hh=_B.padright(_hh,2,"0",_B);
// [402]  minutes = PadRight(minutes, 2, {94} ) 
_minutes=_B.padright(_minutes,2,"0",_B);
// [404]  Dim fd As String = {6} 
_fd="" + _yyyy + "-" + _mm + "-" + _dd + " " + _hh + ":" + _minutes + "";
// [407]  Dim ff As FileObject 
_ff= new banano_bananozui_fileobject();
// [408]  ff.Initialize 
_ff.initialize();
// [409]  ff.FileName = sname 
_ff._filename=_sname;
// [410]  ff.FileDate = fd 
_ff._filedate=_fd;
// [411]  ff.FileSize = ssize 
_ff._filesize=_ssize;
// [412]  ff.FileType = stype 
_ff._filetype=_stype;
// [413]  Return ff 
return _ff;
// End Sub
};

// [417] Sub BeautifySourceCode(slang As String, sc As String) As String 
this.beautifysourcecode=function(_slang,_sc) {
if (_B==null) _B=this;
var _res;
// [418]  Select Case slang 
switch ("" + _slang) {
// [419]  Case {95} 
case "" + "js":
// [420]  Dim res As String = BANano.RunJavascriptMethod( {96} , Array(sc)) 
_res=BANanoExec("js_beautify", window, _sc);
// [421]  Case {97} 
break;
case "" + "css":
// [422]  Dim res As String = BANano.RunJavascriptMethod( {98} , Array(sc)) 
_res=BANanoExec("css_beautify", window, _sc);
// [423]  Case {99} 
break;
case "" + "html":
// [424]  Dim res As String = BANano.RunJavascriptMethod( {100} , Array(sc)) 
_res=BANanoExec("html_beautify", window, _sc);
// [425]  End Select 
break;
}
// [426]  Return res 
return _res;
// End Sub
};

// [430] private Sub DoUpload(fileObj As Object) As String 'ignore 
this.doupload=function(_fileobj) {
var _BANp = gBANp(arguments);
if (_B==null) _B=this;
var _aevt,_xhr,_fd,_err,_serr;
// [431]  Dim aEvt As Object 
_aevt={};
// [432]  Dim xhr As BANanoXMLHttpRequest 
_xhr=null;
// [434]  Dim fd As BANanoObject 
_fd=null;
// [435]  fd.Initialize2( {101} ,Null) 
_fd=new FormData();
// [436]  fd.RunMethod( {102} , Array( {103} , fileObj)) 
_fd["append"]("upload",_fileobj);
// [438]  xhr.Initialize 
_xhr=new XMLHttpRequest();
// [439]  xhr.Open( {104} , {105} ) 
_xhr.open("POST","./assets/upload.php");
// [440]  xhr.AddEventListenerOpenAsync( {106} , aEvt) 
_xhr.onreadystatechange=async function(_aevt) {
// [441]  If xhr.ReadyState = 4 Then 
if (_xhr.readyState==4) {
// [442]  If xhr.Status = 200 Then 
if (_xhr.status==200) {
// [443]  BANano.ReturnThen(xhr.ResponseText) 
return _BANp.resolve(_xhr.responseText);
// [444]  Else 
} else {
// [445]  Dim err As Map = CreateMap() 
_err={};
// [446]  err.Put( {107} , {108} ) 
_err["status"]="error";
// [447]  Dim serr As String = BANano.ToJson(err) 
_serr=JSON.stringify(_err);
// [448]  BANano.ReturnElse(serr) 
return _BANp.reject(_serr);
// [449]  End If 
}
// [450]  End If 
}
// [451]  xhr.CloseEventListener 
};
// [452]  xhr.Send2(fd) 
_xhr.send(_fd);
// End Sub
};

// [455] Sub HTTPUpload(fileObj As Object, module As Object, methodname As String) 
this.httpupload=function(_fileobj,_module,_methodname) {
if (_B==null) _B=this;
var _promise,_error,_json;
// [456]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [458]  Dim Error As String 
_error="";
// [459]  Dim json As String 
_json="";
// [462]  promise.CallSub(Me, {109} , Array(fileObj)) 
_promise=BANanoPromise();
_B[("DoUpload").toLowerCase()](_fileobj,_promise,_B);
// [463]  promise.ThenWait(json) 
_promise.then(async function(_json) {
// [464]  BANano.CallSub(module, methodname, Array(fileObj, json)) 
(function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {var CSr = _module[(_methodname).toLowerCase()](_fileobj,_json,_B);if(CSr!=null) {return CSr}}})();
// [465]  promise.ElseWait(Error) 'ignore 
}).catch(async function(_error) {
// [466]  BANano.CallSub(module, methodname, Array(fileObj, Error)) 
(function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {var CSr = _module[(_methodname).toLowerCase()](_fileobj,_error,_B);if(CSr!=null) {return CSr}}})();
// [467]  promise.End 
});
// End Sub
};

// [471] Public Sub GetAlphabets(value As String) As String 
this.getalphabets=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [472]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [473]  Try 
try {
// [474]  value = value.Trim 
_value=_value.trim();
// [475]  If value = {110} Then value = {111} 
if (_value=="") {_value="";}
// [476]  Dim sout As String = {112} 
_sout="";
// [477]  Dim mout As String = {113} 
_mout="";
// [478]  Dim slen As Int = value.Length 
_slen=_value.length;
// [479]  Dim i As Int = 0 
_i=0;
// [480]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [481]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [482]  If InStr( {114} , mout) <> -1 Then 
if (_B.instr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ",_mout,_B)!=-1) {
// [483]  sout = sout & mout 
_sout=_sout+_mout;
// [484]  End If 
}
// [485]  Next 
}
// [486]  Return sout 
return _sout;
// [487]  Catch 
} catch(err) {
// [488]  Return value 
return _value;
// [489]  End Try 
}
// End Sub
};

// [493] Sub JSONPretty(m As Object) As String 
this.jsonpretty=function(_m) {
if (_B==null) _B=this;
var _pretty;
// [494]  Dim pretty As String = BANano.RunJavascriptMethod( {115} , Array(m, Null, 4)) 
_pretty=BANanoExec("JSON.stringify", window, _m,null,4);
// [495]  Return pretty 
return _pretty;
// End Sub
};

// [499] Sub ExtractMap(source As Map, keys As List) As Map 
this.extractmap=function(_source,_keys) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [500]  Dim nm As Map = CreateMap() 
_nm={};
// [501]  For Each k As String In keys 
for (var _kindex=0;_kindex<_keys.length;_kindex++) {
_k=_keys[_kindex];
// [502]  Dim v As Object = source.get(k) 
_v=_source[_k];
// [503]  nm.put(k, v) 
_nm[_k]=_v;
// [504]  Next 
}
// [505]  Return nm 
return _nm;
// End Sub
};

// [508] Sub InStr(Text As String, sFind As String) As Int 
this.instr=function(_text,_sfind) {
if (_B==null) _B=this;
// [509]  Return Text.tolowercase.IndexOf(sFind.tolowercase) 
return _text.toLowerCase().indexOf(_sfind.toLowerCase());
// End Sub
};

// [513] Sub JoinNonBlanks(delimiter As String, lst As List) As String 
this.joinnonblanks=function(_delimiter,_lst) {
if (_B==null) _B=this;
var _nl,_str,_i,_sb,_fld;
// [514]  If lst.size = 0 Then Return {116} 
if (_lst.length==0) { return "";}
// [516]  Dim nl As List 
_nl=[];
// [517]  nl.Initialize 
_nl.length=0;
// [518]  For Each str As String In lst 
for (var _strindex=0;_strindex<_lst.length;_strindex++) {
_str=_lst[_strindex];
// [519]  str = str.Trim 
_str=_str.trim();
// [520]  If str.Length > 0 Then 
if (_str.length>0) {
// [521]  nl.Add(str) 
_nl.push(_str);
// [522]  End If 
}
// [523]  Next 
}
// [524]  If nl.Size = 0 Then Return {117} 
if (_nl.length==0) { return "";}
// [526]  Dim i As Int 
_i=0;
// [527]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [528]  Dim fld As String 
_fld="";
// [529]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [530]  fld = nl.Get(0) 
_fld=_nl[0];
// [531]  sb.Append(fld) 
_sb.append(_fld);
// [532]  For i = 1 To nl.size - 1 
for (_i=1;_i<=_nl.length-1;_i++) {
// [533]  Dim fld As String = nl.Get(i) 
_fld=_nl[_i];
// [534]  sb.Append(delimiter).Append(fld) 
_sb.append(_delimiter).append(_fld);
// [535]  Next 
}
// [536]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [541] Sub JoinMaps(lst As List) As Map 
this.joinmaps=function(_lst) {
if (_B==null) _B=this;
var _nm,_mr,_k,_v;
// [542]  Dim nm As Map = CreateMap() 
_nm={};
// [543]  If lst.Size = 0 Then Return nm 
if (_lst.length==0) { return _nm;}
// [544]  For Each mr As Map In lst 
for (var _mrindex=0;_mrindex<_lst.length;_mrindex++) {
_mr=_lst[_mrindex];
// [545]  For Each k As String In mr.Keys 
var _kKeys = Object.keys(_mr);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [546]  Dim v As Object = mr.Get(k) 
_v=_mr[_k];
// [547]  nm.Put(k, v) 
_nm[_k]=_v;
// [548]  Next 
}
// [549]  Next 
}
// [550]  Return nm 
return _nm;
// End Sub
};

// [554] Sub JoinLists(lst As List) As List 
this.joinlists=function(_lst) {
if (_B==null) _B=this;
var _nl,_lo,_k;
// [555]  Dim nl As List 
_nl=[];
// [556]  nl.Initialize 
_nl.length=0;
// [557]  For Each lo As List In lst 
for (var _loindex=0;_loindex<_lst.length;_loindex++) {
_lo=_lst[_loindex];
// [558]  For Each k As Object In lo 
for (var _kindex=0;_kindex<_lo.length;_kindex++) {
_k=_lo[_kindex];
// [559]  nl.Add(k) 
_nl.push(_k);
// [560]  Next 
}
// [561]  Next 
}
// [562]  Return nl 
return _nl;
// End Sub
};

// [567] Sub MapKeys2List(m As Map) As List 
this.mapkeys2list=function(_m) {
if (_B==null) _B=this;
var _lst,_k;
// [568]  Dim lst As List 
_lst=[];
// [569]  lst.Initialize 
_lst.length=0;
// [570]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [571]  lst.Add(k) 
_lst.push(_k);
// [572]  Next 
}
// [573]  Return lst 
return _lst;
// End Sub
};

// [577] Sub MapValues2List(m As Map) As List 
this.mapvalues2list=function(_m) {
if (_B==null) _B=this;
var _lst,_k;
// [578]  Dim lst As List 
_lst=[];
// [579]  lst.Initialize 
_lst.length=0;
// [580]  For Each k As String In m.values 
for (_kKEY in _m) {
var _k=_m[_kKEY];
// [581]  lst.Add(k) 
_lst.push(_k);
// [582]  Next 
}
// [583]  Return lst 
return _lst;
// End Sub
};

// [588] Sub RSAIDNumber2DateOfBirth(rsaID As String) As String 
this.rsaidnumber2dateofbirth=function(_rsaid) {
if (_B==null) _B=this;
var _yymmdd,_yy,_mm,_dd;
// [590]  If rsaID.length = 13 Then 
if (_rsaid.length==13) {
// [591]  Dim yymmdd As String = LeftString(rsaID, 6) 
_yymmdd=_B.leftstring(_rsaid,6,_B);
// [592]  Dim yy As String = LeftString(yymmdd,2) 
_yy=_B.leftstring(_yymmdd,2,_B);
// [593]  Dim mm As String = MidString(yymmdd,3,2) 
_mm=_B.midstring(_yymmdd,3,2,_B);
// [594]  Dim dd As String = RightString(yymmdd,2) 
_dd=_B.rightstring(_yymmdd,2,_B);
// [595]  yymmdd = {7} 
_yymmdd="19" + _yy + "-" + _mm + "-" + _dd + "";
// [596]  Return yymmdd 
return _yymmdd;
// [597]  Else 
} else {
// [598]  Return {118} 
return "";
// [599]  End If 
}
// End Sub
};

// [602] Public Sub YearNow() As String 
this.yearnow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [603]  Dim lNow As Long 
_lnow=0;
// [604]  Dim dt As String 
_dt="";
// [605]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [606]  DateTime.DateFormat = {119} 
DateTime.SetDateFormat("yyyy");
// [607]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [608]  Return dt 
return _dt;
// End Sub
};

// [611] Public Sub MonthNow() As String 
this.monthnow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [612]  Dim lNow As Long 
_lnow=0;
// [613]  Dim dt As String 
_dt="";
// [614]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [615]  DateTime.DateFormat = {120} 
DateTime.SetDateFormat("M");
// [616]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [617]  Return dt 
return _dt;
// End Sub
};

// [620] Sub DateAdd(mDate As String, HowManyDays As Int) As String 
this.dateadd=function(_mdate,_howmanydays) {
if (_B==null) _B=this;
var _convertdate,_newdateday;
// [621]  HowManyDays = BANano.parseInt(HowManyDays) 
_howmanydays=parseInt(_howmanydays);
// [622]  Dim ConvertDate, NewDateDay As Long 
_convertdate=0;
_newdateday=0;
// [623]  ConvertDate = DateTime.DateParse(mDate) 
_convertdate=DateTime.DateParse(_mdate);
// [624]  NewDateDay = DateTime.Add(ConvertDate, 0, 0, HowManyDays) 
_newdateday=DateTime.Add(_convertdate,0,0,_howmanydays);
// [625]  Return DateTime.Date(NewDateDay) 
return DateTime.Date(_newdateday);
// End Sub
};

// [630] Sub NumberOfDaysBetweenDates(CurrentDate As String, OtherDate As String) As Int 
this.numberofdaysbetweendates=function(_currentdate,_otherdate) {
if (_B==null) _B=this;
var _currdate,_othdate,_tpd,_iout;
// [631]  Dim CurrDate, OthDate As Long 
_currdate=0;
_othdate=0;
// [632]  CurrDate = DateTime.DateParse(CurrentDate) 
_currdate=DateTime.DateParse(_currentdate);
// [633]  OthDate = DateTime.DateParse(OtherDate) 
_othdate=DateTime.DateParse(_otherdate);
// [634]  Dim tpd As Long = DateTime.TicksPerDay 
_tpd=DateTime.TicksPerDay();
// [635]  Dim iOut As Long = (CurrDate - OthDate)/tpd 
_iout=(_currdate-_othdate)/_tpd;
// [636]  Return iOut 
return _iout;
// End Sub
};

// [639] Public Sub CDbl(value As String) As Double 
this.cdbl=function(_value) {
if (_B==null) _B=this;
var _out;
// [640]  Try 
try {
// [641]  value = value.Trim 
_value=_value.trim();
// [642]  If value = {121} Then value = {122} 
if (_value=="") {_value="0";}
// [643]  value = value.Replace( {123} , {124} ) 
_value=_value.split(",").join("");
// [644]  Dim out As Double = NumberFormat2(value,0,2,2,False) 
_out=BANano_nf2(BANano_r2f(_value, 2, 2),0,false);
// [645]  Return out 
return _out;
// [646]  Catch 
} catch(err) {
// [647]  Return value 
return _value;
// [648]  End Try 
}
// End Sub
};

// [652] Sub ProjectDays(sDays As String) As String 
this.projectdays=function(_sdays) {
if (_B==null) _B=this;
// [653]  Try 
try {
// [654]  sDays = sDays.trim 
_sdays=_sdays.trim();
// [655]  If sDays = {125} Then sDays = {126} 
if (_sdays=="") {_sdays="0";}
// [656]  sDays = sDays.Replace( {127} , {128} ) 
_sdays=_sdays.split(",").join("");
// [657]  sDays = NumberFormat2(sDays,0,0,0,True) 
_sdays=BANano_nf2(BANano_r2f(_sdays, 0, 0),0,true);
// [658]  Return sDays & {129} 
return _sdays+" Dys";
// [659]  Catch 
} catch(err) {
// [660]  Return {130} 
return "0 Dys";
// [661]  End Try 
}
// End Sub
};

// [664] Sub ProjectDate(sDate As String) As String 
this.projectdate=function(_sdate) {
if (_B==null) _B=this;
var _dt;
// [665]  If sDate.Length = 0 Then Return {131} 
if (_sdate.length==0) { return "";}
// [666]  Try 
try {
// [667]  DateTime.DateFormat = {132} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [668]  Dim dt As Long = DateTime.DateParse(sDate) 
_dt=DateTime.DateParse(_sdate);
// [669]  DateTime.DateFormat = {133} 
DateTime.SetDateFormat("dd-MMM-yyyy, EEE");
// [670]  Return DateTime.Date(dt) 
return DateTime.Date(_dt);
// [671]  Catch 
} catch(err) {
// [672]  Return {134} 
return "";
// [673]  End Try 
}
// End Sub
};

// [677] Sub FormatFileSize(Bytes As Float) As String 
this.formatfilesize=function(_bytes) {
if (_B==null) _B=this;
var _unit,_po,_si,_i;
// [678]  Try 
try {
// [679]  Private Unit() As String = Array As String( {135} , {136} , {137} , {138} , {139} , {140} , {141} , {142} , {143} ) 
_unit=[" Byte"," KB"," MB"," GB"," TB"," PB"," EB"," ZB"," YB"];
// [680]  If Bytes = 0 Then 
if (_bytes==0) {
// [681]  Return {144} 
return "0 Bytes";
// [682]  Else 
} else {
// [683]  Private Po, Si As Double 
_po=0;
_si=0;
// [684]  Private I As Int 
_i=0;
// [685]  Bytes = Abs(Bytes) 
_bytes=(Math.abs(_bytes));
// [686]  I = Floor(Logarithm(Bytes, 1024)) 
_i=(Math.floor((Math.log(_bytes)/Math.log(1024))));
// [687]  Po = Power(1024, I) 
_po=Math.pow(1024,_i);
// [688]  Si = Bytes / Po 
_si=_bytes/_po;
// [689]  Return NumberFormat(Si, 1, 3) & Unit(I) 
return BANano_nf(BANano_r(_si, 3),1)+_unit[_i];
// [690]  End If 
}
// [691]  Catch 
} catch(err) {
// [692]  Return {145} 
return "0 Bytes";
// [693]  End Try 
}
// End Sub
};

// [696] Sub InStrRev(value As String, search As String) As Long 
this.instrrev=function(_value,_search) {
if (_B==null) _B=this;
// [697]  Return value.LastIndexOf(search) + 1 
return _value.lastIndexOf(_search)+1;
// End Sub
};

// [702] Sub Len(Text As String) As Int 
this.len=function(_text) {
if (_B==null) _B=this;
// [703]  Return Text.Length 
return _text.length;
// End Sub
};

// [707] Sub PadRight(Value As String, MaxLen As Int, PadChar As String) As String 
this.padright=function(_value,_maxlen,_padchar) {
if (_B==null) _B=this;
var _intordnolen,_i;
// [708]  Value = CStr(Value) 
_value=_B.cstr(_value,_B);
// [709]  Dim intOrdNoLen As Int = Len(Value) 
_intordnolen=_B.len(_value,_B);
// [710]  Dim i As Int 
_i=0;
// [711]  For i = 1 To (MaxLen - intOrdNoLen) Step 1 
for (_i=1;_i<=(_maxlen-_intordnolen);_i+=1) {
// [712]  Value = PadChar & Value 
_value=_padchar+_value;
// [713]  Next 
}
// [714]  Return Value 
return _value;
// End Sub
};

// [717] Sub GetListOfMapsProperty(lst As List, prop As String) As List 
this.getlistofmapsproperty=function(_lst,_prop) {
if (_B==null) _B=this;
var _kc,_rec,_v;
// [718]  prop = prop.tolowercase 
_prop=_prop.toLowerCase();
// [719]  Dim kc As List 
_kc=[];
// [720]  kc.initialize 
_kc.length=0;
// [721]  For Each rec As Map In lst 
for (var _recindex=0;_recindex<_lst.length;_recindex++) {
_rec=_lst[_recindex];
// [722]  Dim v As String = rec.Get(prop) 
_v=_rec[_prop];
// [723]  kc.add(v) 
_kc.push(_v);
// [724]  Next 
}
// [725]  Return kc 
return _kc;
// End Sub
};

// [729] Sub SumListOfMapsProperty(lst As List, prop As String) As Double 
this.sumlistofmapsproperty=function(_lst,_prop) {
if (_B==null) _B=this;
var _tsum,_rec,_propv;
// [730]  Dim tsum As Double = 0 
_tsum=0;
// [731]  For Each rec As Map In lst 
for (var _recindex=0;_recindex<_lst.length;_recindex++) {
_rec=_lst[_recindex];
// [732]  Dim propv As String = rec.GetDefault(prop, {146} ) 
_propv=(_rec[_prop] || "0");
// [733]  tsum = tsum + BANAno.parseFloat(propv) 
_tsum=_tsum+parseFloat(_propv);
// [734]  Next 
}
// [735]  Return tsum 
return _tsum;
// End Sub
};

// [739] Public Sub Val(value As String) As String 
this.val=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [740]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [741]  Try 
try {
// [742]  value = value.Trim 
_value=_value.trim();
// [743]  If value = {147} Then value = {148} 
if (_value=="") {_value="0";}
// [744]  Dim sout As String = {149} 
_sout="";
// [745]  Dim mout As String = {150} 
_mout="";
// [746]  Dim slen As Int = value.Length 
_slen=_value.length;
// [747]  Dim i As Int = 0 
_i=0;
// [748]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [749]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [750]  If InStr( {151} , mout) <> -1 Then 
if (_B.instr("0123456789.-",_mout,_B)!=-1) {
// [751]  sout = sout & mout 
_sout=_sout+_mout;
// [752]  End If 
}
// [753]  Next 
}
// [754]  Return sout 
return _sout;
// [755]  Catch 
} catch(err) {
// [756]  Return value 
return _value;
// [757]  End Try 
}
// End Sub
};

// [760] Public Sub Alpha(value As String) As String 
this.alpha=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [761]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [762]  Try 
try {
// [763]  value = value.Trim 
_value=_value.trim();
// [764]  If value = {152} Then value = {153} 
if (_value=="") {_value="";}
// [765]  Dim sout As String = {154} 
_sout="";
// [766]  Dim mout As String = {155} 
_mout="";
// [767]  Dim slen As Int = value.Length 
_slen=_value.length;
// [768]  Dim i As Int = 0 
_i=0;
// [769]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [770]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [771]  If InStr( {156} , mout) <> -1 Then 
if (_B.instr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",_mout,_B)!=-1) {
// [772]  sout = sout & mout 
_sout=_sout+_mout;
// [773]  End If 
}
// [774]  Next 
}
// [775]  Return sout 
return _sout;
// [776]  Catch 
} catch(err) {
// [777]  Return value 
return _value;
// [778]  End Try 
}
// End Sub
};

// [783] Sub List2KeyValues(lst As List, mapvalues As List) As List 
this.list2keyvalues=function(_lst,_mapvalues) {
if (_B==null) _B=this;
// [784]  Return List2IDValue(lst, mapvalues) 
return _B.list2idvalue(_lst,_mapvalues,_B);
// End Sub
};

// [788] Sub List2IDValue(lst As List, mapValues As List) As List 
this.list2idvalue=function(_lst,_mapvalues) {
if (_B==null) _B=this;
var _mv1,_mv2,_nlst,_dict,_mk,_mv,_nm;
// [789]  Dim mv1 As String = mapValues.get(0) 
_mv1=_mapvalues[0];
// [790]  Dim mv2 As String = mapValues.get(1) 
_mv2=_mapvalues[1];
// [791]  Dim nlst As List 
_nlst=[];
// [792]  nlst.initialize 
_nlst.length=0;
// [793]  For Each dict As Map In lst 
for (var _dictindex=0;_dictindex<_lst.length;_dictindex++) {
_dict=_lst[_dictindex];
// [794]  Dim mk As String = dict.get(mv1) 
_mk=_dict[_mv1];
// [795]  Dim mv As String = dict.get(mv2) 
_mv=_dict[_mv2];
// [796]  Dim nm As Map = CreateMap() 
_nm={};
// [797]  nm.Put( {157} , mk) 
_nm["id"]=_mk;
// [798]  nm.put( {158} , mv) 
_nm["value"]=_mv;
// [799]  nlst.Add(nm) 
_nlst.push(_nm);
// [800]  Next 
}
// [801]  Return nlst 
return _nlst;
// End Sub
};

// [804] Sub List2ArrayVariable(lst As List) As String 
this.list2arrayvariable=function(_lst) {
if (_B==null) _B=this;
var _i,_sb,_fld;
// [805]  If lst.Size = 0 Then 
if (_lst.length==0) {
// [806]  Return {8} 
return "\"\"";
// [807]  End If 
}
// [808]  Dim i As Int 
_i=0;
// [809]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [810]  Dim fld As String 
_fld="";
// [811]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [812]  fld = lst.Get(0) 
_fld=_lst[0];
// [813]  fld = {9} 
_fld="\"" + _fld + "\"";
// [814]  sb.Append(fld) 
_sb.append(_fld);
// [815]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [816]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [817]  fld = {10} 
_fld="\"" + _fld + "\"";
// [818]  sb.Append( {159} ).Append(fld) 
_sb.append(",").append(_fld);
// [819]  Next 
}
// [820]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [824] Sub JSONValues2LowerCase(sJSON As String, props As List) As String 
this.jsonvalues2lowercase=function(_sjson,_props) {
if (_B==null) _B=this;
var _jmap,_njson;
// [826]  Dim jmap As Map = Json2Map(sJSON) 
_jmap=_B.json2map(_sjson,_B);
// [827]  MapValues2LowerCase(jmap, props) 
_B.mapvalues2lowercase(_jmap,_props,_B);
// [828]  Dim nJSON As String = Map2Json(jmap) 
_njson=_B.map2json(_jmap,_B);
// [829]  Return nJSON 
return _njson;
// End Sub
};

// [834] Sub Map2Json(mp As Map) As String 
this.map2json=function(_mp) {
if (_B==null) _B=this;
var _json;
// [835]  Dim JSON As BANanoJSONGenerator 
_json={};
// [836]  JSON.Initialize(mp) 
_json=_mp;
// [837]  Return JSON.ToString 
return JSON.stringify(_json);
// End Sub
};

// [840] Sub Map2JsonPretty(mp As Map) As String 
this.map2jsonpretty=function(_mp) {
if (_B==null) _B=this;
var _json;
// [841]  Dim JSON As BANanoJSONGenerator 
_json={};
// [842]  JSON.Initialize(mp) 
_json=_mp;
// [843]  Return JSON.ToPrettyString(4) 
return JSON.stringify(_json, null, 4);
// End Sub
};

// [848] Sub Json2Map(strJSON As String) As Map 
this.json2map=function(_strjson) {
if (_B==null) _B=this;
var _json,_map1;
// [849]  Dim json As BANanoJSONParser 
_json={};
// [850]  Dim Map1 As Map 
_map1={};
// [851]  Map1.Initialize 
_map1={};
// [852]  Map1.clear 
_map1={};
// [853]  Try 
try {
// [854]  If strJSON.length > 0 Then 
if (_strjson.length>0) {
// [855]  json.Initialize(strJSON) 
_json=JSON.parse(_strjson);
// [856]  Map1 = json.NextObject 
_map1=_json;
// [857]  End If 
}
// [858]  Return Map1 
return _map1;
// [859]  Catch 
} catch(err) {
// [860]  Return Map1 
return _map1;
// [861]  End Try 
}
// End Sub
};

// [864] Sub NewDate(year As Int, month As Int, day As Int) As BANanoObject 
this.newdate=function(_year,_month,_day) {
if (_B==null) _B=this;
var _dd;
// [865]  Dim dd As BANanoObject 
_dd=null;
// [866]  dd.Initialize2( {160} , Array(year, month, day)) 
_dd=new Date(_year,_month,_day);
// [867]  Return dd 
return _dd;
// End Sub
};

// [870] Sub NewDateTime(year As Int, month As Int, day As Int, hour As Int, minute As Int) As BANanoObject 
this.newdatetime=function(_year,_month,_day,_hour,_minute) {
if (_B==null) _B=this;
var _dd;
// [871]  Dim dd As BANanoObject 
_dd=null;
// [872]  dd.Initialize2( {161} , Array(year, month, day, hour, minute)) 
_dd=new Date(_year,_month,_day,_hour,_minute);
// [873]  Return dd 
return _dd;
// End Sub
};

// [876] Sub Pad(Value As String, MaxLen As Int, PadChar As String, right As Boolean) As String 
this.pad=function(_value,_maxlen,_padchar,_right) {
if (_B==null) _B=this;
var _intordnolen,_i;
// [877]  Dim intOrdNoLen As Int = Value.Length 
_intordnolen=_value.length;
// [878]  Dim i As Int 
_i=0;
// [879]  For i = 1 To (MaxLen - intOrdNoLen) Step 1 
for (_i=1;_i<=(_maxlen-_intordnolen);_i+=1) {
// [880]  If right Then 
if (_right) {
// [881]  Value = Value & PadChar 
_value=_value+_padchar;
// [882]  Else 
} else {
// [883]  Value = PadChar & Value 
_value=_padchar+_value;
// [884]  End If 
}
// [885]  Next 
}
// [886]  Return Value 
return _value;
// End Sub
};

// [889] Sub CLng(o As Object) As Long 
this.clng=function(_o) {
if (_B==null) _B=this;
// [890]  Return Floor(o) 
return (Math.floor(_o));
// End Sub
};

// [893] Sub CInt(o As Object) As Int 
this.cint=function(_o) {
if (_B==null) _B=this;
// [894]  Return Floor(o) 
return (Math.floor(_o));
// End Sub
};

// [899] Sub List2Json(mp As List) As String 
this.list2json=function(_mp) {
if (_B==null) _B=this;
var _json;
// [900]  Dim JSON As BANanoJSONGenerator 
_json={};
// [901]  JSON.Initialize2(mp) 
_json=_mp;
// [902]  Return JSON.ToString 
return JSON.stringify(_json);
// End Sub
};

// [906] Sub Json2List(strValue As String) As List 
this.json2list=function(_strvalue) {
if (_B==null) _B=this;
var _lst,_parser;
// [907]  Dim lst As List 
_lst=[];
// [908]  lst.Initialize 
_lst.length=0;
// [909]  lst.clear 
_lst.length=0;
// [910]  If strValue.Length = 0 Then 
if (_strvalue.length==0) {
// [911]  Return lst 
return _lst;
// [912]  End If 
}
// [913]  Try 
try {
// [914]  Dim parser As BANanoJSONParser 
_parser={};
// [915]  parser.Initialize(strValue) 
_parser=JSON.parse(_strvalue);
// [916]  Return parser.NextArray 
return _parser;
// [917]  Catch 
} catch(err) {
// [918]  Return lst 
return _lst;
// [919]  End Try 
}
// End Sub
};

// [923] Sub MapValues2LowerCase(m As Map, props As List) 
this.mapvalues2lowercase=function(_m,_props) {
if (_B==null) _B=this;
var _prop,_v;
// [924]  For Each prop As String In props 
for (var _propindex=0;_propindex<_props.length;_propindex++) {
_prop=_props[_propindex];
// [925]  If m.ContainsKey(prop) Then 
if ((_prop in _m)) {
// [926]  Dim v As String = m.GetDefault(prop, {162} ) 
_v=(_m[_prop] || "");
// [927]  v = v.tolowercase 
_v=_v.toLowerCase();
// [928]  m.Put(prop,v) 
_m[_prop]=_v;
// [929]  End If 
}
// [930]  Next 
}
// End Sub
};

// [933] Sub NumberSuffix(N As Double) As String 
this.numbersuffix=function(_n) {
if (_B==null) _B=this;
var _suffix,_thousands,_maxdecimalplaces,_relativeerror;
// [934]  If N < 0 Then 
if (_n<0) {
// [935]  Return {163} & NumberSuffix(-N) 
return "-"+_B.numbersuffix(-_n,_B);
// [936]  End If 
}
// [937]  Dim Suffix() As String = Array As String( {164} , {165} , {166} , {167} , {168} ) 
_suffix=["","k","M","B","T"];
// [938]  Dim Thousands As Int = 0 
_thousands=0;
// [939]  Do While N >= 1000 And Thousands < Suffix.Length - 1 
while (_n>=1000 && _thousands<_suffix.length-1) {
// [940]  Thousands = Thousands + 1 
_thousands=_thousands+1;
// [941]  N = N / 1000 
_n=_n/1000;
// [942]  Loop 
}
// [943]  If Thousands = 0 Then 
if (_thousands==0) {
// [944]  Return NumberFormat2(N, 1, 2, 2, False) 
return BANano_nf2(BANano_r2f(_n, 2, 2),1,false);
// [945]  End If 
}
// [947]  Dim MaxDecimalPlaces As Int = 0 
_maxdecimalplaces=0;
// [948]  Do While MaxDecimalPlaces < 5 
while (_maxdecimalplaces<5) {
// [949]  Dim RelativeError As Double = Abs(N - Round2(N, MaxDecimalPlaces)) / N 
_relativeerror=(Math.abs(_n-(+(Math.round(_n+"e+"+_maxdecimalplaces)+"e-"+_maxdecimalplaces))))/_n;
// [950]  If RelativeError < 0.007 Then 
if (_relativeerror<0.007) {
// [951]  Exit 
break;
// [952]  End If 
}
// [953]  MaxDecimalPlaces = MaxDecimalPlaces + 1 
_maxdecimalplaces=_maxdecimalplaces+1;
// [954]  Loop 
}
// [955]  Return NumberFormat2(N, 1, 0, MaxDecimalPlaces, False) & Suffix(Thousands) 
return BANano_nf2(BANano_r2f(_n, 0, _maxdecimalplaces),1,false)+_suffix[_thousands];
// End Sub
};

// [959] Sub List2Array (a_lstArgs As List) As String() 
this.list2array=function(_a_lstargs) {
if (_B==null) _B=this;
var _arrargs,_i;
// [960]  Dim arrArgs(a_lstArgs.Size) As String 
_arrargs=[];
// [961]  For i = 0 To arrArgs.Length - 1 
for (_i=0;_i<=_arrargs.length-1;_i++) {
// [962]  arrArgs(i) = a_lstArgs.Get(i) 
_arrargs[_i]=_a_lstargs[_i];
// [963]  Next 
}
// [964]  Return arrArgs 
return _arrargs;
// End Sub
};

// [968] Sub RandomString(iLength As Int, bLowerCase As Boolean, bUpperCase As Boolean, bNumbers As Boolean, AdditionalChars As String) As String 
this.randomstring=function(_ilength,_blowercase,_buppercase,_bnumbers,_additionalchars) {
if (_B==null) _B=this;
var _source,_sb,_i,_r;
// [969]  Dim source As String 
_source="";
// [970]  If bLowerCase = True Then 
if (_blowercase==true) {
// [971]  source = source & {169} 
_source=_source+"abcdefghijklmnopqrstuvwxyz";
// [972]  End If 
}
// [973]  If bUpperCase = True Then 
if (_buppercase==true) {
// [974]  source = source & {170} 
_source=_source+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// [975]  End If 
}
// [976]  If bNumbers = True Then 
if (_bnumbers==true) {
// [977]  source = source & {171} 
_source=_source+"0123456789";
// [978]  End If 
}
// [979]  If AdditionalChars.Length > 0 Then 
if (_additionalchars.length>0) {
// [980]  source = source&AdditionalChars 
_source=_source+_additionalchars;
// [981]  End If 
}
// [983]  Dim SB As StringBuilder 
_sb=new StringBuilder();
// [984]  SB.Initialize 
_sb.init();
_sb.isinitialized=true;
// [985]  For i = 1 To iLength 
for (_i=1;_i<=_ilength;_i++) {
// [986]  Dim r As Int = Rnd(0,source.Length-1) 
_r=(Math.floor(Math.random() * (_source.length-1 - 0) + 0));
// [987]  SB.Append(source.SubString2(r,r+1)) 
_sb.append(_source.substring(_r,_r+1));
// [988]  Next 
}
// [989]  Return SB.ToString 
return _sb.toString();
// End Sub
};

// [992] Sub GeneratePassword(IntNum As Int) As String 
this.generatepassword=function(_intnum) {
if (_B==null) _B=this;
// [993]  Return RandomString(IntNum,True,True,True, {172} ) 
return _B.randomstring(_intnum,true,true,true,"",_B);
// End Sub
};

// [997] Sub RemDelimSB(delimiter As String, value As StringBuilder) As StringBuilder 
this.remdelimsb=function(_delimiter,_value) {
if (_B==null) _B=this;
var _delimlen;
// [998]  If value.tostring.EndsWith(delimiter) = True Then 
if (_value.toString().endsWith(_delimiter)==true) {
// [999]  Dim delimLen As Int = delimiter.length 
_delimlen=_delimiter.length;
// [1000]  value.Remove(value.Length-delimLen,value.Length) 
_value.remove(_value.length()-_delimlen, _value.length());
// [1001]  End If 
}
// [1002]  Return value 
return _value;
// End Sub
};

// [1006] Sub Space(HM As Int) As String 
this.space=function(_hm) {
if (_B==null) _B=this;
var _rs;
// [1007]  Dim RS As String = {173} 
_rs="";
// [1008]  Do While Len(RS) < HM 
while (_B.len(_rs,_B)<_hm) {
// [1009]  RS = RS & {174} 
_rs=_rs+" ";
// [1010]  Loop 
}
// [1011]  Return RS 
return _rs;
// End Sub
};

// [1014] Sub MakeMoney(sValue As String) As String 
this.makemoney=function(_svalue) {
if (_B==null) _B=this;
// [1015]  If sValue.Length = 0 Then Return {175} 
if (_svalue.length==0) { return "0.00";}
// [1016]  If sValue = {176} Then sValue = {177} 
if (_svalue=="null") {_svalue="0.00";}
// [1017]  sValue = sValue.Replace( {178} , {179} ) 
_svalue=_svalue.split(",").join("");
// [1018]  sValue = Val(sValue) 
_svalue=_B.val(_svalue,_B);
// [1019]  If sValue = {180} Then sValue = {181} 
if (_svalue=="0") {_svalue="000";}
// [1020]  sValue = Round2(sValue,2) 
_svalue=(+(Math.round(_svalue+"e+"+2)+"e-"+2));
// [1021]  Return NumberFormat2(sValue, 1, 2, 2, True) 
return BANano_nf2(BANano_r2f(_svalue, 2, 2),1,true);
// End Sub
};

// [1024] Sub Percentage(sValue As String) As String 
this.percentage=function(_svalue) {
if (_B==null) _B=this;
// [1025]  If sValue = {182} Then sValue = {183} 
if (_svalue=="") {_svalue="0.00";}
// [1026]  If sValue.Length = 0 Then Return {184} 
if (_svalue.length==0) { return "0.00";}
// [1027]  If sValue = {185} Then sValue = {186} 
if (_svalue=="null") {_svalue="0.00";}
// [1028]  sValue = sValue.Replace( {187} , {188} ) 
_svalue=_svalue.split(",").join("");
// [1029]  sValue = Val(sValue) 
_svalue=_B.val(_svalue,_B);
// [1030]  If sValue = {189} Then sValue = {190} 
if (_svalue=="0") {_svalue="0.00";}
// [1031]  sValue = Round2(sValue,2) 
_svalue=(+(Math.round(_svalue+"e+"+2)+"e-"+2));
// [1032]  sValue = sValue & {191} 
_svalue=_svalue+"%";
// [1033]  Return sValue 
return _svalue;
// End Sub
};

// [1036] Sub MidString(Text As String, Start As Int, lLength As Int) As String 
this.midstring=function(_text,_start,_llength) {
if (_B==null) _B=this;
// [1037]  Return Text.SubString2(Start-1,Start+lLength-1) 
return _text.substring(_start-1,_start+_llength-1);
// End Sub
};

// [1040] Sub MidString2(Text As String, Start As Int) As String 
this.midstring2=function(_text,_start) {
if (_B==null) _B=this;
// [1041]  Return Text.SubString(Start-1) 
return _text.substring(_start-1);
// End Sub
};

// [1044] Sub RightString(Text As String, lLength As Long) As String 
this.rightstring=function(_text,_llength) {
if (_B==null) _B=this;
// [1045]  If lLength>Text.Length Then lLength=Text.Length 
if (_llength>_text.length) {_llength=_text.length;}
// [1046]  Return Text.SubString(Text.Length-lLength) 
return _text.substring(_text.length-_llength);
// End Sub
};

// [1049] Sub LeftString(Text As String, lLength As Long)As String 
this.leftstring=function(_text,_llength) {
if (_B==null) _B=this;
// [1050]  If lLength>Text.Length Then lLength=Text.Length 
if (_llength>_text.length) {_llength=_text.length;}
// [1051]  Return Text.SubString2(0, lLength) 
return _text.substring(0,_llength);
// End Sub
};

// [1054] Sub ReplaceString(Text As String, sFind As String, sReplaceWith As String) As String 
this.replacestring=function(_text,_sfind,_sreplacewith) {
if (_B==null) _B=this;
// [1055]  Return Text.Replace(sFind, sReplaceWith) 
return _text.split(_sfind).join(_sreplacewith);
// End Sub
};

// [1058] Sub LongDate(sDate As String) As String 
this.longdate=function(_sdate) {
if (_B==null) _B=this;
var _dt;
// [1059]  If sDate.Length = 0 Then Return {192} 
if (_sdate.length==0) { return "";}
// [1060]  Try 
try {
// [1061]  DateTime.DateFormat = {193} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [1062]  Dim dt As Long = DateTime.DateParse(sDate) 
_dt=DateTime.DateParse(_sdate);
// [1063]  DateTime.DateFormat = {194} 
DateTime.SetDateFormat("EEEE, dd MMMM yyyy");
// [1064]  Return DateTime.Date(dt) 
return DateTime.Date(_dt);
// [1065]  Catch 
} catch(err) {
// [1066]  Return {195} 
return "";
// [1067]  End Try 
}
// End Sub
};

// [1070] Sub LongDateTime(sDate As String) As String 
this.longdatetime=function(_sdate) {
if (_B==null) _B=this;
var _dt;
// [1071]  If sDate.Length = 0 Then Return {196} 
if (_sdate.length==0) { return "";}
// [1072]  Try 
try {
// [1073]  DateTime.DateFormat = {197} 
DateTime.SetDateFormat("yyyy-MM-dd HH:mm");
// [1074]  Dim dt As Long = DateTime.DateParse(sDate) 
_dt=DateTime.DateParse(_sdate);
// [1075]  DateTime.DateFormat = {198} 
DateTime.SetDateFormat("EEEE, dd MMMM yyyy HH:mm");
// [1076]  Return DateTime.Date(dt) 
return DateTime.Date(_dt);
// [1077]  Catch 
} catch(err) {
// [1078]  Return {199} 
return "";
// [1079]  End Try 
}
// End Sub
};

// [1082] private Sub TrimString(strValue As String) As String 
this.trimstring=function(_strvalue) {
if (_B==null) _B=this;
// [1083]  Return strValue.trim 
return _strvalue.trim();
// End Sub
};

// [1086] Sub LCase(Text As String) As String 
this.lcase=function(_text) {
if (_B==null) _B=this;
// [1087]  Return Text.ToLowerCase 
return _text.toLowerCase();
// End Sub
};

// [1090] Public Sub InQuotes(sValue As String) As String 
this.inquotes=function(_svalue) {
if (_B==null) _B=this;
// [1091]  Return QUOTE & sValue & QUOTE 
return "\""+_svalue+"\"";
// End Sub
};

// [1094] Sub ProperCase(myStr As String) As String 
this.propercase=function(_mystr) {
if (_B==null) _B=this;
var _x,_j,_k;
// [1095]  Try 
try {
// [1096]  If myStr.trim.length = 0 Then Return {200} 
if (_mystr.trim().length==0) { return "";}
// [1097]  Dim x As String 
_x="";
// [1098]  Dim j, k As Int 
_j=0;
_k=0;
// [1099]  myStr = myStr.tolowercase 
_mystr=_mystr.toLowerCase();
// [1100]  x = myStr.ToUpperCase.CharAt(0) 
_x=_mystr.toUpperCase().charAt(0);
// [1101]  myStr = x & myStr.SubString2(1, myStr.Length) 
_mystr=_x+_mystr.substring(1,_mystr.length);
// [1102]  For j = 1 To myStr.Length 
for (_j=1;_j<=_mystr.length;_j++) {
// [1103]  k = myStr.IndexOf2( {201} , j + 1) 
_k=_mystr.indexOf(" ",_j+1);
// [1104]  If k = -1 Then Exit 
if (_k==-1) {break;}
// [1105]  x = myStr.ToUpperCase.CharAt(k + 1) 
_x=_mystr.toUpperCase().charAt(_k+1);
// [1106]  myStr = myStr.SubString2(0, k + 1) & x & myStr.SubString2(k + 2, myStr.Length) 
_mystr=_mystr.substring(0,_k+1)+_x+_mystr.substring(_k+2,_mystr.length);
// [1107]  Next 
}
// [1108]  Return myStr 
return _mystr;
// [1109]  Catch 
} catch(err) {
// [1110]  Return myStr 
return _mystr;
// [1111]  End Try 
}
// End Sub
};

// [1116] Sub MapKeysLowerCaseSingle(m As Map) As Map 
this.mapkeyslowercasesingle=function(_m) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1117]  Dim nm As Map = CreateMap() 
_nm={};
// [1118]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1119]  Dim v As Object = m.Get(k) 
_v=_m[_k];
// [1120]  k = k.tolowercase 
_k=_k.toLowerCase();
// [1121]  nm.Put(k, v) 
_nm[_k]=_v;
// [1122]  Next 
}
// [1123]  Return nm 
return _nm;
// End Sub
};

// [1127] Sub MapKeysLowerCaseList(lst As List) As List 
this.mapkeyslowercaselist=function(_lst) {
if (_B==null) _B=this;
var _nl,_rec;
// [1128]  Dim nl As List 
_nl=[];
// [1129]  nl.Initialize 
_nl.length=0;
// [1130]  For Each rec As Map In lst 
for (var _recindex=0;_recindex<_lst.length;_recindex++) {
_rec=_lst[_recindex];
// [1131]  rec = MapKeysLowerCaseSingle(rec) 
_rec=_B.mapkeyslowercasesingle(_rec,_B);
// [1132]  nl.Add(rec) 
_nl.push(_rec);
// [1133]  Next 
}
// [1134]  Return nl 
return _nl;
// End Sub
};

// [1139] Sub GetMapValues(sourceMap As Map) As List 
this.getmapvalues=function(_sourcemap) {
if (_B==null) _B=this;
var _listofvalues,_icnt,_itot,_value;
// [1140]  Dim listOfValues As List 
_listofvalues=[];
// [1141]  listOfValues.Initialize 
_listofvalues.length=0;
// [1142]  Dim iCnt As Int 
_icnt=0;
// [1143]  Dim iTot As Int 
_itot=0;
// [1144]  iTot = sourceMap.Size - 1 
_itot=Object.keys(_sourcemap).length-1;
// [1145]  For iCnt = 0 To iTot 
for (_icnt=0;_icnt<=_itot;_icnt++) {
// [1146]  Dim value As Object = sourceMap.GetValueAt(iCnt) 
_value=banano_getB4JValueAt(_sourcemap,_icnt);
// [1147]  listOfValues.Add(value) 
_listofvalues.push(_value);
// [1148]  Next 
}
// [1149]  Return listOfValues 
return _listofvalues;
// End Sub
};

// [1153] Sub GetMapKeys(sourceMap As Map) As List 
this.getmapkeys=function(_sourcemap) {
if (_B==null) _B=this;
var _listofvalues,_icnt,_itot,_value;
// [1154]  Dim listOfValues As List 
_listofvalues=[];
// [1155]  listOfValues.Initialize 
_listofvalues.length=0;
// [1156]  Dim iCnt As Int 
_icnt=0;
// [1157]  Dim iTot As Int 
_itot=0;
// [1158]  iTot = sourceMap.Size - 1 
_itot=Object.keys(_sourcemap).length-1;
// [1159]  For iCnt = 0 To iTot 
for (_icnt=0;_icnt<=_itot;_icnt++) {
// [1160]  Dim value As Object = sourceMap.GetKeyAt(iCnt) 
_value=banano_getB4JKeyAt(_sourcemap,_icnt);
// [1161]  listOfValues.Add(value) 
_listofvalues.push(_value);
// [1162]  Next 
}
// [1163]  Return listOfValues 
return _listofvalues;
// End Sub
};

// [1168] Public Sub GetNumbers(value As String) As String 
this.getnumbers=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [1169]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [1170]  Try 
try {
// [1171]  value = value.Trim 
_value=_value.trim();
// [1172]  Dim sout As String = {202} 
_sout="";
// [1173]  Dim mout As String = {203} 
_mout="";
// [1174]  Dim slen As Int = value.Length 
_slen=_value.length;
// [1175]  Dim i As Int = 0 
_i=0;
// [1176]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [1177]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [1178]  If InStr( {204} , mout) <> -1 Then 
if (_B.instr("0123456789.-",_mout,_B)!=-1) {
// [1179]  sout = sout & mout 
_sout=_sout+_mout;
// [1180]  End If 
}
// [1181]  Next 
}
// [1182]  Return sout 
return _sout;
// [1183]  Catch 
} catch(err) {
// [1184]  Return value 
return _value;
// [1185]  End Try 
}
// End Sub
};

// [1189] Sub SortMap(m As Map) As Map 
this.sortmap=function(_m) {
if (_B==null) _B=this;
var _nm,_lst,_strkey,_strvalue;
// [1190]  Try 
try {
// [1191]  Dim nm As Map 
_nm={};
// [1192]  nm.Initialize 
_nm={};
// [1193]  Dim lst As List 
_lst=[];
// [1194]  lst.Initialize 
_lst.length=0;
// [1195]  For Each strkey As String In m.Keys 
var _strkeyKeys = Object.keys(_m);
for (var _strkeyindex=0;_strkeyindex<_strkeyKeys.length;_strkeyindex++) {
_strkey=_strkeyKeys[_strkeyindex];
// [1196]  lst.Add(strkey) 
_lst.push(_strkey);
// [1197]  Next 
}
// [1199]  lst.Sort(True) 
if (!isNaN(parseFloat(_lst[0])) && isFinite(_lst[0])) {
_lst.sort(function(a, b){return a - b});
} else {
_lst.sort();
};
// [1200]  For Each strkey As String In lst 
for (var _strkeyindex=0;_strkeyindex<_lst.length;_strkeyindex++) {
_strkey=_lst[_strkeyindex];
// [1201]  Dim strvalue As Object = m.Get(strkey) 
_strvalue=_m[_strkey];
// [1202]  nm.Put(strkey,strvalue) 
_nm[_strkey]=_strvalue;
// [1203]  Next 
}
// [1204]  Return nm 
return _nm;
// [1205]  Catch 
} catch(err) {
// [1206]  Return m 
return _m;
// [1207]  End Try 
}
// End Sub
};

// [1211] Sub MergeMaps(oldm As Map, newm As Map) As Map 
this.mergemaps=function(_oldm,_newm) {
if (_B==null) _B=this;
var _om,_k,_v;
// [1212]  Dim om As Map = CreateMap() 
_om={};
// [1213]  For Each k As String In oldm.Keys 
var _kKeys = Object.keys(_oldm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1214]  Dim v As Object = oldm.Get(k) 
_v=_oldm[_k];
// [1215]  om.Put(k, v) 
_om[_k]=_v;
// [1216]  Next 
}
// [1218]  For Each k As String In newm.Keys 
var _kKeys = Object.keys(_newm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1219]  Dim v As Object = newm.Get(k) 
_v=_newm[_k];
// [1220]  om.Put(k, v) 
_om[_k]=_v;
// [1221]  Next 
}
// [1222]  Return om 
return _om;
// End Sub
};

// [1226] Sub List2MapSimple(lst As List, bSort As Boolean) As Map 
this.list2mapsimple=function(_lst,_bsort) {
if (_B==null) _B=this;
var _nm,_k;
// [1227]  If bSort Then lst.Sort(True) 
if (_bsort) {if (!isNaN(parseFloat(_lst[0])) && isFinite(_lst[0])) {
_lst.sort(function(a, b){return a - b});
} else {
_lst.sort();
}
;}
// [1228]  Dim nm As Map = CreateMap() 
_nm={};
// [1229]  For Each k As String In lst 
for (var _kindex=0;_kindex<_lst.length;_kindex++) {
_k=_lst[_kindex];
// [1230]  nm.Put(k, k) 
_nm[_k]=_k;
// [1231]  Next 
}
// [1232]  Return nm 
return _nm;
// End Sub
};

// [1237] Sub List2Options(lst As List, keyName As String, valueName As String) As Map 
this.list2options=function(_lst,_keyname,_valuename) {
if (_B==null) _B=this;
var _recs,_k,_nrec;
// [1238]  Dim recs As List 
_recs=[];
// [1239]  recs.Initialize 
_recs.length=0;
// [1240]  For Each k As String In lst 
for (var _kindex=0;_kindex<_lst.length;_kindex++) {
_k=_lst[_kindex];
// [1241]  Dim nrec As Map = CreateMap() 
_nrec={};
// [1242]  nrec.Put(keyName, k) 
_nrec[_keyname]=_k;
// [1243]  nrec.Put(valueName, k) 
_nrec[_valuename]=_k;
// [1244]  recs.Add(nrec) 
_recs.push(_nrec);
// [1245]  Next 
}
// [1246]  Return recs 
return _recs;
// End Sub
};

// [1250] Sub List2Map(lst As List, keyName As String, valueName As String) As Map 
this.list2map=function(_lst,_keyname,_valuename) {
if (_B==null) _B=this;
// [1251]  Return List2Options(lst, keyName, valueName) 
return _B.list2options(_lst,_keyname,_valuename,_B);
// End Sub
};

// [1255] Sub Map2Options(m As Map, keyName As String, valueName As String) As List 
this.map2options=function(_m,_keyname,_valuename) {
if (_B==null) _B=this;
var _recs,_k,_v,_nrec;
// [1256]  Dim recs As List 
_recs=[];
// [1257]  recs.Initialize 
_recs.length=0;
// [1258]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1259]  Dim v As Object = m.Get(k) 
_v=_m[_k];
// [1260]  Dim nrec As Map = CreateMap() 
_nrec={};
// [1261]  nrec.Put(keyName, k) 
_nrec[_keyname]=_k;
// [1262]  nrec.Put(valueName, v) 
_nrec[_valuename]=_v;
// [1263]  recs.Add(nrec) 
_recs.push(_nrec);
// [1264]  Next 
}
// [1265]  Return recs 
return _recs;
// End Sub
};

// [1269] Sub MapClone(oldMap As Map) As Map 
this.mapclone=function(_oldmap) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1270]  Dim nm As Map = CreateMap() 
_nm={};
// [1271]  For Each k As String In oldMap.keys 
var _kKeys = Object.keys(_oldmap);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1272]  Dim v As Object = oldMap.Get(k) 
_v=_oldmap[_k];
// [1273]  nm.Put(k, v) 
_nm[_k]=_v;
// [1274]  Next 
}
// [1275]  Return nm 
return _nm;
// End Sub
};

// [1279] Sub MapCloneSwap(oldMap As Map) As Map 
this.mapcloneswap=function(_oldmap) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1280]  Dim nm As Map = CreateMap() 
_nm={};
// [1281]  For Each k As String In oldMap.keys 
var _kKeys = Object.keys(_oldmap);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1282]  Dim v As Object = oldMap.Get(k) 
_v=_oldmap[_k];
// [1283]  nm.Put(v, k) 
_nm[_v]=_k;
// [1284]  Next 
}
// [1285]  Return nm 
return _nm;
// End Sub
};

// [1289] Sub SetBackgroundImage(elid As String, url As String) 
this.setbackgroundimage=function(_elid,_url) {
if (_B==null) _B=this;
// [1290]  BANano.GetElement(elid).SetStyle(BANano.ToJson(CreateMap( {205} : {11} , {206} : {207} ))) 
u(_elid).css(JSON.parse(JSON.stringify({"background-image":"url('" + _url + "')", "background-size":"100% 100%"})));
// End Sub
};

// [1294] Sub JSONSetProperty(sjson As String, updates As Map) As String 
this.jsonsetproperty=function(_sjson,_updates) {
if (_B==null) _B=this;
var _m,_k,_v,_sout;
// [1295]  Dim m As Map = BANano.FromJson(sjson) 
_m=JSON.parse(_sjson);
// [1296]  For Each k As String In updates.Keys 
var _kKeys = Object.keys(_updates);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1297]  Dim v As Object = updates.Get(k) 
_v=_updates[_k];
// [1298]  m.Put(k, v) 
_m[_k]=_v;
// [1299]  Next 
}
// [1300]  Dim sout As String = BANano.ToJson(m) 
_sout=JSON.stringify(_m);
// [1301]  Return sout 
return _sout;
// End Sub
};

// [1305] Sub EQOperators(sm As Map) As List 'ignore 
this.eqoperators=function(_sm) {
if (_B==null) _B=this;
var _nl,_k;
// [1306]  Dim nl As List 
_nl=[];
// [1307]  nl.initialize 
_nl.length=0;
// [1308]  For Each k As String In sm.Keys 
var _kKeys = Object.keys(_sm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1309]  nl.Add( {208} ) 
_nl.push("=");
// [1310]  Next 
}
// [1311]  Return nl 
return _nl;
// End Sub
};

// [1316] Sub BR As String 
this.br=function() {
if (_B==null) _B=this;
// [1317]  Return {209} 
return "<br>";
// End Sub
};

// [1321] Sub HR As String 
this.hr=function() {
if (_B==null) _B=this;
// [1322]  Return {210} 
return "<hr>";
// End Sub
};

// [1328] Sub MakePx(sValue As String) As String 
this.makepx=function(_svalue) {
if (_B==null) _B=this;
// [1329]  sValue = sValue.trim 
_svalue=_svalue.trim();
// [1330]  If sValue.EndsWith( {211} ) Then 
if (_svalue.endsWith("%")) {
// [1331]  Return sValue 
return _svalue;
// [1332]  else If sValue.EndsWith( {212} ) Then 
} else if (_svalue.endsWith("vm")) {
// [1333]  Return sValue 
return _svalue;
// [1334]  else If sValue.EndsWith( {213} ) Then 
} else if (_svalue.endsWith("px")) {
// [1335]  Return sValue 
return _svalue;
// [1336]  else If sValue.EndsWith( {214} ) Then 
} else if (_svalue.endsWith("cm")) {
// [1337]  Return sValue 
return _svalue;
// [1338]  else If sValue.EndsWith( {215} ) Then 
} else if (_svalue.endsWith("mm")) {
// [1339]  Return sValue 
return _svalue;
// [1340]  else If sValue.EndsWith( {216} ) Then 
} else if (_svalue.endsWith("in")) {
// [1341]  Return sValue 
return _svalue;
// [1342]  else If sValue.EndsWith( {217} ) Then 
} else if (_svalue.endsWith("pt")) {
// [1343]  Return sValue 
return _svalue;
// [1344]  else If sValue.EndsWith( {218} ) Then 
} else if (_svalue.endsWith("pc")) {
// [1345]  Return sValue 
return _svalue;
// [1346]  else If sValue.EndsWith( {219} ) Then 
} else if (_svalue.endsWith("em")) {
// [1347]  Return sValue 
return _svalue;
// [1348]  else If sValue.EndsWith( {220} ) Then 
} else if (_svalue.endsWith("ex")) {
// [1349]  Return sValue 
return _svalue;
// [1350]  else If sValue.EndsWith( {221} ) Then 
} else if (_svalue.endsWith("ch")) {
// [1351]  Return sValue 
return _svalue;
// [1352]  else If sValue.EndsWith( {222} ) Then 
} else if (_svalue.endsWith("rem")) {
// [1353]  Return sValue 
return _svalue;
// [1354]  else If sValue.EndsWith( {223} ) Then 
} else if (_svalue.endsWith("vw")) {
// [1355]  Return sValue 
return _svalue;
// [1356]  else If sValue.EndsWith( {224} ) Then 
} else if (_svalue.endsWith("vh")) {
// [1357]  Return sValue 
return _svalue;
// [1358]  else If sValue.EndsWith( {225} ) Then 
} else if (_svalue.endsWith("vmin")) {
// [1359]  Return sValue 
return _svalue;
// [1360]  else If sValue.EndsWith( {226} ) Then 
} else if (_svalue.endsWith("vmax")) {
// [1361]  Return sValue 
return _svalue;
// [1362]  else If sValue.EndsWith( {227} ) Then 
} else if (_svalue.endsWith(";")) {
// [1363]  Return sValue 
return _svalue;
// [1364]  Else 
} else {
// [1365]  sValue = sValue.Replace( {228} , {229} ) 
_svalue=_svalue.split("px").join("");
// [1366]  sValue = {12} 
_svalue="" + _svalue + "px";
// [1367]  If sValue = {230} Then sValue = {231} 
if (_svalue=="px") {_svalue="";}
// [1368]  Return sValue 
return _svalue;
// [1369]  End If 
}
// End Sub
};

// [1374] Sub SaveText2File(content As String, fileName As String) 
this.savetext2file=function(_content,_filename) {
if (_B==null) _B=this;
var _fc,_blob;
// [1375]  Dim fc As List 
_fc=[];
// [1376]  fc.Initialize 
_fc.length=0;
// [1377]  fc.Add(content) 
_fc.push(_content);
// [1378]  Dim blob As BANanoObject 
_blob=null;
// [1379]  blob.Initialize2( {232} ,Array(fc, CreateMap( {233} : {234} ))) 
_blob=new Blob(_fc,{"type":"text/plain;charset=utf-8"});
// [1380]  BANAno.RunJavascriptMethod( {235} ,Array(blob,fileName)) 
BANanoExec("saveAs", window, _blob,_filename);
// End Sub
};

// [1383] Sub SaveBinaryArray2File(iUint8Array As Object, dbName As String) 
this.savebinaryarray2file=function(_iuint8array,_dbname) {
if (_B==null) _B=this;
var _fc,_blob;
// [1384]  Dim fc As List 
_fc=[];
// [1385]  fc.Initialize 
_fc.length=0;
// [1386]  fc.Add(iUint8Array) 
_fc.push(_iuint8array);
// [1388]  Dim blob As BANanoObject 
_blob=null;
// [1389]  blob.Initialize2( {236} ,Array(fc, CreateMap( {237} : {238} ))) 
_blob=new Blob(_fc,{"type":"application/octet-stream"});
// [1390]  BANano.RunJavascriptMethod( {239} ,Array(blob, dbName)) 
BANanoExec("saveAs", window, _blob,_dbname);
// End Sub
};

// [1394] Sub MvCount(strMV As String, Delimiter As String) As Int 
this.mvcount=function(_strmv,_delimiter) {
if (_B==null) _B=this;
var _spvalues;
// [1395]  Dim spValues() As String = BANano.Split(Delimiter,strMV) 
_spvalues=_strmv.split(_delimiter);
// [1396]  Return spValues.Length 
return _spvalues.length;
// End Sub
};

// [1400] Sub AuditTrail(oldM As Map, newM As Map) As Map 
this.audittrail=function(_oldm,_newm) {
if (_B==null) _B=this;
var _df,_k,_v,_nv,_ov;
// [1401]  Dim df As Map = CreateMap() 
_df={};
// [1402]  For Each k As String In oldM.Keys 
var _kKeys = Object.keys(_oldm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1403]  Dim v As Object = oldM.Get(k) 
_v=_oldm[_k];
// [1404]  If newM.ContainsKey(k) Then 
if ((_k in _newm)) {
// [1405]  Dim nv As Object = newM.Get(k) 
_nv=_newm[_k];
// [1406]  If v <> nv Then 
if (_v!=_nv) {
// [1407]  df.Put(k, nv) 
_df[_k]=_nv;
// [1408]  End If 
}
// [1409]  End If 
}
// [1410]  Next 
}
// [1411]  For Each k As String In newM.Keys 
var _kKeys = Object.keys(_newm);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1412]  Dim v As Object = newM.Get(k) 
_v=_newm[_k];
// [1413]  If oldM.ContainsKey(k) Then 
if ((_k in _oldm)) {
// [1414]  Dim ov As Object = oldM.Get(k) 
_ov=_oldm[_k];
// [1415]  If v <> ov Then 
if (_v!=_ov) {
// [1416]  df.Put(k, v) 
_df[_k]=_v;
// [1417]  End If 
}
// [1418]  Else 
} else {
// [1419]  df.Put(k, v) 
_df[_k]=_v;
// [1420]  End If 
}
// [1421]  Next 
}
// [1422]  Return df 
return _df;
// End Sub
};

// [1425] Public Sub TimeNow() As String 
this.timenow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [1426]  Dim lNow As Long 
_lnow=0;
// [1427]  Dim dt As String 
_dt="";
// [1428]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [1429]  DateTime.DateFormat = {240} 
DateTime.SetDateFormat("HH:mm");
// [1430]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [1431]  Return dt 
return _dt;
// End Sub
};

// [1434] Public Sub DateNow() As String 
this.datenow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [1435]  Dim lNow As Long 
_lnow=0;
// [1436]  Dim dt As String 
_dt="";
// [1437]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [1438]  DateTime.DateFormat = {241} 
DateTime.SetDateFormat("yyyy-MM-dd");
// [1439]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [1440]  Return dt 
return _dt;
// End Sub
};

// [1443] Public Sub DateTimeNow() As String 
this.datetimenow=function() {
if (_B==null) _B=this;
var _lnow,_dt;
// [1444]  Dim lNow As Long 
_lnow=0;
// [1445]  Dim dt As String 
_dt="";
// [1446]  lNow = DateTime.Now 
_lnow=DateTime.Now();
// [1447]  DateTime.DateFormat = {242} 
DateTime.SetDateFormat("yyyy-MM-dd HH:mm");
// [1448]  dt = DateTime.Date(lNow) 
_dt=DateTime.Date(_lnow);
// [1449]  Return dt 
return _dt;
// End Sub
};

// [1453] Sub LongDateTimeToday() As String 
this.longdatetimetoday=function() {
if (_B==null) _B=this;
var _dt;
// [1454]  DateTime.DateFormat = {243} 
DateTime.SetDateFormat("yyyy-MM-dd HH:mm");
// [1455]  Dim dt As Long = DateTime.now 
_dt=DateTime.Now();
// [1456]  DateTime.DateFormat = {244} 
DateTime.SetDateFormat("dd/MM/yyyy, HH:mm");
// [1457]  Return DateTime.Date(dt) 
return DateTime.Date(_dt);
// End Sub
};

// [1460] Sub CopyMap(source As Map, keys As List) As Map 
this.copymap=function(_source,_keys) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1461]  Dim nm As Map = CreateMap() 
_nm={};
// [1462]  If keys.Get(0) = {245} Then 
if (_keys[0]=="*") {
// [1463]  For Each k As String In source.Keys 
var _kKeys = Object.keys(_source);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1464]  Dim v As Object = source.Get(k) 
_v=_source[_k];
// [1465]  nm.Put(k, v) 
_nm[_k]=_v;
// [1466]  Next 
}
// [1467]  Else 
} else {
// [1468]  For Each k As String In keys 
for (var _kindex=0;_kindex<_keys.length;_kindex++) {
_k=_keys[_kindex];
// [1469]  Dim v As Object = source.Get(k) 
_v=_source[_k];
// [1470]  nm.Put(k, v) 
_nm[_k]=_v;
// [1471]  Next 
}
// [1472]  End If 
}
// [1473]  Return nm 
return _nm;
// End Sub
};

// [1477] Sub GetFileParentPath(Path As String) As String 
this.getfileparentpath=function(_path) {
if (_B==null) _B=this;
var _path1,_l;
// [1478]  Dim Path1 As String 
_path1="";
// [1479]  Dim L As Int 
_l=0;
// [1480]  If Path = {246} Then 
if (_path=="/") {
// [1481]  Return {247} 
return "/";
// [1482]  End If 
}
// [1483]  L = Path.LastIndexOf( {248} ) 
_l=_path.lastIndexOf("/");
// [1484]  If L = Path.Length - 1 Then 
if (_l==_path.length-1) {
// [1486]  Path1 = Path.SubString2(0,L) 
_path1=_path.substring(0,_l);
// [1487]  Else 
} else {
// [1488]  Path1 = Path 
_path1=_path;
// [1489]  End If 
}
// [1490]  L = Path.LastIndexOf( {249} ) 
_l=_path.lastIndexOf("/");
// [1491]  If L = 0 Then 
if (_l==0) {
// [1492]  L = 1 
_l=1;
// [1493]  End If 
}
// [1494]  Return Path1.SubString2(0,L) 
return _path1.substring(0,_l);
// End Sub
};

// [1497] Sub GetFileExt(FullPath As String) As String 
this.getfileext=function(_fullpath) {
if (_B==null) _B=this;
// [1498]  Return FullPath.SubString(FullPath.LastIndexOf( {250} )+1) 
return _fullpath.substring(_fullpath.lastIndexOf(".")+1);
// End Sub
};

// [1501] Sub SetPrefix(prefix As String, target As Map) As Map 
this.setprefix=function(_prefix,_target) {
if (_B==null) _B=this;
var _nm,_mk,_mv,_mk1;
// [1502]  Dim nm As Map = CreateMap() 
_nm={};
// [1503]  For Each mk As String In target.Keys 
var _mkKeys = Object.keys(_target);
for (var _mkindex=0;_mkindex<_mkKeys.length;_mkindex++) {
_mk=_mkKeys[_mkindex];
// [1504]  Dim mv As Object = target.Get(mk) 
_mv=_target[_mk];
// [1505]  Dim mk1 As String = prefix & {251} & mk 
_mk1=_prefix+"_"+_mk;
// [1506]  nm.Put(mk1,mv) 
_nm[_mk1]=_mv;
// [1507]  Next 
}
// [1508]  Return nm 
return _nm;
// End Sub
};

// [1512] Sub CStr(o As Object) As String 
this.cstr=function(_o) {
if (_B==null) _B=this;
// [1513]  If o = BANano.UNDEFINED Then o = {252} 
if (_o==undefined) {_o="";}
// [1514]  Return {253} & o 
return ""+_o;
// End Sub
};

// [1518] Sub FixRecords(recs As List, trimThese As List, numThese As List, boolThese As List, dateThese As List, dblThese As List) 
this.fixrecords=function(_recs,_trimthese,_numthese,_boolthese,_datethese,_dblthese) {
if (_B==null) _B=this;
var _rtot,_rcnt,_rec,_nrec,_k,_v;
// [1519]  Dim rTot As Int = recs.Size - 1 
_rtot=_recs.length-1;
// [1520]  Dim rCnt As Int 
_rcnt=0;
// [1521]  For rCnt = 0 To rTot 
for (_rcnt=0;_rcnt<=_rtot;_rcnt++) {
// [1522]  Dim rec As Map = recs.Get(rCnt) 
_rec=_recs[_rcnt];
// [1524]  Dim nrec As Map = CreateMap() 
_nrec={};
// [1525]  For Each k As String In rec.keys 
var _kKeys = Object.keys(_rec);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1526]  Dim v As Object = rec.Get(k) 
_v=_rec[_k];
// [1527]  k = k.ToLowerCase 
_k=_k.toLowerCase();
// [1528]  nrec.Put(k, v) 
_nrec[_k]=_v;
// [1529]  Next 
}
// [1530]  If dateThese <> Null Then MakeDate(nrec,dateThese) 
if (_datethese!=null) {_B.makedate(_nrec,_datethese,_B);}
// [1531]  If trimThese <> Null Then MakeTrim(nrec,trimThese) 
if (_trimthese!=null) {_B.maketrim(_nrec,_trimthese,_B);}
// [1532]  If numThese <> Null Then MakeInteger(nrec, numThese) 
if (_numthese!=null) {_B.makeinteger(_nrec,_numthese,_B);}
// [1533]  If dblThese <> Null Then MakeDouble(nrec, dblThese) 
if (_dblthese!=null) {_B.makedouble(_nrec,_dblthese,_B);}
// [1534]  If boolThese <> Null Then MakeBoolean(nrec, boolThese) 
if (_boolthese!=null) {_B.makeboolean(_nrec,_boolthese,_B);}
// [1535]  recs.Set(rCnt, nrec) 
_recs[_rcnt]=_nrec;
// [1536]  Next 
}
// End Sub
};

// [1539] Sub MakeInteger(m As Map, xkeys As List) 
this.makeinteger=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1540]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1541]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1542]  Dim v As String = m.GetDefault(k, {254} ) 
_v=(_m[_k] || "");
// [1543]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1544]  v = v.trim 
_v=_v.trim();
// [1545]  If v = {255} Then v = {256} 
if (_v=="") {_v="0";}
// [1546]  v = BANano.parseInt(v) 
_v=parseInt(_v);
// [1547]  m.Put(k, v) 
_m[_k]=_v;
// [1548]  End If 
}
// [1549]  Next 
}
// End Sub
};

// [1552] Sub MakeDouble(m As Map, xkeys As List) 
this.makedouble=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1553]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1554]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1555]  Dim v As String = m.GetDefault(k, {257} ) 
_v=(_m[_k] || "");
// [1556]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1557]  v = v.trim 
_v=_v.trim();
// [1558]  If v = {258} Then v = {259} 
if (_v=="") {_v="0";}
// [1559]  v = BANAno.parseFloat(v) 
_v=parseFloat(_v);
// [1560]  m.Put(k, v) 
_m[_k]=_v;
// [1561]  End If 
}
// [1562]  Next 
}
// End Sub
};

// [1565] Sub MakeYesNo(m As Map, xkeys As List) 
this.makeyesno=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1566]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1567]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1568]  Dim v As String = m.GetDefault(k, {260} ) 
_v=(_m[_k] || "No");
// [1569]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1570]  v = v.trim 
_v=_v.trim();
// [1571]  Select Case v 
switch ("" + _v) {
// [1572]  Case {261} , {262} , {263} , {264} ,False,0, {265} , {266} 
case "" + "":
case "" + "0":
case "" + "false":
case "" + "False":
case "" + false:
case "" + 0:
case "" + "no":
case "" + "No":
// [1573]  m.Put(k, {267} ) 
_m[_k]="No";
// [1574]  Case {268} , {269} , {270} ,True,1, {271} , {272} 
break;
case "" + "1":
case "" + "true":
case "" + "True":
case "" + true:
case "" + 1:
case "" + "yes":
case "" + "Yes":
// [1575]  m.Put(k, {273} ) 
_m[_k]="Yes";
// [1576]  End Select 
break;
}
// [1577]  End If 
}
// [1578]  Next 
}
// End Sub
};

// [1583] Sub MakeBoolean(m As Map, xkeys As List) 
this.makeboolean=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1584]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1585]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1586]  Dim v As String = m.GetDefault(k, {274} ) 
_v=(_m[_k] || "0");
// [1587]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1588]  v = v.trim 
_v=_v.trim();
// [1589]  Select Case v 
switch ("" + _v) {
// [1590]  Case {275} , {276} , {277} , {278} ,False,0, {279} , {280} 
case "" + "":
case "" + "0":
case "" + "false":
case "" + "False":
case "" + false:
case "" + 0:
case "" + "no":
case "" + "No":
// [1591]  m.Put(k, False) 
_m[_k]=false;
// [1592]  Case {281} , {282} , {283} ,True,1, {284} , {285} 
break;
case "" + "1":
case "" + "true":
case "" + "True":
case "" + true:
case "" + 1:
case "" + "yes":
case "" + "Yes":
// [1593]  m.Put(k, True) 
_m[_k]=true;
// [1594]  End Select 
break;
}
// [1595]  End If 
}
// [1596]  Next 
}
// End Sub
};

// [1600] Sub MakeTrim(m As Map, xkeys As List) 
this.maketrim=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1601]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1602]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1603]  Dim v As String = m.GetDefault(k, {286} ) 
_v=(_m[_k] || "");
// [1604]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1605]  v = v.trim 
_v=_v.trim();
// [1606]  m.Put(k, v) 
_m[_k]=_v;
// [1607]  End If 
}
// [1608]  Next 
}
// End Sub
};

// [1611] Sub MakeLowerCase(m As Map) As Map 
this.makelowercase=function(_m) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [1612]  Dim nm As Map = CreateMap() 
_nm={};
// [1613]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1614]  Dim v As Object = m.Get(k) 
_v=_m[_k];
// [1615]  k = k.tolowercase 
_k=_k.toLowerCase();
// [1616]  nm.Put(k, v) 
_nm[_k]=_v;
// [1617]  Next 
}
// [1618]  Return nm 
return _nm;
// End Sub
};

// [1621] Sub MakeDate(m As Map, xkeys As List) 
this.makedate=function(_m,_xkeys) {
if (_B==null) _B=this;
var _k,_v;
// [1622]  For Each k As String In xkeys 
for (var _kindex=0;_kindex<_xkeys.length;_kindex++) {
_k=_xkeys[_kindex];
// [1623]  If m.ContainsKey(k) Then 
if ((_k in _m)) {
// [1624]  Dim v As String = m.GetDefault(k, {287} ) 
_v=(_m[_k] || "");
// [1625]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1626]  v = v.trim 
_v=_v.trim();
// [1627]  v = MvField(v,1, {288} ) 
_v=_B.mvfield(_v,1," ",_B);
// [1628]  m.Put(k, v) 
_m[_k]=_v;
// [1629]  End If 
}
// [1630]  Next 
}
// End Sub
};

// [1634] Sub CreateList(Delimiter As String, Values As String) As List 
this.createlist=function(_delimiter,_values) {
if (_B==null) _B=this;
var _newlst,_spv;
// [1635]  Dim newLst As List 
_newlst=[];
// [1636]  newLst.Initialize 
_newlst.length=0;
// [1637]  If Values.length > 0 Then 
if (_values.length>0) {
// [1638]  Dim spV As List = StrParse(Delimiter,Values) 
_spv=_B.strparse(_delimiter,_values,_B);
// [1639]  newLst.AddAll(spV) 
_newlst.splice(_newlst.length,0,..._spv);
// [1640]  End If 
}
// [1641]  Return newLst 
return _newlst;
// End Sub
};

// [1645] Sub MvField(sValue As String, iPosition As Int, Delimiter As String) As String 
this.mvfield=function(_svalue,_iposition,_delimiter) {
if (_B==null) _B=this;
var _xpos,_mvalues,_tvalues,_sb,_startcnt;
// [1646]  If sValue.Length = 0 Then Return {289} 
if (_svalue.length==0) { return "";}
// [1647]  Dim xPos As Int = sValue.IndexOf(Delimiter) 
_xpos=_svalue.indexOf(_delimiter);
// [1648]  If xPos = -1 Then Return sValue 
if (_xpos==-1) { return _svalue;}
// [1649]  Dim mValues As List = StrParse(Delimiter,sValue) 
_mvalues=_B.strparse(_delimiter,_svalue,_B);
// [1650]  Dim tValues As Int 
_tvalues=0;
// [1651]  tValues = mValues.size -1 
_tvalues=_mvalues.length-1;
// [1652]  Select Case iPosition 
switch ("" + _iposition) {
// [1653]  Case -1 
case "" + -1:
// [1654]  Return mValues.get(tValues) 
return _mvalues[_tvalues];
// [1655]  Case -2 
case "" + -2:
// [1656]  Return mValues.get(tValues - 1) 
return _mvalues[_tvalues-1];
// [1657]  Case -3 
case "" + -3:
// [1658]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [1659]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [1660]  Dim startcnt As Int 
_startcnt=0;
// [1661]  sb.Append(mValues.Get(1)) 
_sb.append(_mvalues[1]);
// [1662]  For startcnt = 2 To tValues 
for (_startcnt=2;_startcnt<=_tvalues;_startcnt++) {
// [1663]  sb.Append(Delimiter) 
_sb.append(_delimiter);
// [1664]  sb.Append(mValues.get(startcnt)) 
_sb.append(_mvalues[_startcnt]);
// [1665]  Next 
}
// [1666]  Return sb.tostring 
return _sb.toString();
// [1667]  Case Else 
default:
// [1668]  iPosition = iPosition - 1 
_iposition=_iposition-1;
// [1669]  If iPosition <= -1 Then 
if (_iposition<=-1) {
// [1670]  Return mValues.get(tValues) 
return _mvalues[_tvalues];
// [1671]  End If 
}
// [1672]  If iPosition > tValues Then 
if (_iposition>_tvalues) {
// [1673]  Return {290} 
return "";
// [1674]  End If 
}
// [1675]  Return mValues.get(iPosition) 
return _mvalues[_iposition];
// [1676]  End Select 
}
// End Sub
};

// [1681] Sub RandListValue(ListX As List) As Object 
this.randlistvalue=function(_listx) {
if (_B==null) _B=this;
// [1682]  ShuffleList(ListX) 
_B.shufflelist(_listx,_B);
// [1683]  Return ListX.Get(Rnd(0, ListX.Size -1)) 
return _listx[(Math.floor(Math.random() * (_listx.length-1 - 0) + 0))];
// End Sub
};

// [1687] Sub RamoveFromList(listX As List, item As String) 
this.ramovefromlist=function(_listx,_item) {
if (_B==null) _B=this;
var _li;
// [1688]  Dim li As Int = listX.IndexOf(item) 
_li=_listx.indexOf(_item);
// [1689]  If li >= 0 Then listX.RemoveAt(li) 
if (_li>=0) {_listx.splice(_li,1);}
// End Sub
};

// [1692] Sub ShuffleList(pl As List) As List 
this.shufflelist=function(_pl) {
if (_B==null) _B=this;
var _i,_j,_k;
// [1693]  For i = pl.Size - 1 To 0 Step -1 
for (_i=_pl.length-1;_i>=0;_i-=1) {
// [1694]  Dim j As Int 
_j=0;
// [1695]  Dim k As Object 
_k={};
// [1696]  j = Rnd(0, i + 1) 
_j=(Math.floor(Math.random() * (_i+1 - 0) + 0));
// [1697]  k = pl.Get(j) 
_k=_pl[_j];
// [1698]  pl.Set(j,pl.Get(i)) 
_pl[_j]=_pl[_i];
// [1699]  pl.Set(i,k) 
_pl[_i]=_k;
// [1700]  Next 
}
// [1701]  Return pl 
return _pl;
// End Sub
};

// [1737] public Sub AfterTodayRG(dVariance As Long) As String 
this.aftertodayrg=function(_dvariance) {
if (_B==null) _B=this;
// [1738]  If dVariance <= 0 Then 
if (_dvariance<=0) {
// [1739]  Return {321} 
return "./assets/green.png";
// [1740]  else if dVariance > 0 Then 
} else if (_dvariance>0) {
// [1741]  Return {322} 
return "./assets/red.png";
// [1742]  Else 
} else {
// [1743]  Return {323} 
return "./assets/gray.png";
// [1744]  End If 
}
// End Sub
};

// [1748] Public Sub ProgressRAG(dVariance As Double) As String 
this.progressrag=function(_dvariance) {
if (_B==null) _B=this;
// [1749]  If dVariance < 0 Then 
if (_dvariance<0) {
// [1750]  Return {324} 
return "./assets/red.png";
// [1751]  else if dVariance > 0 Then 
} else if (_dvariance>0) {
// [1752]  Return {325} 
return "./assets/green.png";
// [1753]  else if dVariance = 0 Then 
} else if (_dvariance==0) {
// [1754]  Return {326} 
return "./assets/orange.png";
// [1755]  Else 
} else {
// [1756]  Return {327} 
return "./assets/gray.png";
// [1757]  End If 
}
// End Sub
};

// [1761] Public Sub ExpectedRAG(dValue As Double) As String 
this.expectedrag=function(_dvalue) {
if (_B==null) _B=this;
// [1762]  If dValue = 0 Then 
if (_dvalue==0) {
// [1763]  Return {328} 
return "./assets/orange.png";
// [1764]  else if dValue > 0 Then 
} else if (_dvalue>0) {
// [1765]  Return {329} 
return "./assets/red.png";
// [1766]  else if dValue < 0 Then 
} else if (_dvalue<0) {
// [1767]  Return {330} 
return "./assets/green.png";
// [1768]  Else 
} else {
// [1769]  Return {331} 
return "./assets/red.png";
// [1770]  End If 
}
// End Sub
};

// [1773] Public Sub ExpenditureRAG(dVariance As Double) As String 
this.expenditurerag=function(_dvariance) {
if (_B==null) _B=this;
// [1774]  If dVariance > 0 Then 
if (_dvariance>0) {
// [1775]  Return {332} 
return "./assets/green.png";
// [1776]  else if dVariance < 0 Then 
} else if (_dvariance<0) {
// [1777]  Return {333} 
return "./assets/red.png";
// [1778]  else if dVariance = 0 Then 
} else if (_dvariance==0) {
// [1779]  Return {334} 
return "./assets/orange.png";
// [1780]  Else 
} else {
// [1781]  Return {335} 
return "./assets/gray.png";
// [1782]  End If 
}
// End Sub
};

// [1785] Public Sub PriorityRAG(dValue As Int) As String 
this.priorityrag=function(_dvalue) {
if (_B==null) _B=this;
// [1786]  Select Case dValue 
switch ("" + _dvalue) {
// [1787]  Case 0 
case "" + 0:
// [1788]  Return {336} 
return "./assets/green.png";
// [1789]  Case 1 
case "" + 1:
// [1790]  Return {337} 
return "./assets/orange.png";
// [1791]  Case 2 
case "" + 2:
// [1792]  Return {338} 
return "./assets/red.png";
// [1793]  Case Else 
default:
// [1794]  Return {339} 
return "./assets/gray.png";
// [1795]  End Select 
}
// End Sub
};

// [1798] Public Sub RAG(dValue As Int) As String 
this.rag=function(_dvalue) {
if (_B==null) _B=this;
// [1799]  Select Case dValue 
switch ("" + _dvalue) {
// [1800]  Case 0 
case "" + 0:
// [1801]  Return {340} 
return "./assets/red.png";
// [1802]  Case 1 
case "" + 1:
// [1803]  Return {341} 
return "./assets/orange.png";
// [1804]  Case 2 
case "" + 2:
// [1805]  Return {342} 
return "./assets/green.png";
// [1806]  Case Else 
default:
// [1807]  Return {343} 
return "./assets/gray.png";
// [1808]  End Select 
}
// End Sub
};

// [1811] Public Sub GAR(dValue As Int) As String 
this.gar=function(_dvalue) {
if (_B==null) _B=this;
// [1812]  Select Case dValue 
switch ("" + _dvalue) {
// [1813]  Case 0 
case "" + 0:
// [1814]  Return {344} 
return "./assets/green.png";
// [1815]  Case 1 
case "" + 1:
// [1816]  Return {345} 
return "./assets/orange.png";
// [1817]  Case 2 
case "" + 2:
// [1818]  Return {346} 
return "./assets/red.png";
// [1819]  Case Else 
default:
// [1820]  Return {347} 
return "./assets/gray.png";
// [1821]  End Select 
}
// End Sub
};

// [1824] Public Sub StatusRAG(dValue As Int) As String 
this.statusrag=function(_dvalue) {
if (_B==null) _B=this;
// [1825]  Select Case dValue 
switch ("" + _dvalue) {
// [1826]  Case 0 
case "" + 0:
// [1827]  Return {348} 
return "./assets/red.png";
// [1828]  Case 1 
case "" + 1:
// [1829]  Return {349} 
return "./assets/orange.png";
// [1830]  Case 2 
case "" + 2:
// [1831]  Return {350} 
return "./assets/green.png";
// [1832]  Case Else 
default:
// [1833]  Return {351} 
return "./assets/gray.png";
// [1834]  End Select 
}
// End Sub
};

// [1837] Public Sub FaceRAG(dValue As Int) As String 
this.facerag=function(_dvalue) {
if (_B==null) _B=this;
// [1838]  Select Case dValue 
switch ("" + _dvalue) {
// [1839]  Case 0 
case "" + 0:
// [1840]  Return {352} 
return "./assets/sadface.png";
// [1841]  Case 1 
case "" + 1:
// [1842]  Return {353} 
return "./assets/neutralface.png";
// [1843]  Case 2 
case "" + 2:
// [1844]  Return {354} 
return "./assets/happyface.png";
// [1845]  Case Else 
default:
// [1846]  Return {355} 
return "./assets/sadface.png";
// [1847]  End Select 
}
// End Sub
};

// [1850] Public Sub FaceRG(dValue As Int) As String 
this.facerg=function(_dvalue) {
if (_B==null) _B=this;
// [1851]  Select Case dValue 
switch ("" + _dvalue) {
// [1852]  Case 0 
case "" + 0:
// [1853]  Return {356} 
return "./assets/sadface.png";
// [1854]  Case 1 
case "" + 1:
// [1855]  Return {357} 
return "./assets/happyface.png";
// [1856]  Case Else 
default:
// [1857]  Return {358} 
return "./assets/sadface.png";
// [1858]  End Select 
}
// End Sub
};

// [1861] Public Sub FaceRG1(dValue As Int) As String 
this.facerg1=function(_dvalue) {
if (_B==null) _B=this;
// [1862]  Select Case dValue 
switch ("" + _dvalue) {
// [1863]  Case 1 
case "" + 1:
// [1864]  Return {359} 
return "./assets/sadface.png";
// [1865]  Case 0 
case "" + 0:
// [1866]  Return {360} 
return "./assets/happyface.png";
// [1867]  Case Else 
default:
// [1868]  Return {361} 
return "./assets/sadface.png";
// [1869]  End Select 
}
// End Sub
};

// [1872] Public Sub FaceDone(dValue As Int) As String 
this.facedone=function(_dvalue) {
if (_B==null) _B=this;
// [1873]  Select Case dValue 
switch ("" + _dvalue) {
// [1874]  Case 100 
case "" + 100:
// [1875]  Return {362} 
return "./assets/happyface.png";
// [1876]  Case Else 
default:
// [1877]  Return {363} 
return "./assets/sadface.png";
// [1878]  End Select 
}
// End Sub
};

// [1881] Sub ProgressStatus(dValue As Int) As Int 
this.progressstatus=function(_dvalue) {
if (_B==null) _B=this;
// [1882]  Select Case dValue 
switch ("" + _dvalue) {
// [1883]  Case 100 
case "" + 100:
// [1884]  Return 1 
return 1;
// [1885]  Case Else 
default:
// [1886]  Return 0 
return 0;
// [1887]  End Select 
}
// End Sub
};

// [1890] Sub StatusRG(dValue As Int) As String 
this.statusrg=function(_dvalue) {
if (_B==null) _B=this;
// [1891]  Select Case dValue 
switch ("" + _dvalue) {
// [1892]  Case 0 
case "" + 0:
// [1893]  Return {364} 
return "./assets/red.png";
// [1894]  Case 1 
case "" + 1:
// [1895]  Return {365} 
return "./assets/green.png";
// [1896]  Case Else 
default:
// [1897]  Return {366} 
return "./assets/red.png";
// [1898]  End Select 
}
// End Sub
};

// [1901] Sub EscapeField(f As String) As String 
this.escapefield=function(_f) {
if (_B==null) _B=this;
// [1902]  Return {15} 
return "[" + _f + "]";
// End Sub
};

// [1906] Sub JoinFields(delimiter As String, lst As List) As String 
this.joinfields=function(_delimiter,_lst) {
if (_B==null) _B=this;
var _i,_sb,_fld;
// [1907]  If lst.Size = 0 Then Return {367} 
if (_lst.length==0) { return "";}
// [1908]  Dim i As Int 
_i=0;
// [1909]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [1910]  Dim fld As String 
_fld="";
// [1911]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [1912]  fld = lst.Get(0) 
_fld=_lst[0];
// [1913]  fld = EscapeField(fld) 
_fld=_B.escapefield(_fld,_B);
// [1914]  sb.Append(fld) 
_sb.append(_fld);
// [1915]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [1916]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [1917]  fld = EscapeField(fld) 
_fld=_B.escapefield(_fld,_B);
// [1918]  sb.Append(delimiter).Append(fld) 
_sb.append(_delimiter).append(_fld);
// [1919]  Next 
}
// [1920]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [1924] Sub JoinFields1(delimiter As String, sQuote As String, lst As List) As String 
this.joinfields1=function(_delimiter,_squote,_lst) {
if (_B==null) _B=this;
var _i,_sb,_fld,_xfld;
// [1925]  If lst.Size = 0 Then Return {368} 
if (_lst.length==0) { return "";}
// [1926]  Dim i As Int 
_i=0;
// [1927]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [1928]  Dim fld As String 
_fld="";
// [1929]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [1930]  fld = lst.Get(0) 
_fld=_lst[0];
// [1931]  Dim xfld As String = {16} 
_xfld="" + _fld + "";
// [1932]  xfld = sQuote & xfld & sQuote 
_xfld=_squote+_xfld+_squote;
// [1933]  sb.Append(xfld) 
_sb.append(_xfld);
// [1934]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [1935]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [1936]  Dim xfld As String = {17} 
_xfld="" + _fld + "";
// [1937]  xfld = sQuote & xfld & sQuote 
_xfld=_squote+_xfld+_squote;
// [1938]  sb.Append(delimiter).Append(xfld) 
_sb.append(_delimiter).append(_xfld);
// [1939]  Next 
}
// [1940]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [1944] Sub GetOptionsFromKV(delim As String, k As String, v As String) As Map 
this.getoptionsfromkv=function(_delim,_k,_v) {
if (_B==null) _B=this;
var _no,_rkeys,_rvalues,_rtot,_vtot,_rcnt,_k1,_v1;
// [1945]  k = CStr(k) 
_k=_B.cstr(_k,_B);
// [1946]  v = CStr(v) 
_v=_B.cstr(_v,_B);
// [1947]  Dim no As Map = CreateMap() 
_no={};
// [1948]  Dim rkeys() As String = BANano.Split(delim, k) 
_rkeys=_k.split(_delim);
// [1949]  Dim rvalues() As String = BANano.Split(delim, v) 
_rvalues=_v.split(_delim);
// [1951]  Dim rTot As Int = rkeys.Length - 1 
_rtot=_rkeys.length-1;
// [1952]  Dim vTot As Int = rvalues.Length - 1 
_vtot=_rvalues.length-1;
// [1954]  If rTot <> vTot Then Return no 
if (_rtot!=_vtot) { return _no;}
// [1956]  Dim rCnt As Int 
_rcnt=0;
// [1957]  For rCnt = 0 To rTot 
for (_rcnt=0;_rcnt<=_rtot;_rcnt++) {
// [1958]  Dim k1 As String = rkeys(rCnt) 
_k1=_rkeys[_rcnt];
// [1959]  Dim v1 As String = rvalues(rCnt) 
_v1=_rvalues[_rcnt];
// [1960]  no.put(k1, v1) 
_no[_k1]=_v1;
// [1961]  Next 
}
// [1962]  Return no 
return _no;
// End Sub
};

// [1967] Sub Unflatten(tdata As List, childname As String) As List 
this.unflatten=function(_tdata,_childname) {
if (_B==null) _B=this;
var _tree,_mappedarr,_arrelem,_did,_cdata,_mappedelem,_parentid,_parentelem,_children,_mk,_mi,_childs;
// [1969]  Dim tree As List 
_tree=[];
// [1970]  Dim mappedArr As Map 
_mappedarr={};
// [1972]  tree.Initialize 
_tree.length=0;
// [1973]  mappedArr.Initialize 
_mappedarr={};
// [1976]  For Each arrElem As Map In tdata 
for (var _arrelemindex=0;_arrelemindex<_tdata.length;_arrelemindex++) {
_arrelem=_tdata[_arrelemindex];
// [1977]  Dim dID As String = arrElem.Get( {369} ) 
_did=_arrelem["id"];
// [1979]  Dim cdata As List 
_cdata=[];
// [1980]  cdata.Initialize 
_cdata.length=0;
// [1981]  arrElem.Put(childname, cdata) 
_arrelem[_childname]=_cdata;
// [1983]  mappedArr.Put(dID, arrElem) 
_mappedarr[_did]=_arrelem;
// [1984]  Next 
}
// [1986]  For Each dID As String In mappedArr.Keys 
var _didKeys = Object.keys(_mappedarr);
for (var _didindex=0;_didindex<_didKeys.length;_didindex++) {
_did=_didKeys[_didindex];
// [1987]  Dim mappedElem As Map = mappedArr.Get(dID) 
_mappedelem=_mappedarr[_did];
// [1988]  Dim parentid As String = mappedElem.Get( {370} ) 
_parentid=_mappedelem["parentid"];
// [1990]  If parentid = {371} Or parentid = {372} Then 
if (_parentid=="" || _parentid=="0") {
// [1991]  tree.Add(mappedElem) 
_tree.push(_mappedelem);
// [1992]  Else 
} else {
// [1994]  Dim parentElem As Map = mappedArr.Get(parentid) 
_parentelem=_mappedarr[_parentid];
// [1995]  Dim children As List = parentElem.Get(childname) 
_children=_parentelem[_childname];
// [1996]  children.Add(mappedElem) 
_children.push(_mappedelem);
// [1997]  parentElem.Put(childname, children) 
_parentelem[_childname]=_children;
// [1998]  mappedArr.Put(parentid, parentElem) 
_mappedarr[_parentid]=_parentelem;
// [1999]  End If 
}
// [2000]  Next 
}
// [2002]  For Each mk As String In mappedArr.Keys 
var _mkKeys = Object.keys(_mappedarr);
for (var _mkindex=0;_mkindex<_mkKeys.length;_mkindex++) {
_mk=_mkKeys[_mkindex];
// [2003]  Dim mi As Map = mappedArr.Get(mk) 
_mi=_mappedarr[_mk];
// [2004]  Dim childs As List = mi.Get(childname) 
_childs=_mi[_childname];
// [2005]  If childs.Size = 0 Then mi.Remove(childname) 
if (_childs.length==0) {delete _mi[_childname];}
// [2006]  Next 
}
// [2007]  Return tree 
return _tree;
// End Sub
};

// [2010] public Sub readAsText(fr As Map) As BANanoPromise 
this.readastext=function(_fr) {
if (_B==null) _B=this;
var _promise;
// [2011]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [2014]  promise.CallSub(Me, {373} , Array(fr, {374} )) 
_promise=BANanoPromise();
_B[("ReadFile").toLowerCase()](_fr,"readAsText",_promise,_B);
// [2015]  Return promise 
return _promise;
// End Sub
};

// [2018] Sub readAsBinaryString(fr As Map) As BANanoPromise 
this.readasbinarystring=function(_fr) {
if (_B==null) _B=this;
var _promise;
// [2019]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [2022]  promise.CallSub(Me, {375} , Array(fr, {376} )) 
_promise=BANanoPromise();
_B[("ReadFile").toLowerCase()](_fr,"readAsBinaryString",_promise,_B);
// [2023]  Return promise 
return _promise;
// End Sub
};

// [2026] Sub readAsDataURL(fr As Map) As BANanoPromise 
this.readasdataurl=function(_fr) {
if (_B==null) _B=this;
var _promise;
// [2027]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [2030]  promise.CallSub(Me, {377} , Array(fr, {378} )) 
_promise=BANanoPromise();
_B[("ReadFile").toLowerCase()](_fr,"readAsDataURL",_promise,_B);
// [2031]  Return promise 
return _promise;
// End Sub
};

// [2034] Sub readAsArrayBuffer(fr As Map) As BANanoPromise 
this.readasarraybuffer=function(_fr) {
if (_B==null) _B=this;
var _promise;
// [2035]  Dim promise As BANanoPromise 'ignore 
_promise=null;
// [2038]  promise.CallSub(Me, {379} , Array(fr, {380} )) 
_promise=BANanoPromise();
_B[("ReadFile").toLowerCase()](_fr,"readAsArrayBuffer",_promise,_B);
// [2039]  Return promise 
return _promise;
// End Sub
};

// [2042] private Sub ReadFile(FileToRead As Object, MethodName As String) 
this.readfile=function(_filetoread,_methodname) {
var _BANp = gBANp(arguments);
if (_B==null) _B=this;
var _filereader,_event;
// [2044]  Dim FileReader As BANanoObject 
_filereader=null;
// [2045]  FileReader.Initialize2( {381} , Null) 
_filereader=new FileReader();
// [2047]  FileReader.SetField( {382} , FileToRead) 
_filereader["file"]=_filetoread;
// [2051]  Dim event As Map 
_event={};
// [2052]  FileReader.SetField( {383} , BANano.CallBack(Me, {384} , Array(event))) 
_filereader["onload"]=function(_event) {if (typeof _B[("OnLoad").toLowerCase()]==="function") {return _B[("OnLoad").toLowerCase()](_event,_BANp,_B)};};
// [2053]  FileReader.SetField( {385} , BANano.CallBack(Me, {386} , Array(event))) 
_filereader["onerror"]=function(_event) {if (typeof _B[("OnError").toLowerCase()]==="function") {return _B[("OnError").toLowerCase()](_event,_BANp,_B)};};
// [2055]  FileReader.RunMethod(MethodName, FileToRead) 
_filereader[_methodname](_filetoread);
// End Sub
};

// [2058] private Sub OnLoad(event As Map) As String 'ignore 
this.onload=function(_event) {
var _BANp = gBANp(arguments);
if (_B==null) _B=this;
var _filereader,_uploadedfile;
// [2060]  Dim FileReader As BANanoObject = event.Get( {387} ) 
_filereader=_event["target"];
// [2061]  Dim UploadedFile As BANanoObject = FileReader.GetField( {388} ) 
_uploadedfile=_filereader["file"];
// [2063]  BANano.ReturnThen(CreateMap( {389} : UploadedFile.GetField( {390} ), {391} : FileReader.Getfield( {392} ))) 
return _BANp.resolve({"name":_uploadedfile["name"], "result":_filereader["result"]});
// End Sub
};

// [2066] private Sub OnError(event As Map) As String 'ignore 
this.onerror=function(_event) {
var _BANp = gBANp(arguments);
if (_B==null) _B=this;
var _filereader,_uploadedfile,_abort;
// [2067]  Dim FileReader As BANanoObject = event.Get( {393} ) 
_filereader=_event["target"];
// [2068]  Dim UploadedFile As BANanoObject = FileReader.GetField( {394} ) 
_uploadedfile=_filereader["file"];
// [2069]  Dim Abort As Boolean = False 
_abort=false;
// [2074]  BANano.ReturnElse(CreateMap( {396} : UploadedFile.GetField( {397} ), {398} : FileReader.GetField( {399} ), {400} : Abort)) 
return _BANp.reject({"name":_uploadedfile["name"], "result":_filereader["error"], "abort":_abort});
// End Sub
};

// [2079] Sub JoinItems(delimiter As String, sQuote As String, lst As List) As String 
this.joinitems=function(_delimiter,_squote,_lst) {
if (_B==null) _B=this;
var _i,_sb,_fld,_xfld;
// [2080]  If lst.Size = 0 Then Return {401} 
if (_lst.length==0) { return "";}
// [2081]  Dim i As Int 
_i=0;
// [2082]  Dim sb As StringBuilder 
_sb=new StringBuilder();
// [2083]  Dim fld As String 
_fld="";
// [2084]  sb.Initialize 
_sb.init();
_sb.isinitialized=true;
// [2085]  fld = lst.Get(0) 
_fld=_lst[0];
// [2086]  Dim xfld As String = {18} 
_xfld="" + _fld + "";
// [2087]  xfld = sQuote & xfld & sQuote 
_xfld=_squote+_xfld+_squote;
// [2088]  sb.Append(xfld) 
_sb.append(_xfld);
// [2089]  For i = 1 To lst.size - 1 
for (_i=1;_i<=_lst.length-1;_i++) {
// [2090]  Dim fld As String = lst.Get(i) 
_fld=_lst[_i];
// [2091]  Dim xfld As String = {19} 
_xfld="" + _fld + "";
// [2092]  xfld = sQuote & xfld & sQuote 
_xfld=_squote+_xfld+_squote;
// [2093]  sb.Append(delimiter).Append(xfld) 
_sb.append(_delimiter).append(_xfld);
// [2094]  Next 
}
// [2095]  Return sb.ToString 
return _sb.toString();
// End Sub
};

// [2102] Sub FormatText(sText As String) As String 
this.formattext=function(_stext) {
if (_B==null) _B=this;
var _rm,_ktot,_kcnt,_strvalue,_strrep;
// [2103]  Dim RM As Map 
_rm={};
// [2104]  RM.Initialize 
_rm={};
// [2105]  RM.clear 
_rm={};
// [2106]  RM.Put( {402} , {403} ) 
_rm["{U}"]="<ins>";
// [2107]  RM.Put( {404} , {405} ) 
_rm["{/U}"]="</ins>";
// [2108]  RM.Put( {406} , {407} ) 
_rm["¢"]="&cent;";
// [2109]  RM.put( {408} , {409} ) 
_rm["£"]="&pound;";
// [2110]  RM.Put( {410} , {411} ) 
_rm["{SUP}"]="<sup>";
// [2111]  RM.Put( {412} , {413} ) 
_rm["{/SUP}"]="</sup>";
// [2112]  RM.Put( {414} , {415} ) 
_rm["¥"]="&yen;";
// [2113]  RM.Put( {416} , {417} ) 
_rm["€"]="&euro;";
// [2114]  RM.put( {418} , {419} ) 
_rm["©"]="&copy;";
// [2115]  RM.Put( {420} , {421} ) 
_rm["®"]="&reg;";
// [2116]  RM.Put( {422} , {423} ) 
_rm["{POUND}"]="&pound;";
// [2117]  RM.Put( {424} , {425} ) 
_rm["{/B}"]="</b>";
// [2118]  RM.Put( {426} , {427} ) 
_rm["{I}"]="<i>";
// [2119]  RM.Put( {428} , {429} ) 
_rm["{YEN}"]="&yen;";
// [2120]  RM.Put( {430} , {431} ) 
_rm["{EURO}"]="&euro;";
// [2121]  RM.Put( {432} , {433} ) 
_rm["{CODE}"]="<code>";
// [2122]  RM.Put( {434} , {435} ) 
_rm["{/CODE}"]="</code>";
// [2123]  RM.put( {436} , {437} ) 
_rm["{COPYRIGHT}"]="&copy;";
// [2124]  RM.Put( {438} , {439} ) 
_rm["{REGISTERED}"]="&reg;";
// [2125]  RM.Put( {440} , {441} ) 
_rm["®"]="&reg;";
// [2126]  RM.Put( {442} , {443} ) 
_rm["{B}"]="<b>";
// [2127]  RM.Put( {444} , {445} ) 
_rm["{SMALL}"]="<small>";
// [2128]  RM.Put( {446} , {447} ) 
_rm["{/SMALL}"]="</small>";
// [2129]  RM.Put( {448} , {449} ) 
_rm["{EM}"]="<em>";
// [2130]  RM.Put( {450} , {451} ) 
_rm["{/EM}"]="</em>";
// [2131]  RM.Put( {452} , {453} ) 
_rm["{MARK}"]="<mark>";
// [2132]  RM.Put( {454} , {455} ) 
_rm["{/MARK}"]="</mark>";
// [2133]  RM.Put( {456} , {457} ) 
_rm["{/I}"]="</i>";
// [2134]  RM.Put( {458} , {459} ) 
_rm["{SUB}"]="<sub>";
// [2135]  RM.Put( {460} , {461} ) 
_rm["{/SUB}"]="</sub>";
// [2136]  RM.Put( {462} , {463} ) 
_rm["{BR}"]="<br/>";
// [2137]  RM.Put( {464} , {465} ) 
_rm["{WBR}"]="<wbr>";
// [2138]  RM.Put( {466} , {467} ) 
_rm["{STRONG}"]="<strong>";
// [2139]  RM.Put( {468} , {469} ) 
_rm["{/STRONG}"]="</strong>";
// [2140]  RM.Put( {470} , {471} ) 
_rm["{NBSP}"]="&nbsp;";
// [2141]  RM.Put( {472} , {473} ) 
_rm["“"]="";
// [2142]  RM.Put( {474} , {475} ) 
_rm["”"]="";
// [2143]  RM.Put( {476} , {477} ) 
_rm["’"]="'";
// [2144]  Dim kTot As Int = RM.Size - 1 
_ktot=Object.keys(_rm).length-1;
// [2145]  Dim kCnt As Int 
_kcnt=0;
// [2146]  For kCnt = 0 To kTot 
for (_kcnt=0;_kcnt<=_ktot;_kcnt++) {
// [2147]  Dim strValue As String = RM.GetKeyAt(kCnt) 
_strvalue=banano_getB4JKeyAt(_rm,_kcnt);
// [2148]  Dim strRep As String = RM.Get(strValue) 
_strrep=_rm[_strvalue];
// [2149]  sText = sText.Replace(strValue, strRep) 
_stext=_stext.split(_strvalue).join(_strrep);
// [2150]  Next 
}
// [2151]  sText = BANano.SF(sText) 
_stext=banano_sf(_stext,false);
// [2152]  Return sText 
return _stext;
// End Sub
};

// [2155] Sub HideElement(elID As String) 
this.hideelement=function(_elid) {
if (_B==null) _B=this;
var _stylem;
// [2156]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [2157]  Dim stylem As Map = CreateMap( {478} : {479} ) 
_stylem={"visibility":"hidden"};
// [2158]  BANano.GetElement( {20} ).SetStyle(BANano.ToJson(stylem)) 
u("#" + _elid + "").css(JSON.parse(JSON.stringify(_stylem)));
// End Sub
};

// [2161] Sub ShowElement(elID As String) 
this.showelement=function(_elid) {
if (_B==null) _B=this;
var _stylem;
// [2162]  Dim stylem As Map = CreateMap( {480} : {481} ) 
_stylem={"visibility":"visible"};
// [2163]  BANano.GetElement( {21} ).SetStyle(BANano.ToJson(stylem)) 
u("#" + _elid + "").css(JSON.parse(JSON.stringify(_stylem)));
// End Sub
};

// [2173] Sub GetAlphaNumeric(value As String) As String 
this.getalphanumeric=function(_value) {
if (_B==null) _B=this;
var _sout,_mout,_slen,_i;
// [2174]  value = CStr(value) 
_value=_B.cstr(_value,_B);
// [2175]  Try 
try {
// [2176]  value = value.Trim 
_value=_value.trim();
// [2177]  If value = {486} Then value = {487} 
if (_value=="") {_value="";}
// [2178]  Dim sout As String = {488} 
_sout="";
// [2179]  Dim mout As String = {489} 
_mout="";
// [2180]  Dim slen As Int = value.Length 
_slen=_value.length;
// [2181]  Dim i As Int = 0 
_i=0;
// [2182]  For i = 0 To slen - 1 
for (_i=0;_i<=_slen-1;_i++) {
// [2183]  mout = value.CharAt(i) 
_mout=_value.charAt(_i);
// [2184]  If InStr( {490} , mout) <> -1 Then 
if (_B.instr("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",_mout,_B)!=-1) {
// [2185]  sout = sout & mout 
_sout=_sout+_mout;
// [2186]  End If 
}
// [2187]  Next 
}
// [2188]  Return sout 
return _sout;
// [2189]  Catch 
} catch(err) {
// [2190]  Return value 
return _value;
// [2191]  End Try 
}
// End Sub
};

// [2194] Sub ListOfMap2Strings(lst As List) As List 
this.listofmap2strings=function(_lst) {
if (_B==null) _B=this;
var _nl,_m,_nm;
// [2195]  Dim nl As List 
_nl=[];
// [2196]  nl = NewList 
_nl=_B.newlist(_B);
// [2197]  For Each m As Map In lst 
for (var _mindex=0;_mindex<_lst.length;_mindex++) {
_m=_lst[_mindex];
// [2198]  Dim nm As Map = Map2Strings(m) 
_nm=_B.map2strings(_m,_B);
// [2199]  nl.Add(nm) 
_nl.push(_nm);
// [2200]  Next 
}
// [2201]  Return nl 
return _nl;
// End Sub
};

// [2206] Sub Map2Strings(m As Map) As Map 
this.map2strings=function(_m) {
if (_B==null) _B=this;
var _nm,_k,_v,_vv;
// [2207]  Dim nm As Map = CreateMap() 
_nm={};
// [2208]  For Each k As String In m.keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [2209]  Dim v As Object = m.get(k) 
_v=_m[_k];
// [2210]  If BANano.IsNull(v) Then v = {491} 
if (is.null(_v)) {_v="";}
// [2211]  If BANano.IsUndefined(v) Then v = {492} 
if (is.undefined(_v)) {_v="";}
// [2212]  Dim vv As String = CStr(v) 
_vv=_B.cstr(_v,_B);
// [2213]  nm.put(k, vv) 
_nm[_k]=_vv;
// [2214]  Next 
}
// [2215]  Return nm 
return _nm;
// End Sub
};

// [2219] Sub DataType2FieldType(fldtype As String) As String 
this.datatype2fieldtype=function(_fldtype) {
if (_B==null) _B=this;
// [2220]  fldtype = fldtype.ToUpperCase 
_fldtype=_fldtype.toUpperCase();
// [2221]  If fldtype.EqualsIgnoreCase( {493} ) Then fldtype = {494} 
if (_fldtype.equalsIgnoreCase("double")) {_fldtype="FLOAT";}
// [2222]  If fldtype.EqualsIgnoreCase( {495} ) Then fldtype = {496} 
if (_fldtype.equalsIgnoreCase("integer")) {_fldtype="INT";}
// [2223]  If fldtype.EqualsIgnoreCase( {497} ) Then fldtype = {498} 
if (_fldtype.equalsIgnoreCase("long")) {_fldtype="INT";}
// [2224]  If fldtype.EqualsIgnoreCase( {499} ) Then fldtype = {500} 
if (_fldtype.equalsIgnoreCase("short")) {_fldtype="INT";}
// [2225]  If fldtype.endswith( {501} ) Then fldtype = {502} 
if (_fldtype.endsWith("INT")) {_fldtype="INT";}
// [2226]  If fldtype.endswith( {503} ) Then fldtype = {504} 
if (_fldtype.endsWith("CHAR")) {_fldtype="TEXT";}
// [2227]  If fldtype.endswith( {505} ) Then fldtype = {506} 
if (_fldtype.endsWith("TEXT")) {_fldtype="TEXT";}
// [2228]  If fldtype.endswith( {507} ) Then fldtype = {508} 
if (_fldtype.endsWith("REAL")) {_fldtype="FLOAT";}
// [2229]  If fldtype.endswith( {509} ) Then fldtype = {510} 
if (_fldtype.endsWith("BIT")) {_fldtype="INT";}
// [2231]  fldtype = fldtype.tolowercase 
_fldtype=_fldtype.toLowerCase();
// [2232]  fldtype = fldtype.replace( {511} , {512} ) 
_fldtype=_fldtype.split("text").join("string");
// [2233]  fldtype = fldtype.replace( {513} , {514} ) 
_fldtype=_fldtype.split("float").join("dbl");
// [2234]  fldtype = fldtype.replace( {515} , {516} ) 
_fldtype=_fldtype.split("blob").join("string");
// [2235]  fldtype = fldtype.replace( {517} , {518} ) 
_fldtype=_fldtype.split("none").join("string");
// [2236]  fldtype = fldtype.replace( {519} , {520} ) 
_fldtype=_fldtype.split("varchar").join("string");
// [2237]  Return fldtype 
return _fldtype;
// End Sub
};

// [2241] Sub MapRemovePrefix(m As Map) As Map 
this.mapremoveprefix=function(_m) {
if (_B==null) _B=this;
var _nm,_k,_v;
// [2242]  Dim nm As Map = CreateMap() 
_nm={};
// [2243]  For Each k As String In m.keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [2244]  Dim v As String = m.Get(k) 
_v=_m[_k];
// [2245]  k = MvField(k,2, {521} ) 
_k=_B.mvfield(_k,2,"_",_B);
// [2246]  nm.Put(k, v) 
_nm[_k]=_v;
// [2247]  Next 
}
// [2248]  Return nm 
return _nm;
// End Sub
};

// [2253] Sub SetCoverImage(imgURL As String) 
this.setcoverimage=function(_imgurl) {
if (_B==null) _B=this;
var _opt,_sjson;
// [2254]  Dim opt As Map = CreateMap() 
_opt={};
// [2255]  If imgURL = {522} Then 
if (_imgurl=="none") {
// [2256]  opt.Put( {523} , {524} ) 
_opt["background-image"]="none";
// [2257]  Else 
} else {
// [2264]  opt.Put( {534} , {23} ) 
_opt["background"]="url('" + _imgurl + "')";
// [2265]  opt.Put( {535} , {536} ) 
_opt["position"]="absolute";
// [2266]  opt.Put( {537} , {538} ) 
_opt["height"]="100%";
// [2267]  opt.Put( {539} , {540} ) 
_opt["width"]="100%";
// [2268]  opt.Put( {541} , {542} ) 
_opt["top"]="0";
// [2269]  opt.Put( {543} , {544} ) 
_opt["bottom"]="0";
// [2270]  opt.Put( {545} , {546} ) 
_opt["right"]="0";
// [2271]  opt.Put( {547} , {548} ) 
_opt["left"]="0";
// [2272]  opt.Put( {549} , {550} ) 
_opt["z-index"]="0";
// [2273]  End If 
}
// [2274]  Dim sjson As String = BANano.ToJson(opt) 
_sjson=JSON.stringify(_opt);
// [2275]  BANano.GetElement( {551} ).SetStyle(sjson) 
u("#body").css(JSON.parse(_sjson));
// End Sub
};

}
 
function hexToRgb(hexCode) { 
    var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/; 
    var matches = patt.exec(hexCode); 
    var rgb = "rgb(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + ")"; 
    return rgb; 
} 
 
function hexToRgba(hexCode, opacity) { 
    var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/; 
    var matches = patt.exec(hexCode); 
    var rgb = "rgba(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + "," + opacity + ")"; 
    return rgb; 
} 

/* =========================== VA  =========================== */
function banano_bananozui_va() {
var _B=this;
_B._applink= new banano_bananozui_vueapp();

_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._properties={};

_B._styles={};

_B._classlist={};

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtagname="a";

_B._bindings={};

_B._methods={};

_B._scaption="";

_B._sdisabled="";

_B._bdownload=false;

_B._shref="";

_B._skey="";

_B._sname="";

_B._sparentid="";

_B._sreadonly="";

_B._sref="";

_B._srequired="";

_B._starget="";

_B._stitle="";

_B._svbindclass="";

_B._svbindstyle="";

_B._svelse="";

_B._svelseif="";

_B._svfor="";

_B._svhtml="";

_B._svif="";

_B._svmodel="";

_B._svshow="";

_B._svtext="";

_B._sbordercolor="";

_B._sborderstyle="";

_B._sborderwidth="";

_B._sborderradius="";

_B._smargintop="";

_B._smarginright="";

_B._smarginbottom="";

_B._smarginleft="";

_B._spaddingtop="";

_B._spaddingright="";

_B._spaddingbottom="";

_B._spaddingleft="";

// [101] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) As VA 
_B.initialize=function(_callback,_name,_eventname) {
// [102] mName = Name 
_B._mname=_name;
// [103] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [104] mCallBack = CallBack 
_B._mcallback=_callback;
// [105] bindings.Initialize 
_B._bindings={};
// [106] methods.Initialize 
_B._methods={};
// [107] properties.Initialize 
_B._properties={};
// [108] styles.Initialize 
_B._styles={};
// [109] classList.Initialize 
_B._classlist={};
// [116] Return Me 
return _B;
// End Sub
};

// [120] Public Sub DesignerCreateView (Target As BANanoElement, props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [121]  mTarget = Target 
_B._mtarget=_target;
// [123] If props <> Null Then 
if (_props!=null) {
// [124] mClasses = props.Get( {55} ) 
_B._mclasses=_props["Classes"];
// [125] mAttributes = props.Get( {56} ) 
_B._mattributes=_props["Attributes"];
// [126] mStyle = props.Get( {57} ) 
_B._mstyle=_props["Style"];
// [127] sCaption = props.Get( {58} ) 
_B._scaption=_props["Caption"];
// [128] sDisabled = props.Get( {59} ) 
_B._sdisabled=_props["Disabled"];
// [129] bDownload = props.Get( {60} ) 
_B._bdownload=_props["Download"];
// [130] sHref = props.Get( {61} ) 
_B._shref=_props["Href"];
// [131] sKey = props.Get( {62} ) 
_B._skey=_props["Key"];
// [132] sName = props.Get( {63} ) 
_B._sname=_props["Name"];
// [133] sParentId = props.Get( {64} ) 
_B._sparentid=_props["ParentId"];
// [134] sReadonly = props.Get( {65} ) 
_B._sreadonly=_props["Readonly"];
// [135] sRef = props.Get( {66} ) 
_B._sref=_props["Ref"];
// [136] sRequired = props.Get( {67} ) 
_B._srequired=_props["Required"];
// [137] sTarget = props.Get( {68} ) 
_B._starget=_props["Target"];
// [138] sTitle = props.Get( {69} ) 
_B._stitle=_props["Title"];
// [139] sVBindClass = props.Get( {70} ) 
_B._svbindclass=_props["VBindClass"];
// [140] sVBindStyle = props.Get( {71} ) 
_B._svbindstyle=_props["VBindStyle"];
// [141] sVElse = props.Get( {72} ) 
_B._svelse=_props["VElse"];
// [142] sVElseIf = props.Get( {73} ) 
_B._svelseif=_props["VElseIf"];
// [143] sVFor = props.Get( {74} ) 
_B._svfor=_props["VFor"];
// [144] sVHtml = props.Get( {75} ) 
_B._svhtml=_props["VHtml"];
// [145] sVIf = props.Get( {76} ) 
_B._svif=_props["VIf"];
// [146] sVModel = props.Get( {77} ) 
_B._svmodel=_props["VModel"];
// [147] sVShow = props.Get( {78} ) 
_B._svshow=_props["VShow"];
// [148] sVText = props.Get( {79} ) 
_B._svtext=_props["VText"];
// [149] sBorderColor = props.Get( {80} ) 
_B._sbordercolor=_props["BorderColor"];
// [150] sBorderStyle = props.Get( {81} ) 
_B._sborderstyle=_props["BorderStyle"];
// [151] sBorderWidth = props.Get( {82} ) 
_B._sborderwidth=_props["BorderWidth"];
// [152] sBorderRadius = props.Get( {83} ) 
_B._sborderradius=_props["BorderRadius"];
// [153] sMarginTop = props.Get( {84} ) 
_B._smargintop=_props["MarginTop"];
// [154] sMarginRight = props.Get( {85} ) 
_B._smarginright=_props["MarginRight"];
// [155] sMarginBottom = props.Get( {86} ) 
_B._smarginbottom=_props["MarginBottom"];
// [156] sMarginLeft = props.Get( {87} ) 
_B._smarginleft=_props["MarginLeft"];
// [157] sPaddingTop = props.Get( {88} ) 
_B._spaddingtop=_props["PaddingTop"];
// [158] sPaddingRight = props.Get( {89} ) 
_B._spaddingright=_props["PaddingRight"];
// [159] sPaddingBottom = props.Get( {90} ) 
_B._spaddingbottom=_props["PaddingBottom"];
// [160] sPaddingLeft = props.Get( {91} ) 
_B._spaddingleft=_props["PaddingLeft"];
// [162] End If 
}
// [163] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [164] mElement = mTarget.Append(strHTML).Get( {92} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [173] Sub SetDisabled(varDisabled As String) As VA 
_B.setdisabled=function(_vardisabled) {
// [174] sDisabled = varDisabled 
_B._sdisabled=_vardisabled;
// [175] SetAttr( {93} , sDisabled) 
_B.setattr("disabled",_B._sdisabled,_B);
// [176] Return Me 
return _B;
// End Sub
};

// [180] Sub SetDownload(varDownload As Boolean) As VA 
_B.setdownload=function(_vardownload) {
// [181] bDownload = varDownload 
_B._bdownload=_vardownload;
// [182] SetAttr( {94} , bDownload) 
_B.setattr("download",_B._bdownload,_B);
// [183] Return Me 
return _B;
// End Sub
};

// [187] Sub SetHref(varHref As String) As VA 
_B.sethref=function(_varhref) {
// [188] sHref = varHref 
_B._shref=_varhref;
// [189] SetAttr( {95} , sHref) 
_B.setattr("href",_B._shref,_B);
// [190] Return Me 
return _B;
// End Sub
};

// [194] Sub SetKey(varKey As String) As VA 
_B.setkey=function(_varkey) {
// [195] sKey = varKey 
_B._skey=_varkey;
// [196] SetAttr( {96} , sKey) 
_B.setattr("key",_B._skey,_B);
// [197] Return Me 
return _B;
// End Sub
};

// [201] Sub SetName(varName As String) As VA 
_B.setname=function(_varname) {
// [202] sName = varName 
_B._sname=_varname;
// [203] SetAttr( {97} , sName) 
_B.setattr("name",_B._sname,_B);
// [204] Return Me 
return _B;
// End Sub
};

// [208] Sub SetParentId(varParentId As String) As VA 
_B.setparentid=function(_varparentid) {
// [209] sParentId = varParentId 
_B._sparentid=_varparentid;
// [210] SetAttr( {98} , sParentId) 
_B.setattr("parent-id",_B._sparentid,_B);
// [211] Return Me 
return _B;
// End Sub
};

// [215] Sub SetReadonly(varReadonly As String) As VA 
_B.setreadonly=function(_varreadonly) {
// [216] sReadonly = varReadonly 
_B._sreadonly=_varreadonly;
// [217] SetAttr( {99} , sReadonly) 
_B.setattr("readonly",_B._sreadonly,_B);
// [218] Return Me 
return _B;
// End Sub
};

// [222] Sub SetRef(varRef As String) As VA 
_B.setref=function(_varref) {
// [223] sRef = varRef 
_B._sref=_varref;
// [224] SetAttr( {100} , sRef) 
_B.setattr("ref",_B._sref,_B);
// [225] Return Me 
return _B;
// End Sub
};

// [229] Sub SetRequired(varRequired As String) As VA 
_B.setrequired=function(_varrequired) {
// [230] sRequired = varRequired 
_B._srequired=_varrequired;
// [231] SetAttr( {101} , sRequired) 
_B.setattr("required",_B._srequired,_B);
// [232] Return Me 
return _B;
// End Sub
};

// [236] Sub SetTarget(varTarget As String) As VA 
_B.settarget=function(_vartarget) {
// [237] sTarget = varTarget 
_B._starget=_vartarget;
// [238] SetAttr( {102} , sTarget) 
_B.setattr("target",_B._starget,_B);
// [239] Return Me 
return _B;
// End Sub
};

// [243] Sub SetTitle(varTitle As String) As VA 
_B.settitle=function(_vartitle) {
// [244] sTitle = varTitle 
_B._stitle=_vartitle;
// [245] SetAttr( {103} , sTitle) 
_B.setattr("title",_B._stitle,_B);
// [246] Return Me 
return _B;
// End Sub
};

// [250] Sub SetVBindClass(varVBindClass As String) As VA 
_B.setvbindclass=function(_varvbindclass) {
// [251] sVBindClass = varVBindClass 
_B._svbindclass=_varvbindclass;
// [252] SetAttr( {104} , sVBindClass) 
_B.setattr("v-bind:class",_B._svbindclass,_B);
// [253] Return Me 
return _B;
// End Sub
};

// [257] Sub SetVBindStyle(varVBindStyle As String) As VA 
_B.setvbindstyle=function(_varvbindstyle) {
// [258] sVBindStyle = varVBindStyle 
_B._svbindstyle=_varvbindstyle;
// [259] SetAttr( {105} , sVBindStyle) 
_B.setattr("v-bind:style",_B._svbindstyle,_B);
// [260] Return Me 
return _B;
// End Sub
};

// [264] Sub SetVElse(varVElse As String) As VA 
_B.setvelse=function(_varvelse) {
// [265] sVElse = varVElse 
_B._svelse=_varvelse;
// [266] SetAttr( {106} , sVElse) 
_B.setattr("v-else",_B._svelse,_B);
// [267] Return Me 
return _B;
// End Sub
};

// [271] Sub SetVElseIf(varVElseIf As String) As VA 
_B.setvelseif=function(_varvelseif) {
// [272] sVElseIf = varVElseIf 
_B._svelseif=_varvelseif;
// [273] SetAttr( {107} , sVElseIf) 
_B.setattr("v-else-if",_B._svelseif,_B);
// [274] Return Me 
return _B;
// End Sub
};

// [278] Sub SetVFor(varVFor As String) As VA 
_B.setvfor=function(_varvfor) {
// [279] sVFor = varVFor 
_B._svfor=_varvfor;
// [280] SetAttr( {108} , sVFor) 
_B.setattr("v-for",_B._svfor,_B);
// [281] Return Me 
return _B;
// End Sub
};

// [285] Sub SetVHtml(varVHtml As String) As VA 
_B.setvhtml=function(_varvhtml) {
// [286] sVHtml = varVHtml 
_B._svhtml=_varvhtml;
// [287] SetAttr( {109} , sVHtml) 
_B.setattr("v-html",_B._svhtml,_B);
// [288] Return Me 
return _B;
// End Sub
};

// [292] Sub SetVIf(varVIf As String) As VA 
_B.setvif=function(_varvif) {
// [293] sVIf = varVIf 
_B._svif=_varvif;
// [294] SetAttr( {110} , sVIf) 
_B.setattr("v-if",_B._svif,_B);
// [295] Return Me 
return _B;
// End Sub
};

// [299] Sub SetVModel(varVModel As String) As VA 
_B.setvmodel=function(_varvmodel) {
// [300] sVModel = varVModel 
_B._svmodel=_varvmodel;
// [301] SetAttr( {111} , sVModel) 
_B.setattr("v-model",_B._svmodel,_B);
// [302] Return Me 
return _B;
// End Sub
};

// [306] Sub SetVShow(varVShow As String) As VA 
_B.setvshow=function(_varvshow) {
// [307] sVShow = varVShow 
_B._svshow=_varvshow;
// [308] SetAttr( {112} , sVShow) 
_B.setattr("v-show",_B._svshow,_B);
// [309] Return Me 
return _B;
// End Sub
};

// [313] Sub SetVText(varVText As String) As VA 
_B.setvtext=function(_varvtext) {
// [314] sVText = varVText 
_B._svtext=_varvtext;
// [315] SetAttr( {113} , sVText) 
_B.setattr("v-text",_B._svtext,_B);
// [316] Return Me 
return _B;
// End Sub
};

// [320] Sub SetBorderColor(varBorderColor As String) As VA 
_B.setbordercolor=function(_varbordercolor) {
// [321] sBorderColor = varBorderColor 
_B._sbordercolor=_varbordercolor;
// [322] SetStyleSingle( {114} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [323] Return Me 
return _B;
// End Sub
};

// [327] Sub SetBorderStyle(varBorderStyle As String) As VA 
_B.setborderstyle=function(_varborderstyle) {
// [328] sBorderStyle = varBorderStyle 
_B._sborderstyle=_varborderstyle;
// [329] SetStyleSingle( {115} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [330] Return Me 
return _B;
// End Sub
};

// [334] Sub SetBorderWidth(varBorderWidth As String) As VA 
_B.setborderwidth=function(_varborderwidth) {
// [335] sBorderWidth = varBorderWidth 
_B._sborderwidth=_varborderwidth;
// [336] SetStyleSingle( {116} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [337] Return Me 
return _B;
// End Sub
};

// [341] Sub SetBorderRadius(varBorderRadius As String) As VA 
_B.setborderradius=function(_varborderradius) {
// [342] sBorderRadius = varBorderRadius 
_B._sborderradius=_varborderradius;
// [343] SetStyleSingle( {117} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [344] Return Me 
return _B;
// End Sub
};

// [348] Sub SetMarginTop(varMarginTop As String) As VA 
_B.setmargintop=function(_varmargintop) {
// [349] sMarginTop = varMarginTop 
_B._smargintop=_varmargintop;
// [350] SetStyleSingle( {118} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [351] Return Me 
return _B;
// End Sub
};

// [355] Sub SetMarginRight(varMarginRight As String) As VA 
_B.setmarginright=function(_varmarginright) {
// [356] sMarginRight = varMarginRight 
_B._smarginright=_varmarginright;
// [357] SetStyleSingle( {119} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [358] Return Me 
return _B;
// End Sub
};

// [362] Sub SetMarginBottom(varMarginBottom As String) As VA 
_B.setmarginbottom=function(_varmarginbottom) {
// [363] sMarginBottom = varMarginBottom 
_B._smarginbottom=_varmarginbottom;
// [364] SetStyleSingle( {120} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [365] Return Me 
return _B;
// End Sub
};

// [369] Sub SetMarginLeft(varMarginLeft As String) As VA 
_B.setmarginleft=function(_varmarginleft) {
// [370] sMarginLeft = varMarginLeft 
_B._smarginleft=_varmarginleft;
// [371] SetStyleSingle( {121} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [372] Return Me 
return _B;
// End Sub
};

// [376] Sub SetPaddingTop(varPaddingTop As String) As VA 
_B.setpaddingtop=function(_varpaddingtop) {
// [377] sPaddingTop = varPaddingTop 
_B._spaddingtop=_varpaddingtop;
// [378] SetStyleSingle( {122} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [379] Return Me 
return _B;
// End Sub
};

// [383] Sub SetPaddingRight(varPaddingRight As String) As VA 
_B.setpaddingright=function(_varpaddingright) {
// [384] sPaddingRight = varPaddingRight 
_B._spaddingright=_varpaddingright;
// [385] SetStyleSingle( {123} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [386] Return Me 
return _B;
// End Sub
};

// [390] Sub SetPaddingBottom(varPaddingBottom As String) As VA 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [391] sPaddingBottom = varPaddingBottom 
_B._spaddingbottom=_varpaddingbottom;
// [392] SetStyleSingle( {124} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [393] Return Me 
return _B;
// End Sub
};

// [397] Sub SetPaddingLeft(varPaddingLeft As String) As VA 
_B.setpaddingleft=function(_varpaddingleft) {
// [398] sPaddingLeft = varPaddingLeft 
_B._spaddingleft=_varpaddingleft;
// [399] SetStyleSingle( {125} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [400] Return Me 
return _B;
// End Sub
};

// [406] Sub ToString As String 
_B.tostring=function() {
var _ckeys,_sitems,_st,_k,_v,_skeys,_mitems,_mt,_exattr,_strres;
// [407] AddAttr(sCaption, {126} ) 
_B.addattr(_B._scaption,"caption",_B);
// [408] AddAttr(sDisabled, {127} ) 
_B.addattr(_B._sdisabled,"disabled",_B);
// [409] AddAttr(bDownload, {128} ) 
_B.addattr(_B._bdownload,"download",_B);
// [410] AddAttr(sHref, {129} ) 
_B.addattr(_B._shref,"href",_B);
// [411] AddAttr(sKey, {130} ) 
_B.addattr(_B._skey,"key",_B);
// [412] AddAttr(sName, {131} ) 
_B.addattr(_B._sname,"name",_B);
// [413] AddAttr(sParentId, {132} ) 
_B.addattr(_B._sparentid,"parent-id",_B);
// [414] AddAttr(sReadonly, {133} ) 
_B.addattr(_B._sreadonly,"readonly",_B);
// [415] AddAttr(sRef, {134} ) 
_B.addattr(_B._sref,"ref",_B);
// [416] AddAttr(sRequired, {135} ) 
_B.addattr(_B._srequired,"required",_B);
// [417] AddAttr(sTarget, {136} ) 
_B.addattr(_B._starget,"target",_B);
// [418] AddAttr(sTitle, {137} ) 
_B.addattr(_B._stitle,"title",_B);
// [419] AddAttr(sVBindClass, {138} ) 
_B.addattr(_B._svbindclass,"v-bind:class",_B);
// [420] AddAttr(sVBindStyle, {139} ) 
_B.addattr(_B._svbindstyle,"v-bind:style",_B);
// [421] AddAttr(sVElse, {140} ) 
_B.addattr(_B._svelse,"v-else",_B);
// [422] AddAttr(sVElseIf, {141} ) 
_B.addattr(_B._svelseif,"v-else-if",_B);
// [423] AddAttr(sVFor, {142} ) 
_B.addattr(_B._svfor,"v-for",_B);
// [424] AddAttr(sVHtml, {143} ) 
_B.addattr(_B._svhtml,"v-html",_B);
// [425] AddAttr(sVIf, {144} ) 
_B.addattr(_B._svif,"v-if",_B);
// [426] AddAttr(sVModel, {145} ) 
_B.addattr(_B._svmodel,"v-model",_B);
// [427] AddAttr(sVShow, {146} ) 
_B.addattr(_B._svshow,"v-show",_B);
// [428] AddAttr(sVText, {147} ) 
_B.addattr(_B._svtext,"v-text",_B);
// [429] SetStyleSingle( {148} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [430] SetStyleSingle( {149} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [431] SetStyleSingle( {150} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [432] SetStyleSingle( {151} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [433] SetStyleSingle( {152} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [434] SetStyleSingle( {153} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [435] SetStyleSingle( {154} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [436] SetStyleSingle( {155} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [437] SetStyleSingle( {156} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [438] SetStyleSingle( {157} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [439] SetStyleSingle( {158} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [440] SetStyleSingle( {159} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [443] Dim cKeys As String = BANanoShared.JoinMapKeys(classList, {160} ) 
_ckeys=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [444] cKeys = cKeys & {161} & mClasses 
_ckeys=_ckeys+" "+_B._mclasses;
// [445] cKeys = cKeys.trim 
_ckeys=_ckeys.trim();
// [446] cKeys = BANanoShared.MvDistinct( {162} , cKeys) 
_ckeys=_banano_bananozui_bananoshared.mvdistinct(" ",_ckeys);
// [447] AddAttr(cKeys, {163} ) 
_B.addattr(_ckeys,"class",_B);
// [449] If BANano.IsUndefined(mStyle) Or BANano.IsNull(mStyle) Then mStyle = {164} 
if (is.undefined(_B._mstyle) || is.null(_B._mstyle)) {_B._mstyle="";}
// [450] If mStyle.StartsWith( {165} ) Then mStyle = {166} 
if (_B._mstyle.startsWith("{")) {_B._mstyle="";}
// [451] If mStyle <> {167} Then 
if (_B._mstyle!="") {
// [452] Dim sItems As List = BANanoShared.StrParse( {168} ,mStyle) 
_sitems=_banano_bananozui_bananoshared.strparse(",",_B._mstyle);
// [453] For Each st As String In sItems 
for (var _stindex=0;_stindex<_sitems.length;_stindex++) {
_st=_sitems[_stindex];
// [454] Dim k As String = BANanoShared.MvField(st,1, {169} ) 
_k=_banano_bananozui_bananoshared.mvfield(_st,1,":");
// [455] Dim v As String = BANanoShared.MvField(st,2, {170} ) 
_v=_banano_bananozui_bananoshared.mvfield(_st,2,":");
// [456] SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [457] Next 
}
// [458] End If 
}
// [459] Dim sKeys As String = BANanoShared.BuildStyle(styles) 
_skeys=_banano_bananozui_bananoshared.buildstyle(_B._styles);
// [460] sKeys = sKeys.trim 
_skeys=_skeys.trim();
// [461] AddAttr(sKeys, {171} ) 
_B.addattr(_skeys,"style",_B);
// [463] If BANano.IsUndefined(mAttributes) Or BANano.IsNull(mAttributes) Then mAttributes = {172} 
if (is.undefined(_B._mattributes) || is.null(_B._mattributes)) {_B._mattributes="";}
// [464] If mAttributes.StartsWith( {173} ) Then mAttributes = {174} 
if (_B._mattributes.startsWith("{")) {_B._mattributes="";}
// [465] If mAttributes <> {175} Then 
if (_B._mattributes!="") {
// [466] Dim mItems As List = BANanoShared.StrParse( {176} ,mAttributes) 
_mitems=_banano_bananozui_bananoshared.strparse(";",_B._mattributes);
// [467] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [468] Dim k As String = BANanoShared.MvField(mt,1, {177} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [469] Dim v As String = BANanoShared.MvField(mt,2, {178} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [470] AddAttr(v, k) 
_B.addattr(_v,_k,_B);
// [471] Next 
}
// [472] End If 
}
// [473] Dim exattr As String = BANanoShared.BuildAttributes(properties) 
_exattr=_banano_bananozui_bananoshared.buildattributes(_B._properties);
// [475] Dim strRes As String = {4} 
_strres="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _exattr + ">" + _B._scaption + "</" + _B._mtagname + ">";
// [476] Return strRes 
return _strres;
// End Sub
};

// [480] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [481]  Return mElement 
return _B._melement;
// End Sub
};

// [485] public Sub getID() As String 
_B.getid=function() {
// [486]  Return mName 
return _B._mname;
// End Sub
};

// [490] Sub AddComponent(child As String) As VA 
_B.addcomponent=function(_child) {
// [491]  mElement.Append(child) 
_B._melement.append(_child);
// [492]  sCaption = mElement.GetText 
_B._scaption=_B._melement.text();
// [493]  Return Me 
return _B;
// End Sub
};

// [497] Sub SetID(varText As String) As VA 
_B.setid=function(_vartext) {
// [498]  mName = varText 
_B._mname=_vartext;
// [499]  Return Me 
return _B;
// End Sub
};

// [503] public Sub GetCaption() As String 
_B.getcaption=function() {
// [504]  Return sCaption 
return _B._scaption;
// End Sub
};

// [508] public Sub AddToParent(targetID As String) As VA 
_B.addtoparent=function(_targetid) {
// [509]  mTarget = BANano.GetElement( {179} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [510]  DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// [511]  Return Me 
return _B;
// End Sub
};

// [515] Sub AddToApp(vap As VueApp) As VA 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [516]  appLink = vap 
_B._applink=_vap;
// [518]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [519]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [520]  vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [521]  Next 
}
// [523]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [524]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [525]  vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [526]  Next 
}
// [527]  Return Me 
return _B;
// End Sub
};

// [531] public Sub Remove() 
_B.remove=function() {
// [532]  mElement.Empty 
_B._melement.empty();
// [533]  BANano.SetMeToNull 
_B=null;
// End Sub
};

// [537] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [538]  If mElement <> Null Then 
if (_B._melement!=null) {
// [539]  mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [540]  End If 
}
// End Sub
};

// [544] Sub SetVOn(event As String) As VA 
_B.setvon=function(_event) {
var _methodname;
// [545]  Dim methodName As String = BANanoShared.BeautifyName(event) 
_methodname=_banano_bananozui_bananoshared.beautifyname(_event);
// [546]  methodName = {5} 
_methodname="" + _B._meventname + "_" + _methodname + "";
// [547]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [548]  If SubExists(mCallBack, methodName) = False Then Return Me 
if ((typeof _B._mcallback[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [549]  SetAttr( {6} , methodName) 
_B.setattr("v-on:" + _event + "",_methodname,_B);
// [550]  SetMethod(mCallBack, methodName) 
_B.setmethod(_B._mcallback,_methodname,_B);
// [551]  Return Me 
return _B;
// End Sub
};

// [555] Sub SetCaption(varText As String) As VA 
_B.setcaption=function(_vartext) {
// [556]  If mElement <> Null Then 
if (_B._melement!=null) {
// [557]  mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [558]  End If 
}
// [559]  sCaption = varText 
_B._scaption=_vartext;
// [560]  Return Me 
return _B;
// End Sub
};

// [564] private Sub AddAttr(varName As String, actProp As String) As VA 
_B.addattr=function(_varname,_actprop) {
var _rname;
// [565]  If BANano.IsUndefined(varName) Or BANano.IsNull(varName) Then varName = {180} 
if (is.undefined(_varname) || is.null(_varname)) {_varname="";}
// [566]  If BANano.IsNumber(varName) Then varName = BANanoShared.CStr(varName) 
if (is.number(_varname)) {_varname=_banano_bananozui_bananoshared.cstr(_varname);}
// [567]  If actProp = {181} Then Return Me 
if (_actprop=="caption") { return _B;}
// [568]  Try 
try {
// [569]  If BANano.IsBoolean(varName) Then 
if (is.boolean(_varname)) {
// [570]  If varName = True Then properties.put(actProp, varName) 
if (_varname==true) {_B._properties[_actprop]=_varname;}
// [571]  Else 
} else {
// [572]  If varName.StartsWith( {182} ) Then 
if (_varname.startsWith(":")) {
// [575]  Dim rname As String = BANanoShared.MidString2(varName, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varname,2);
// [576]  If rname.Contains( {183} ) Then 
if (_rname.contains(".")) {
// [578]  properties.Put( {7} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [579]  Else 
} else {
// [580]  properties.Put( {8} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [581]  bindings.Put(rname, Null) 
_B._bindings[_rname]=null;
// [582]  End If 
}
// [583]  Else 
} else {
// [584]  If varName <> {184} Then properties.put(actProp, varName) 
if (_varname!="") {_B._properties[_actprop]=_varname;}
// [585]  Select Case actProp 
switch ("" + _actprop) {
// [586]  Case {185} , {186} , {187} , {188} , {189} , {190} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [587]  bindings.Put(varName, False) 
_B._bindings[_varname]=false;
// [588]  End Select 
break;
}
// [589]  End If 
}
// [590]  End If 
}
// [591]  Catch 
} catch(err) {
// [592]  Log(LastException) 
console.log(err);
// [594]  End Try 
}
// [595]  Return Me 
return _B;
// End Sub
};

// [599] public Sub SetClasses(Classes As String) As VA 
_B.setclasses=function(_classes) {
// [600]  If mElement <> Null Then 
if (_B._melement!=null) {
// [601]  mElement.AddClass(Classes) 
_B._melement.addClass(_classes);
// [602]  End If 
}
// [603]  mClasses = Classes 
_B._mclasses=_classes;
// [604]  Return Me 
return _B;
// End Sub
};

// [607] public Sub GetClasses() As String 
_B.getclasses=function() {
// [608]  Return mClasses 
return _B._mclasses;
// End Sub
};

// [613] public Sub SetStyle(Style As String) As VA 
_B.setstyle=function(_style) {
// [614]  If mElement <> Null Then 
if (_B._melement!=null) {
// [615]  mElement.SetStyle(Style) 
_B._melement.css(JSON.parse(_style));
// [616]  End If 
}
// [617]  mStyle = Style 
_B._mstyle=_style;
// [618]  Return Me 
return _B;
// End Sub
};

// [622] Sub AddClass(classNames As List) As VA 
_B.addclass=function(_classnames) {
var _k,_cm;
// [623]  For Each k As String In classNames 
for (var _kindex=0;_kindex<_classnames.length;_kindex++) {
_k=_classnames[_kindex];
// [624]  classList.put(k, k) 
_B._classlist[_k]=_k;
// [625]  Next 
}
// [626]  dim cm as string = BANanoShared.Join( {191} , classnames) 
_cm=_banano_bananozui_bananoshared.join(" ",_classnames);
// [627]  Setclasses(cm) 
_B.setclasses(_cm,_B);
// [628]  Return Me 
return _B;
// End Sub
};

// [632] Sub SetStyles(m As Map) As VA 
_B.setstyles=function(_m) {
var _k,_v,_jsonstyle;
// [633]  for each k as string in m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [634]  dim v as string = m.get(k) 
_v=_m[_k];
// [635]  styles.put(k, v) 
_B._styles[_k]=_v;
// [636]  next 
}
// [637]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [638]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [639]  Return Me 
return _B;
// End Sub
};

// [643] Sub SetAttrs(props As Map) As VA 
_B.setattrs=function(_props) {
var _k,_v;
// [644]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [645]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [646]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [647]  Next 
}
// [648]  Return Me 
return _B;
// End Sub
};

// [652] Sub SetAttr(prop As String, value As String) As VA 
_B.setattr=function(_prop,_value) {
// [653]  If BANano.IsUndefined(prop) or BANano.IsNull(prop) Then prop = {192} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [654]  If BANano.IsUndefined(value) or BANano.IsNull(value) Then value = {193} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [655]  if prop = {194} then Return Me 
if (_prop=="") { return _B;}
// [656]  properties.put(prop, value) 
_B._properties[_prop]=_value;
// [657]  If mElement <> Null Then 
if (_B._melement!=null) {
// [658]  mElement.SetAttr(prop, value) 
_B._melement.attr(_prop,_value);
// [659]  End If 
}
// [660]  Return Me 
return _B;
// End Sub
};

// [664] Sub SetVBind(prop As String, value As String) As VA 
_B.setvbind=function(_prop,_value) {
// [665]  prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [666]  value = value.ToLowerCase 
_value=_value.toLowerCase();
// [667]  prop = {10} 
_prop="v-bind:" + _prop + "";
// [668]  SetAttr(prop,value) 
_B.setattr(_prop,_value,_B);
// [669]  bindings.Put(value, Null) 
_B._bindings[_value]=null;
// [670]  Return Me 
return _B;
// End Sub
};

// [674] Sub SetStyleSingle(prop As String, value As String) As VA 
_B.setstylesingle=function(_prop,_value) {
var _m,_jsonstyle;
// [675]  If BANano.IsUndefined(prop) or BANano.IsNull(prop) Then prop = {195} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [676]  If BANano.IsUndefined(value) or BANano.IsNull(value) Then value = {196} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [677]  if prop = {197} then return me 
if (_prop=="") { return _B;}
// [678]  styles.put(prop, value) 
_B._styles[_prop]=_value;
// [679]  dim m as map = createmap() 
_m={};
// [680]  m.put(prop, value) 
_m[_prop]=_value;
// [681]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [682]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [683]  Return Me 
return _B;
// End Sub
};

// [687] Sub Build(props As Map, styleProps As Map, classNames As List, loose As List) As VA 
_B.build=function(_props,_styleprops,_classnames,_loose) {
var _k,_v;
// [688]  If loose <> Null Then 
if (_loose!=null) {
// [689]  For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [690]  SetAttr(k, True) 
_B.setattr(_k,true,_B);
// [691]  Next 
}
// [692]  End If 
}
// [693]  If props <> Null Then 
if (_props!=null) {
// [694]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [695]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [696]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [697]  Next 
}
// [698]  End If 
}
// [699]  If styleProps <> Null Then 
if (_styleprops!=null) {
// [700]  for each k as string in styleprops.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [701]  dim v as string = styleprops.get(k) 
_v=_styleprops[_k];
// [702]  SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [703]  next 
}
// [704]  End If 
}
// [705]  If classNames <> Null Then 
if (_classnames!=null) {
// [706]  AddClass(classNames) 
_B.addclass(_classnames,_B);
// [707]  End If 
}
// [708]  Return Me 
return _B;
// End Sub
};

// [712] Public Sub GetHtml() As String 
_B.gethtml=function() {
// [713]  Return mElement.GetHtml 
return _B._melement.html();
// End Sub
};

// [717] Sub SetVClass(classObj as string) As VA 
_B.setvclass=function(_classobj) {
// [718]  SetVBind( {198} , classObj) 
_B.setvbind("class",_classobj,_B);
// [719]  Return Me 
return _B;
// End Sub
};

// [723] Sub SetVStyle(styleObj as string) As VA 
_B.setvstyle=function(_styleobj) {
// [724]  SetVBind( {199} , styleObj) 
_B.setvbind("style",_styleobj,_B);
// [725]  Return Me 
return _B;
// End Sub
};

// [729] Sub SetColor1(varColor As String) As VA 
_B.setcolor1=function(_varcolor) {
var _pp;
// [730]  Dim pp As String = {11} 
_pp="" + _B._mname + "color";
// [731]  SetAttr( {200} , pp) 
_B.setattr(":color",_pp,_B);
// [733]  bindings.Put(pp, varColor) 
_B._bindings[_pp]=_varcolor;
// [734]  Return Me 
return _B;
// End Sub
};

// [738] Sub SetColorIntensity(varColor As String, varIntensity As String) As VA 
_B.setcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_pp;
// [739]  Dim scolor As String = {12} 
_scolor="" + _varcolor + " " + _varintensity + "";
// [740]  Dim pp As String = {13} 
_pp="" + _B._mname + "color";
// [741]  SetAttr( {201} , pp) 
_B.setattr(":color",_pp,_B);
// [743]  bindings.Put(pp, scolor) 
_B._bindings[_pp]=_scolor;
// [744]  Return Me 
return _B;
// End Sub
};

// [748] Sub SetTextColor1(varColor As String) As VA 
_B.settextcolor1=function(_varcolor) {
var _scolor;
// [749]  Dim sColor As String = {14} 
_scolor="" + _varcolor + "--text";
// [750]  AddClass(array(sColor)) 
_B.addclass([_scolor],_B);
// [751]  Return Me 
return _B;
// End Sub
};

// [755] Sub SetTextColorIntensity(varColor As String, varIntensity As String) As VA 
_B.settextcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_sintensity,_mcolor;
// [756]  Dim sColor As String = {15} 
_scolor="" + _varcolor + "--text";
// [757]  Dim sIntensity As String = {16} 
_sintensity="text--" + _varintensity + "";
// [758]  Dim mcolor As String = {17} 
_mcolor="" + _scolor + " " + _sintensity + "";
// [759]  AddClass(Array(mcolor)) 
_B.addclass([_mcolor],_B);
// [760]  Return Me 
return _B;
// End Sub
};

// [764] Sub SetMethod(Module As Object,methodName As String) As VA 
_B.setmethod=function(_module,_methodname) {
var _e,_cb;
// [765]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [766]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [767]  Dim e As BANanoEvent 
_e=null;
// [768]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [769]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [770]  End If 
}
// [771]  Return Me 
return _B;
// End Sub
};

// [775] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [777]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [778]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [779]  ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [780]  Next 
}
// [782]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [783]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [784]  ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [785]  Next 
}
// End Sub
};

}
/* =========================== VApp  =========================== */
function banano_bananozui_vapp() {
var _B=this;
_B._applink= new banano_bananozui_vueapp();

_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._properties={};

_B._styles={};

_B._classlist={};

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtagname="v-app";

_B._bindings={};

_B._methods={};

_B._scaption="";

_B._bdark=false;

_B._sdisabled="";

_B._skey="";

_B._blight=false;

_B._sparentid="";

_B._sreadonly="";

_B._sref="";

_B._srequired="";

_B._svbindclass="";

_B._svbindstyle="";

_B._bvcloak=false;

_B._svelse="";

_B._svelseif="";

_B._svfor="";

_B._svhtml="";

_B._svif="";

_B._svmodel="";

_B._bvonce=false;

_B._bvpre=false;

_B._svshow="";

_B._svtext="";

_B._sbordercolor="";

_B._sborderstyle="";

_B._sborderwidth="";

_B._sborderradius="";

_B._smargintop="";

_B._smarginright="";

_B._smarginbottom="";

_B._smarginleft="";

_B._spaddingtop="";

_B._spaddingright="";

_B._spaddingbottom="";

_B._spaddingleft="";

// [102] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) As VApp 
_B.initialize=function(_callback,_name,_eventname) {
// [103] mName = Name 
_B._mname=_name;
// [104] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [105] mCallBack = CallBack 
_B._mcallback=_callback;
// [106] bindings.Initialize 
_B._bindings={};
// [107] methods.Initialize 
_B._methods={};
// [108] properties.Initialize 
_B._properties={};
// [109] styles.Initialize 
_B._styles={};
// [110] classList.Initialize 
_B._classlist={};
// [117] Return Me 
return _B;
// End Sub
};

// [121] Public Sub DesignerCreateView (Target As BANanoElement, props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [122]  mTarget = Target 
_B._mtarget=_target;
// [124] If props <> Null Then 
if (_props!=null) {
// [125] mClasses = props.Get( {51} ) 
_B._mclasses=_props["Classes"];
// [126] mAttributes = props.Get( {52} ) 
_B._mattributes=_props["Attributes"];
// [127] mStyle = props.Get( {53} ) 
_B._mstyle=_props["Style"];
// [128] sCaption = props.Get( {54} ) 
_B._scaption=_props["Caption"];
// [129] bDark = props.Get( {55} ) 
_B._bdark=_props["Dark"];
// [130] sDisabled = props.Get( {56} ) 
_B._sdisabled=_props["Disabled"];
// [131] sKey = props.Get( {57} ) 
_B._skey=_props["Key"];
// [132] bLight = props.Get( {58} ) 
_B._blight=_props["Light"];
// [133] sParentId = props.Get( {59} ) 
_B._sparentid=_props["ParentId"];
// [134] sReadonly = props.Get( {60} ) 
_B._sreadonly=_props["Readonly"];
// [135] sRef = props.Get( {61} ) 
_B._sref=_props["Ref"];
// [136] sRequired = props.Get( {62} ) 
_B._srequired=_props["Required"];
// [137] sVBindClass = props.Get( {63} ) 
_B._svbindclass=_props["VBindClass"];
// [138] sVBindStyle = props.Get( {64} ) 
_B._svbindstyle=_props["VBindStyle"];
// [139] bVCloak = props.Get( {65} ) 
_B._bvcloak=_props["VCloak"];
// [140] sVElse = props.Get( {66} ) 
_B._svelse=_props["VElse"];
// [141] sVElseIf = props.Get( {67} ) 
_B._svelseif=_props["VElseIf"];
// [142] sVFor = props.Get( {68} ) 
_B._svfor=_props["VFor"];
// [143] sVHtml = props.Get( {69} ) 
_B._svhtml=_props["VHtml"];
// [144] sVIf = props.Get( {70} ) 
_B._svif=_props["VIf"];
// [145] sVModel = props.Get( {71} ) 
_B._svmodel=_props["VModel"];
// [146] bVOnce = props.Get( {72} ) 
_B._bvonce=_props["VOnce"];
// [147] bVPre = props.Get( {73} ) 
_B._bvpre=_props["VPre"];
// [148] sVShow = props.Get( {74} ) 
_B._svshow=_props["VShow"];
// [149] sVText = props.Get( {75} ) 
_B._svtext=_props["VText"];
// [150] sBorderColor = props.Get( {76} ) 
_B._sbordercolor=_props["BorderColor"];
// [151] sBorderStyle = props.Get( {77} ) 
_B._sborderstyle=_props["BorderStyle"];
// [152] sBorderWidth = props.Get( {78} ) 
_B._sborderwidth=_props["BorderWidth"];
// [153] sBorderRadius = props.Get( {79} ) 
_B._sborderradius=_props["BorderRadius"];
// [154] sMarginTop = props.Get( {80} ) 
_B._smargintop=_props["MarginTop"];
// [155] sMarginRight = props.Get( {81} ) 
_B._smarginright=_props["MarginRight"];
// [156] sMarginBottom = props.Get( {82} ) 
_B._smarginbottom=_props["MarginBottom"];
// [157] sMarginLeft = props.Get( {83} ) 
_B._smarginleft=_props["MarginLeft"];
// [158] sPaddingTop = props.Get( {84} ) 
_B._spaddingtop=_props["PaddingTop"];
// [159] sPaddingRight = props.Get( {85} ) 
_B._spaddingright=_props["PaddingRight"];
// [160] sPaddingBottom = props.Get( {86} ) 
_B._spaddingbottom=_props["PaddingBottom"];
// [161] sPaddingLeft = props.Get( {87} ) 
_B._spaddingleft=_props["PaddingLeft"];
// [163] End If 
}
// [164] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [165] mElement = mTarget.Append(strHTML).Get( {88} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [174] Sub SetDark(varDark As Boolean) As VApp 
_B.setdark=function(_vardark) {
// [175] bDark = varDark 
_B._bdark=_vardark;
// [176] SetAttr( {89} , bDark) 
_B.setattr("dark",_B._bdark,_B);
// [177] Return Me 
return _B;
// End Sub
};

// [181] Sub SetDisabled(varDisabled As String) As VApp 
_B.setdisabled=function(_vardisabled) {
// [182] sDisabled = varDisabled 
_B._sdisabled=_vardisabled;
// [183] SetAttr( {90} , sDisabled) 
_B.setattr("disabled",_B._sdisabled,_B);
// [184] Return Me 
return _B;
// End Sub
};

// [188] Sub SetKey(varKey As String) As VApp 
_B.setkey=function(_varkey) {
// [189] sKey = varKey 
_B._skey=_varkey;
// [190] SetAttr( {91} , sKey) 
_B.setattr("key",_B._skey,_B);
// [191] Return Me 
return _B;
// End Sub
};

// [195] Sub SetLight(varLight As Boolean) As VApp 
_B.setlight=function(_varlight) {
// [196] bLight = varLight 
_B._blight=_varlight;
// [197] SetAttr( {92} , bLight) 
_B.setattr("light",_B._blight,_B);
// [198] Return Me 
return _B;
// End Sub
};

// [202] Sub SetParentId(varParentId As String) As VApp 
_B.setparentid=function(_varparentid) {
// [203] sParentId = varParentId 
_B._sparentid=_varparentid;
// [204] SetAttr( {93} , sParentId) 
_B.setattr("parent-id",_B._sparentid,_B);
// [205] Return Me 
return _B;
// End Sub
};

// [209] Sub SetReadonly(varReadonly As String) As VApp 
_B.setreadonly=function(_varreadonly) {
// [210] sReadonly = varReadonly 
_B._sreadonly=_varreadonly;
// [211] SetAttr( {94} , sReadonly) 
_B.setattr("readonly",_B._sreadonly,_B);
// [212] Return Me 
return _B;
// End Sub
};

// [216] Sub SetRef(varRef As String) As VApp 
_B.setref=function(_varref) {
// [217] sRef = varRef 
_B._sref=_varref;
// [218] SetAttr( {95} , sRef) 
_B.setattr("ref",_B._sref,_B);
// [219] Return Me 
return _B;
// End Sub
};

// [223] Sub SetRequired(varRequired As String) As VApp 
_B.setrequired=function(_varrequired) {
// [224] sRequired = varRequired 
_B._srequired=_varrequired;
// [225] SetAttr( {96} , sRequired) 
_B.setattr("required",_B._srequired,_B);
// [226] Return Me 
return _B;
// End Sub
};

// [230] Sub SetVBindClass(varVBindClass As String) As VApp 
_B.setvbindclass=function(_varvbindclass) {
// [231] sVBindClass = varVBindClass 
_B._svbindclass=_varvbindclass;
// [232] SetAttr( {97} , sVBindClass) 
_B.setattr("v-bind:class",_B._svbindclass,_B);
// [233] Return Me 
return _B;
// End Sub
};

// [237] Sub SetVBindStyle(varVBindStyle As String) As VApp 
_B.setvbindstyle=function(_varvbindstyle) {
// [238] sVBindStyle = varVBindStyle 
_B._svbindstyle=_varvbindstyle;
// [239] SetAttr( {98} , sVBindStyle) 
_B.setattr("v-bind:style",_B._svbindstyle,_B);
// [240] Return Me 
return _B;
// End Sub
};

// [244] Sub SetVCloak(varVCloak As Boolean) As VApp 
_B.setvcloak=function(_varvcloak) {
// [245] bVCloak = varVCloak 
_B._bvcloak=_varvcloak;
// [246] SetAttr( {99} , bVCloak) 
_B.setattr("v-cloak",_B._bvcloak,_B);
// [247] Return Me 
return _B;
// End Sub
};

// [251] Sub SetVElse(varVElse As String) As VApp 
_B.setvelse=function(_varvelse) {
// [252] sVElse = varVElse 
_B._svelse=_varvelse;
// [253] SetAttr( {100} , sVElse) 
_B.setattr("v-else",_B._svelse,_B);
// [254] Return Me 
return _B;
// End Sub
};

// [258] Sub SetVElseIf(varVElseIf As String) As VApp 
_B.setvelseif=function(_varvelseif) {
// [259] sVElseIf = varVElseIf 
_B._svelseif=_varvelseif;
// [260] SetAttr( {101} , sVElseIf) 
_B.setattr("v-else-if",_B._svelseif,_B);
// [261] Return Me 
return _B;
// End Sub
};

// [265] Sub SetVFor(varVFor As String) As VApp 
_B.setvfor=function(_varvfor) {
// [266] sVFor = varVFor 
_B._svfor=_varvfor;
// [267] SetAttr( {102} , sVFor) 
_B.setattr("v-for",_B._svfor,_B);
// [268] Return Me 
return _B;
// End Sub
};

// [272] Sub SetVHtml(varVHtml As String) As VApp 
_B.setvhtml=function(_varvhtml) {
// [273] sVHtml = varVHtml 
_B._svhtml=_varvhtml;
// [274] SetAttr( {103} , sVHtml) 
_B.setattr("v-html",_B._svhtml,_B);
// [275] Return Me 
return _B;
// End Sub
};

// [279] Sub SetVIf(varVIf As String) As VApp 
_B.setvif=function(_varvif) {
// [280] sVIf = varVIf 
_B._svif=_varvif;
// [281] SetAttr( {104} , sVIf) 
_B.setattr("v-if",_B._svif,_B);
// [282] Return Me 
return _B;
// End Sub
};

// [286] Sub SetVModel(varVModel As String) As VApp 
_B.setvmodel=function(_varvmodel) {
// [287] sVModel = varVModel 
_B._svmodel=_varvmodel;
// [288] SetAttr( {105} , sVModel) 
_B.setattr("v-model",_B._svmodel,_B);
// [289] Return Me 
return _B;
// End Sub
};

// [293] Sub SetVOnce(varVOnce As Boolean) As VApp 
_B.setvonce=function(_varvonce) {
// [294] bVOnce = varVOnce 
_B._bvonce=_varvonce;
// [295] SetAttr( {106} , bVOnce) 
_B.setattr("v-once",_B._bvonce,_B);
// [296] Return Me 
return _B;
// End Sub
};

// [300] Sub SetVPre(varVPre As Boolean) As VApp 
_B.setvpre=function(_varvpre) {
// [301] bVPre = varVPre 
_B._bvpre=_varvpre;
// [302] SetAttr( {107} , bVPre) 
_B.setattr("v-pre",_B._bvpre,_B);
// [303] Return Me 
return _B;
// End Sub
};

// [307] Sub SetVShow(varVShow As String) As VApp 
_B.setvshow=function(_varvshow) {
// [308] sVShow = varVShow 
_B._svshow=_varvshow;
// [309] SetAttr( {108} , sVShow) 
_B.setattr("v-show",_B._svshow,_B);
// [310] Return Me 
return _B;
// End Sub
};

// [314] Sub SetVText(varVText As String) As VApp 
_B.setvtext=function(_varvtext) {
// [315] sVText = varVText 
_B._svtext=_varvtext;
// [316] SetAttr( {109} , sVText) 
_B.setattr("v-text",_B._svtext,_B);
// [317] Return Me 
return _B;
// End Sub
};

// [321] Sub SetBorderColor(varBorderColor As String) As VApp 
_B.setbordercolor=function(_varbordercolor) {
// [322] sBorderColor = varBorderColor 
_B._sbordercolor=_varbordercolor;
// [323] SetStyleSingle( {110} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [324] Return Me 
return _B;
// End Sub
};

// [328] Sub SetBorderStyle(varBorderStyle As String) As VApp 
_B.setborderstyle=function(_varborderstyle) {
// [329] sBorderStyle = varBorderStyle 
_B._sborderstyle=_varborderstyle;
// [330] SetStyleSingle( {111} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [331] Return Me 
return _B;
// End Sub
};

// [335] Sub SetBorderWidth(varBorderWidth As String) As VApp 
_B.setborderwidth=function(_varborderwidth) {
// [336] sBorderWidth = varBorderWidth 
_B._sborderwidth=_varborderwidth;
// [337] SetStyleSingle( {112} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [338] Return Me 
return _B;
// End Sub
};

// [342] Sub SetBorderRadius(varBorderRadius As String) As VApp 
_B.setborderradius=function(_varborderradius) {
// [343] sBorderRadius = varBorderRadius 
_B._sborderradius=_varborderradius;
// [344] SetStyleSingle( {113} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [345] Return Me 
return _B;
// End Sub
};

// [349] Sub SetMarginTop(varMarginTop As String) As VApp 
_B.setmargintop=function(_varmargintop) {
// [350] sMarginTop = varMarginTop 
_B._smargintop=_varmargintop;
// [351] SetStyleSingle( {114} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [352] Return Me 
return _B;
// End Sub
};

// [356] Sub SetMarginRight(varMarginRight As String) As VApp 
_B.setmarginright=function(_varmarginright) {
// [357] sMarginRight = varMarginRight 
_B._smarginright=_varmarginright;
// [358] SetStyleSingle( {115} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [359] Return Me 
return _B;
// End Sub
};

// [363] Sub SetMarginBottom(varMarginBottom As String) As VApp 
_B.setmarginbottom=function(_varmarginbottom) {
// [364] sMarginBottom = varMarginBottom 
_B._smarginbottom=_varmarginbottom;
// [365] SetStyleSingle( {116} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [366] Return Me 
return _B;
// End Sub
};

// [370] Sub SetMarginLeft(varMarginLeft As String) As VApp 
_B.setmarginleft=function(_varmarginleft) {
// [371] sMarginLeft = varMarginLeft 
_B._smarginleft=_varmarginleft;
// [372] SetStyleSingle( {117} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [373] Return Me 
return _B;
// End Sub
};

// [377] Sub SetPaddingTop(varPaddingTop As String) As VApp 
_B.setpaddingtop=function(_varpaddingtop) {
// [378] sPaddingTop = varPaddingTop 
_B._spaddingtop=_varpaddingtop;
// [379] SetStyleSingle( {118} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [380] Return Me 
return _B;
// End Sub
};

// [384] Sub SetPaddingRight(varPaddingRight As String) As VApp 
_B.setpaddingright=function(_varpaddingright) {
// [385] sPaddingRight = varPaddingRight 
_B._spaddingright=_varpaddingright;
// [386] SetStyleSingle( {119} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [387] Return Me 
return _B;
// End Sub
};

// [391] Sub SetPaddingBottom(varPaddingBottom As String) As VApp 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [392] sPaddingBottom = varPaddingBottom 
_B._spaddingbottom=_varpaddingbottom;
// [393] SetStyleSingle( {120} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [394] Return Me 
return _B;
// End Sub
};

// [398] Sub SetPaddingLeft(varPaddingLeft As String) As VApp 
_B.setpaddingleft=function(_varpaddingleft) {
// [399] sPaddingLeft = varPaddingLeft 
_B._spaddingleft=_varpaddingleft;
// [400] SetStyleSingle( {121} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [401] Return Me 
return _B;
// End Sub
};

// [407] Sub ToString As String 
_B.tostring=function() {
var _ckeys,_sitems,_st,_k,_v,_skeys,_mitems,_mt,_exattr,_strres;
// [408] AddAttr(sCaption, {122} ) 
_B.addattr(_B._scaption,"caption",_B);
// [409] AddAttr(bDark, {123} ) 
_B.addattr(_B._bdark,"dark",_B);
// [410] AddAttr(sDisabled, {124} ) 
_B.addattr(_B._sdisabled,"disabled",_B);
// [411] AddAttr(sKey, {125} ) 
_B.addattr(_B._skey,"key",_B);
// [412] AddAttr(bLight, {126} ) 
_B.addattr(_B._blight,"light",_B);
// [413] AddAttr(sParentId, {127} ) 
_B.addattr(_B._sparentid,"parent-id",_B);
// [414] AddAttr(sReadonly, {128} ) 
_B.addattr(_B._sreadonly,"readonly",_B);
// [415] AddAttr(sRef, {129} ) 
_B.addattr(_B._sref,"ref",_B);
// [416] AddAttr(sRequired, {130} ) 
_B.addattr(_B._srequired,"required",_B);
// [417] AddAttr(sVBindClass, {131} ) 
_B.addattr(_B._svbindclass,"v-bind:class",_B);
// [418] AddAttr(sVBindStyle, {132} ) 
_B.addattr(_B._svbindstyle,"v-bind:style",_B);
// [419] AddAttr(bVCloak, {133} ) 
_B.addattr(_B._bvcloak,"v-cloak",_B);
// [420] AddAttr(sVElse, {134} ) 
_B.addattr(_B._svelse,"v-else",_B);
// [421] AddAttr(sVElseIf, {135} ) 
_B.addattr(_B._svelseif,"v-else-if",_B);
// [422] AddAttr(sVFor, {136} ) 
_B.addattr(_B._svfor,"v-for",_B);
// [423] AddAttr(sVHtml, {137} ) 
_B.addattr(_B._svhtml,"v-html",_B);
// [424] AddAttr(sVIf, {138} ) 
_B.addattr(_B._svif,"v-if",_B);
// [425] AddAttr(sVModel, {139} ) 
_B.addattr(_B._svmodel,"v-model",_B);
// [426] AddAttr(bVOnce, {140} ) 
_B.addattr(_B._bvonce,"v-once",_B);
// [427] AddAttr(bVPre, {141} ) 
_B.addattr(_B._bvpre,"v-pre",_B);
// [428] AddAttr(sVShow, {142} ) 
_B.addattr(_B._svshow,"v-show",_B);
// [429] AddAttr(sVText, {143} ) 
_B.addattr(_B._svtext,"v-text",_B);
// [430] SetStyleSingle( {144} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [431] SetStyleSingle( {145} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [432] SetStyleSingle( {146} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [433] SetStyleSingle( {147} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [434] SetStyleSingle( {148} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [435] SetStyleSingle( {149} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [436] SetStyleSingle( {150} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [437] SetStyleSingle( {151} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [438] SetStyleSingle( {152} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [439] SetStyleSingle( {153} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [440] SetStyleSingle( {154} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [441] SetStyleSingle( {155} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [444] Dim cKeys As String = BANanoShared.JoinMapKeys(classList, {156} ) 
_ckeys=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [445] cKeys = cKeys & {157} & mClasses 
_ckeys=_ckeys+" "+_B._mclasses;
// [446] cKeys = cKeys.trim 
_ckeys=_ckeys.trim();
// [447] cKeys = BANanoShared.MvDistinct( {158} , cKeys) 
_ckeys=_banano_bananozui_bananoshared.mvdistinct(" ",_ckeys);
// [448] AddAttr(cKeys, {159} ) 
_B.addattr(_ckeys,"class",_B);
// [450] If BANano.IsUndefined(mStyle) Or BANano.IsNull(mStyle) Then mStyle = {160} 
if (is.undefined(_B._mstyle) || is.null(_B._mstyle)) {_B._mstyle="";}
// [451] If mStyle.StartsWith( {161} ) Then mStyle = {162} 
if (_B._mstyle.startsWith("{")) {_B._mstyle="";}
// [452] If mStyle <> {163} Then 
if (_B._mstyle!="") {
// [453] Dim sItems As List = BANanoShared.StrParse( {164} ,mStyle) 
_sitems=_banano_bananozui_bananoshared.strparse(",",_B._mstyle);
// [454] For Each st As String In sItems 
for (var _stindex=0;_stindex<_sitems.length;_stindex++) {
_st=_sitems[_stindex];
// [455] Dim k As String = BANanoShared.MvField(st,1, {165} ) 
_k=_banano_bananozui_bananoshared.mvfield(_st,1,":");
// [456] Dim v As String = BANanoShared.MvField(st,2, {166} ) 
_v=_banano_bananozui_bananoshared.mvfield(_st,2,":");
// [457] SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [458] Next 
}
// [459] End If 
}
// [460] Dim sKeys As String = BANanoShared.BuildStyle(styles) 
_skeys=_banano_bananozui_bananoshared.buildstyle(_B._styles);
// [461] sKeys = sKeys.trim 
_skeys=_skeys.trim();
// [462] AddAttr(sKeys, {167} ) 
_B.addattr(_skeys,"style",_B);
// [464] If BANano.IsUndefined(mAttributes) Or BANano.IsNull(mAttributes) Then mAttributes = {168} 
if (is.undefined(_B._mattributes) || is.null(_B._mattributes)) {_B._mattributes="";}
// [465] If mAttributes.StartsWith( {169} ) Then mAttributes = {170} 
if (_B._mattributes.startsWith("{")) {_B._mattributes="";}
// [466] If mAttributes <> {171} Then 
if (_B._mattributes!="") {
// [467] Dim mItems As List = BANanoShared.StrParse( {172} ,mAttributes) 
_mitems=_banano_bananozui_bananoshared.strparse(";",_B._mattributes);
// [468] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [469] Dim k As String = BANanoShared.MvField(mt,1, {173} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [470] Dim v As String = BANanoShared.MvField(mt,2, {174} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [471] AddAttr(v, k) 
_B.addattr(_v,_k,_B);
// [472] Next 
}
// [473] End If 
}
// [474] Dim exattr As String = BANanoShared.BuildAttributes(properties) 
_exattr=_banano_bananozui_bananoshared.buildattributes(_B._properties);
// [476] Dim strRes As String = {4} 
_strres="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _exattr + ">" + _B._scaption + "</" + _B._mtagname + ">";
// [477] Return strRes 
return _strres;
// End Sub
};

// [481] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [482]  Return mElement 
return _B._melement;
// End Sub
};

// [486] public Sub getID() As String 
_B.getid=function() {
// [487]  Return mName 
return _B._mname;
// End Sub
};

// [491] Sub AddComponent(child As String) As VApp 
_B.addcomponent=function(_child) {
// [492]  mElement.Append(child) 
_B._melement.append(_child);
// [493]  sCaption = mElement.GetText 
_B._scaption=_B._melement.text();
// [494]  Return Me 
return _B;
// End Sub
};

// [498] Sub SetID(varText As String) As VApp 
_B.setid=function(_vartext) {
// [499]  mName = varText 
_B._mname=_vartext;
// [500]  Return Me 
return _B;
// End Sub
};

// [504] public Sub GetCaption() As String 
_B.getcaption=function() {
// [505]  Return sCaption 
return _B._scaption;
// End Sub
};

// [509] public Sub AddToParent(targetID As String) As VApp 
_B.addtoparent=function(_targetid) {
// [510]  mTarget = BANano.GetElement( {175} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [511]  DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// [512]  Return Me 
return _B;
// End Sub
};

// [516] Sub AddToApp(vap As VueApp) As VApp 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [517]  appLink = vap 
_B._applink=_vap;
// [519]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [520]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [521]  vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [522]  Next 
}
// [524]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [525]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [526]  vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [527]  Next 
}
// [528]  Return Me 
return _B;
// End Sub
};

// [532] public Sub Remove() 
_B.remove=function() {
// [533]  mElement.Empty 
_B._melement.empty();
// [534]  BANano.SetMeToNull 
_B=null;
// End Sub
};

// [538] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [539]  If mElement <> Null Then 
if (_B._melement!=null) {
// [540]  mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [541]  End If 
}
// End Sub
};

// [545] Sub SetVOn(event As String) As VApp 
_B.setvon=function(_event) {
var _methodname;
// [546]  Dim methodName As String = BANanoShared.BeautifyName(event) 
_methodname=_banano_bananozui_bananoshared.beautifyname(_event);
// [547]  methodName = {5} 
_methodname="" + _B._meventname + "_" + _methodname + "";
// [548]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [549]  If SubExists(mCallBack, methodName) = False Then Return Me 
if ((typeof _B._mcallback[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [550]  SetAttr( {6} , methodName) 
_B.setattr("v-on:" + _event + "",_methodname,_B);
// [551]  SetMethod(mCallBack, methodName) 
_B.setmethod(_B._mcallback,_methodname,_B);
// [552]  Return Me 
return _B;
// End Sub
};

// [556] Sub SetCaption(varText As String) As VApp 
_B.setcaption=function(_vartext) {
// [557]  If mElement <> Null Then 
if (_B._melement!=null) {
// [558]  mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [559]  End If 
}
// [560]  sCaption = varText 
_B._scaption=_vartext;
// [561]  Return Me 
return _B;
// End Sub
};

// [565] private Sub AddAttr(varName As String, actProp As String) As VApp 
_B.addattr=function(_varname,_actprop) {
var _rname;
// [566]  If BANano.IsUndefined(varName) Or BANano.IsNull(varName) Then varName = {176} 
if (is.undefined(_varname) || is.null(_varname)) {_varname="";}
// [567]  If BANano.IsNumber(varName) Then varName = BANanoShared.CStr(varName) 
if (is.number(_varname)) {_varname=_banano_bananozui_bananoshared.cstr(_varname);}
// [568]  If actProp = {177} Then Return Me 
if (_actprop=="caption") { return _B;}
// [569]  Try 
try {
// [570]  If BANano.IsBoolean(varName) Then 
if (is.boolean(_varname)) {
// [571]  If varName = True Then properties.put(actProp, varName) 
if (_varname==true) {_B._properties[_actprop]=_varname;}
// [572]  Else 
} else {
// [573]  If varName.StartsWith( {178} ) Then 
if (_varname.startsWith(":")) {
// [576]  Dim rname As String = BANanoShared.MidString2(varName, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varname,2);
// [577]  If rname.Contains( {179} ) Then 
if (_rname.contains(".")) {
// [579]  properties.Put( {7} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [580]  Else 
} else {
// [581]  properties.Put( {8} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [582]  bindings.Put(rname, Null) 
_B._bindings[_rname]=null;
// [583]  End If 
}
// [584]  Else 
} else {
// [585]  If varName <> {180} Then properties.put(actProp, varName) 
if (_varname!="") {_B._properties[_actprop]=_varname;}
// [586]  Select Case actProp 
switch ("" + _actprop) {
// [587]  Case {181} , {182} , {183} , {184} , {185} , {186} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [588]  bindings.Put(varName, False) 
_B._bindings[_varname]=false;
// [589]  End Select 
break;
}
// [590]  End If 
}
// [591]  End If 
}
// [592]  Catch 
} catch(err) {
// [593]  Log(LastException) 
console.log(err);
// [595]  End Try 
}
// [596]  Return Me 
return _B;
// End Sub
};

// [600] public Sub SetClasses(Classes As String) As VApp 
_B.setclasses=function(_classes) {
// [601]  If mElement <> Null Then 
if (_B._melement!=null) {
// [602]  mElement.AddClass(Classes) 
_B._melement.addClass(_classes);
// [603]  End If 
}
// [604]  mClasses = Classes 
_B._mclasses=_classes;
// [605]  Return Me 
return _B;
// End Sub
};

// [608] public Sub GetClasses() As String 
_B.getclasses=function() {
// [609]  Return mClasses 
return _B._mclasses;
// End Sub
};

// [614] public Sub SetStyle(Style As String) As VApp 
_B.setstyle=function(_style) {
// [615]  If mElement <> Null Then 
if (_B._melement!=null) {
// [616]  mElement.SetStyle(Style) 
_B._melement.css(JSON.parse(_style));
// [617]  End If 
}
// [618]  mStyle = Style 
_B._mstyle=_style;
// [619]  Return Me 
return _B;
// End Sub
};

// [623] Sub AddClass(classNames As List) As VApp 
_B.addclass=function(_classnames) {
var _k,_cm;
// [624]  For Each k As String In classNames 
for (var _kindex=0;_kindex<_classnames.length;_kindex++) {
_k=_classnames[_kindex];
// [625]  classList.put(k, k) 
_B._classlist[_k]=_k;
// [626]  Next 
}
// [627]  dim cm as string = BANanoShared.Join( {187} , classnames) 
_cm=_banano_bananozui_bananoshared.join(" ",_classnames);
// [628]  Setclasses(cm) 
_B.setclasses(_cm,_B);
// [629]  Return Me 
return _B;
// End Sub
};

// [633] Sub SetStyles(m As Map) As VApp 
_B.setstyles=function(_m) {
var _k,_v,_jsonstyle;
// [634]  for each k as string in m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [635]  dim v as string = m.get(k) 
_v=_m[_k];
// [636]  styles.put(k, v) 
_B._styles[_k]=_v;
// [637]  next 
}
// [638]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [639]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [640]  Return Me 
return _B;
// End Sub
};

// [644] Sub SetAttrs(props As Map) As VApp 
_B.setattrs=function(_props) {
var _k,_v;
// [645]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [646]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [647]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [648]  Next 
}
// [649]  Return Me 
return _B;
// End Sub
};

// [653] Sub SetAttr(prop As String, value As String) As VApp 
_B.setattr=function(_prop,_value) {
// [654]  If BANano.IsUndefined(prop) or BANano.IsNull(prop) Then prop = {188} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [655]  If BANano.IsUndefined(value) or BANano.IsNull(value) Then value = {189} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [656]  if prop = {190} then Return Me 
if (_prop=="") { return _B;}
// [657]  properties.put(prop, value) 
_B._properties[_prop]=_value;
// [658]  If mElement <> Null Then 
if (_B._melement!=null) {
// [659]  mElement.SetAttr(prop, value) 
_B._melement.attr(_prop,_value);
// [660]  End If 
}
// [661]  Return Me 
return _B;
// End Sub
};

// [665] Sub SetVBind(prop As String, value As String) As VApp 
_B.setvbind=function(_prop,_value) {
// [666]  prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [667]  value = value.ToLowerCase 
_value=_value.toLowerCase();
// [668]  prop = {10} 
_prop="v-bind:" + _prop + "";
// [669]  SetAttr(prop,value) 
_B.setattr(_prop,_value,_B);
// [670]  bindings.Put(value, Null) 
_B._bindings[_value]=null;
// [671]  Return Me 
return _B;
// End Sub
};

// [675] Sub SetStyleSingle(prop As String, value As String) As VApp 
_B.setstylesingle=function(_prop,_value) {
var _m,_jsonstyle;
// [676]  If BANano.IsUndefined(prop) Or BANano.IsNull(prop) Then prop = {191} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [677]  If BANano.IsUndefined(value) Or BANano.IsNull(value) Then value = {192} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [678]  If prop = {193} Then Return Me 
if (_prop=="") { return _B;}
// [679]  styles.put(prop, value) 
_B._styles[_prop]=_value;
// [680]  Dim m As Map = CreateMap() 
_m={};
// [681]  m.put(prop, value) 
_m[_prop]=_value;
// [682]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [683]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [684]  Return Me 
return _B;
// End Sub
};

// [688] Sub Build(props As Map, styleProps As Map, classNames As List, loose As List) As VApp 
_B.build=function(_props,_styleprops,_classnames,_loose) {
var _k,_v;
// [689]  If loose <> Null Then 
if (_loose!=null) {
// [690]  For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [691]  SetAttr(k, True) 
_B.setattr(_k,true,_B);
// [692]  Next 
}
// [693]  End If 
}
// [694]  If props <> Null Then 
if (_props!=null) {
// [695]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [696]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [697]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [698]  Next 
}
// [699]  End If 
}
// [700]  If styleProps <> Null Then 
if (_styleprops!=null) {
// [701]  For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [702]  Dim v As String = styleProps.get(k) 
_v=_styleprops[_k];
// [703]  SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [704]  Next 
}
// [705]  End If 
}
// [706]  If classNames <> Null Then 
if (_classnames!=null) {
// [707]  AddClass(classNames) 
_B.addclass(_classnames,_B);
// [708]  End If 
}
// [709]  Return Me 
return _B;
// End Sub
};

// [713] Public Sub GetHtml() As String 
_B.gethtml=function() {
// [714]  Return mElement.GetHtml 
return _B._melement.html();
// End Sub
};

// [718] Sub SetVClass(classObj As String) As VApp 
_B.setvclass=function(_classobj) {
// [719]  SetVBind( {194} , classObj) 
_B.setvbind("class",_classobj,_B);
// [720]  Return Me 
return _B;
// End Sub
};

// [724] Sub SetVStyle(styleObj as string) As VApp 
_B.setvstyle=function(_styleobj) {
// [725]  SetVBind( {195} , styleObj) 
_B.setvbind("style",_styleobj,_B);
// [726]  Return Me 
return _B;
// End Sub
};

// [730] Sub SetColor1(varColor As String) As VApp 
_B.setcolor1=function(_varcolor) {
var _pp;
// [731]  Dim pp As String = {11} 
_pp="" + _B._mname + "color";
// [732]  SetAttr( {196} , pp) 
_B.setattr(":color",_pp,_B);
// [734]  bindings.Put(pp, varColor) 
_B._bindings[_pp]=_varcolor;
// [735]  Return Me 
return _B;
// End Sub
};

// [739] Sub SetColorIntensity(varColor As String, varIntensity As String) As VApp 
_B.setcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_pp;
// [740]  Dim scolor As String = {12} 
_scolor="" + _varcolor + " " + _varintensity + "";
// [741]  Dim pp As String = {13} 
_pp="" + _B._mname + "color";
// [742]  SetAttr( {197} , pp) 
_B.setattr(":color",_pp,_B);
// [744]  bindings.Put(pp, scolor) 
_B._bindings[_pp]=_scolor;
// [745]  Return Me 
return _B;
// End Sub
};

// [749] Sub SetTextColor1(varColor As String) As VApp 
_B.settextcolor1=function(_varcolor) {
var _scolor;
// [750]  Dim sColor As String = {14} 
_scolor="" + _varcolor + "--text";
// [751]  AddClass(array(sColor)) 
_B.addclass([_scolor],_B);
// [752]  Return Me 
return _B;
// End Sub
};

// [756] Sub SetTextColorIntensity(varColor As String, varIntensity As String) As VApp 
_B.settextcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_sintensity,_mcolor;
// [757]  Dim sColor As String = {15} 
_scolor="" + _varcolor + "--text";
// [758]  Dim sIntensity As String = {16} 
_sintensity="text--" + _varintensity + "";
// [759]  Dim mcolor As String = {17} 
_mcolor="" + _scolor + " " + _sintensity + "";
// [760]  AddClass(Array(mcolor)) 
_B.addclass([_mcolor],_B);
// [761]  Return Me 
return _B;
// End Sub
};

// [765] Sub SetMethod(Module As Object,methodName As String) As VApp 
_B.setmethod=function(_module,_methodname) {
var _e,_cb;
// [766]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [767]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [768]  Dim e As BANanoEvent 
_e=null;
// [769]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [770]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [771]  End If 
}
// [772]  Return Me 
return _B;
// End Sub
};

// [777] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [779]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [780]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [781]  ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [782]  Next 
}
// [784]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [785]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [786]  ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [787]  Next 
}
// End Sub
};

}
/* =========================== VHTML  =========================== */
function banano_bananozui_vhtml() {
var _B=this;
_B._applink= new banano_bananozui_vueapp();

_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._properties={};

_B._styles={};

_B._classlist={};

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mslot="";

_B._mtagname="div";

_B._bindings={};

_B._methods={};

_B._stext="";

_B._sdisabled="";

_B._skey="";

_B._sparentid="";

_B._sreadonly="";

_B._sref="";

_B._srequired="";

_B._svbindclass="";

_B._svbindstyle="";

_B._svelse="";

_B._svelseif="";

_B._svfor="";

_B._svhtml="";

_B._svif="";

_B._svmodel="";

_B._svshow="";

_B._svtext="";

_B._sbordercolor="";

_B._sborderstyle="";

_B._sborderwidth="";

_B._sborderradius="";

_B._smargintop="";

_B._smarginright="";

_B._smarginbottom="";

_B._smarginleft="";

_B._spaddingtop="";

_B._spaddingright="";

_B._spaddingbottom="";

_B._spaddingleft="";

_B._sbtext=new StringBuilder();

// [95] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) As VHTML 
_B.initialize=function(_callback,_name,_eventname) {
// [96] mName = Name 
_B._mname=_name;
// [97] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [98] mCallBack = CallBack 
_B._mcallback=_callback;
// [99] bindings.Initialize 
_B._bindings={};
// [100] methods.Initialize 
_B._methods={};
// [101] properties.Initialize 
_B._properties={};
// [102] styles.Initialize 
_B._styles={};
// [103] classList.Initialize 
_B._classlist={};
// [104] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// [111] Return Me 
return _B;
// End Sub
};

// [115] Public Sub DesignerCreateView (Target As BANanoElement, props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [116]  mTarget = Target 
_B._mtarget=_target;
// [118] If props <> Null Then 
if (_props!=null) {
// [119] mClasses = props.Get( {52} ) 
_B._mclasses=_props["Classes"];
// [120] mAttributes = props.Get( {53} ) 
_B._mattributes=_props["Attributes"];
// [121] mStyle = props.Get( {54} ) 
_B._mstyle=_props["Style"];
// [122] mTagName = props.Get( {55} ) 
_B._mtagname=_props["TagName"];
// [123] sText = props.Get( {56} ) 
_B._stext=_props["Text"];
// [124] sDisabled = props.Get( {57} ) 
_B._sdisabled=_props["Disabled"];
// [125] sKey = props.Get( {58} ) 
_B._skey=_props["Key"];
// [126] sParentId = props.Get( {59} ) 
_B._sparentid=_props["ParentId"];
// [127] sReadonly = props.Get( {60} ) 
_B._sreadonly=_props["Readonly"];
// [128] sRef = props.Get( {61} ) 
_B._sref=_props["Ref"];
// [129] sRequired = props.Get( {62} ) 
_B._srequired=_props["Required"];
// [130] sVBindClass = props.Get( {63} ) 
_B._svbindclass=_props["VBindClass"];
// [131] sVBindStyle = props.Get( {64} ) 
_B._svbindstyle=_props["VBindStyle"];
// [132] sVElse = props.Get( {65} ) 
_B._svelse=_props["VElse"];
// [133] sVElseIf = props.Get( {66} ) 
_B._svelseif=_props["VElseIf"];
// [134] sVFor = props.Get( {67} ) 
_B._svfor=_props["VFor"];
// [135] sVHtml = props.Get( {68} ) 
_B._svhtml=_props["VHtml"];
// [136] sVIf = props.Get( {69} ) 
_B._svif=_props["VIf"];
// [137] sVModel = props.Get( {70} ) 
_B._svmodel=_props["VModel"];
// [138] sVShow = props.Get( {71} ) 
_B._svshow=_props["VShow"];
// [139] sVText = props.Get( {72} ) 
_B._svtext=_props["VText"];
// [140] sBorderColor = props.Get( {73} ) 
_B._sbordercolor=_props["BorderColor"];
// [141] sBorderStyle = props.Get( {74} ) 
_B._sborderstyle=_props["BorderStyle"];
// [142] sBorderWidth = props.Get( {75} ) 
_B._sborderwidth=_props["BorderWidth"];
// [143] sBorderRadius = props.Get( {76} ) 
_B._sborderradius=_props["BorderRadius"];
// [144] sMarginTop = props.Get( {77} ) 
_B._smargintop=_props["MarginTop"];
// [145] sMarginRight = props.Get( {78} ) 
_B._smarginright=_props["MarginRight"];
// [146] sMarginBottom = props.Get( {79} ) 
_B._smarginbottom=_props["MarginBottom"];
// [147] sMarginLeft = props.Get( {80} ) 
_B._smarginleft=_props["MarginLeft"];
// [148] sPaddingTop = props.Get( {81} ) 
_B._spaddingtop=_props["PaddingTop"];
// [149] sPaddingRight = props.Get( {82} ) 
_B._spaddingright=_props["PaddingRight"];
// [150] sPaddingBottom = props.Get( {83} ) 
_B._spaddingbottom=_props["PaddingBottom"];
// [151] sPaddingLeft = props.Get( {84} ) 
_B._spaddingleft=_props["PaddingLeft"];
// [152]  mSlot = props.Get( {85} ) 
_B._mslot=_props["Slot"];
// [153] End If 
}
// [154] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [155] mElement = mTarget.Append(strHTML).Get( {86} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [164] Sub SetDisabled(varDisabled As String) As VHTML 
_B.setdisabled=function(_vardisabled) {
// [165] sDisabled = varDisabled 
_B._sdisabled=_vardisabled;
// [166] SetAttr( {87} , sDisabled) 
_B.setattr("disabled",_B._sdisabled,_B);
// [167] Return Me 
return _B;
// End Sub
};

// [170] Sub SetDiv As VHTML 
_B.setdiv=function() {
// [171]  SetTagName( {88} ) 
_B.settagname("div",_B);
// [172]  Return Me 
return _B;
// End Sub
};

// [175] Sub SetSection As VHTML 
_B.setsection=function() {
// [176]  SetTagName( {89} ) 
_B.settagname("section",_B);
// [177]  Return Me 
return _B;
// End Sub
};

// [180] Sub SetSlotExtension As VHTML 
_B.setslotextension=function() {
// [181]  SetAttr( {90} , {91} ) 
_B.setattr("slot","extension",_B);
// [182]  Return Me 
return _B;
// End Sub
};

// [186] Sub SetSlotMedia As VHTML 
_B.setslotmedia=function() {
// [187]  SetAttr( {92} , {93} ) 
_B.setattr("slot","media",_B);
// [188]  Return Me 
return _B;
// End Sub
};

// [192] Sub SetKey(varKey As String) As VHTML 
_B.setkey=function(_varkey) {
// [193] sKey = varKey 
_B._skey=_varkey;
// [194] SetAttr( {94} , sKey) 
_B.setattr("key",_B._skey,_B);
// [195] Return Me 
return _B;
// End Sub
};

// [199] Sub SetParentId(varParentId As String) As VHTML 
_B.setparentid=function(_varparentid) {
// [200] sParentId = varParentId 
_B._sparentid=_varparentid;
// [201] SetAttr( {95} , sParentId) 
_B.setattr("parent-id",_B._sparentid,_B);
// [202] Return Me 
return _B;
// End Sub
};

// [206] Sub SetReadonly(varReadonly As String) As VHTML 
_B.setreadonly=function(_varreadonly) {
// [207] sReadonly = varReadonly 
_B._sreadonly=_varreadonly;
// [208] SetAttr( {96} , sReadonly) 
_B.setattr("readonly",_B._sreadonly,_B);
// [209] Return Me 
return _B;
// End Sub
};

// [213] Sub SetRef(varRef As String) As VHTML 
_B.setref=function(_varref) {
// [214] sRef = varRef 
_B._sref=_varref;
// [215] SetAttr( {97} , sRef) 
_B.setattr("ref",_B._sref,_B);
// [216] Return Me 
return _B;
// End Sub
};

// [220] Sub SetRequired(varRequired As String) As VHTML 
_B.setrequired=function(_varrequired) {
// [221] sRequired = varRequired 
_B._srequired=_varrequired;
// [222] SetAttr( {98} , sRequired) 
_B.setattr("required",_B._srequired,_B);
// [223] Return Me 
return _B;
// End Sub
};

// [227] Sub SetVBindClass(varVBindClass As String) As VHTML 
_B.setvbindclass=function(_varvbindclass) {
// [228] sVBindClass = varVBindClass 
_B._svbindclass=_varvbindclass;
// [229] SetAttr( {99} , sVBindClass) 
_B.setattr("v-bind:class",_B._svbindclass,_B);
// [230] Return Me 
return _B;
// End Sub
};

// [234] Sub SetVBindStyle(varVBindStyle As String) As VHTML 
_B.setvbindstyle=function(_varvbindstyle) {
// [235] sVBindStyle = varVBindStyle 
_B._svbindstyle=_varvbindstyle;
// [236] SetAttr( {100} , sVBindStyle) 
_B.setattr("v-bind:style",_B._svbindstyle,_B);
// [237] Return Me 
return _B;
// End Sub
};

// [241] Sub SetVElse(varVElse As String) As VHTML 
_B.setvelse=function(_varvelse) {
// [242] sVElse = varVElse 
_B._svelse=_varvelse;
// [243] SetAttr( {101} , sVElse) 
_B.setattr("v-else",_B._svelse,_B);
// [244] Return Me 
return _B;
// End Sub
};

// [248] Sub SetVElseIf(varVElseIf As String) As VHTML 
_B.setvelseif=function(_varvelseif) {
// [249] sVElseIf = varVElseIf 
_B._svelseif=_varvelseif;
// [250] SetAttr( {102} , sVElseIf) 
_B.setattr("v-else-if",_B._svelseif,_B);
// [251] Return Me 
return _B;
// End Sub
};

// [255] Sub SetVFor(varVFor As String) As VHTML 
_B.setvfor=function(_varvfor) {
// [256] sVFor = varVFor 
_B._svfor=_varvfor;
// [257] SetAttr( {103} , sVFor) 
_B.setattr("v-for",_B._svfor,_B);
// [258] Return Me 
return _B;
// End Sub
};

// [262] Sub SetVHtml(varVHtml As String) As VHTML 
_B.setvhtml=function(_varvhtml) {
// [263] sVHtml = varVHtml 
_B._svhtml=_varvhtml;
// [264] SetAttr( {104} , sVHtml) 
_B.setattr("v-html",_B._svhtml,_B);
// [265] Return Me 
return _B;
// End Sub
};

// [269] Sub SetVIf(varVIf As String) As VHTML 
_B.setvif=function(_varvif) {
// [270] sVIf = varVIf 
_B._svif=_varvif;
// [271] SetAttr( {105} , sVIf) 
_B.setattr("v-if",_B._svif,_B);
// [272] Return Me 
return _B;
// End Sub
};

// [276] Sub SetVModel(varVModel As String) As VHTML 
_B.setvmodel=function(_varvmodel) {
// [277] sVModel = varVModel 
_B._svmodel=_varvmodel;
// [278] SetAttr( {106} , sVModel) 
_B.setattr("v-model",_B._svmodel,_B);
// [279] Return Me 
return _B;
// End Sub
};

// [283] Sub SetVShow(varVShow As String) As VHTML 
_B.setvshow=function(_varvshow) {
// [284] sVShow = varVShow 
_B._svshow=_varvshow;
// [285] SetAttr( {107} , sVShow) 
_B.setattr("v-show",_B._svshow,_B);
// [286] Return Me 
return _B;
// End Sub
};

// [290] Sub SetVText(varVText As String) As VHTML 
_B.setvtext=function(_varvtext) {
// [291] sVText = varVText 
_B._svtext=_varvtext;
// [292] SetAttr( {108} , sVText) 
_B.setattr("v-text",_B._svtext,_B);
// [293] Return Me 
return _B;
// End Sub
};

// [297] Sub SetTagName(varTagName As String) As VHTML 
_B.settagname=function(_vartagname) {
// [298] mTagName = varTagName 
_B._mtagname=_vartagname;
// [299] Return Me 
return _B;
// End Sub
};

// [303] Sub SetBorderColor(varBorderColor As String) As VHTML 
_B.setbordercolor=function(_varbordercolor) {
// [304] sBorderColor = varBorderColor 
_B._sbordercolor=_varbordercolor;
// [305] SetStyleSingle( {109} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [306] Return Me 
return _B;
// End Sub
};

// [310] Sub SetBorderStyle(varBorderStyle As String) As VHTML 
_B.setborderstyle=function(_varborderstyle) {
// [311] sBorderStyle = varBorderStyle 
_B._sborderstyle=_varborderstyle;
// [312] SetStyleSingle( {110} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [313] Return Me 
return _B;
// End Sub
};

// [317] Sub SetBorderWidth(varBorderWidth As String) As VHTML 
_B.setborderwidth=function(_varborderwidth) {
// [318] sBorderWidth = varBorderWidth 
_B._sborderwidth=_varborderwidth;
// [319] SetStyleSingle( {111} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [320] Return Me 
return _B;
// End Sub
};

// [324] Sub SetBorderRadius(varBorderRadius As String) As VHTML 
_B.setborderradius=function(_varborderradius) {
// [325] sBorderRadius = varBorderRadius 
_B._sborderradius=_varborderradius;
// [326] SetStyleSingle( {112} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [327] Return Me 
return _B;
// End Sub
};

// [331] Sub SetMarginTop(varMarginTop As String) As VHTML 
_B.setmargintop=function(_varmargintop) {
// [332] sMarginTop = varMarginTop 
_B._smargintop=_varmargintop;
// [333] SetStyleSingle( {113} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [334] Return Me 
return _B;
// End Sub
};

// [338] Sub SetMarginRight(varMarginRight As String) As VHTML 
_B.setmarginright=function(_varmarginright) {
// [339] sMarginRight = varMarginRight 
_B._smarginright=_varmarginright;
// [340] SetStyleSingle( {114} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [341] Return Me 
return _B;
// End Sub
};

// [345] Sub SetMarginBottom(varMarginBottom As String) As VHTML 
_B.setmarginbottom=function(_varmarginbottom) {
// [346] sMarginBottom = varMarginBottom 
_B._smarginbottom=_varmarginbottom;
// [347] SetStyleSingle( {115} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [348] Return Me 
return _B;
// End Sub
};

// [352] Sub SetMarginLeft(varMarginLeft As String) As VHTML 
_B.setmarginleft=function(_varmarginleft) {
// [353] sMarginLeft = varMarginLeft 
_B._smarginleft=_varmarginleft;
// [354] SetStyleSingle( {116} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [355] Return Me 
return _B;
// End Sub
};

// [359] Sub SetPaddingTop(varPaddingTop As String) As VHTML 
_B.setpaddingtop=function(_varpaddingtop) {
// [360] sPaddingTop = varPaddingTop 
_B._spaddingtop=_varpaddingtop;
// [361] SetStyleSingle( {117} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [362] Return Me 
return _B;
// End Sub
};

// [366] Sub SetPaddingRight(varPaddingRight As String) As VHTML 
_B.setpaddingright=function(_varpaddingright) {
// [367] sPaddingRight = varPaddingRight 
_B._spaddingright=_varpaddingright;
// [368] SetStyleSingle( {118} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [369] Return Me 
return _B;
// End Sub
};

// [373] Sub SetPaddingBottom(varPaddingBottom As String) As VHTML 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [374] sPaddingBottom = varPaddingBottom 
_B._spaddingbottom=_varpaddingbottom;
// [375] SetStyleSingle( {119} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [376] Return Me 
return _B;
// End Sub
};

// [380] Sub SetPaddingLeft(varPaddingLeft As String) As VHTML 
_B.setpaddingleft=function(_varpaddingleft) {
// [381] sPaddingLeft = varPaddingLeft 
_B._spaddingleft=_varpaddingleft;
// [382] SetStyleSingle( {120} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [383] Return Me 
return _B;
// End Sub
};

// [389] Sub ToString As String 
_B.tostring=function() {
var _ckeys,_sitems,_st,_k,_v,_skeys,_mitems,_mt,_exattr,_strres;
// [390]  AddAttr(mSlot, {121} ) 
_B.addattr(_B._mslot,"slot",_B);
// [391] AddAttr(sDisabled, {122} ) 
_B.addattr(_B._sdisabled,"disabled",_B);
// [392] AddAttr(sKey, {123} ) 
_B.addattr(_B._skey,"key",_B);
// [393] AddAttr(sParentId, {124} ) 
_B.addattr(_B._sparentid,"parent-id",_B);
// [394] AddAttr(sReadonly, {125} ) 
_B.addattr(_B._sreadonly,"readonly",_B);
// [395] AddAttr(sRef, {126} ) 
_B.addattr(_B._sref,"ref",_B);
// [396] AddAttr(sRequired, {127} ) 
_B.addattr(_B._srequired,"required",_B);
// [397] AddAttr(sVBindClass, {128} ) 
_B.addattr(_B._svbindclass,"v-bind:class",_B);
// [398] AddAttr(sVBindStyle, {129} ) 
_B.addattr(_B._svbindstyle,"v-bind:style",_B);
// [399] AddAttr(sVElse, {130} ) 
_B.addattr(_B._svelse,"v-else",_B);
// [400] AddAttr(sVElseIf, {131} ) 
_B.addattr(_B._svelseif,"v-else-if",_B);
// [401] AddAttr(sVFor, {132} ) 
_B.addattr(_B._svfor,"v-for",_B);
// [402] AddAttr(sVHtml, {133} ) 
_B.addattr(_B._svhtml,"v-html",_B);
// [403] AddAttr(sVIf, {134} ) 
_B.addattr(_B._svif,"v-if",_B);
// [404] AddAttr(sVModel, {135} ) 
_B.addattr(_B._svmodel,"v-model",_B);
// [405] AddAttr(sVShow, {136} ) 
_B.addattr(_B._svshow,"v-show",_B);
// [406] AddAttr(sVText, {137} ) 
_B.addattr(_B._svtext,"v-text",_B);
// [407] SetStyleSingle( {138} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [408] SetStyleSingle( {139} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [409] SetStyleSingle( {140} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [410] SetStyleSingle( {141} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [411] SetStyleSingle( {142} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [412] SetStyleSingle( {143} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [413] SetStyleSingle( {144} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [414] SetStyleSingle( {145} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [415] SetStyleSingle( {146} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [416] SetStyleSingle( {147} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [417] SetStyleSingle( {148} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [418] SetStyleSingle( {149} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [421] Dim cKeys As String = BANanoShared.JoinMapKeys(classList, {150} ) 
_ckeys=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [422] cKeys = cKeys & {151} & mClasses 
_ckeys=_ckeys+" "+_B._mclasses;
// [423] cKeys = cKeys.trim 
_ckeys=_ckeys.trim();
// [424] cKeys = BANanoShared.MvDistinct( {152} , cKeys) 
_ckeys=_banano_bananozui_bananoshared.mvdistinct(" ",_ckeys);
// [425] AddAttr(cKeys, {153} ) 
_B.addattr(_ckeys,"class",_B);
// [427] If BANano.IsUndefined(mStyle) Or BANano.IsNull(mStyle) Then mStyle = {154} 
if (is.undefined(_B._mstyle) || is.null(_B._mstyle)) {_B._mstyle="";}
// [428] If mStyle.StartsWith( {155} ) Then mStyle = {156} 
if (_B._mstyle.startsWith("{")) {_B._mstyle="";}
// [429] If mStyle <> {157} Then 
if (_B._mstyle!="") {
// [430] Dim sItems As List = BANanoShared.StrParse( {158} ,mStyle) 
_sitems=_banano_bananozui_bananoshared.strparse(",",_B._mstyle);
// [431] For Each st As String In sItems 
for (var _stindex=0;_stindex<_sitems.length;_stindex++) {
_st=_sitems[_stindex];
// [432] Dim k As String = BANanoShared.MvField(st,1, {159} ) 
_k=_banano_bananozui_bananoshared.mvfield(_st,1,":");
// [433] Dim v As String = BANanoShared.MvField(st,2, {160} ) 
_v=_banano_bananozui_bananoshared.mvfield(_st,2,":");
// [434] SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [435] Next 
}
// [436] End If 
}
// [437] Dim sKeys As String = BANanoShared.BuildStyle(styles) 
_skeys=_banano_bananozui_bananoshared.buildstyle(_B._styles);
// [438] sKeys = sKeys.trim 
_skeys=_skeys.trim();
// [439] AddAttr(sKeys, {161} ) 
_B.addattr(_skeys,"style",_B);
// [441] If BANano.IsUndefined(mAttributes) Or BANano.IsNull(mAttributes) Then mAttributes = {162} 
if (is.undefined(_B._mattributes) || is.null(_B._mattributes)) {_B._mattributes="";}
// [442] If mAttributes.StartsWith( {163} ) Then mAttributes = {164} 
if (_B._mattributes.startsWith("{")) {_B._mattributes="";}
// [443] If mAttributes <> {165} Then 
if (_B._mattributes!="") {
// [444] Dim mItems As List = BANanoShared.StrParse( {166} ,mAttributes) 
_mitems=_banano_bananozui_bananoshared.strparse(";",_B._mattributes);
// [445] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [446] Dim k As String = BANanoShared.MvField(mt,1, {167} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [447] Dim v As String = BANanoShared.MvField(mt,2, {168} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [448] AddAttr(v, k) 
_B.addattr(_v,_k,_B);
// [449] Next 
}
// [450] End If 
}
// [451] Dim exattr As String = BANanoShared.BuildAttributes(properties) 
_exattr=_banano_bananozui_bananoshared.buildattributes(_B._properties);
// [453] Dim strRes As String = {4} 
_strres="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _exattr + ">" + _B._stext + "</" + _B._mtagname + ">";
// [454] Return strRes 
return _strres;
// End Sub
};

// [458] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [459]  Return mElement 
return _B._melement;
// End Sub
};

// [463] public Sub getID() As String 
_B.getid=function() {
// [464]  Return mName 
return _B._mname;
// End Sub
};

// [468] Sub AddComponent(child As String) As VHTML 
_B.addcomponent=function(_child) {
// [469]  mElement.Append(child) 
_B._melement.append(_child);
// [470]  sText = mElement.GetText 
_B._stext=_B._melement.text();
// [471]  Return Me 
return _B;
// End Sub
};

// [475] Sub SetID(varText As String) As VHTML 
_B.setid=function(_vartext) {
// [476]  mName = varText 
_B._mname=_vartext;
// [477]  Return Me 
return _B;
// End Sub
};

// [481] public Sub GetText() As String 
_B.gettext=function() {
// [482]  Return sText 
return _B._stext;
// End Sub
};

// [486] public Sub AddToParent(targetID As String) As VHTML 
_B.addtoparent=function(_targetid) {
// [487]  mTarget = BANano.GetElement( {169} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [488]  DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// [489]  Return Me 
return _B;
// End Sub
};

// [493] Sub AddToApp(vap As VueApp) As VHTML 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [494]  appLink = vap 
_B._applink=_vap;
// [496]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [497]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [498]  vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [499]  Next 
}
// [501]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [502]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [503]  vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [504]  Next 
}
// [505]  Return Me 
return _B;
// End Sub
};

// [509] public Sub Remove() 
_B.remove=function() {
// [510]  mElement.Empty 
_B._melement.empty();
// [511]  BANano.SetMeToNull 
_B=null;
// End Sub
};

// [515] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [516]  If mElement <> Null Then 
if (_B._melement!=null) {
// [517]  mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [518]  End If 
}
// End Sub
};

// [522] Sub SetVOn(event As String) As VHTML 
_B.setvon=function(_event) {
var _methodname;
// [523]  Dim methodName As String = BANanoShared.BeautifyName(event) 
_methodname=_banano_bananozui_bananoshared.beautifyname(_event);
// [524]  methodName = {5} 
_methodname="" + _B._meventname + "_" + _methodname + "";
// [525]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [526]  If SubExists(mCallBack, methodName) = False Then Return Me 
if ((typeof _B._mcallback[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [527]  SetAttr( {6} , methodName) 
_B.setattr("v-on:" + _event + "",_methodname,_B);
// [528]  SetMethod(mCallBack, methodName) 
_B.setmethod(_B._mcallback,_methodname,_B);
// [529]  Return Me 
return _B;
// End Sub
};

// [533] Sub SetText(varText As String) As VHTML 
_B.settext=function(_vartext) {
// [534]  If mElement <> Null Then 
if (_B._melement!=null) {
// [535]  mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [536]  End If 
}
// [537]  sText = varText 
_B._stext=_vartext;
// [538]  Return Me 
return _B;
// End Sub
};

// [542] private Sub AddAttr(varName As String, actProp As String) As VHTML 
_B.addattr=function(_varname,_actprop) {
var _rname;
// [543]  If BANano.IsUndefined(varName) Or BANano.IsNull(varName) Then varName = {170} 
if (is.undefined(_varname) || is.null(_varname)) {_varname="";}
// [544]  If BANano.IsNumber(varName) Then varName = BANanoShared.CStr(varName) 
if (is.number(_varname)) {_varname=_banano_bananozui_bananoshared.cstr(_varname);}
// [545]  If actProp = {171} Then Return Me 
if (_actprop=="caption") { return _B;}
// [546]  Try 
try {
// [547]  If BANano.IsBoolean(varName) Then 
if (is.boolean(_varname)) {
// [548]  If varName = True Then properties.put(actProp, varName) 
if (_varname==true) {_B._properties[_actprop]=_varname;}
// [549]  Else 
} else {
// [550]  If varName.StartsWith( {172} ) Then 
if (_varname.startsWith(":")) {
// [553]  Dim rname As String = BANanoShared.MidString2(varName, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varname,2);
// [554]  If rname.Contains( {173} ) Then 
if (_rname.contains(".")) {
// [556]  properties.Put( {7} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [557]  Else 
} else {
// [558]  properties.Put( {8} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [559]  bindings.Put(rname, Null) 
_B._bindings[_rname]=null;
// [560]  End If 
}
// [561]  Else 
} else {
// [562]  If varName <> {174} Then properties.put(actProp, varName) 
if (_varname!="") {_B._properties[_actprop]=_varname;}
// [563]  Select Case actProp 
switch ("" + _actprop) {
// [564]  Case {175} , {176} , {177} , {178} , {179} , {180} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [565]  bindings.Put(varName, False) 
_B._bindings[_varname]=false;
// [566]  End Select 
break;
}
// [567]  End If 
}
// [568]  End If 
}
// [569]  Catch 
} catch(err) {
// [570]  Log(LastException) 
console.log(err);
// [572]  End Try 
}
// [573]  Return Me 
return _B;
// End Sub
};

// [577] public Sub SetClasses(Classes As String) As VHTML 
_B.setclasses=function(_classes) {
// [578]  If mElement <> Null Then 
if (_B._melement!=null) {
// [579]  mElement.AddClass(Classes) 
_B._melement.addClass(_classes);
// [580]  End If 
}
// [581]  mClasses = Classes 
_B._mclasses=_classes;
// [582]  Return Me 
return _B;
// End Sub
};

// [585] public Sub GetClasses() As String 
_B.getclasses=function() {
// [586]  Return mClasses 
return _B._mclasses;
// End Sub
};

// [591] public Sub SetStyle(Style As String) As VHTML 
_B.setstyle=function(_style) {
// [592]  If mElement <> Null Then 
if (_B._melement!=null) {
// [593]  mElement.SetStyle(Style) 
_B._melement.css(JSON.parse(_style));
// [594]  End If 
}
// [595]  mStyle = Style 
_B._mstyle=_style;
// [596]  Return Me 
return _B;
// End Sub
};

// [600] Sub AddClass(classNames As List) As VHTML 
_B.addclass=function(_classnames) {
var _k,_cm;
// [601]  For Each k As String In classNames 
for (var _kindex=0;_kindex<_classnames.length;_kindex++) {
_k=_classnames[_kindex];
// [602]  classList.put(k, k) 
_B._classlist[_k]=_k;
// [603]  Next 
}
// [604]  Dim cm As String = BANanoShared.Join( {181} , classNames) 
_cm=_banano_bananozui_bananoshared.join(" ",_classnames);
// [605]  SetClasses(cm) 
_B.setclasses(_cm,_B);
// [606]  Return Me 
return _B;
// End Sub
};

// [610] Sub SetStyles(m As Map) As VHTML 
_B.setstyles=function(_m) {
var _k,_v,_jsonstyle;
// [611]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [612]  Dim v As String = m.get(k) 
_v=_m[_k];
// [613]  styles.put(k, v) 
_B._styles[_k]=_v;
// [614]  Next 
}
// [615]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [616]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [617]  Return Me 
return _B;
// End Sub
};

// [621] Sub SetAttrs(props As Map) As VHTML 
_B.setattrs=function(_props) {
var _k,_v;
// [622]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [623]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [624]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [625]  Next 
}
// [626]  Return Me 
return _B;
// End Sub
};

// [630] Sub SetAttr(prop As String, value As String) As VHTML 
_B.setattr=function(_prop,_value) {
// [631]  If BANano.IsUndefined(prop) Or BANano.IsNull(prop) Then prop = {182} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [632]  If BANano.IsUndefined(value) Or BANano.IsNull(value) Then value = {183} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [633]  If prop = {184} Then Return Me 
if (_prop=="") { return _B;}
// [634]  properties.put(prop, value) 
_B._properties[_prop]=_value;
// [635]  If mElement <> Null Then 
if (_B._melement!=null) {
// [636]  mElement.SetAttr(prop, value) 
_B._melement.attr(_prop,_value);
// [637]  End If 
}
// [638]  Return Me 
return _B;
// End Sub
};

// [642] Sub SetVBind(prop As String, value As String) As VHTML 
_B.setvbind=function(_prop,_value) {
// [643]  prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [644]  value = value.ToLowerCase 
_value=_value.toLowerCase();
// [645]  prop = {10} 
_prop="v-bind:" + _prop + "";
// [646]  SetAttr(prop,value) 
_B.setattr(_prop,_value,_B);
// [647]  bindings.Put(value, Null) 
_B._bindings[_value]=null;
// [648]  Return Me 
return _B;
// End Sub
};

// [652] Sub SetStyleSingle(prop As String, value As String) As VHTML 
_B.setstylesingle=function(_prop,_value) {
var _m,_jsonstyle;
// [653]  If BANano.IsUndefined(prop) Or BANano.IsNull(prop) Then prop = {185} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [654]  If BANano.IsUndefined(value) Or BANano.IsNull(value) Then value = {186} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [655]  If prop = {187} Then Return Me 
if (_prop=="") { return _B;}
// [656]  styles.put(prop, value) 
_B._styles[_prop]=_value;
// [657]  Dim m As Map = CreateMap() 
_m={};
// [658]  m.put(prop, value) 
_m[_prop]=_value;
// [659]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [660]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [661]  Return Me 
return _B;
// End Sub
};

// [665] Sub Build(props As Map, styleProps As Map, classNames As List, loose As List) As VHTML 
_B.build=function(_props,_styleprops,_classnames,_loose) {
var _k,_v;
// [666]  If loose <> Null Then 
if (_loose!=null) {
// [667]  For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [668]  SetAttr(k, True) 
_B.setattr(_k,true,_B);
// [669]  Next 
}
// [670]  End If 
}
// [671]  If props <> Null Then 
if (_props!=null) {
// [672]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [673]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [674]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [675]  Next 
}
// [676]  End If 
}
// [677]  If styleProps <> Null Then 
if (_styleprops!=null) {
// [678]  For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [679]  Dim v As String = styleProps.get(k) 
_v=_styleprops[_k];
// [680]  SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [681]  Next 
}
// [682]  End If 
}
// [683]  If classNames <> Null Then 
if (_classnames!=null) {
// [684]  AddClass(classNames) 
_B.addclass(_classnames,_B);
// [685]  End If 
}
// [686]  Return Me 
return _B;
// End Sub
};

// [690] Public Sub GetHtml() As String 
_B.gethtml=function() {
// [691]  Return mElement.GetHtml 
return _B._melement.html();
// End Sub
};

// [695] Sub SetVClass(classObj As String) As VHTML 
_B.setvclass=function(_classobj) {
// [696]  SetVBind( {188} , classObj) 
_B.setvbind("class",_classobj,_B);
// [697]  Return Me 
return _B;
// End Sub
};

// [701] Sub SetVStyle(styleObj As String) As VHTML 
_B.setvstyle=function(_styleobj) {
// [702]  SetVBind( {189} , styleObj) 
_B.setvbind("style",_styleobj,_B);
// [703]  Return Me 
return _B;
// End Sub
};

// [707] Sub SetColor1(varColor As String) As VHTML 
_B.setcolor1=function(_varcolor) {
var _pp;
// [708]  Dim pp As String = {11} 
_pp="" + _B._mname + "color";
// [709]  SetAttr( {190} , pp) 
_B.setattr(":color",_pp,_B);
// [711]  bindings.Put(pp, varColor) 
_B._bindings[_pp]=_varcolor;
// [712]  Return Me 
return _B;
// End Sub
};

// [716] Sub SetColorIntensity(varColor As String, varIntensity As String) As VHTML 
_B.setcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_pp;
// [717]  Dim scolor As String = {12} 
_scolor="" + _varcolor + " " + _varintensity + "";
// [718]  Dim pp As String = {13} 
_pp="" + _B._mname + "color";
// [719]  SetAttr( {191} , pp) 
_B.setattr(":color",_pp,_B);
// [721]  bindings.Put(pp, scolor) 
_B._bindings[_pp]=_scolor;
// [722]  Return Me 
return _B;
// End Sub
};

// [726] Sub SetTextColor1(varColor As String) As VHTML 
_B.settextcolor1=function(_varcolor) {
var _scolor;
// [727]  Dim sColor As String = {14} 
_scolor="" + _varcolor + "--text";
// [728]  AddClass(Array(sColor)) 
_B.addclass([_scolor],_B);
// [729]  Return Me 
return _B;
// End Sub
};

// [733] Sub SetTextColorIntensity(varColor As String, varIntensity As String) As VHTML 
_B.settextcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_sintensity,_mcolor;
// [734]  Dim sColor As String = {15} 
_scolor="" + _varcolor + "--text";
// [735]  Dim sIntensity As String = {16} 
_sintensity="text--" + _varintensity + "";
// [736]  Dim mcolor As String = {17} 
_mcolor="" + _scolor + " " + _sintensity + "";
// [737]  AddClass(Array(mcolor)) 
_B.addclass([_mcolor],_B);
// [738]  Return Me 
return _B;
// End Sub
};

// [742] Sub SetMethod(Module As Object,methodName As String) As VHTML 
_B.setmethod=function(_module,_methodname) {
var _e,_cb;
// [743]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [744]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [745]  Dim e As BANanoEvent 
_e=null;
// [746]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [747]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [748]  End If 
}
// [749]  Return Me 
return _B;
// End Sub
};

// [754] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [756]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [757]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [758]  ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [759]  Next 
}
// [761]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [762]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [763]  ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [764]  Next 
}
// End Sub
};

}
/* =========================== VMElement  =========================== */
function banano_bananozui_vmelement() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mvfor="";

_B._errors={};

_B._jsstring=null;

_B._jsnumber=null;

_B._jsboolean=null;

_B._jsarray=null;

_B._jsobject=null;

_B._path="";

_B._title="";

_B._icon="";

_B._data={};

_B._opt={};

_B._methods={};

_B._computed={};

_B._watches={};

_B._filters={};

_B._components={};

_B._refs=null;

_B._mprops={};

_B._query={};

_B._template="";

_B._mattributes="";

_B._mclasses="";

_B._mstyle="";

_B._marginleft="";

_B._marginright="";

_B._margintop="";

_B._marginbottom="";

_B._paddingleft="";

_B._paddingright="";

_B._paddingtop="";

_B._paddingbottom="";

_B._mtext="";

_B._mtagname="";

_B._mvmodel="";

_B._mrefname="";

_B._mkeyname="";

_B._mvtext="";

_B._mvif="";

_B._mvelse="";

_B._mvshow="";

_B._mvhtml="";

_B._properties={};

_B._styles={};

_B._classlist={};

// [89] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) As VMElement 
_B.initialize=function(_callback,_name,_eventname) {
// [90]  mName = Name 
_B._mname=_name;
// [91]  mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [92]  mCallBack = CallBack 
_B._mcallback=_callback;
// [93]  opt.Initialize 
_B._opt={};
// [94]  data.Initialize 
_B._data={};
// [95]  mprops.Initialize 
_B._mprops={};
// [96]  methods.Initialize 
_B._methods={};
// [97]  computed.Initialize 
_B._computed={};
// [98]  watches.Initialize 
_B._watches={};
// [99]  filters.Initialize 
_B._filters={};
// [100]  query.Initialize 
_B._query={};
// [101]  Errors.Initialize 
_B._errors={};
// [102]  components.initialize 
_B._components={};
// [103]  Path = {0} 
_B._path="/" + _name + "";
// [104]  Icon = {58} 
_B._icon="";
// [105]  Title = {59} 
_B._title="";
// [106]  properties.Initialize 
_B._properties={};
// [107]  styles.Initialize 
_B._styles={};
// [108]  classList.Initialize 
_B._classlist={};
// [109]  jsString.Initialize( {60} ) 
_B._jsstring=String;
// [110]  jsNumber.Initialize( {61} ) 
_B._jsnumber=Number;
// [111]  jsBoolean.Initialize( {62} ) 
_B._jsboolean=Boolean;
// [112]  jsArray.Initialize( {63} ) 
_B._jsarray=Array;
// [113]  jsObject.Initialize( {64} ) 
_B._jsobject=Object;
// [114]  Return Me 
return _B;
// End Sub
};

// [118] Sub AddComponent(comp As VMElement) 
_B.addcomponent=function(_comp) {
var _sid;
// [119]  comp.SetTag(comp.mName) 
_comp.settag(_comp._mname);
// [120]  Dim sid As String = comp.mName 
_sid=_comp._mname;
// [121]  If components.ContainsKey(sid) = True Then 
if ((_sid in _B._components)==true) {
// [122]  Return 
return;
// [123]  End If 
}
// [124]  components.Put(sid, comp.Component(False)) 
_B._components[_sid]=_comp.component(false);
// End Sub
};

// [128] Sub GetDrawerItem As Map 
_B.getdraweritem=function() {
var _elx;
// [129]  Dim elx As Map = CreateMap() 
_elx={};
// [130]  elx.Put( {65} , Icon) 
_elx["icon"]=_B._icon;
// [131]  elx.Put( {66} , Title) 
_elx["title"]=_B._title;
// [132]  elx.Put( {67} , Path) 
_elx["link"]=_B._path;
// [133]  Return elx 
return _elx;
// End Sub
};

// [137] Public Sub DesignerCreateView (Target As BANanoElement, props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [138]  mTarget = Target 
_B._mtarget=_target;
// [140]  If props <> Null Then 
if (_props!=null) {
// [141]  mClasses = props.Get( {68} ) 
_B._mclasses=_props["Classes"];
// [142]  mStyle = props.Get( {69} ) 
_B._mstyle=_props["Style"];
// [143]  MarginLeft = props.Get( {70} ) 
_B._marginleft=_props["MarginLeft"];
// [144]  MarginRight = props.Get( {71} ) 
_B._marginright=_props["MarginRight"];
// [145]  MarginTop = props.Get( {72} ) 
_B._margintop=_props["MarginTop"];
// [146]  MarginBottom = props.Get( {73} ) 
_B._marginbottom=_props["MarginBottom"];
// [147]  PaddingLeft = props.Get( {74} ) 
_B._paddingleft=_props["PaddingLeft"];
// [148]  PaddingRight = props.Get( {75} ) 
_B._paddingright=_props["PaddingRight"];
// [149]  PaddingTop = props.Get( {76} ) 
_B._paddingtop=_props["PaddingTop"];
// [150]  PaddingBottom = props.Get( {77} ) 
_B._paddingbottom=_props["PaddingBottom"];
// [151]  mText = props.Get( {78} ) 
_B._mtext=_props["Text"];
// [152]  mTagName = props.Get( {79} ) 
_B._mtagname=_props["TagName"];
// [153]  mVModel = props.Get( {80} ) 
_B._mvmodel=_props["VModel"];
// [154]  mRefName = props.Get( {81} ) 
_B._mrefname=_props["RefName"];
// [155]  mKeyName = props.Get( {82} ) 
_B._mkeyname=_props["KeyName"];
// [156]  mVText = props.Get( {83} ) 
_B._mvtext=_props["VText"];
// [157]  mVIf = props.Get( {84} ) 
_B._mvif=_props["VIf"];
// [158]  mVElse = props.Get( {85} ) 
_B._mvelse=_props["VElse"];
// [159]  mVShow = props.Get( {86} ) 
_B._mvshow=_props["VShow"];
// [160]  mVHtml = props.Get( {87} ) 
_B._mvhtml=_props["VHtml"];
// [161]  mVFor = props.Get( {88} ) 
_B._mvfor=_props["VFor"];
// [162]  mAttributes = props.Get( {89} ) 
_B._mattributes=_props["Attributes"];
// [163]  End If 
}
// [165]  Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [166]  mElement = mTarget.Append(strHTML).Get( {90} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// [170]  SetOnClick 
_B.setonclick(_B);
// [171]  SetOnClickStop 
_B.setonclickstop(_B);
// End Sub
};

// [175] Sub SetTitle(sTitle As String) As VMElement 
_B.settitle=function(_stitle) {
// [176]  Title = sTitle 
_B._title=_stitle;
// [177]  Return Me 
return _B;
// End Sub
};

// [181] Sub SetIcon(sIcon As String) As VMElement 
_B.seticon=function(_sicon) {
// [182]  Icon = sIcon 
_B._icon=_sicon;
// [183]  Return Me 
return _B;
// End Sub
};

// [187] Sub SetPath(sPath As String) As VMElement 
_B.setpath=function(_spath) {
// [188]  Path = {1} 
_B._path="/" + _spath + "";
// [189]  Return Me 
return _B;
// End Sub
};

// [192] Sub SetTag(nTag As String) 
_B.settag=function(_ntag) {
// [193]  mTagName = nTag 
_B._mtagname=_ntag;
// End Sub
};

// [197] Sub BindDynamicComponent(viewID As String, compID As String) 
_B.binddynamiccomponent=function(_viewid,_compid) {
// [198]  viewID = viewID.ToLowerCase 
_viewid=_viewid.toLowerCase();
// [199]  compID = compID.tolowercase 
_compid=_compid.toLowerCase();
// [200]  SetVBindIs(viewID) 
_B.setvbindis(_viewid,_B);
// [201]  data.Put(viewID, compID) 
_B._data[_viewid]=_compid;
// End Sub
};

// [204] Sub SetVBindIs(t As String) As VMElement 
_B.setvbindis=function(_t) {
// [205]  t = t.tolowercase 
_t=_t.toLowerCase();
// [206]  SetAttr( {93} , t) 
_B.setattr("v-bind:is",_t,_B);
// [207]  Return Me 
return _B;
// End Sub
};

// [212] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [213]  mTarget = BANano.GetElement( {94} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [214]  DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [218] public Sub Remove() 
_B.remove=function() {
// [219]  mTarget.Empty 
_B._mtarget.empty();
// [220]  BANano.SetMeToNull 
_B=null;
// End Sub
};

// [224] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [225]  If mElement <> Null Then 
if (_B._melement!=null) {
// [226]  mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [227]  End If 
}
// End Sub
};

// [231] Sub SetVOn(event As String) 
_B.setvon=function(_event) {
var _methodname;
// [232]  Dim methodName As String = BANanoShared.BeautifyName(event) 
_methodname=_banano_bananozui_bananoshared.beautifyname(_event);
// [233]  methodName = {2} 
_methodname="" + _B._meventname + "_" + _methodname + "";
// [234]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [235]  If SubExists(mCallBack, methodName) = False Then Return 
if ((typeof _B._mcallback[(_methodname).toLowerCase()]==="function")==false) { return ;}
// [236]  SetAttr( {3} , methodName) 
_B.setattr("v-on:" + _event + "",_methodname,_B);
// [237]  SetMethod(mCallBack, methodName) 
_B.setmethod(_B._mcallback,_methodname,_B);
// End Sub
};

// [240] Sub SetVFor(vfor As String) 
_B.setvfor=function(_vfor) {
// [241]  mVFor = vfor 
_B._mvfor=_vfor;
// [242]  SetAttr( {95} , mVFor) 
_B.setattr("v-for",_B._mvfor,_B);
// End Sub
};

// [245] Sub SetVHtml(svhtml As String) 
_B.setvhtml=function(_svhtml) {
// [246]  mVHtml = svhtml 
_B._mvhtml=_svhtml;
// [247]  mVHtml = BANano.SF(mVHtml) 
_B._mvhtml=banano_sf(_B._mvhtml,false);
// [248]  SetAttr( {96} , mVHtml) 
_B.setattr("v-html",_B._mvhtml,_B);
// End Sub
};

// [251] Sub SetVShow(vshow As String) 
_B.setvshow=function(_vshow) {
// [252]  mVShow = vshow 
_B._mvshow=_vshow;
// [253]  SetAttr( {97} , vshow) 
_B.setattr("v-show",_vshow,_B);
// End Sub
};

// [256] Sub SetVIf(vif As String) 
_B.setvif=function(_vif) {
// [257]  mVIf = vif 
_B._mvif=_vif;
// [258]  SetAttr( {98} , mVIf) 
_B.setattr("v-if",_B._mvif,_B);
// End Sub
};

// [261] Sub SetVElse(velse As String) 
_B.setvelse=function(_velse) {
// [262]  mVElse = velse 
_B._mvelse=_velse;
// [263]  SetAttr( {99} , mVElse) 
_B.setattr("v-else",_B._mvelse,_B);
// End Sub
};

// [266] Sub SetVText(vtext As String) 
_B.setvtext=function(_vtext) {
// [267]  mVText = vtext 
_B._mvtext=_vtext;
// [268]  SetAttr( {100} , mVText) 
_B.setattr("v-text",_B._mvtext,_B);
// End Sub
};

// [271] Sub SetKey(skey As String) 
_B.setkey=function(_skey) {
// [272]  mKeyName = skey 
_B._mkeyname=_skey;
// [273]  SetAttr( {101} , skey) 
_B.setattr("key",_skey,_B);
// End Sub
};

// [276] Sub SetRef(ref As String) 
_B.setref=function(_ref) {
// [277]  mRefName = ref 
_B._mrefname=_ref;
// [278]  SetAttr( {102} , ref) 
_B.setattr("ref",_ref,_B);
// End Sub
};

// [281] Sub SetVModel(vmodel As String) 
_B.setvmodel=function(_vmodel) {
// [282]  mVModel = vmodel 
_B._mvmodel=_vmodel;
// [283]  SetAttr( {103} , vmodel) 
_B.setattr("v-model",_vmodel,_B);
// End Sub
};

// [288] public Sub SetStyle(Style As String) 
_B.setstyle=function(_style) {
// [289]  If mElement <> Null Then 
if (_B._melement!=null) {
// [290]  mElement.SetStyle(Style) 
_B._melement.css(JSON.parse(_style));
// [291]  End If 
}
// [292]  mStyle = Style 
_B._mstyle=_style;
// End Sub
};

// [297] Sub ToString As String 
_B.tostring=function() {
var _ckeys,_sitems,_st,_k,_v,_skeys,_mitems,_mt,_exattr,_strres;
// [298]  AddAttr(mKeyName, {104} ) 
_B.addattr(_B._mkeyname,"key",_B);
// [299]  AddAttr(mRefName, {105} ) 
_B.addattr(_B._mrefname,"ref",_B);
// [300]  AddAttr(mVElse, {106} ) 
_B.addattr(_B._mvelse,"v-else",_B);
// [301]  AddAttr(mVFor, {107} ) 
_B.addattr(_B._mvfor,"v-for",_B);
// [302]  AddAttr(mVHtml, {108} ) 
_B.addattr(_B._mvhtml,"v-html",_B);
// [303]  AddAttr(mVIf, {109} ) 
_B.addattr(_B._mvif,"v-if",_B);
// [304]  AddAttr(mVModel, {110} ) 
_B.addattr(_B._mvmodel,"v-model",_B);
// [305]  AddAttr(mVShow, {111} ) 
_B.addattr(_B._mvshow,"v-show",_B);
// [306]  AddAttr(mVText, {112} ) 
_B.addattr(_B._mvtext,"v-text",_B);
// [307]  SetStyleSingle( {113} , MarginBottom) 
_B.setstylesingle("margin-bottom",_B._marginbottom,_B);
// [308]  SetStyleSingle( {114} , MarginLeft) 
_B.setstylesingle("margin-left",_B._marginleft,_B);
// [309]  SetStyleSingle( {115} , MarginTop) 
_B.setstylesingle("margin-top",_B._margintop,_B);
// [310]  SetStyleSingle( {116} , MarginRight) 
_B.setstylesingle("margin-right",_B._marginright,_B);
// [312]  SetStyleSingle( {117} , PaddingTop) 
_B.setstylesingle("padding-top",_B._paddingtop,_B);
// [313]  SetStyleSingle( {118} , PaddingRight) 
_B.setstylesingle("padding-right",_B._paddingright,_B);
// [314]  SetStyleSingle( {119} , PaddingBottom) 
_B.setstylesingle("padding-bottom",_B._paddingbottom,_B);
// [315]  SetStyleSingle( {120} , PaddingLeft) 
_B.setstylesingle("padding-left",_B._paddingleft,_B);
// [318]  Dim cKeys As String = BANanoShared.JoinMapKeys(classList, {121} ) 
_ckeys=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [319]  cKeys = cKeys & {122} & mClasses 
_ckeys=_ckeys+" "+_B._mclasses;
// [320]  cKeys = cKeys.trim 
_ckeys=_ckeys.trim();
// [321]  AddAttr(BANanoShared.MvDistinct( {123} , cKeys), {124} ) 
_B.addattr(_banano_bananozui_bananoshared.mvdistinct(" ",_ckeys),"class",_B);
// [323]  If BANano.IsUndefined(mStyle) Or BANano.IsNull(mStyle) Then mStyle = {125} 
if (is.undefined(_B._mstyle) || is.null(_B._mstyle)) {_B._mstyle="";}
// [324]  If mStyle.StartsWith( {126} ) Then mStyle = {127} 
if (_B._mstyle.startsWith("{")) {_B._mstyle="";}
// [325]  If mStyle <> {128} Then 
if (_B._mstyle!="") {
// [326]  Dim sItems As List = BANanoShared.StrParse( {129} ,mStyle) 
_sitems=_banano_bananozui_bananoshared.strparse(",",_B._mstyle);
// [327]  For Each st As String In sItems 
for (var _stindex=0;_stindex<_sitems.length;_stindex++) {
_st=_sitems[_stindex];
// [328]  Dim k As String = BANanoShared.MvField(st,1, {130} ) 
_k=_banano_bananozui_bananoshared.mvfield(_st,1,":");
// [329]  Dim v As String = BANanoShared.MvField(st,2, {131} ) 
_v=_banano_bananozui_bananoshared.mvfield(_st,2,":");
// [330]  SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [331]  Next 
}
// [332]  End If 
}
// [333]  Dim sKeys As String = BANanoShared.BuildStyle(styles) 
_skeys=_banano_bananozui_bananoshared.buildstyle(_B._styles);
// [334]  sKeys = sKeys.trim 
_skeys=_skeys.trim();
// [335]  AddAttr(sKeys, {132} ) 
_B.addattr(_skeys,"style",_B);
// [337]  If BANano.IsUndefined(mAttributes) Or BANano.IsNull(mAttributes) Then mAttributes = {133} 
if (is.undefined(_B._mattributes) || is.null(_B._mattributes)) {_B._mattributes="";}
// [338]  If mAttributes.StartsWith( {134} ) Then mAttributes = {135} 
if (_B._mattributes.startsWith("{")) {_B._mattributes="";}
// [339]  If mAttributes <> {136} Then 
if (_B._mattributes!="") {
// [340]  Dim mItems As List = BANanoShared.StrParse( {137} ,mAttributes) 
_mitems=_banano_bananozui_bananoshared.strparse(";",_B._mattributes);
// [341]  For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [342]  Dim k As String = BANanoShared.MvField(mt,1, {138} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [343]  Dim v As String = BANanoShared.MvField(mt,2, {139} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [344]  AddAttr(v, k) 
_B.addattr(_v,_k,_B);
// [345]  Next 
}
// [346]  End If 
}
// [347]  Dim exattr As String = BANanoShared.BuildAttributes(properties) 
_exattr=_banano_bananozui_bananoshared.buildattributes(_B._properties);
// [349]  Dim strRes As String = {5} 
_strres="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _exattr + ">" + _B._mtext + "</" + _B._mtagname + ">";
// [350]  Return strRes 
return _strres;
// End Sub
};

// [355] Sub SetID(varText As String) As VMElement 
_B.setid=function(_vartext) {
// [356]  mName = varText 
_B._mname=_vartext;
// [357]  Return Me 
return _B;
// End Sub
};

// [362] private Sub AddAttr(varName As String, actProp As String) As VMElement 
_B.addattr=function(_varname,_actprop) {
var _rname;
// [363]  If actProp = {140} Then Return Me 
if (_actprop=="caption") { return _B;}
// [364]  Try 
try {
// [365]  If BANano.IsBoolean(varName) Then 
if (is.boolean(_varname)) {
// [366]  If varName = True Then properties.put(actProp, varName) 
if (_varname==true) {_B._properties[_actprop]=_varname;}
// [367]  Else 
} else {
// [368]  If varName.StartsWith( {141} ) Then 
if (_varname.startsWith(":")) {
// [371]  Dim rname As String = BANanoShared.MidString2(varName, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varname,2);
// [372]  If rname.Contains( {142} ) Then 
if (_rname.contains(".")) {
// [374]  properties.Put( {6} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [375]  Else 
} else {
// [376]  properties.Put( {7} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [377]  data.Put(rname, Null) 
_B._data[_rname]=null;
// [378]  End If 
}
// [379]  Else 
} else {
// [380]  If varName <> {143} Then properties.put(actProp, varName) 
if (_varname!="") {_B._properties[_actprop]=_varname;}
// [381]  Select Case actProp 
switch ("" + _actprop) {
// [382]  Case {144} , {145} , {146} , {147} , {148} , {149} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [383]  data.Put(varName, False) 
_B._data[_varname]=false;
// [384]  End Select 
break;
}
// [385]  End If 
}
// [386]  End If 
}
// [387]  Catch 
} catch(err) {
// [388]  Log(LastException) 
console.log(err);
// [390]  End Try 
}
// [391]  Return Me 
return _B;
// End Sub
};

// [395] public Sub SetClasses(Classes As String) As VMElement 
_B.setclasses=function(_classes) {
// [396]  If mElement <> Null Then 
if (_B._melement!=null) {
// [397]  mElement.AddClass(Classes) 
_B._melement.addClass(_classes);
// [398]  End If 
}
// [399]  mClasses = Classes 
_B._mclasses=_classes;
// [400]  Return Me 
return _B;
// End Sub
};

// [403] public Sub GetClasses() As String 
_B.getclasses=function() {
// [404]  Return mClasses 
return _B._mclasses;
// End Sub
};

// [408] Sub AddClass(classNames As List) As VMElement 
_B.addclass=function(_classnames) {
var _k,_cm;
// [409]  For Each k As String In classNames 
for (var _kindex=0;_kindex<_classnames.length;_kindex++) {
_k=_classnames[_kindex];
// [410]  classList.put(k, k) 
_B._classlist[_k]=_k;
// [411]  Next 
}
// [412]  Dim cm As String = BANanoShared.Join( {150} , classNames) 
_cm=_banano_bananozui_bananoshared.join(" ",_classnames);
// [413]  SetClasses(cm) 
_B.setclasses(_cm,_B);
// [414]  Return Me 
return _B;
// End Sub
};

// [418] Sub SetStyles(m As Map) As VMElement 
_B.setstyles=function(_m) {
var _k,_v,_jsonstyle;
// [419]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [420]  Dim v As String = m.get(k) 
_v=_m[_k];
// [421]  styles.put(k, v) 
_B._styles[_k]=_v;
// [422]  Next 
}
// [423]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [424]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [425]  Return Me 
return _B;
// End Sub
};

// [429] Sub SetAttrs(props As Map) As VMElement 
_B.setattrs=function(_props) {
var _k,_v;
// [430]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [431]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [432]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [433]  Next 
}
// [434]  Return Me 
return _B;
// End Sub
};

// [438] Sub SetAttr(prop As String, value As String) As VMElement 
_B.setattr=function(_prop,_value) {
// [439]  If BANano.IsUndefined(prop) Or BANano.IsNull(prop) Then prop = {151} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [440]  If BANano.IsUndefined(value) Or BANano.IsNull(value) Then value = {152} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [441]  If prop = {153} Then Return Me 
if (_prop=="") { return _B;}
// [442]  properties.put(prop, value) 
_B._properties[_prop]=_value;
// [443]  If mElement <> Null Then 
if (_B._melement!=null) {
// [444]  mElement.SetAttr(prop, value) 
_B._melement.attr(_prop,_value);
// [445]  End If 
}
// [446]  Return Me 
return _B;
// End Sub
};

// [450] Sub SetStyleSingle(prop As String, value As String) As VMElement 
_B.setstylesingle=function(_prop,_value) {
var _m,_jsonstyle;
// [451]  If BANano.IsUndefined(prop) Or BANano.IsNull(prop) Then prop = {154} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [452]  If BANano.IsUndefined(value) Or BANano.IsNull(value) Then value = {155} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [453]  If prop = {156} Then Return Me 
if (_prop=="") { return _B;}
// [454]  styles.put(prop, value) 
_B._styles[_prop]=_value;
// [455]  Dim m As Map = CreateMap() 
_m={};
// [456]  m.put(prop, value) 
_m[_prop]=_value;
// [457]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [458]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [459]  Return Me 
return _B;
// End Sub
};

// [463] Sub Build(props As Map, styleProps As Map, classNames As List, loose As List) As VMElement 
_B.build=function(_props,_styleprops,_classnames,_loose) {
var _k,_v;
// [464]  If loose <> Null Then 
if (_loose!=null) {
// [465]  For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [466]  SetAttr(k, True) 
_B.setattr(_k,true,_B);
// [467]  Next 
}
// [468]  End If 
}
// [469]  If props <> Null Then 
if (_props!=null) {
// [470]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [471]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [472]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [473]  Next 
}
// [474]  End If 
}
// [475]  If styleProps <> Null Then 
if (_styleprops!=null) {
// [476]  For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [477]  Dim v As String = styleProps.get(k) 
_v=_styleprops[_k];
// [478]  SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [479]  Next 
}
// [480]  End If 
}
// [481]  If classNames <> Null Then 
if (_classnames!=null) {
// [482]  AddClass(classNames) 
_B.addclass(_classnames,_B);
// [483]  End If 
}
// [484]  Return Me 
return _B;
// End Sub
};

// [488] Public Sub GetHtml() As String 
_B.gethtml=function() {
// [489]  Return mElement.GetHtml 
return _B._melement.html();
// End Sub
};

// [493] Sub SetVClass(classObj As String) As VMElement 
_B.setvclass=function(_classobj) {
// [494]  SetVBind( {157} , classObj) 
_B.setvbind("class",_classobj,_B);
// [495]  Return Me 
return _B;
// End Sub
};

// [499] Sub SetVStyle(styleObj As String) As VMElement 
_B.setvstyle=function(_styleobj) {
// [500]  SetVBind( {158} , styleObj) 
_B.setvbind("style",_styleobj,_B);
// [501]  Return Me 
return _B;
// End Sub
};

// [506] Sub SetVPre 
_B.setvpre=function() {
// [507]  SetAttr( {159} , True) 
_B.setattr("v-pre",true,_B);
// End Sub
};

// [511] Sub SetVBind(prop As String, value As String) 
_B.setvbind=function(_prop,_value) {
// [512]  prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [513]  value = value.ToLowerCase 
_value=_value.toLowerCase();
// [514]  prop = {8} 
_prop="v-bind:" + _prop + "";
// [515]  SetAttr(prop,value) 
_B.setattr(_prop,_value,_B);
// [516]  data.Put(value, Null) 
_B._data[_value]=null;
// End Sub
};

// [520] public Sub GetText() As String 
_B.gettext=function() {
// [521]  Return mElement.GetText 
return _B._melement.text();
// End Sub
};

// [525] Sub SetVCloak 
_B.setvcloak=function() {
// [526]  If mElement <> Null Then 
if (_B._melement!=null) {
// [527]  SetAttr( {160} , True) 
_B.setattr("v-cloak",true,_B);
// [528]  End If 
}
// End Sub
};

// [532] Sub SetVOnce 
_B.setvonce=function() {
// [533]  SetAttr( {161} , True) 
_B.setattr("v-once",true,_B);
// End Sub
};

// [537] Sub SetColor(varColor As String) 
_B.setcolor=function(_varcolor) {
var _pp;
// [538]  If varColor = {162} Then Return 
if (_varcolor=="") { return ;}
// [539]  Dim pp As String = {9} 
_pp="" + _B._mname + "color";
// [540]  SetAttr( {163} , pp) 
_B.setattr(":color",_pp,_B);
// [541]  data.Put(pp, varColor) 
_B._data[_pp]=_varcolor;
// End Sub
};

// [545] Sub SetColorIntensity(varColor As String, varIntensity As String) 
_B.setcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_pp;
// [546]  Dim scolor As String = {10} 
_scolor="" + _varcolor + " " + _varintensity + "";
// [547]  Dim pp As String = {11} 
_pp="" + _B._mname + "color";
// [548]  SetAttr( {164} , pp) 
_B.setattr(":color",_pp,_B);
// [549]  data.Put(pp, scolor) 
_B._data[_pp]=_scolor;
// End Sub
};

// [553] Sub SetTextColor(varColor As String) 
_B.settextcolor=function(_varcolor) {
var _scolor;
// [554]  Dim sColor As String = {12} 
_scolor="" + _varcolor + "--text";
// [555]  AddClass(Array(sColor)) 
_B.addclass([_scolor],_B);
// End Sub
};

// [559] Sub SetTextColorIntensity(varColor As String, varIntensity As String) 
_B.settextcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_sintensity,_mcolor;
// [560]  Dim sColor As String = {13} 
_scolor="" + _varcolor + "--text";
// [561]  Dim sIntensity As String = {14} 
_sintensity="text--" + _varintensity + "";
// [562]  Dim mcolor As String = {15} 
_mcolor="" + _scolor + " " + _sintensity + "";
// [563]  AddClass(Array(mcolor)) 
_B.addclass([_mcolor],_B);
// End Sub
};

// [568] Sub Component(bRoute As Boolean) As Map 
_B.component=function(_broute) {
var _cb;
// [569]  If bRoute = False Then 
if (_broute==false) {
// [570]  Dim cb As BANanoObject = BANano.CallBack(Me, {165} , Null) 
_cb=function() {if (typeof _B[("returndata").toLowerCase()]==="function") {return _B[("returndata").toLowerCase()](_B)};};
// [571]  opt.Put( {166} , cb) 
_B._opt["data"]=_cb;
// [572]  Else 
} else {
// [573]  opt.Put( {167} , data) 
_B._opt["data"]=_B._data;
// [574]  End If 
}
// [575]  opt.Put( {168} , methods) 
_B._opt["methods"]=_B._methods;
// [576]  opt.Put( {169} , computed) 
_B._opt["computed"]=_B._computed;
// [577]  opt.Put( {170} , watches) 
_B._opt["watch"]=_B._watches;
// [578]  opt.Put( {171} , mprops) 
_B._opt["props"]=_B._mprops;
// [579]  opt.Put( {172} , filters) 
_B._opt["filters"]=_B._filters;
// [580]  opt.Put( {173} , Template) 
_B._opt["template"]=_B._template;
// [581]  opt.Put( {174} , components) 
_B._opt["components"]=_B._components;
// [582]  Return opt 
return _B._opt;
// End Sub
};

// [587] Sub SetTemplate(tmp As String) 
_B.settemplate=function(_tmp) {
// [588]  Template = tmp 
_B._template=_tmp;
// End Sub
};

// [592] Sub SetBANanoTemplate(id As String) 
_B.setbananotemplate=function(_id) {
var _be;
// [593]  id = id.tolowercase 
_id=_id.toLowerCase();
// [594]  Dim be As BANanoElement 
_be=null;
// [595]  be.Initialize(id) 
_be=u(_id);
// [596]  Template = be.GetHTML 
_B._template=_be.html();
// [597]  be.Empty 
_be.empty();
// End Sub
};

// [601] private Sub returndata As Map 
_B.returndata=function() {
// [602]  Return data 
return _B._data;
// End Sub
};

// [607] Sub SetQueryString(k As String, v As String) 
_B.setquerystring=function(_k,_v) {
// [608]  query.Put(k, v) 
_B._query[_k]=_v;
// End Sub
};

// [612] Sub RemoveData(key As String) 
_B.removedata=function(_key) {
// [613]  key = key.ToLowerCase 
_key=_key.toLowerCase();
// [614]  data.Remove(key) 
delete _B._data[_key];
// End Sub
};

// [618] Sub SetData(prop As String, valuex As Object) 
_B.setdata=function(_prop,_valuex) {
// [619]  data.put(prop, valuex) 
_B._data[_prop]=_valuex;
// End Sub
};

// [622] Sub GetData(prop As String) As Object 
_B.getdata=function(_prop) {
var _obj;
// [623]  Dim obj As Object = data.GetDefault(prop, Null) 
_obj=(_B._data[_prop] || null);
// [624]  Return obj 
return _obj;
// End Sub
};

// [628] Sub AddProp(propName As String) 
_B.addprop=function(_propname) {
var _mprop;
// [629]  Dim mprop As Map = CreateMap() 
_mprop={};
// [630]  mprop.Put( {175} , jsString) 
_mprop["type"]=_B._jsstring;
// [631]  mprops.Put(propName, mprop) 
_B._mprops[_propname]=_mprop;
// End Sub
};

// [634] Sub AddProperty(propName As String, propType As BANanoObject, propDefault As String) 
_B.addproperty=function(_propname,_proptype,_propdefault) {
var _mprop;
// [635]  Dim mprop As Map = CreateMap() 
_mprop={};
// [636]  mprop.Put( {176} , propType) 
_mprop["type"]=_proptype;
// [637]  mprop.Put( {177} , propDefault) 
_mprop["default"]=_propdefault;
// [638]  mprops.Put(propName, mprop) 
_B._mprops[_propname]=_mprop;
// End Sub
};

// [642] Sub AddProps(propsList As List) 
_B.addprops=function(_propslist) {
var _k;
// [643]  For Each k As String In propsList 
for (var _kindex=0;_kindex<_propslist.length;_kindex++) {
_k=_propslist[_kindex];
// [644]  AddProp(k) 
_B.addprop(_k,_B);
// [645]  Next 
}
// End Sub
};

// [649] Sub SetFilter(module As Object, methodName As String) 
_B.setfilter=function(_module,_methodname) {
var _value,_cb;
// [650]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [651]  If SubExists(module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [652]  Dim value As Object 
_value={};
// [653]  Dim cb As BANanoObject = BANano.CallBack(module, methodName, Array(value)) 
_cb=function(_value) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_value,_B)};};
// [654]  filters.Put(methodName, cb) 
_B._filters[_methodname]=_cb;
// [655]  Else 
} else {
// [656]  Log( {16} ) 
console.log("SetFilter." + _methodname + " could not be found!");
// [657]  End If 
}
// End Sub
};

// [661] Sub SetComputed(k As String, module As Object, methodName As String) 
_B.setcomputed=function(_k,_module,_methodname) {
var _cb;
// [662]  k = k.tolowercase 
_k=_k.toLowerCase();
// [663]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [664]  If SubExists(module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [665]  data.Put(k, Null) 
_B._data[_k]=null;
// [666]  Dim cb As BANanoObject = BANano.CallBack(module, methodName, Null) 
_cb=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [667]  computed.Put(k, cb.Result) 
_B._computed[_k]=_cb;
// [668]  End If 
}
// End Sub
};

// [672] Sub SetWatch(Module As Object, k As String, bImmediate As Boolean, bDeep As Boolean, methodName As String) 
_B.setwatch=function(_module,_k,_bimmediate,_bdeep,_methodname) {
var _newval,_cb,_deepit;
// [673]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [674]  k = k.tolowercase 
_k=_k.toLowerCase();
// [675]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [676]  data.Put(k, Null) 
_B._data[_k]=null;
// [677]  Dim newVal As Object 
_newval={};
// [678]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(newVal)) 
_cb=function(_newval) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_newval,_B)};};
// [679]  Dim deepit As Map = CreateMap() 
_deepit={};
// [680]  deepit.Put( {178} , methodName) 
_deepit["handler"]=_methodname;
// [681]  deepit.Put( {179} , bDeep) 
_deepit["deep"]=_bdeep;
// [682]  deepit.Put( {180} , bImmediate) 
_deepit["immediate"]=_bimmediate;
// [683]  watches.Put(k, deepit) 
_B._watches[_k]=_deepit;
// [684]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [685]  End If 
}
// End Sub
};

// [690] Sub SetMethod(Module As Object,methodName As String) 
_B.setmethod=function(_module,_methodname) {
var _e,_cb;
// [691]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [692]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [693]  Dim e As BANanoEvent 
_e=null;
// [694]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [695]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [696]  End If 
}
// End Sub
};

// [701] Sub SetCallBack(methodName As String, cb As BANanoObject) 
_B.setcallback=function(_methodname,_cb) {
// [702]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [703]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// End Sub
};

// [708] Sub SetState(m As Map) 
_B.setstate=function(_m) {
var _k,_v;
// [709]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [710]  Dim v As Object = m.Get(k) 
_v=_m[_k];
// [711]  k = k.tolowercase 
_k=_k.toLowerCase();
// [712]  data.Put(k, v) 
_B._data[_k]=_v;
// [713]  Next 
}
// End Sub
};

// [717] Sub HasState(k As String) As Boolean 
_B.hasstate=function(_k) {
// [718]  k = k.tolowercase 
_k=_k.toLowerCase();
// [719]  Return data.ContainsKey(k) 
return (_k in _B._data);
// End Sub
};

// [723] Sub GetState(k As String, v As Object) As Object 
_B.getstate=function(_k,_v) {
var _out;
// [724]  k = k.tolowercase 
_k=_k.toLowerCase();
// [725]  If data.ContainsKey(k) Then 
if ((_k in _B._data)) {
// [726]  Dim out As Object = data.GetDefault(k,v) 
_out=(_B._data[_k] || _v);
// [727]  Return out 
return _out;
// [728]  Else 
} else {
// [729]  Log( {181} & k) 
console.log("GetState: First set the v-model for "+_k);
// [730]  Return {182} 
return "";
// [731]  End If 
}
// End Sub
};

// [735] Sub RenderTo(elID As String) 
_B.renderto=function(_elid) {
var _bovue,_dkey,_rkey;
// [736]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [737]  BANano.GetElement( {17} ).empty 
u("#" + _elid + "").empty();
// [739]  Dim boVUE As BANanoObject 
_bovue=null;
// [740]  opt.Put( {183} , {18} ) 
_B._opt["el"]="#" + _elid + "";
// [741]  Component(False) 
_B.component(false,_B);
// [742]  boVUE.Initialize2( {184} , opt) 
_bovue=new Vue(_B._opt);
// [744]  Dim dKey As String = {185} 
_dkey="$data";
// [745]  data = boVUE.GetField(dKey).Result 
_B._data=_bovue[_dkey];
// [747]  Dim rKey As String = {186} 
_rkey="$refs";
// [748]  refs = boVUE.GetField(rKey) 
_B._refs=_bovue[_rkey];
// End Sub
};

// [752] Sub ToggleState(stateName As String) 
_B.togglestate=function(_statename) {
var _bcurrent,_optx;
// [753]  Dim bcurrent As Boolean = GetState(stateName, {187} ) 
_bcurrent=_B.getstate(_statename,"",_B);
// [754]  bcurrent = Not(bcurrent) 
_bcurrent=!(_bcurrent);
// [755]  Dim optx As Map = CreateMap() 
_optx={};
// [756]  optx.Put(stateName, bcurrent) 
_optx[_statename]=_bcurrent;
// [757]  SetState(optx) 
_B.setstate(_optx,_B);
// End Sub
};

// [761] Sub StateExists(stateName As String) As Boolean 
_B.stateexists=function(_statename) {
// [762]  stateName = stateName.tolowercase 
_statename=_statename.toLowerCase();
// [763]  Return data.ContainsKey(stateName) 
return (_statename in _B._data);
// End Sub
};

// [767] Sub SetStateMap(mapKey As String, mapValues As Map) 
_B.setstatemap=function(_mapkey,_mapvalues) {
var _optm;
// [768]  mapKey = mapKey.tolowercase 
_mapkey=_mapkey.toLowerCase();
// [769]  Dim optm As Map = CreateMap() 
_optm={};
// [770]  optm.Put(mapKey, mapValues) 
_optm[_mapkey]=_mapvalues;
// [771]  SetState(optm) 
_B.setstate(_optm,_B);
// End Sub
};

// [775] Sub SetStateList(mapKey As String, mapValues As List) 
_B.setstatelist=function(_mapkey,_mapvalues) {
var _optm;
// [776]  mapKey = mapKey.tolowercase 
_mapkey=_mapkey.toLowerCase();
// [777]  Dim optm As Map = CreateMap() 
_optm={};
// [778]  optm.Put(mapKey, mapValues) 
_optm[_mapkey]=_mapvalues;
// [779]  SetState(optm) 
_B.setstate(_optm,_B);
// End Sub
};

// [783] Sub SetStateListValues(mapValues As List) 
_B.setstatelistvalues=function(_mapvalues) {
var _lstvalue,_optm;
// [784]  For Each lstValue As String In mapValues 
for (var _lstvalueindex=0;_lstvalueindex<_mapvalues.length;_lstvalueindex++) {
_lstvalue=_mapvalues[_lstvalueindex];
// [785]  lstValue = lstValue.tolowercase 
_lstvalue=_lstvalue.toLowerCase();
// [786]  Dim optm As Map = CreateMap() 
_optm={};
// [787]  optm.Put(lstValue, {188} ) 
_optm[_lstvalue]="";
// [788]  SetState(optm) 
_B.setstate(_optm,_B);
// [789]  Next 
}
// End Sub
};

// [793] Sub GetStates(lst As List) As Map 
_B.getstates=function(_lst) {
var _smm,_lstrec,_state;
// [794]  Dim smm As Map = CreateMap() 
_smm={};
// [795]  For Each lstrec As String In lst 
for (var _lstrecindex=0;_lstrecindex<_lst.length;_lstrecindex++) {
_lstrec=_lst[_lstrecindex];
// [796]  lstrec = lstrec.tolowercase 
_lstrec=_lstrec.toLowerCase();
// [797]  Dim state As Object = GetState(lstrec, Null) 
_state=_B.getstate(_lstrec,null,_B);
// [798]  smm.Put(lstrec, state) 
_smm[_lstrec]=_state;
// [799]  Next 
}
// [800]  Return smm 
return _smm;
// End Sub
};

// [804] Sub SetStateTrue(k As String) 
_B.setstatetrue=function(_k) {
// [805]  SetStateSingle(k,True) 
_B.setstatesingle(_k,true,_B);
// End Sub
};

// [809] Sub SetStateFalse(k As String) 
_B.setstatefalse=function(_k) {
// [810]  SetStateSingle(k,False) 
_B.setstatesingle(_k,false,_B);
// End Sub
};

// [814] Sub SetStateSingle(k As String, v As Object) 
_B.setstatesingle=function(_k,_v) {
var _optx;
// [815]  k = k.tolowercase 
_k=_k.toLowerCase();
// [816]  Dim optx As Map = CreateMap() 
_optx={};
// [817]  optx.Put(k, v) 
_optx[_k]=_v;
// [818]  SetState(optx) 
_B.setstate(_optx,_B);
// End Sub
};

// [822] Sub SetOnClick 
_B.setonclick=function() {
var _mname;
// [823]  Dim mName As String = {19} 
_mname="" + _B._meventname + "_click";
// [824]  mName = mName.tolowercase 
_mname=_mname.toLowerCase();
// [825]  If SubExists(mCallBack, mName) = False Then Return 
if ((typeof _B._mcallback[(_mname).toLowerCase()]==="function")==false) { return ;}
// [826]  SetAttr( {189} , mName) 
_B.setattr("v-on:click",_mname,_B);
// [827]  SetMethod(mCallBack, mName) 
_B.setmethod(_B._mcallback,_mname,_B);
// End Sub
};

// [831] Sub SetOnClickStop 
_B.setonclickstop=function() {
var _methodname;
// [832]  Dim methodName As String = {20} 
_methodname="" + _B._meventname + "_clickstop";
// [833]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [834]  If SubExists(mCallBack, methodName) = False Then Return 
if ((typeof _B._mcallback[(_methodname).toLowerCase()]==="function")==false) { return ;}
// [835]  SetAttr( {190} , methodName) 
_B.setattr("v-on:click.stop",_methodname,_B);
// [836]  SetMethod(mCallBack, methodName) 
_B.setmethod(_B._mcallback,_methodname,_B);
// End Sub
};

// [840] Sub AddError(vmodel As String, vError As String) 
_B.adderror=function(_vmodel,_verror) {
// [841]  vmodel = vmodel.tolowercase 
_vmodel=_vmodel.toLowerCase();
// [842]  Errors.Put(vmodel, vError) 
_B._errors[_vmodel]=_verror;
// End Sub
};

// [847] Sub GetError As String 
_B.geterror=function() {
var _strerror;
// [848]  Dim strError As String = Errors.GetValueAt(0) 
_strerror=banano_getB4JValueAt(_B._errors,0);
// [849]  Return strError 
return _strerror;
// End Sub
};

// [853] Sub Validate(rec As Map, required As Map) As Boolean 
_B.validate=function(_rec,_required) {
var _iv,_k,_error,_v;
// [854]  Errors.Initialize 
_B._errors={};
// [855]  Dim iv As Int = 0 
_iv=0;
// [856]  For Each k As String In required.Keys 
var _kKeys = Object.keys(_required);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [857]  Dim error As String = required.GetDefault(k, {191} ) 
_error=(_required[_k] || "");
// [858]  If error = {192} Then 
if (_error=="") {
// [859]  error = {21} 
_error="The " + _k + " should be specified!";
// [860]  End If 
}
// [862]  If rec.ContainsKey(k) Then 
if ((_k in _rec)) {
// [863]  Dim v As String = rec.GetDefault(k, {193} ) 
_v=(_rec[_k] || "");
// [864]  v = BANanoShared.CStr(v) 
_v=_banano_bananozui_bananoshared.cstr(_v);
// [865]  v = v.trim 
_v=_v.trim();
// [866]  If v = {194} Then 
if (_v=="") {
// [867]  iv = iv + 1 
_iv=_iv+1;
// [868]  ShowError(k, error) 
_B.showerror(_k,_error,_B);
// [869]  Errors.Put(k, error) 
_B._errors[_k]=_error;
// [870]  Else 
} else {
// [871]  HideError(k) 
_B.hideerror(_k,_B);
// [872]  End If 
}
// [873]  End If 
}
// [874]  Next 
}
// [875]  If iv = 0 Then 
if (_iv==0) {
// [876]  Return True 
return true;
// [877]  Else 
} else {
// [878]  Return False 
return false;
// [879]  End If 
}
// End Sub
};

// [882] Sub ShowError(elID As String, elError As String) 
_B.showerror=function(_elid,_elerror) {
var _pp,_nl,_pp1;
// [883]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [884]  Dim pp As String = {22} 
_pp="" + _elid + "ErrorMessages";
// [885]  Dim nl As List 
_nl=[];
// [886]  nl = BANanoShared.NewList 
_nl=_banano_bananozui_bananoshared.newlist();
// [887]  nl.Add(elError) 
_nl.push(_elerror);
// [888]  SetData(pp, nl) 
_B.setdata(_pp,_nl,_B);
// [889]  Dim pp1 As String = {23} 
_pp1="" + _elid + "Error";
// [890]  SetData(pp1, True) 
_B.setdata(_pp1,true,_B);
// End Sub
};

// [893] Sub HideError(elID As String) 
_B.hideerror=function(_elid) {
var _pp,_nl,_pp1;
// [894]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [895]  Dim pp As String = {24} 
_pp="" + _elid + "ErrorMessages";
// [896]  Dim nl As List 
_nl=[];
// [897]  nl = BANanoShared.NewList 
_nl=_banano_bananozui_bananoshared.newlist();
// [898]  SetData(pp, nl) 
_B.setdata(_pp,_nl,_B);
// [899]  Dim pp1 As String = {25} 
_pp1="" + _elid + "Error";
// [900]  SetData(pp1, False) 
_B.setdata(_pp1,false,_B);
// End Sub
};

// [904] Sub NotState(stateName As String) As Boolean 
_B.notstate=function(_statename) {
var _bcurrent;
// [905]  Dim bcurrent As Boolean = GetState(stateName,False) 
_bcurrent=_B.getstate(_statename,false,_B);
// [906]  If bcurrent = Null Then bcurrent = True 
if (_bcurrent==null) {_bcurrent=true;}
// [907]  bcurrent = Not(bcurrent) 
_bcurrent=!(_bcurrent);
// [908]  Return bcurrent 
return _bcurrent;
// End Sub
};

// [911] Sub Increment(k As String) As VMElement 
_B.increment=function(_k) {
var _oldv;
// [912]  Dim oldV As String = GetState(k, {195} ) 
_oldv=_B.getstate(_k,"0",_B);
// [913]  oldV = BANano.parseInt(oldV) + 1 
_oldv=parseInt(_oldv)+1;
// [914]  SetStateSingle(k, oldV) 
_B.setstatesingle(_k,_oldv,_B);
// [915]  Return Me 
return _B;
// End Sub
};

// [918] Sub Decrement(k As String) As VMElement 
_B.decrement=function(_k) {
var _oldv;
// [919]  Dim oldV As String = GetState(k, {196} ) 
_oldv=_B.getstate(_k,"0",_B);
// [920]  oldV = BANano.parseInt(oldV) - 1 
_oldv=parseInt(_oldv)-1;
// [921]  SetStateSingle(k, oldV) 
_B.setstatesingle(_k,_oldv,_B);
// [922]  Return Me 
return _B;
// End Sub
};

// [926] Sub SetRequired(elID As String, b As Boolean) 
_B.setrequired=function(_elid,_b) {
// [927]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [928]  SetStateSingle( {26} , b) 
_B.setstatesingle("" + _elid + "required",_b,_B);
// End Sub
};

// [931] Sub Enable(elID As String) 
_B.enable=function(_elid) {
// [932]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [933]  SetStateSingle( {27} , False) 
_B.setstatesingle("" + _elid + "disabled",false,_B);
// End Sub
};

// [936] Sub Disable(elID As String) 
_B.disable=function(_elid) {
// [937]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [938]  SetStateSingle( {28} , True) 
_B.setstatesingle("" + _elid + "disabled",true,_B);
// End Sub
};

// [941] Sub SetEnabled(elID As String, b As Boolean) 
_B.setenabled=function(_elid,_b) {
// [942]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [943]  SetStateSingle( {29} , b) 
_B.setstatesingle("" + _elid + "disabled",_b,_B);
// End Sub
};

// [946] Sub Hide(elID As String) 
_B.hide=function(_elid) {
// [947]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [948]  SetStateSingle( {30} , False) 
_B.setstatesingle("" + _elid + "show",false,_B);
// End Sub
};

// [951] Sub Show(elID As String) 
_B.show=function(_elid) {
// [952]  SetStateSingle( {31} , True) 
_B.setstatesingle("" + _elid + "show",true,_B);
// End Sub
};

// [956] Sub SetFocus(refID As String) 
_B.setfocus=function(_refid) {
// [957]  refID = refID.tolowercase 
_refid=_refid.toLowerCase();
// [958]  refs.GetField(refID).RunMethod( {197} , Null) 
_B._refs[_refid]["focus"]();
// End Sub
};

// [963] Sub NullifyFileSelect(refID As String) 
_B.nullifyfileselect=function(_refid) {
// [964]  RefNull(refID) 
_B.refnull(_refid,_B);
// End Sub
};

// [967] Sub RefNull(refID As String) 
_B.refnull=function(_refid) {
// [968]  refID = refID.tolowercase 
_refid=_refid.toLowerCase();
// [969]  refs.GetField(refID).SetField( {198} , Null) 
_B._refs[_refid]["value"]=null;
// End Sub
};

// [974] Sub RefClick(refID As String) 
_B.refclick=function(_refid) {
// [975]  refID = refID.tolowercase 
_refid=_refid.toLowerCase();
// [976]  refs.GetField(refID).RunMethod( {199} , Null) 
_B._refs[_refid]["click"]();
// End Sub
};

// [979] Sub ShowFileSelect(fsName As String) 
_B.showfileselect=function(_fsname) {
// [980]  RefClick(fsName) 
_B.refclick(_fsname,_B);
// End Sub
};

// [984] Sub RefreshKey(keyName As String) As VMElement 
_B.refreshkey=function(_keyname) {
// [985]  keyName = keyName.ToLowerCase 
_keyname=_keyname.toLowerCase();
// [986]  SetData(keyName, DateTime.now) 
_B.setdata(_keyname,DateTime.Now(),_B);
// [987]  Return Me 
return _B;
// End Sub
};

// [992] Sub SetBeforeMount(module As Object, methodName As String) As VMElement 
_B.setbeforemount=function(_module,_methodname) {
var _beforemount;
// [993]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [994]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [995]  Dim beforeMount As BANanoObject = BANano.CallBack(module, methodName, Null) 
_beforemount=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [996]  opt.Put( {200} , beforeMount) 
_B._opt["beforeMount"]=_beforemount;
// [997]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [998]  Return Me 
return _B;
// End Sub
};

// [1003] Sub SetMounted(module As Object, methodName As String) As VMElement 
_B.setmounted=function(_module,_methodname) {
var _mounted;
// [1004]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [1005]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [1006]  Dim mounted As BANanoObject = BANano.CallBack(module, methodName, Null) 
_mounted=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [1007]  opt.Put( {201} , mounted) 
_B._opt["mounted"]=_mounted;
// [1008]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [1009]  Return Me 
return _B;
// End Sub
};

// [1013] Sub BANanoGetHTML(id As String) As String 
_B.bananogethtml=function(_id) {
var _be,_stemplate;
// [1014]  id = id.tolowercase 
_id=_id.toLowerCase();
// [1015]  Dim be As BANanoElement 
_be=null;
// [1016]  be.Initialize(id) 
_be=u(_id);
// [1017]  Dim sTemplate As String = be.GetHTML 
_stemplate=_be.html();
// [1018]  be.Empty 
_be.empty();
// [1019]  Return sTemplate 
return _stemplate;
// End Sub
};

// [1022] Sub TemplateFromPlaceholder 
_B.templatefromplaceholder=function() {
// [1024]  SetBANanoTemplate( {202} ) 
_B.setbananotemplate("#placeholder",_B);
// End Sub
};

}
/* =========================== VRouterLink  =========================== */
function banano_bananozui_vrouterlink() {
var _B=this;
_B._applink= new banano_bananozui_vueapp();

_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._properties={};

_B._styles={};

_B._classlist={};

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtagname="router-link";

_B._bindings={};

_B._methods={};

_B._scaption="";

_B._sdisabled="";

_B._skey="";

_B._sparentid="";

_B._sreadonly="";

_B._sref="";

_B._srequired="";

_B._svbindclass="";

_B._svbindstyle="";

_B._bvcloak=false;

_B._svelse="";

_B._svelseif="";

_B._svfor="";

_B._svhtml="";

_B._svif="";

_B._svmodel="";

_B._bvonce=false;

_B._bvpre=false;

_B._svshow="";

_B._svtext="";

_B._sbordercolor="";

_B._sborderstyle="";

_B._sborderwidth="";

_B._sborderradius="";

_B._smargintop="";

_B._smarginright="";

_B._smarginbottom="";

_B._smarginleft="";

_B._spaddingtop="";

_B._spaddingright="";

_B._spaddingbottom="";

_B._spaddingleft="";

// [97] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) As VRouterLink 
_B.initialize=function(_callback,_name,_eventname) {
// [98] mName = Name 
_B._mname=_name;
// [99] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [100] mCallBack = CallBack 
_B._mcallback=_callback;
// [101] bindings.Initialize 
_B._bindings={};
// [102] methods.Initialize 
_B._methods={};
// [103] properties.Initialize 
_B._properties={};
// [104] styles.Initialize 
_B._styles={};
// [105] classList.Initialize 
_B._classlist={};
// [112] Return Me 
return _B;
// End Sub
};

// [116] Public Sub DesignerCreateView (Target As BANanoElement, props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [117]  mTarget = Target 
_B._mtarget=_target;
// [119] If props <> Null Then 
if (_props!=null) {
// [120] mClasses = props.Get( {51} ) 
_B._mclasses=_props["Classes"];
// [121] mAttributes = props.Get( {52} ) 
_B._mattributes=_props["Attributes"];
// [122] mStyle = props.Get( {53} ) 
_B._mstyle=_props["Style"];
// [123] sCaption = props.Get( {54} ) 
_B._scaption=_props["Caption"];
// [124] sDisabled = props.Get( {55} ) 
_B._sdisabled=_props["Disabled"];
// [125] sKey = props.Get( {56} ) 
_B._skey=_props["Key"];
// [126] sParentId = props.Get( {57} ) 
_B._sparentid=_props["ParentId"];
// [127] sReadonly = props.Get( {58} ) 
_B._sreadonly=_props["Readonly"];
// [128] sRef = props.Get( {59} ) 
_B._sref=_props["Ref"];
// [129] sRequired = props.Get( {60} ) 
_B._srequired=_props["Required"];
// [130] sVBindClass = props.Get( {61} ) 
_B._svbindclass=_props["VBindClass"];
// [131] sVBindStyle = props.Get( {62} ) 
_B._svbindstyle=_props["VBindStyle"];
// [132] bVCloak = props.Get( {63} ) 
_B._bvcloak=_props["VCloak"];
// [133] sVElse = props.Get( {64} ) 
_B._svelse=_props["VElse"];
// [134] sVElseIf = props.Get( {65} ) 
_B._svelseif=_props["VElseIf"];
// [135] sVFor = props.Get( {66} ) 
_B._svfor=_props["VFor"];
// [136] sVHtml = props.Get( {67} ) 
_B._svhtml=_props["VHtml"];
// [137] sVIf = props.Get( {68} ) 
_B._svif=_props["VIf"];
// [138] sVModel = props.Get( {69} ) 
_B._svmodel=_props["VModel"];
// [139] bVOnce = props.Get( {70} ) 
_B._bvonce=_props["VOnce"];
// [140] bVPre = props.Get( {71} ) 
_B._bvpre=_props["VPre"];
// [141] sVShow = props.Get( {72} ) 
_B._svshow=_props["VShow"];
// [142] sVText = props.Get( {73} ) 
_B._svtext=_props["VText"];
// [143] sBorderColor = props.Get( {74} ) 
_B._sbordercolor=_props["BorderColor"];
// [144] sBorderStyle = props.Get( {75} ) 
_B._sborderstyle=_props["BorderStyle"];
// [145] sBorderWidth = props.Get( {76} ) 
_B._sborderwidth=_props["BorderWidth"];
// [146] sBorderRadius = props.Get( {77} ) 
_B._sborderradius=_props["BorderRadius"];
// [147] sMarginTop = props.Get( {78} ) 
_B._smargintop=_props["MarginTop"];
// [148] sMarginRight = props.Get( {79} ) 
_B._smarginright=_props["MarginRight"];
// [149] sMarginBottom = props.Get( {80} ) 
_B._smarginbottom=_props["MarginBottom"];
// [150] sMarginLeft = props.Get( {81} ) 
_B._smarginleft=_props["MarginLeft"];
// [151] sPaddingTop = props.Get( {82} ) 
_B._spaddingtop=_props["PaddingTop"];
// [152] sPaddingRight = props.Get( {83} ) 
_B._spaddingright=_props["PaddingRight"];
// [153] sPaddingBottom = props.Get( {84} ) 
_B._spaddingbottom=_props["PaddingBottom"];
// [154] sPaddingLeft = props.Get( {85} ) 
_B._spaddingleft=_props["PaddingLeft"];
// [156] End If 
}
// [157] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [158] mElement = mTarget.Append(strHTML).Get( {86} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [167] Sub SetDisabled(varDisabled As String) As VRouterLink 
_B.setdisabled=function(_vardisabled) {
// [168] sDisabled = varDisabled 
_B._sdisabled=_vardisabled;
// [169] SetAttr( {87} , sDisabled) 
_B.setattr("disabled",_B._sdisabled,_B);
// [170] Return Me 
return _B;
// End Sub
};

// [174] Sub SetKey(varKey As String) As VRouterLink 
_B.setkey=function(_varkey) {
// [175] sKey = varKey 
_B._skey=_varkey;
// [176] SetAttr( {88} , sKey) 
_B.setattr("key",_B._skey,_B);
// [177] Return Me 
return _B;
// End Sub
};

// [181] Sub SetParentId(varParentId As String) As VRouterLink 
_B.setparentid=function(_varparentid) {
// [182] sParentId = varParentId 
_B._sparentid=_varparentid;
// [183] SetAttr( {89} , sParentId) 
_B.setattr("parent-id",_B._sparentid,_B);
// [184] Return Me 
return _B;
// End Sub
};

// [188] Sub SetReadonly(varReadonly As String) As VRouterLink 
_B.setreadonly=function(_varreadonly) {
// [189] sReadonly = varReadonly 
_B._sreadonly=_varreadonly;
// [190] SetAttr( {90} , sReadonly) 
_B.setattr("readonly",_B._sreadonly,_B);
// [191] Return Me 
return _B;
// End Sub
};

// [195] Sub SetRef(varRef As String) As VRouterLink 
_B.setref=function(_varref) {
// [196] sRef = varRef 
_B._sref=_varref;
// [197] SetAttr( {91} , sRef) 
_B.setattr("ref",_B._sref,_B);
// [198] Return Me 
return _B;
// End Sub
};

// [202] Sub SetRequired(varRequired As String) As VRouterLink 
_B.setrequired=function(_varrequired) {
// [203] sRequired = varRequired 
_B._srequired=_varrequired;
// [204] SetAttr( {92} , sRequired) 
_B.setattr("required",_B._srequired,_B);
// [205] Return Me 
return _B;
// End Sub
};

// [209] Sub SetVBindClass(varVBindClass As String) As VRouterLink 
_B.setvbindclass=function(_varvbindclass) {
// [210] sVBindClass = varVBindClass 
_B._svbindclass=_varvbindclass;
// [211] SetAttr( {93} , sVBindClass) 
_B.setattr("v-bind:class",_B._svbindclass,_B);
// [212] Return Me 
return _B;
// End Sub
};

// [216] Sub SetVBindStyle(varVBindStyle As String) As VRouterLink 
_B.setvbindstyle=function(_varvbindstyle) {
// [217] sVBindStyle = varVBindStyle 
_B._svbindstyle=_varvbindstyle;
// [218] SetAttr( {94} , sVBindStyle) 
_B.setattr("v-bind:style",_B._svbindstyle,_B);
// [219] Return Me 
return _B;
// End Sub
};

// [223] Sub SetVCloak(varVCloak As Boolean) As VRouterLink 
_B.setvcloak=function(_varvcloak) {
// [224] bVCloak = varVCloak 
_B._bvcloak=_varvcloak;
// [225] SetAttr( {95} , bVCloak) 
_B.setattr("v-cloak",_B._bvcloak,_B);
// [226] Return Me 
return _B;
// End Sub
};

// [230] Sub SetVElse(varVElse As String) As VRouterLink 
_B.setvelse=function(_varvelse) {
// [231] sVElse = varVElse 
_B._svelse=_varvelse;
// [232] SetAttr( {96} , sVElse) 
_B.setattr("v-else",_B._svelse,_B);
// [233] Return Me 
return _B;
// End Sub
};

// [237] Sub SetVElseIf(varVElseIf As String) As VRouterLink 
_B.setvelseif=function(_varvelseif) {
// [238] sVElseIf = varVElseIf 
_B._svelseif=_varvelseif;
// [239] SetAttr( {97} , sVElseIf) 
_B.setattr("v-else-if",_B._svelseif,_B);
// [240] Return Me 
return _B;
// End Sub
};

// [244] Sub SetVFor(varVFor As String) As VRouterLink 
_B.setvfor=function(_varvfor) {
// [245] sVFor = varVFor 
_B._svfor=_varvfor;
// [246] SetAttr( {98} , sVFor) 
_B.setattr("v-for",_B._svfor,_B);
// [247] Return Me 
return _B;
// End Sub
};

// [251] Sub SetVHtml(varVHtml As String) As VRouterLink 
_B.setvhtml=function(_varvhtml) {
// [252] sVHtml = varVHtml 
_B._svhtml=_varvhtml;
// [253] SetAttr( {99} , sVHtml) 
_B.setattr("v-html",_B._svhtml,_B);
// [254] Return Me 
return _B;
// End Sub
};

// [258] Sub SetVIf(varVIf As String) As VRouterLink 
_B.setvif=function(_varvif) {
// [259] sVIf = varVIf 
_B._svif=_varvif;
// [260] SetAttr( {100} , sVIf) 
_B.setattr("v-if",_B._svif,_B);
// [261] Return Me 
return _B;
// End Sub
};

// [265] Sub SetVModel(varVModel As String) As VRouterLink 
_B.setvmodel=function(_varvmodel) {
// [266] sVModel = varVModel 
_B._svmodel=_varvmodel;
// [267] SetAttr( {101} , sVModel) 
_B.setattr("v-model",_B._svmodel,_B);
// [268] Return Me 
return _B;
// End Sub
};

// [272] Sub SetVOnce(varVOnce As Boolean) As VRouterLink 
_B.setvonce=function(_varvonce) {
// [273] bVOnce = varVOnce 
_B._bvonce=_varvonce;
// [274] SetAttr( {102} , bVOnce) 
_B.setattr("v-once",_B._bvonce,_B);
// [275] Return Me 
return _B;
// End Sub
};

// [279] Sub SetVPre(varVPre As Boolean) As VRouterLink 
_B.setvpre=function(_varvpre) {
// [280] bVPre = varVPre 
_B._bvpre=_varvpre;
// [281] SetAttr( {103} , bVPre) 
_B.setattr("v-pre",_B._bvpre,_B);
// [282] Return Me 
return _B;
// End Sub
};

// [286] Sub SetVShow(varVShow As String) As VRouterLink 
_B.setvshow=function(_varvshow) {
// [287] sVShow = varVShow 
_B._svshow=_varvshow;
// [288] SetAttr( {104} , sVShow) 
_B.setattr("v-show",_B._svshow,_B);
// [289] Return Me 
return _B;
// End Sub
};

// [293] Sub SetVText(varVText As String) As VRouterLink 
_B.setvtext=function(_varvtext) {
// [294] sVText = varVText 
_B._svtext=_varvtext;
// [295] SetAttr( {105} , sVText) 
_B.setattr("v-text",_B._svtext,_B);
// [296] Return Me 
return _B;
// End Sub
};

// [300] Sub SetBorderColor(varBorderColor As String) As VRouterLink 
_B.setbordercolor=function(_varbordercolor) {
// [301] sBorderColor = varBorderColor 
_B._sbordercolor=_varbordercolor;
// [302] SetStyleSingle( {106} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [303] Return Me 
return _B;
// End Sub
};

// [307] Sub SetBorderStyle(varBorderStyle As String) As VRouterLink 
_B.setborderstyle=function(_varborderstyle) {
// [308] sBorderStyle = varBorderStyle 
_B._sborderstyle=_varborderstyle;
// [309] SetStyleSingle( {107} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [310] Return Me 
return _B;
// End Sub
};

// [314] Sub SetBorderWidth(varBorderWidth As String) As VRouterLink 
_B.setborderwidth=function(_varborderwidth) {
// [315] sBorderWidth = varBorderWidth 
_B._sborderwidth=_varborderwidth;
// [316] SetStyleSingle( {108} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [317] Return Me 
return _B;
// End Sub
};

// [321] Sub SetBorderRadius(varBorderRadius As String) As VRouterLink 
_B.setborderradius=function(_varborderradius) {
// [322] sBorderRadius = varBorderRadius 
_B._sborderradius=_varborderradius;
// [323] SetStyleSingle( {109} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [324] Return Me 
return _B;
// End Sub
};

// [328] Sub SetMarginTop(varMarginTop As String) As VRouterLink 
_B.setmargintop=function(_varmargintop) {
// [329] sMarginTop = varMarginTop 
_B._smargintop=_varmargintop;
// [330] SetStyleSingle( {110} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [331] Return Me 
return _B;
// End Sub
};

// [335] Sub SetMarginRight(varMarginRight As String) As VRouterLink 
_B.setmarginright=function(_varmarginright) {
// [336] sMarginRight = varMarginRight 
_B._smarginright=_varmarginright;
// [337] SetStyleSingle( {111} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [338] Return Me 
return _B;
// End Sub
};

// [342] Sub SetMarginBottom(varMarginBottom As String) As VRouterLink 
_B.setmarginbottom=function(_varmarginbottom) {
// [343] sMarginBottom = varMarginBottom 
_B._smarginbottom=_varmarginbottom;
// [344] SetStyleSingle( {112} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [345] Return Me 
return _B;
// End Sub
};

// [349] Sub SetMarginLeft(varMarginLeft As String) As VRouterLink 
_B.setmarginleft=function(_varmarginleft) {
// [350] sMarginLeft = varMarginLeft 
_B._smarginleft=_varmarginleft;
// [351] SetStyleSingle( {113} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [352] Return Me 
return _B;
// End Sub
};

// [356] Sub SetPaddingTop(varPaddingTop As String) As VRouterLink 
_B.setpaddingtop=function(_varpaddingtop) {
// [357] sPaddingTop = varPaddingTop 
_B._spaddingtop=_varpaddingtop;
// [358] SetStyleSingle( {114} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [359] Return Me 
return _B;
// End Sub
};

// [363] Sub SetPaddingRight(varPaddingRight As String) As VRouterLink 
_B.setpaddingright=function(_varpaddingright) {
// [364] sPaddingRight = varPaddingRight 
_B._spaddingright=_varpaddingright;
// [365] SetStyleSingle( {115} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [366] Return Me 
return _B;
// End Sub
};

// [370] Sub SetPaddingBottom(varPaddingBottom As String) As VRouterLink 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [371] sPaddingBottom = varPaddingBottom 
_B._spaddingbottom=_varpaddingbottom;
// [372] SetStyleSingle( {116} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [373] Return Me 
return _B;
// End Sub
};

// [377] Sub SetPaddingLeft(varPaddingLeft As String) As VRouterLink 
_B.setpaddingleft=function(_varpaddingleft) {
// [378] sPaddingLeft = varPaddingLeft 
_B._spaddingleft=_varpaddingleft;
// [379] SetStyleSingle( {117} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [380] Return Me 
return _B;
// End Sub
};

// [386] Sub ToString As String 
_B.tostring=function() {
var _ckeys,_sitems,_st,_k,_v,_skeys,_mitems,_mt,_exattr,_strres;
// [387] AddAttr(sCaption, {118} ) 
_B.addattr(_B._scaption,"caption",_B);
// [388] AddAttr(sDisabled, {119} ) 
_B.addattr(_B._sdisabled,"disabled",_B);
// [389] AddAttr(sKey, {120} ) 
_B.addattr(_B._skey,"key",_B);
// [390] AddAttr(sParentId, {121} ) 
_B.addattr(_B._sparentid,"parent-id",_B);
// [391] AddAttr(sReadonly, {122} ) 
_B.addattr(_B._sreadonly,"readonly",_B);
// [392] AddAttr(sRef, {123} ) 
_B.addattr(_B._sref,"ref",_B);
// [393] AddAttr(sRequired, {124} ) 
_B.addattr(_B._srequired,"required",_B);
// [394] AddAttr(sVBindClass, {125} ) 
_B.addattr(_B._svbindclass,"v-bind:class",_B);
// [395] AddAttr(sVBindStyle, {126} ) 
_B.addattr(_B._svbindstyle,"v-bind:style",_B);
// [396] AddAttr(bVCloak, {127} ) 
_B.addattr(_B._bvcloak,"v-cloak",_B);
// [397] AddAttr(sVElse, {128} ) 
_B.addattr(_B._svelse,"v-else",_B);
// [398] AddAttr(sVElseIf, {129} ) 
_B.addattr(_B._svelseif,"v-else-if",_B);
// [399] AddAttr(sVFor, {130} ) 
_B.addattr(_B._svfor,"v-for",_B);
// [400] AddAttr(sVHtml, {131} ) 
_B.addattr(_B._svhtml,"v-html",_B);
// [401] AddAttr(sVIf, {132} ) 
_B.addattr(_B._svif,"v-if",_B);
// [402] AddAttr(sVModel, {133} ) 
_B.addattr(_B._svmodel,"v-model",_B);
// [403] AddAttr(bVOnce, {134} ) 
_B.addattr(_B._bvonce,"v-once",_B);
// [404] AddAttr(bVPre, {135} ) 
_B.addattr(_B._bvpre,"v-pre",_B);
// [405] AddAttr(sVShow, {136} ) 
_B.addattr(_B._svshow,"v-show",_B);
// [406] AddAttr(sVText, {137} ) 
_B.addattr(_B._svtext,"v-text",_B);
// [407] SetStyleSingle( {138} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [408] SetStyleSingle( {139} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [409] SetStyleSingle( {140} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [410] SetStyleSingle( {141} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [411] SetStyleSingle( {142} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [412] SetStyleSingle( {143} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [413] SetStyleSingle( {144} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [414] SetStyleSingle( {145} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [415] SetStyleSingle( {146} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [416] SetStyleSingle( {147} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [417] SetStyleSingle( {148} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [418] SetStyleSingle( {149} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [421] Dim cKeys As String = BANanoShared.JoinMapKeys(classList, {150} ) 
_ckeys=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [422] cKeys = cKeys & {151} & mClasses 
_ckeys=_ckeys+" "+_B._mclasses;
// [423] cKeys = cKeys.trim 
_ckeys=_ckeys.trim();
// [424] cKeys = BANanoShared.MvDistinct( {152} , cKeys) 
_ckeys=_banano_bananozui_bananoshared.mvdistinct(" ",_ckeys);
// [425] AddAttr(cKeys, {153} ) 
_B.addattr(_ckeys,"class",_B);
// [427] If BANano.IsUndefined(mStyle) Or BANano.IsNull(mStyle) Then mStyle = {154} 
if (is.undefined(_B._mstyle) || is.null(_B._mstyle)) {_B._mstyle="";}
// [428] If mStyle.StartsWith( {155} ) Then mStyle = {156} 
if (_B._mstyle.startsWith("{")) {_B._mstyle="";}
// [429] If mStyle <> {157} Then 
if (_B._mstyle!="") {
// [430] Dim sItems As List = BANanoShared.StrParse( {158} ,mStyle) 
_sitems=_banano_bananozui_bananoshared.strparse(",",_B._mstyle);
// [431] For Each st As String In sItems 
for (var _stindex=0;_stindex<_sitems.length;_stindex++) {
_st=_sitems[_stindex];
// [432] Dim k As String = BANanoShared.MvField(st,1, {159} ) 
_k=_banano_bananozui_bananoshared.mvfield(_st,1,":");
// [433] Dim v As String = BANanoShared.MvField(st,2, {160} ) 
_v=_banano_bananozui_bananoshared.mvfield(_st,2,":");
// [434] SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [435] Next 
}
// [436] End If 
}
// [437] Dim sKeys As String = BANanoShared.BuildStyle(styles) 
_skeys=_banano_bananozui_bananoshared.buildstyle(_B._styles);
// [438] sKeys = sKeys.trim 
_skeys=_skeys.trim();
// [439] AddAttr(sKeys, {161} ) 
_B.addattr(_skeys,"style",_B);
// [441] If BANano.IsUndefined(mAttributes) Or BANano.IsNull(mAttributes) Then mAttributes = {162} 
if (is.undefined(_B._mattributes) || is.null(_B._mattributes)) {_B._mattributes="";}
// [442] If mAttributes.StartsWith( {163} ) Then mAttributes = {164} 
if (_B._mattributes.startsWith("{")) {_B._mattributes="";}
// [443] If mAttributes <> {165} Then 
if (_B._mattributes!="") {
// [444] Dim mItems As List = BANanoShared.StrParse( {166} ,mAttributes) 
_mitems=_banano_bananozui_bananoshared.strparse(";",_B._mattributes);
// [445] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [446] Dim k As String = BANanoShared.MvField(mt,1, {167} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [447] Dim v As String = BANanoShared.MvField(mt,2, {168} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [448] AddAttr(v, k) 
_B.addattr(_v,_k,_B);
// [449] Next 
}
// [450] End If 
}
// [451] Dim exattr As String = BANanoShared.BuildAttributes(properties) 
_exattr=_banano_bananozui_bananoshared.buildattributes(_B._properties);
// [453] Dim strRes As String = {4} 
_strres="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _exattr + ">" + _B._scaption + "</" + _B._mtagname + ">";
// [454] Return strRes 
return _strres;
// End Sub
};

// [458] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [459]  Return mElement 
return _B._melement;
// End Sub
};

// [463] public Sub getID() As String 
_B.getid=function() {
// [464]  Return mName 
return _B._mname;
// End Sub
};

// [468] Sub AddComponent(child As String) As VRouterLink 
_B.addcomponent=function(_child) {
// [469]  mElement.Append(child) 
_B._melement.append(_child);
// [470]  sCaption = mElement.GetText 
_B._scaption=_B._melement.text();
// [471]  Return Me 
return _B;
// End Sub
};

// [475] Sub SetID(varText As String) As VRouterLink 
_B.setid=function(_vartext) {
// [476]  mName = varText 
_B._mname=_vartext;
// [477]  Return Me 
return _B;
// End Sub
};

// [481] public Sub GetCaption() As String 
_B.getcaption=function() {
// [482]  Return sCaption 
return _B._scaption;
// End Sub
};

// [486] public Sub AddToParent(targetID As String) As VRouterLink 
_B.addtoparent=function(_targetid) {
// [487]  mTarget = BANano.GetElement( {169} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [488]  DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// [489]  Return Me 
return _B;
// End Sub
};

// [493] Sub AddToApp(vap As VueApp) As VRouterLink 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [494]  appLink = vap 
_B._applink=_vap;
// [496]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [497]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [498]  vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [499]  Next 
}
// [501]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [502]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [503]  vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [504]  Next 
}
// [505]  Return Me 
return _B;
// End Sub
};

// [509] public Sub Remove() 
_B.remove=function() {
// [510]  mElement.Empty 
_B._melement.empty();
// [511]  BANano.SetMeToNull 
_B=null;
// End Sub
};

// [515] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [516]  If mElement <> Null Then 
if (_B._melement!=null) {
// [517]  mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [518]  End If 
}
// End Sub
};

// [522] Sub SetVOn(event As String) As VRouterLink 
_B.setvon=function(_event) {
var _methodname;
// [523]  Dim methodName As String = BANanoShared.BeautifyName(event) 
_methodname=_banano_bananozui_bananoshared.beautifyname(_event);
// [524]  methodName = {5} 
_methodname="" + _B._meventname + "_" + _methodname + "";
// [525]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [526]  If SubExists(mCallBack, methodName) = False Then Return Me 
if ((typeof _B._mcallback[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [527]  SetAttr( {6} , methodName) 
_B.setattr("v-on:" + _event + "",_methodname,_B);
// [528]  SetMethod(mCallBack, methodName) 
_B.setmethod(_B._mcallback,_methodname,_B);
// [529]  Return Me 
return _B;
// End Sub
};

// [533] Sub SetCaption(varText As String) As VRouterLink 
_B.setcaption=function(_vartext) {
// [534]  If mElement <> Null Then 
if (_B._melement!=null) {
// [535]  mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [536]  End If 
}
// [537]  sCaption = varText 
_B._scaption=_vartext;
// [538]  Return Me 
return _B;
// End Sub
};

// [542] private Sub AddAttr(varName As String, actProp As String) As VRouterLink 
_B.addattr=function(_varname,_actprop) {
var _rname;
// [543]  If BANano.IsUndefined(varName) Or BANano.IsNull(varName) Then varName = {170} 
if (is.undefined(_varname) || is.null(_varname)) {_varname="";}
// [544]  If BANano.IsNumber(varName) Then varName = BANanoShared.CStr(varName) 
if (is.number(_varname)) {_varname=_banano_bananozui_bananoshared.cstr(_varname);}
// [545]  If actProp = {171} Then Return Me 
if (_actprop=="caption") { return _B;}
// [546]  Try 
try {
// [547]  If BANano.IsBoolean(varName) Then 
if (is.boolean(_varname)) {
// [548]  If varName = True Then properties.put(actProp, varName) 
if (_varname==true) {_B._properties[_actprop]=_varname;}
// [549]  Else 
} else {
// [550]  If varName.StartsWith( {172} ) Then 
if (_varname.startsWith(":")) {
// [553]  Dim rname As String = BANanoShared.MidString2(varName, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varname,2);
// [554]  If rname.Contains( {173} ) Then 
if (_rname.contains(".")) {
// [556]  properties.Put( {7} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [557]  Else 
} else {
// [558]  properties.Put( {8} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [559]  bindings.Put(rname, Null) 
_B._bindings[_rname]=null;
// [560]  End If 
}
// [561]  Else 
} else {
// [562]  If varName <> {174} Then properties.put(actProp, varName) 
if (_varname!="") {_B._properties[_actprop]=_varname;}
// [563]  Select Case actProp 
switch ("" + _actprop) {
// [564]  Case {175} , {176} , {177} , {178} , {179} , {180} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [565]  bindings.Put(varName, False) 
_B._bindings[_varname]=false;
// [566]  End Select 
break;
}
// [567]  End If 
}
// [568]  End If 
}
// [569]  Catch 
} catch(err) {
// [570]  Log(LastException) 
console.log(err);
// [572]  End Try 
}
// [573]  Return Me 
return _B;
// End Sub
};

// [577] public Sub SetClasses(Classes As String) As VRouterLink 
_B.setclasses=function(_classes) {
// [578]  If mElement <> Null Then 
if (_B._melement!=null) {
// [579]  mElement.AddClass(Classes) 
_B._melement.addClass(_classes);
// [580]  End If 
}
// [581]  mClasses = Classes 
_B._mclasses=_classes;
// [582]  Return Me 
return _B;
// End Sub
};

// [585] public Sub GetClasses() As String 
_B.getclasses=function() {
// [586]  Return mClasses 
return _B._mclasses;
// End Sub
};

// [591] public Sub SetStyle(Style As String) As VRouterLink 
_B.setstyle=function(_style) {
// [592]  If mElement <> Null Then 
if (_B._melement!=null) {
// [593]  mElement.SetStyle(Style) 
_B._melement.css(JSON.parse(_style));
// [594]  End If 
}
// [595]  mStyle = Style 
_B._mstyle=_style;
// [596]  Return Me 
return _B;
// End Sub
};

// [600] Sub AddClass(classNames As List) As VRouterLink 
_B.addclass=function(_classnames) {
var _k,_cm;
// [601]  For Each k As String In classNames 
for (var _kindex=0;_kindex<_classnames.length;_kindex++) {
_k=_classnames[_kindex];
// [602]  classList.put(k, k) 
_B._classlist[_k]=_k;
// [603]  Next 
}
// [604]  dim cm as string = BANanoShared.Join( {181} , classnames) 
_cm=_banano_bananozui_bananoshared.join(" ",_classnames);
// [605]  Setclasses(cm) 
_B.setclasses(_cm,_B);
// [606]  Return Me 
return _B;
// End Sub
};

// [610] Sub SetStyles(m As Map) As VRouterLink 
_B.setstyles=function(_m) {
var _k,_v,_jsonstyle;
// [611]  for each k as string in m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [612]  dim v as string = m.get(k) 
_v=_m[_k];
// [613]  styles.put(k, v) 
_B._styles[_k]=_v;
// [614]  next 
}
// [615]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [616]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [617]  Return Me 
return _B;
// End Sub
};

// [621] Sub SetAttrs(props As Map) As VRouterLink 
_B.setattrs=function(_props) {
var _k,_v;
// [622]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [623]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [624]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [625]  Next 
}
// [626]  Return Me 
return _B;
// End Sub
};

// [630] Sub SetAttr(prop As String, value As String) As VRouterLink 
_B.setattr=function(_prop,_value) {
// [631]  If BANano.IsUndefined(prop) or BANano.IsNull(prop) Then prop = {182} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [632]  If BANano.IsUndefined(value) or BANano.IsNull(value) Then value = {183} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [633]  if prop = {184} then Return Me 
if (_prop=="") { return _B;}
// [634]  properties.put(prop, value) 
_B._properties[_prop]=_value;
// [635]  If mElement <> Null Then 
if (_B._melement!=null) {
// [636]  mElement.SetAttr(prop, value) 
_B._melement.attr(_prop,_value);
// [637]  End If 
}
// [638]  Return Me 
return _B;
// End Sub
};

// [642] Sub SetVBind(prop As String, value As String) As VRouterLink 
_B.setvbind=function(_prop,_value) {
// [643]  prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [644]  value = value.ToLowerCase 
_value=_value.toLowerCase();
// [645]  prop = {10} 
_prop="v-bind:" + _prop + "";
// [646]  SetAttr(prop,value) 
_B.setattr(_prop,_value,_B);
// [647]  bindings.Put(value, Null) 
_B._bindings[_value]=null;
// [648]  Return Me 
return _B;
// End Sub
};

// [652] Sub SetStyleSingle(prop As String, value As String) As VRouterLink 
_B.setstylesingle=function(_prop,_value) {
var _m,_jsonstyle;
// [653]  If BANano.IsUndefined(prop) or BANano.IsNull(prop) Then prop = {185} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [654]  If BANano.IsUndefined(value) or BANano.IsNull(value) Then value = {186} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [655]  if prop = {187} then return me 
if (_prop=="") { return _B;}
// [656]  styles.put(prop, value) 
_B._styles[_prop]=_value;
// [657]  dim m as map = createmap() 
_m={};
// [658]  m.put(prop, value) 
_m[_prop]=_value;
// [659]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [660]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [661]  Return Me 
return _B;
// End Sub
};

// [665] Sub Build(props As Map, styleProps As Map, classNames As List, loose As List) As VRouterLink 
_B.build=function(_props,_styleprops,_classnames,_loose) {
var _k,_v;
// [666]  If loose <> Null Then 
if (_loose!=null) {
// [667]  For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [668]  SetAttr(k, True) 
_B.setattr(_k,true,_B);
// [669]  Next 
}
// [670]  End If 
}
// [671]  If props <> Null Then 
if (_props!=null) {
// [672]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [673]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [674]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [675]  Next 
}
// [676]  End If 
}
// [677]  If styleProps <> Null Then 
if (_styleprops!=null) {
// [678]  for each k as string in styleprops.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [679]  dim v as string = styleprops.get(k) 
_v=_styleprops[_k];
// [680]  SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [681]  next 
}
// [682]  End If 
}
// [683]  If classNames <> Null Then 
if (_classnames!=null) {
// [684]  AddClass(classNames) 
_B.addclass(_classnames,_B);
// [685]  End If 
}
// [686]  Return Me 
return _B;
// End Sub
};

// [690] Public Sub GetHtml() As String 
_B.gethtml=function() {
// [691]  Return mElement.GetHtml 
return _B._melement.html();
// End Sub
};

// [695] Sub SetVClass(classObj as string) As VRouterLink 
_B.setvclass=function(_classobj) {
// [696]  SetVBind( {188} , classObj) 
_B.setvbind("class",_classobj,_B);
// [697]  Return Me 
return _B;
// End Sub
};

// [701] Sub SetVStyle(styleObj as string) As VRouterLink 
_B.setvstyle=function(_styleobj) {
// [702]  SetVBind( {189} , styleObj) 
_B.setvbind("style",_styleobj,_B);
// [703]  Return Me 
return _B;
// End Sub
};

// [707] Sub SetColor1(varColor As String) As VRouterLink 
_B.setcolor1=function(_varcolor) {
var _pp;
// [708]  Dim pp As String = {11} 
_pp="" + _B._mname + "color";
// [709]  SetAttr( {190} , pp) 
_B.setattr(":color",_pp,_B);
// [711]  bindings.Put(pp, varColor) 
_B._bindings[_pp]=_varcolor;
// [712]  Return Me 
return _B;
// End Sub
};

// [716] Sub SetColorIntensity(varColor As String, varIntensity As String) As VRouterLink 
_B.setcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_pp;
// [717]  Dim scolor As String = {12} 
_scolor="" + _varcolor + " " + _varintensity + "";
// [718]  Dim pp As String = {13} 
_pp="" + _B._mname + "color";
// [719]  SetAttr( {191} , pp) 
_B.setattr(":color",_pp,_B);
// [721]  bindings.Put(pp, scolor) 
_B._bindings[_pp]=_scolor;
// [722]  Return Me 
return _B;
// End Sub
};

// [726] Sub SetTextColor1(varColor As String) As VRouterLink 
_B.settextcolor1=function(_varcolor) {
var _scolor;
// [727]  Dim sColor As String = {14} 
_scolor="" + _varcolor + "--text";
// [728]  AddClass(array(sColor)) 
_B.addclass([_scolor],_B);
// [729]  Return Me 
return _B;
// End Sub
};

// [733] Sub SetTextColorIntensity(varColor As String, varIntensity As String) As VRouterLink 
_B.settextcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_sintensity,_mcolor;
// [734]  Dim sColor As String = {15} 
_scolor="" + _varcolor + "--text";
// [735]  Dim sIntensity As String = {16} 
_sintensity="text--" + _varintensity + "";
// [736]  Dim mcolor As String = {17} 
_mcolor="" + _scolor + " " + _sintensity + "";
// [737]  AddClass(Array(mcolor)) 
_B.addclass([_mcolor],_B);
// [738]  Return Me 
return _B;
// End Sub
};

// [742] Sub SetMethod(Module As Object,methodName As String) As VRouterLink 
_B.setmethod=function(_module,_methodname) {
var _e,_cb;
// [743]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [744]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [745]  Dim e As BANanoEvent 
_e=null;
// [746]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [747]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [748]  End If 
}
// [749]  Return Me 
return _B;
// End Sub
};

// [753] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [755]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [756]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [757]  ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [758]  Next 
}
// [760]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [761]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [762]  ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [763]  Next 
}
// End Sub
};

}
/* =========================== VRouterView  =========================== */
function banano_bananozui_vrouterview() {
var _B=this;
_B._applink= new banano_bananozui_vueapp();

_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._properties={};

_B._styles={};

_B._classlist={};

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtagname="router-view";

_B._bindings={};

_B._methods={};

_B._scaption="";

_B._sdisabled="";

_B._skey="";

_B._sparentid="";

_B._sreadonly="";

_B._sref="";

_B._srequired="";

_B._svbindclass="";

_B._svbindstyle="";

_B._bvcloak=false;

_B._svelse="";

_B._svelseif="";

_B._svfor="";

_B._svhtml="";

_B._svif="";

_B._svmodel="";

_B._bvonce=false;

_B._bvpre=false;

_B._svshow="";

_B._svtext="";

_B._sbordercolor="";

_B._sborderstyle="";

_B._sborderwidth="";

_B._sborderradius="";

_B._smargintop="";

_B._smarginright="";

_B._smarginbottom="";

_B._smarginleft="";

_B._spaddingtop="";

_B._spaddingright="";

_B._spaddingbottom="";

_B._spaddingleft="";

// [97] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) As VRouterView 
_B.initialize=function(_callback,_name,_eventname) {
// [98] mName = Name 
_B._mname=_name;
// [99] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [100] mCallBack = CallBack 
_B._mcallback=_callback;
// [101] bindings.Initialize 
_B._bindings={};
// [102] methods.Initialize 
_B._methods={};
// [103] properties.Initialize 
_B._properties={};
// [104] styles.Initialize 
_B._styles={};
// [105] classList.Initialize 
_B._classlist={};
// [112] Return Me 
return _B;
// End Sub
};

// [116] Public Sub DesignerCreateView (Target As BANanoElement, props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [117]  mTarget = Target 
_B._mtarget=_target;
// [119] If props <> Null Then 
if (_props!=null) {
// [120] mClasses = props.Get( {51} ) 
_B._mclasses=_props["Classes"];
// [121] mAttributes = props.Get( {52} ) 
_B._mattributes=_props["Attributes"];
// [122] mStyle = props.Get( {53} ) 
_B._mstyle=_props["Style"];
// [123] sCaption = props.Get( {54} ) 
_B._scaption=_props["Caption"];
// [124] sDisabled = props.Get( {55} ) 
_B._sdisabled=_props["Disabled"];
// [125] sKey = props.Get( {56} ) 
_B._skey=_props["Key"];
// [126] sParentId = props.Get( {57} ) 
_B._sparentid=_props["ParentId"];
// [127] sReadonly = props.Get( {58} ) 
_B._sreadonly=_props["Readonly"];
// [128] sRef = props.Get( {59} ) 
_B._sref=_props["Ref"];
// [129] sRequired = props.Get( {60} ) 
_B._srequired=_props["Required"];
// [130] sVBindClass = props.Get( {61} ) 
_B._svbindclass=_props["VBindClass"];
// [131] sVBindStyle = props.Get( {62} ) 
_B._svbindstyle=_props["VBindStyle"];
// [132] bVCloak = props.Get( {63} ) 
_B._bvcloak=_props["VCloak"];
// [133] sVElse = props.Get( {64} ) 
_B._svelse=_props["VElse"];
// [134] sVElseIf = props.Get( {65} ) 
_B._svelseif=_props["VElseIf"];
// [135] sVFor = props.Get( {66} ) 
_B._svfor=_props["VFor"];
// [136] sVHtml = props.Get( {67} ) 
_B._svhtml=_props["VHtml"];
// [137] sVIf = props.Get( {68} ) 
_B._svif=_props["VIf"];
// [138] sVModel = props.Get( {69} ) 
_B._svmodel=_props["VModel"];
// [139] bVOnce = props.Get( {70} ) 
_B._bvonce=_props["VOnce"];
// [140] bVPre = props.Get( {71} ) 
_B._bvpre=_props["VPre"];
// [141] sVShow = props.Get( {72} ) 
_B._svshow=_props["VShow"];
// [142] sVText = props.Get( {73} ) 
_B._svtext=_props["VText"];
// [143] sBorderColor = props.Get( {74} ) 
_B._sbordercolor=_props["BorderColor"];
// [144] sBorderStyle = props.Get( {75} ) 
_B._sborderstyle=_props["BorderStyle"];
// [145] sBorderWidth = props.Get( {76} ) 
_B._sborderwidth=_props["BorderWidth"];
// [146] sBorderRadius = props.Get( {77} ) 
_B._sborderradius=_props["BorderRadius"];
// [147] sMarginTop = props.Get( {78} ) 
_B._smargintop=_props["MarginTop"];
// [148] sMarginRight = props.Get( {79} ) 
_B._smarginright=_props["MarginRight"];
// [149] sMarginBottom = props.Get( {80} ) 
_B._smarginbottom=_props["MarginBottom"];
// [150] sMarginLeft = props.Get( {81} ) 
_B._smarginleft=_props["MarginLeft"];
// [151] sPaddingTop = props.Get( {82} ) 
_B._spaddingtop=_props["PaddingTop"];
// [152] sPaddingRight = props.Get( {83} ) 
_B._spaddingright=_props["PaddingRight"];
// [153] sPaddingBottom = props.Get( {84} ) 
_B._spaddingbottom=_props["PaddingBottom"];
// [154] sPaddingLeft = props.Get( {85} ) 
_B._spaddingleft=_props["PaddingLeft"];
// [156] End If 
}
// [157] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [158] mElement = mTarget.Append(strHTML).Get( {86} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [167] Sub SetDisabled(varDisabled As String) As VRouterView 
_B.setdisabled=function(_vardisabled) {
// [168] sDisabled = varDisabled 
_B._sdisabled=_vardisabled;
// [169] SetAttr( {87} , sDisabled) 
_B.setattr("disabled",_B._sdisabled,_B);
// [170] Return Me 
return _B;
// End Sub
};

// [174] Sub SetKey(varKey As String) As VRouterView 
_B.setkey=function(_varkey) {
// [175] sKey = varKey 
_B._skey=_varkey;
// [176] SetAttr( {88} , sKey) 
_B.setattr("key",_B._skey,_B);
// [177] Return Me 
return _B;
// End Sub
};

// [181] Sub SetParentId(varParentId As String) As VRouterView 
_B.setparentid=function(_varparentid) {
// [182] sParentId = varParentId 
_B._sparentid=_varparentid;
// [183] SetAttr( {89} , sParentId) 
_B.setattr("parent-id",_B._sparentid,_B);
// [184] Return Me 
return _B;
// End Sub
};

// [188] Sub SetReadonly(varReadonly As String) As VRouterView 
_B.setreadonly=function(_varreadonly) {
// [189] sReadonly = varReadonly 
_B._sreadonly=_varreadonly;
// [190] SetAttr( {90} , sReadonly) 
_B.setattr("readonly",_B._sreadonly,_B);
// [191] Return Me 
return _B;
// End Sub
};

// [195] Sub SetRef(varRef As String) As VRouterView 
_B.setref=function(_varref) {
// [196] sRef = varRef 
_B._sref=_varref;
// [197] SetAttr( {91} , sRef) 
_B.setattr("ref",_B._sref,_B);
// [198] Return Me 
return _B;
// End Sub
};

// [202] Sub SetRequired(varRequired As String) As VRouterView 
_B.setrequired=function(_varrequired) {
// [203] sRequired = varRequired 
_B._srequired=_varrequired;
// [204] SetAttr( {92} , sRequired) 
_B.setattr("required",_B._srequired,_B);
// [205] Return Me 
return _B;
// End Sub
};

// [209] Sub SetVBindClass(varVBindClass As String) As VRouterView 
_B.setvbindclass=function(_varvbindclass) {
// [210] sVBindClass = varVBindClass 
_B._svbindclass=_varvbindclass;
// [211] SetAttr( {93} , sVBindClass) 
_B.setattr("v-bind:class",_B._svbindclass,_B);
// [212] Return Me 
return _B;
// End Sub
};

// [216] Sub SetVBindStyle(varVBindStyle As String) As VRouterView 
_B.setvbindstyle=function(_varvbindstyle) {
// [217] sVBindStyle = varVBindStyle 
_B._svbindstyle=_varvbindstyle;
// [218] SetAttr( {94} , sVBindStyle) 
_B.setattr("v-bind:style",_B._svbindstyle,_B);
// [219] Return Me 
return _B;
// End Sub
};

// [223] Sub SetVCloak(varVCloak As Boolean) As VRouterView 
_B.setvcloak=function(_varvcloak) {
// [224] bVCloak = varVCloak 
_B._bvcloak=_varvcloak;
// [225] SetAttr( {95} , bVCloak) 
_B.setattr("v-cloak",_B._bvcloak,_B);
// [226] Return Me 
return _B;
// End Sub
};

// [230] Sub SetVElse(varVElse As String) As VRouterView 
_B.setvelse=function(_varvelse) {
// [231] sVElse = varVElse 
_B._svelse=_varvelse;
// [232] SetAttr( {96} , sVElse) 
_B.setattr("v-else",_B._svelse,_B);
// [233] Return Me 
return _B;
// End Sub
};

// [237] Sub SetVElseIf(varVElseIf As String) As VRouterView 
_B.setvelseif=function(_varvelseif) {
// [238] sVElseIf = varVElseIf 
_B._svelseif=_varvelseif;
// [239] SetAttr( {97} , sVElseIf) 
_B.setattr("v-else-if",_B._svelseif,_B);
// [240] Return Me 
return _B;
// End Sub
};

// [244] Sub SetVFor(varVFor As String) As VRouterView 
_B.setvfor=function(_varvfor) {
// [245] sVFor = varVFor 
_B._svfor=_varvfor;
// [246] SetAttr( {98} , sVFor) 
_B.setattr("v-for",_B._svfor,_B);
// [247] Return Me 
return _B;
// End Sub
};

// [251] Sub SetVHtml(varVHtml As String) As VRouterView 
_B.setvhtml=function(_varvhtml) {
// [252] sVHtml = varVHtml 
_B._svhtml=_varvhtml;
// [253] SetAttr( {99} , sVHtml) 
_B.setattr("v-html",_B._svhtml,_B);
// [254] Return Me 
return _B;
// End Sub
};

// [258] Sub SetVIf(varVIf As String) As VRouterView 
_B.setvif=function(_varvif) {
// [259] sVIf = varVIf 
_B._svif=_varvif;
// [260] SetAttr( {100} , sVIf) 
_B.setattr("v-if",_B._svif,_B);
// [261] Return Me 
return _B;
// End Sub
};

// [265] Sub SetVModel(varVModel As String) As VRouterView 
_B.setvmodel=function(_varvmodel) {
// [266] sVModel = varVModel 
_B._svmodel=_varvmodel;
// [267] SetAttr( {101} , sVModel) 
_B.setattr("v-model",_B._svmodel,_B);
// [268] Return Me 
return _B;
// End Sub
};

// [272] Sub SetVOnce(varVOnce As Boolean) As VRouterView 
_B.setvonce=function(_varvonce) {
// [273] bVOnce = varVOnce 
_B._bvonce=_varvonce;
// [274] SetAttr( {102} , bVOnce) 
_B.setattr("v-once",_B._bvonce,_B);
// [275] Return Me 
return _B;
// End Sub
};

// [279] Sub SetVPre(varVPre As Boolean) As VRouterView 
_B.setvpre=function(_varvpre) {
// [280] bVPre = varVPre 
_B._bvpre=_varvpre;
// [281] SetAttr( {103} , bVPre) 
_B.setattr("v-pre",_B._bvpre,_B);
// [282] Return Me 
return _B;
// End Sub
};

// [286] Sub SetVShow(varVShow As String) As VRouterView 
_B.setvshow=function(_varvshow) {
// [287] sVShow = varVShow 
_B._svshow=_varvshow;
// [288] SetAttr( {104} , sVShow) 
_B.setattr("v-show",_B._svshow,_B);
// [289] Return Me 
return _B;
// End Sub
};

// [293] Sub SetVText(varVText As String) As VRouterView 
_B.setvtext=function(_varvtext) {
// [294] sVText = varVText 
_B._svtext=_varvtext;
// [295] SetAttr( {105} , sVText) 
_B.setattr("v-text",_B._svtext,_B);
// [296] Return Me 
return _B;
// End Sub
};

// [300] Sub SetBorderColor(varBorderColor As String) As VRouterView 
_B.setbordercolor=function(_varbordercolor) {
// [301] sBorderColor = varBorderColor 
_B._sbordercolor=_varbordercolor;
// [302] SetStyleSingle( {106} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [303] Return Me 
return _B;
// End Sub
};

// [307] Sub SetBorderStyle(varBorderStyle As String) As VRouterView 
_B.setborderstyle=function(_varborderstyle) {
// [308] sBorderStyle = varBorderStyle 
_B._sborderstyle=_varborderstyle;
// [309] SetStyleSingle( {107} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [310] Return Me 
return _B;
// End Sub
};

// [314] Sub SetBorderWidth(varBorderWidth As String) As VRouterView 
_B.setborderwidth=function(_varborderwidth) {
// [315] sBorderWidth = varBorderWidth 
_B._sborderwidth=_varborderwidth;
// [316] SetStyleSingle( {108} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [317] Return Me 
return _B;
// End Sub
};

// [321] Sub SetBorderRadius(varBorderRadius As String) As VRouterView 
_B.setborderradius=function(_varborderradius) {
// [322] sBorderRadius = varBorderRadius 
_B._sborderradius=_varborderradius;
// [323] SetStyleSingle( {109} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [324] Return Me 
return _B;
// End Sub
};

// [328] Sub SetMarginTop(varMarginTop As String) As VRouterView 
_B.setmargintop=function(_varmargintop) {
// [329] sMarginTop = varMarginTop 
_B._smargintop=_varmargintop;
// [330] SetStyleSingle( {110} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [331] Return Me 
return _B;
// End Sub
};

// [335] Sub SetMarginRight(varMarginRight As String) As VRouterView 
_B.setmarginright=function(_varmarginright) {
// [336] sMarginRight = varMarginRight 
_B._smarginright=_varmarginright;
// [337] SetStyleSingle( {111} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [338] Return Me 
return _B;
// End Sub
};

// [342] Sub SetMarginBottom(varMarginBottom As String) As VRouterView 
_B.setmarginbottom=function(_varmarginbottom) {
// [343] sMarginBottom = varMarginBottom 
_B._smarginbottom=_varmarginbottom;
// [344] SetStyleSingle( {112} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [345] Return Me 
return _B;
// End Sub
};

// [349] Sub SetMarginLeft(varMarginLeft As String) As VRouterView 
_B.setmarginleft=function(_varmarginleft) {
// [350] sMarginLeft = varMarginLeft 
_B._smarginleft=_varmarginleft;
// [351] SetStyleSingle( {113} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [352] Return Me 
return _B;
// End Sub
};

// [356] Sub SetPaddingTop(varPaddingTop As String) As VRouterView 
_B.setpaddingtop=function(_varpaddingtop) {
// [357] sPaddingTop = varPaddingTop 
_B._spaddingtop=_varpaddingtop;
// [358] SetStyleSingle( {114} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [359] Return Me 
return _B;
// End Sub
};

// [363] Sub SetPaddingRight(varPaddingRight As String) As VRouterView 
_B.setpaddingright=function(_varpaddingright) {
// [364] sPaddingRight = varPaddingRight 
_B._spaddingright=_varpaddingright;
// [365] SetStyleSingle( {115} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [366] Return Me 
return _B;
// End Sub
};

// [370] Sub SetPaddingBottom(varPaddingBottom As String) As VRouterView 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [371] sPaddingBottom = varPaddingBottom 
_B._spaddingbottom=_varpaddingbottom;
// [372] SetStyleSingle( {116} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [373] Return Me 
return _B;
// End Sub
};

// [377] Sub SetPaddingLeft(varPaddingLeft As String) As VRouterView 
_B.setpaddingleft=function(_varpaddingleft) {
// [378] sPaddingLeft = varPaddingLeft 
_B._spaddingleft=_varpaddingleft;
// [379] SetStyleSingle( {117} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [380] Return Me 
return _B;
// End Sub
};

// [386] Sub ToString As String 
_B.tostring=function() {
var _ckeys,_sitems,_st,_k,_v,_skeys,_mitems,_mt,_exattr,_strres;
// [387] AddAttr(sCaption, {118} ) 
_B.addattr(_B._scaption,"caption",_B);
// [388] AddAttr(sDisabled, {119} ) 
_B.addattr(_B._sdisabled,"disabled",_B);
// [389] AddAttr(sKey, {120} ) 
_B.addattr(_B._skey,"key",_B);
// [390] AddAttr(sParentId, {121} ) 
_B.addattr(_B._sparentid,"parent-id",_B);
// [391] AddAttr(sReadonly, {122} ) 
_B.addattr(_B._sreadonly,"readonly",_B);
// [392] AddAttr(sRef, {123} ) 
_B.addattr(_B._sref,"ref",_B);
// [393] AddAttr(sRequired, {124} ) 
_B.addattr(_B._srequired,"required",_B);
// [394] AddAttr(sVBindClass, {125} ) 
_B.addattr(_B._svbindclass,"v-bind:class",_B);
// [395] AddAttr(sVBindStyle, {126} ) 
_B.addattr(_B._svbindstyle,"v-bind:style",_B);
// [396] AddAttr(bVCloak, {127} ) 
_B.addattr(_B._bvcloak,"v-cloak",_B);
// [397] AddAttr(sVElse, {128} ) 
_B.addattr(_B._svelse,"v-else",_B);
// [398] AddAttr(sVElseIf, {129} ) 
_B.addattr(_B._svelseif,"v-else-if",_B);
// [399] AddAttr(sVFor, {130} ) 
_B.addattr(_B._svfor,"v-for",_B);
// [400] AddAttr(sVHtml, {131} ) 
_B.addattr(_B._svhtml,"v-html",_B);
// [401] AddAttr(sVIf, {132} ) 
_B.addattr(_B._svif,"v-if",_B);
// [402] AddAttr(sVModel, {133} ) 
_B.addattr(_B._svmodel,"v-model",_B);
// [403] AddAttr(bVOnce, {134} ) 
_B.addattr(_B._bvonce,"v-once",_B);
// [404] AddAttr(bVPre, {135} ) 
_B.addattr(_B._bvpre,"v-pre",_B);
// [405] AddAttr(sVShow, {136} ) 
_B.addattr(_B._svshow,"v-show",_B);
// [406] AddAttr(sVText, {137} ) 
_B.addattr(_B._svtext,"v-text",_B);
// [407] SetStyleSingle( {138} , sBorderColor) 
_B.setstylesingle("border-color",_B._sbordercolor,_B);
// [408] SetStyleSingle( {139} , sBorderStyle) 
_B.setstylesingle("border-style",_B._sborderstyle,_B);
// [409] SetStyleSingle( {140} , sBorderWidth) 
_B.setstylesingle("border-width",_B._sborderwidth,_B);
// [410] SetStyleSingle( {141} , sBorderRadius) 
_B.setstylesingle("border-radius",_B._sborderradius,_B);
// [411] SetStyleSingle( {142} , sMarginTop) 
_B.setstylesingle("margin-top",_B._smargintop,_B);
// [412] SetStyleSingle( {143} , sMarginRight) 
_B.setstylesingle("margin-right",_B._smarginright,_B);
// [413] SetStyleSingle( {144} , sMarginBottom) 
_B.setstylesingle("margin-bottom",_B._smarginbottom,_B);
// [414] SetStyleSingle( {145} , sMarginLeft) 
_B.setstylesingle("margin-left",_B._smarginleft,_B);
// [415] SetStyleSingle( {146} , sPaddingTop) 
_B.setstylesingle("padding-top",_B._spaddingtop,_B);
// [416] SetStyleSingle( {147} , sPaddingRight) 
_B.setstylesingle("padding-right",_B._spaddingright,_B);
// [417] SetStyleSingle( {148} , sPaddingBottom) 
_B.setstylesingle("padding-bottom",_B._spaddingbottom,_B);
// [418] SetStyleSingle( {149} , sPaddingLeft) 
_B.setstylesingle("padding-left",_B._spaddingleft,_B);
// [421] Dim cKeys As String = BANanoShared.JoinMapKeys(classList, {150} ) 
_ckeys=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [422] cKeys = cKeys & {151} & mClasses 
_ckeys=_ckeys+" "+_B._mclasses;
// [423] cKeys = cKeys.trim 
_ckeys=_ckeys.trim();
// [424] cKeys = BANanoShared.MvDistinct( {152} , cKeys) 
_ckeys=_banano_bananozui_bananoshared.mvdistinct(" ",_ckeys);
// [425] AddAttr(cKeys, {153} ) 
_B.addattr(_ckeys,"class",_B);
// [427] If BANano.IsUndefined(mStyle) Or BANano.IsNull(mStyle) Then mStyle = {154} 
if (is.undefined(_B._mstyle) || is.null(_B._mstyle)) {_B._mstyle="";}
// [428] If mStyle.StartsWith( {155} ) Then mStyle = {156} 
if (_B._mstyle.startsWith("{")) {_B._mstyle="";}
// [429] If mStyle <> {157} Then 
if (_B._mstyle!="") {
// [430] Dim sItems As List = BANanoShared.StrParse( {158} ,mStyle) 
_sitems=_banano_bananozui_bananoshared.strparse(",",_B._mstyle);
// [431] For Each st As String In sItems 
for (var _stindex=0;_stindex<_sitems.length;_stindex++) {
_st=_sitems[_stindex];
// [432] Dim k As String = BANanoShared.MvField(st,1, {159} ) 
_k=_banano_bananozui_bananoshared.mvfield(_st,1,":");
// [433] Dim v As String = BANanoShared.MvField(st,2, {160} ) 
_v=_banano_bananozui_bananoshared.mvfield(_st,2,":");
// [434] SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [435] Next 
}
// [436] End If 
}
// [437] Dim sKeys As String = BANanoShared.BuildStyle(styles) 
_skeys=_banano_bananozui_bananoshared.buildstyle(_B._styles);
// [438] sKeys = sKeys.trim 
_skeys=_skeys.trim();
// [439] AddAttr(sKeys, {161} ) 
_B.addattr(_skeys,"style",_B);
// [441] If BANano.IsUndefined(mAttributes) Or BANano.IsNull(mAttributes) Then mAttributes = {162} 
if (is.undefined(_B._mattributes) || is.null(_B._mattributes)) {_B._mattributes="";}
// [442] If mAttributes.StartsWith( {163} ) Then mAttributes = {164} 
if (_B._mattributes.startsWith("{")) {_B._mattributes="";}
// [443] If mAttributes <> {165} Then 
if (_B._mattributes!="") {
// [444] Dim mItems As List = BANanoShared.StrParse( {166} ,mAttributes) 
_mitems=_banano_bananozui_bananoshared.strparse(";",_B._mattributes);
// [445] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [446] Dim k As String = BANanoShared.MvField(mt,1, {167} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [447] Dim v As String = BANanoShared.MvField(mt,2, {168} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [448] AddAttr(v, k) 
_B.addattr(_v,_k,_B);
// [449] Next 
}
// [450] End If 
}
// [451] Dim exattr As String = BANanoShared.BuildAttributes(properties) 
_exattr=_banano_bananozui_bananoshared.buildattributes(_B._properties);
// [453] Dim strRes As String = {4} 
_strres="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _exattr + ">" + _B._scaption + "</" + _B._mtagname + ">";
// [454] Return strRes 
return _strres;
// End Sub
};

// [458] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [459]  Return mElement 
return _B._melement;
// End Sub
};

// [463] public Sub getID() As String 
_B.getid=function() {
// [464]  Return mName 
return _B._mname;
// End Sub
};

// [468] Sub AddComponent(child As String) As VRouterView 
_B.addcomponent=function(_child) {
// [469]  mElement.Append(child) 
_B._melement.append(_child);
// [470]  sCaption = mElement.GetText 
_B._scaption=_B._melement.text();
// [471]  Return Me 
return _B;
// End Sub
};

// [475] Sub SetID(varText As String) As VRouterView 
_B.setid=function(_vartext) {
// [476]  mName = varText 
_B._mname=_vartext;
// [477]  Return Me 
return _B;
// End Sub
};

// [481] public Sub GetCaption() As String 
_B.getcaption=function() {
// [482]  Return sCaption 
return _B._scaption;
// End Sub
};

// [486] public Sub AddToParent(targetID As String) As VRouterView 
_B.addtoparent=function(_targetid) {
// [487]  mTarget = BANano.GetElement( {169} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [488]  DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// [489]  Return Me 
return _B;
// End Sub
};

// [493] Sub AddToApp(vap As VueApp) As VRouterView 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [494]  appLink = vap 
_B._applink=_vap;
// [496]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [497]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [498]  vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [499]  Next 
}
// [501]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [502]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [503]  vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [504]  Next 
}
// [505]  Return Me 
return _B;
// End Sub
};

// [509] public Sub Remove() 
_B.remove=function() {
// [510]  mElement.Empty 
_B._melement.empty();
// [511]  BANano.SetMeToNull 
_B=null;
// End Sub
};

// [515] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [516]  If mElement <> Null Then 
if (_B._melement!=null) {
// [517]  mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [518]  End If 
}
// End Sub
};

// [522] Sub SetVOn(event As String) As VRouterView 
_B.setvon=function(_event) {
var _methodname;
// [523]  Dim methodName As String = BANanoShared.BeautifyName(event) 
_methodname=_banano_bananozui_bananoshared.beautifyname(_event);
// [524]  methodName = {5} 
_methodname="" + _B._meventname + "_" + _methodname + "";
// [525]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [526]  If SubExists(mCallBack, methodName) = False Then Return Me 
if ((typeof _B._mcallback[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [527]  SetAttr( {6} , methodName) 
_B.setattr("v-on:" + _event + "",_methodname,_B);
// [528]  SetMethod(mCallBack, methodName) 
_B.setmethod(_B._mcallback,_methodname,_B);
// [529]  Return Me 
return _B;
// End Sub
};

// [533] Sub SetCaption(varText As String) As VRouterView 
_B.setcaption=function(_vartext) {
// [534]  If mElement <> Null Then 
if (_B._melement!=null) {
// [535]  mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [536]  End If 
}
// [537]  sCaption = varText 
_B._scaption=_vartext;
// [538]  Return Me 
return _B;
// End Sub
};

// [542] private Sub AddAttr(varName As String, actProp As String) As VRouterView 
_B.addattr=function(_varname,_actprop) {
var _rname;
// [543]  If BANano.IsUndefined(varName) Or BANano.IsNull(varName) Then varName = {170} 
if (is.undefined(_varname) || is.null(_varname)) {_varname="";}
// [544]  If BANano.IsNumber(varName) Then varName = BANanoShared.CStr(varName) 
if (is.number(_varname)) {_varname=_banano_bananozui_bananoshared.cstr(_varname);}
// [545]  If actProp = {171} Then Return Me 
if (_actprop=="caption") { return _B;}
// [546]  Try 
try {
// [547]  If BANano.IsBoolean(varName) Then 
if (is.boolean(_varname)) {
// [548]  If varName = True Then properties.put(actProp, varName) 
if (_varname==true) {_B._properties[_actprop]=_varname;}
// [549]  Else 
} else {
// [550]  If varName.StartsWith( {172} ) Then 
if (_varname.startsWith(":")) {
// [553]  Dim rname As String = BANanoShared.MidString2(varName, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varname,2);
// [554]  If rname.Contains( {173} ) Then 
if (_rname.contains(".")) {
// [556]  properties.Put( {7} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [557]  Else 
} else {
// [558]  properties.Put( {8} , rname) 
_B._properties[":" + _actprop + ""]=_rname;
// [559]  bindings.Put(rname, Null) 
_B._bindings[_rname]=null;
// [560]  End If 
}
// [561]  Else 
} else {
// [562]  If varName <> {174} Then properties.put(actProp, varName) 
if (_varname!="") {_B._properties[_actprop]=_varname;}
// [563]  Select Case actProp 
switch ("" + _actprop) {
// [564]  Case {175} , {176} , {177} , {178} , {179} , {180} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [565]  bindings.Put(varName, False) 
_B._bindings[_varname]=false;
// [566]  End Select 
break;
}
// [567]  End If 
}
// [568]  End If 
}
// [569]  Catch 
} catch(err) {
// [570]  Log(LastException) 
console.log(err);
// [572]  End Try 
}
// [573]  Return Me 
return _B;
// End Sub
};

// [577] public Sub SetClasses(Classes As String) As VRouterView 
_B.setclasses=function(_classes) {
// [578]  If mElement <> Null Then 
if (_B._melement!=null) {
// [579]  mElement.AddClass(Classes) 
_B._melement.addClass(_classes);
// [580]  End If 
}
// [581]  mClasses = Classes 
_B._mclasses=_classes;
// [582]  Return Me 
return _B;
// End Sub
};

// [585] public Sub GetClasses() As String 
_B.getclasses=function() {
// [586]  Return mClasses 
return _B._mclasses;
// End Sub
};

// [591] public Sub SetStyle(Style As String) As VRouterView 
_B.setstyle=function(_style) {
// [592]  If mElement <> Null Then 
if (_B._melement!=null) {
// [593]  mElement.SetStyle(Style) 
_B._melement.css(JSON.parse(_style));
// [594]  End If 
}
// [595]  mStyle = Style 
_B._mstyle=_style;
// [596]  Return Me 
return _B;
// End Sub
};

// [600] Sub AddClass(classNames As List) As VRouterView 
_B.addclass=function(_classnames) {
var _k,_cm;
// [601]  For Each k As String In classNames 
for (var _kindex=0;_kindex<_classnames.length;_kindex++) {
_k=_classnames[_kindex];
// [602]  classList.put(k, k) 
_B._classlist[_k]=_k;
// [603]  Next 
}
// [604]  Dim cm As String = BANanoShared.Join( {181} , classNames) 
_cm=_banano_bananozui_bananoshared.join(" ",_classnames);
// [605]  SetClasses(cm) 
_B.setclasses(_cm,_B);
// [606]  Return Me 
return _B;
// End Sub
};

// [610] Sub SetStyles(m As Map) As VRouterView 
_B.setstyles=function(_m) {
var _k,_v,_jsonstyle;
// [611]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [612]  Dim v As String = m.get(k) 
_v=_m[_k];
// [613]  styles.put(k, v) 
_B._styles[_k]=_v;
// [614]  Next 
}
// [615]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [616]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [617]  Return Me 
return _B;
// End Sub
};

// [621] Sub SetAttrs(props As Map) As VRouterView 
_B.setattrs=function(_props) {
var _k,_v;
// [622]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [623]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [624]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [625]  Next 
}
// [626]  Return Me 
return _B;
// End Sub
};

// [630] Sub SetAttr(prop As String, value As String) As VRouterView 
_B.setattr=function(_prop,_value) {
// [631]  If BANano.IsUndefined(prop) Or BANano.IsNull(prop) Then prop = {182} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [632]  If BANano.IsUndefined(value) Or BANano.IsNull(value) Then value = {183} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [633]  If prop = {184} Then Return Me 
if (_prop=="") { return _B;}
// [634]  properties.put(prop, value) 
_B._properties[_prop]=_value;
// [635]  If mElement <> Null Then 
if (_B._melement!=null) {
// [636]  mElement.SetAttr(prop, value) 
_B._melement.attr(_prop,_value);
// [637]  End If 
}
// [638]  Return Me 
return _B;
// End Sub
};

// [642] Sub SetVBind(prop As String, value As String) As VRouterView 
_B.setvbind=function(_prop,_value) {
// [643]  prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [644]  value = value.ToLowerCase 
_value=_value.toLowerCase();
// [645]  prop = {10} 
_prop="v-bind:" + _prop + "";
// [646]  SetAttr(prop,value) 
_B.setattr(_prop,_value,_B);
// [647]  bindings.Put(value, Null) 
_B._bindings[_value]=null;
// [648]  Return Me 
return _B;
// End Sub
};

// [652] Sub SetStyleSingle(prop As String, value As String) As VRouterView 
_B.setstylesingle=function(_prop,_value) {
var _m,_jsonstyle;
// [653]  If BANano.IsUndefined(prop) Or BANano.IsNull(prop) Then prop = {185} 
if (is.undefined(_prop) || is.null(_prop)) {_prop="";}
// [654]  If BANano.IsUndefined(value) Or BANano.IsNull(value) Then value = {186} 
if (is.undefined(_value) || is.null(_value)) {_value="";}
// [655]  If prop = {187} Then Return Me 
if (_prop=="") { return _B;}
// [656]  styles.put(prop, value) 
_B._styles[_prop]=_value;
// [657]  Dim m As Map = CreateMap() 
_m={};
// [658]  m.put(prop, value) 
_m[_prop]=_value;
// [659]  Dim jsonStyle As String = BANano.ToJson(m) 
_jsonstyle=JSON.stringify(_m);
// [660]  SetStyle(jsonStyle) 
_B.setstyle(_jsonstyle,_B);
// [661]  Return Me 
return _B;
// End Sub
};

// [665] Sub Build(props As Map, styleProps As Map, classNames As List, loose As List) As VRouterView 
_B.build=function(_props,_styleprops,_classnames,_loose) {
var _k,_v;
// [666]  If loose <> Null Then 
if (_loose!=null) {
// [667]  For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [668]  SetAttr(k, True) 
_B.setattr(_k,true,_B);
// [669]  Next 
}
// [670]  End If 
}
// [671]  If props <> Null Then 
if (_props!=null) {
// [672]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [673]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [674]  SetAttr(k, v) 
_B.setattr(_k,_v,_B);
// [675]  Next 
}
// [676]  End If 
}
// [677]  If styleProps <> Null Then 
if (_styleprops!=null) {
// [678]  For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [679]  Dim v As String = styleProps.get(k) 
_v=_styleprops[_k];
// [680]  SetStyleSingle(k, v) 
_B.setstylesingle(_k,_v,_B);
// [681]  Next 
}
// [682]  End If 
}
// [683]  If classNames <> Null Then 
if (_classnames!=null) {
// [684]  AddClass(classNames) 
_B.addclass(_classnames,_B);
// [685]  End If 
}
// [686]  Return Me 
return _B;
// End Sub
};

// [690] Public Sub GetHtml() As String 
_B.gethtml=function() {
// [691]  Return mElement.GetHtml 
return _B._melement.html();
// End Sub
};

// [695] Sub SetVClass(classObj As String) As VRouterView 
_B.setvclass=function(_classobj) {
// [696]  SetVBind( {188} , classObj) 
_B.setvbind("class",_classobj,_B);
// [697]  Return Me 
return _B;
// End Sub
};

// [701] Sub SetVStyle(styleObj As String) As VRouterView 
_B.setvstyle=function(_styleobj) {
// [702]  SetVBind( {189} , styleObj) 
_B.setvbind("style",_styleobj,_B);
// [703]  Return Me 
return _B;
// End Sub
};

// [707] Sub SetColor1(varColor As String) As VRouterView 
_B.setcolor1=function(_varcolor) {
var _pp;
// [708]  Dim pp As String = {11} 
_pp="" + _B._mname + "color";
// [709]  SetAttr( {190} , pp) 
_B.setattr(":color",_pp,_B);
// [711]  bindings.Put(pp, varColor) 
_B._bindings[_pp]=_varcolor;
// [712]  Return Me 
return _B;
// End Sub
};

// [716] Sub SetColorIntensity(varColor As String, varIntensity As String) As VRouterView 
_B.setcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_pp;
// [717]  Dim scolor As String = {12} 
_scolor="" + _varcolor + " " + _varintensity + "";
// [718]  Dim pp As String = {13} 
_pp="" + _B._mname + "color";
// [719]  SetAttr( {191} , pp) 
_B.setattr(":color",_pp,_B);
// [721]  bindings.Put(pp, scolor) 
_B._bindings[_pp]=_scolor;
// [722]  Return Me 
return _B;
// End Sub
};

// [726] Sub SetTextColor1(varColor As String) As VRouterView 
_B.settextcolor1=function(_varcolor) {
var _scolor;
// [727]  Dim sColor As String = {14} 
_scolor="" + _varcolor + "--text";
// [728]  AddClass(Array(sColor)) 
_B.addclass([_scolor],_B);
// [729]  Return Me 
return _B;
// End Sub
};

// [733] Sub SetTextColorIntensity(varColor As String, varIntensity As String) As VRouterView 
_B.settextcolorintensity=function(_varcolor,_varintensity) {
var _scolor,_sintensity,_mcolor;
// [734]  Dim sColor As String = {15} 
_scolor="" + _varcolor + "--text";
// [735]  Dim sIntensity As String = {16} 
_sintensity="text--" + _varintensity + "";
// [736]  Dim mcolor As String = {17} 
_mcolor="" + _scolor + " " + _sintensity + "";
// [737]  AddClass(Array(mcolor)) 
_B.addclass([_mcolor],_B);
// [738]  Return Me 
return _B;
// End Sub
};

// [742] Sub SetMethod(Module As Object,methodName As String) As VRouterView 
_B.setmethod=function(_module,_methodname) {
var _e,_cb;
// [743]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [744]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [745]  Dim e As BANanoEvent 
_e=null;
// [746]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [747]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [748]  End If 
}
// [749]  Return Me 
return _B;
// End Sub
};

// [753] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [755]  For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [756]  Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [757]  ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [758]  Next 
}
// [760]  For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [761]  Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [762]  ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [763]  Next 
}
// End Sub
};

}
/* =========================== VueApp  =========================== */
function banano_bananozui_vueapp() {
var _B=this;
_B._zircle=null;

_B._zui= new banano_bananozui_zircleui();

_B._el=null;

_B._emit=null;

_B._router=null;

_B._modules={};

_B._methods={};

_B._computed={};

_B._watches={};

_B._filters={};

_B._opt={};

_B._refs=null;

_B._path="";

_B._name="";

_B._query={};

_B._eventhandler={};

_B._routes=[];

_B._components={};

_B._options={};

_B._vap=null;

_B._template="";

_B._themes={};

_B._colormap={};

_B._border_default="";

_B._border_dashed="dashed";

_B._border_dotted="dotted";

_B._border_double="double";

_B._border_groove="groove";

_B._border_hidden="hidden";

_B._border_inset="inset";

_B._border_none="none";

_B._border_outset="outset";

_B._border_ridge="ridge";

_B._border_solid="solid";

_B._color_amber="amber";

_B._color_black="black";

_B._color_blue="blue";

_B._color_bluegrey="blue-grey";

_B._color_brown="brown";

_B._color_cyan="cyan";

_B._color_deeporange="deep-orange";

_B._color_deeppurple="deep-purple";

_B._color_green="green";

_B._color_grey="grey";

_B._color_indigo="indigo";

_B._color_lightblue="light-blue";

_B._color_lightgreen="light-green";

_B._color_lime="lime";

_B._color_orange="orange";

_B._color_pink="pink";

_B._color_purple="purple";

_B._color_red="red";

_B._color_teal="teal";

_B._color_transparent="transparent";

_B._color_white="white";

_B._color_yellow="yellow";

_B._color_none="";

_B._intensity_normal="";

_B._intensity_lighten5="lighten-5";

_B._intensity_lighten4="lighten-4";

_B._intensity_lighten3="lighten-3";

_B._intensity_lighten2="lighten-2";

_B._intensity_lighten1="lighten-1";

_B._intensity_darken1="darken-1";

_B._intensity_darken2="darken-2";

_B._intensity_darken3="darken-3";

_B._intensity_darken4="darken-4";

_B._intensity_accent1="accent-1";

_B._intensity_accent2="accent-2";

_B._intensity_accent3="accent-3";

_B._intensity_accent4="accent-4";

_B._justify_center="center";

_B._justify_start="start";

_B._justify_end="end";

_B._align_center="center";

_B._align_start="start";

_B._align_end="end";

_B._align_stretch="stretch";

_B._iconpos_left="left";

_B._iconpos_right="right";

_B._store=null;

_B._state={};

_B._zuicanvas= new banano_bananozui_zuizcanvas();

_B._body=null;

// [102] Public Sub Initialize(Module As Object) As VueApp 
_B.initialize=function(_module) {
var _placeholder;
// [104]  body = BANano.GetElement( {77} ) 
_B._body=u("#body");
// [106]  body.Empty 
_B._body.empty();
// [108]  body.Append( {0} ) 
_B._body.append("<div id=\"app\"></div>");
// [110]  VAP.Initialize( {78} ) 
_B._vap=Vue;
// [111]  zircle.Initialize( {79} ) 
_B._zircle=zircle;
// [112]  Use(zircle) 
_B.use(_B._zircle,_B);
// [114]  state.Initialize 
_B._state={};
// [118]  Modules.Initialize 
_B._modules={};
// [119]  methods.Initialize 
_B._methods={};
// [120]  computed.Initialize 
_B._computed={};
// [121]  watches.Initialize 
_B._watches={};
// [122]  filters.Initialize 
_B._filters={};
// [123]  opt.Initialize 
_B._opt={};
// [124]  Query.Initialize 
_B._query={};
// [125]  EventHandler = Module 
_B._eventhandler=_module;
// [126]  routes.Initialize 
_B._routes.length=0;
// [127]  components.Initialize 
_B._components={};
// [128]  Options.Initialize 
_B._options={};
// [129]  Modules.Initialize 
_B._modules={};
// [130]  Themes.Initialize 
_B._themes={};
// [133]  SetBeforeCreate(Module, {81} ) 
_B.setbeforecreate(_module,"BeforeCreate",_B);
// [134]  SetCreated(Module, {82} ) 
_B.setcreated(_module,"Created",_B);
// [135]  SetBeforeMount(Module, {83} ) 
_B.setbeforemount(_module,"BeforeMount",_B);
// [136]  SetMounted(Module, {84} ) 
_B.setmounted(_module,"Mounted",_B);
// [137]  SetBeforeUpdate(Module, {85} ) 
_B.setbeforeupdate(_module,"BeforeUpdate",_B);
// [138]  SetUpdated(Module, {86} ) 
_B.setupdated(_module,"Updated",_B);
// [139]  SetBeforeDestroy(Module, {87} ) 
_B.setbeforedestroy(_module,"BeforeDestroy",_B);
// [140]  SetDestroyed(Module, {88} ) 
_B.setdestroyed(_module,"Destroyed",_B);
// [142]  InitColors 
_B.initcolors(_B);
// [145]  ZUICanvas.Initialize(Module, {89} , {90} ) 
_B._zuicanvas.initialize(_module,"canvas","canvas");
// [146]  ZUICanvas.Views = {91} 
_B._zuicanvas.setviews("$options.components");
// [149]  Dim placeholder As VHTML 
_placeholder= new banano_bananozui_vhtml();
// [150]  placeholder.Initialize(Module, {92} , {93} ) 
_placeholder.initialize(_module,"placeholder","placeholder");
// [151]  placeholder.SetTagName( {94} ) 
_placeholder.settagname("div");
// [152]  placeholder.SetVShow( {95} ) 
_placeholder.setvshow("placeholder");
// [153]  placeholder.AddToParent( {96} ) 
_placeholder.addtoparent("app");
// [154]  placeholder.AddToApp(Me) 
_placeholder.addtoapp(_B);
// [156]  Return Me 
return _B;
// End Sub
};

// [159] private Sub InitColors 
_B.initcolors=function() {
// [160]  ColorMap.Initialize 
_B._colormap={};
// [161]  ColorMap.put( {97} , {98} ) 
_B._colormap["red lighten-5"]="#ffebee";
// [162]  ColorMap.put( {99} , {100} ) 
_B._colormap["red lighten-4"]="#ffcdd2";
// [163]  ColorMap.put( {101} , {102} ) 
_B._colormap["red lighten-3"]="#ef9a9a";
// [164]  ColorMap.put( {103} , {104} ) 
_B._colormap["red lighten-2"]="#e57373";
// [165]  ColorMap.put( {105} , {106} ) 
_B._colormap["red lighten-1"]="#ef5350";
// [166]  ColorMap.put( {107} , {108} ) 
_B._colormap["red"]="#f44336";
// [167]  ColorMap.put( {109} , {110} ) 
_B._colormap["red darken-1"]="#e53935";
// [168]  ColorMap.put( {111} , {112} ) 
_B._colormap["red darken-2"]="#d32f2f";
// [169]  ColorMap.put( {113} , {114} ) 
_B._colormap["red darken-3"]="#c62828";
// [170]  ColorMap.put( {115} , {116} ) 
_B._colormap["red darken-4"]="#b71c1c";
// [171]  ColorMap.put( {117} , {118} ) 
_B._colormap["red accent-1"]="#ff8a80";
// [172]  ColorMap.put( {119} , {120} ) 
_B._colormap["red accent-2"]="#ff5252";
// [173]  ColorMap.put( {121} , {122} ) 
_B._colormap["red accent-3"]="#ff1744";
// [174]  ColorMap.put( {123} , {124} ) 
_B._colormap["red accent-4"]="#d50000";
// [175]  ColorMap.put( {125} , {126} ) 
_B._colormap["pink lighten-5"]="#fce4ec";
// [176]  ColorMap.put( {127} , {128} ) 
_B._colormap["pink lighten-4"]="#f8bbd0";
// [177]  ColorMap.put( {129} , {130} ) 
_B._colormap["pink lighten-3"]="#f48fb1";
// [178]  ColorMap.put( {131} , {132} ) 
_B._colormap["pink lighten-2"]="#f06292";
// [179]  ColorMap.put( {133} , {134} ) 
_B._colormap["pink lighten-1"]="#ec407a";
// [180]  ColorMap.put( {135} , {136} ) 
_B._colormap["pink"]="#e91e63";
// [181]  ColorMap.put( {137} , {138} ) 
_B._colormap["pink darken-1"]="#d81b60";
// [182]  ColorMap.put( {139} , {140} ) 
_B._colormap["pink darken-2"]="#c2185b";
// [183]  ColorMap.put( {141} , {142} ) 
_B._colormap["pink darken-3"]="#ad1457";
// [184]  ColorMap.put( {143} , {144} ) 
_B._colormap["pink darken-4"]="#880e4f";
// [185]  ColorMap.put( {145} , {146} ) 
_B._colormap["pink accent-1"]="#ff80ab";
// [186]  ColorMap.put( {147} , {148} ) 
_B._colormap["pink accent-2"]="#ff4081";
// [187]  ColorMap.put( {149} , {150} ) 
_B._colormap["pink accent-3"]="#f50057";
// [188]  ColorMap.put( {151} , {152} ) 
_B._colormap["pink accent-4"]="#c51162";
// [189]  ColorMap.put( {153} , {154} ) 
_B._colormap["purple lighten-5"]="#f3e5f5";
// [190]  ColorMap.put( {155} , {156} ) 
_B._colormap["purple lighten-4"]="#e1bee7";
// [191]  ColorMap.put( {157} , {158} ) 
_B._colormap["purple lighten-3"]="#ce93d8";
// [192]  ColorMap.put( {159} , {160} ) 
_B._colormap["purple lighten-2"]="#ba68c8";
// [193]  ColorMap.put( {161} , {162} ) 
_B._colormap["purple lighten-1"]="#ab47bc";
// [194]  ColorMap.put( {163} , {164} ) 
_B._colormap["purple"]="#9c27b0";
// [195]  ColorMap.put( {165} , {166} ) 
_B._colormap["purple darken-1"]="#8e24aa";
// [196]  ColorMap.put( {167} , {168} ) 
_B._colormap["purple darken-2"]="#7b1fa2";
// [197]  ColorMap.put( {169} , {170} ) 
_B._colormap["purple darken-3"]="#6a1b9a";
// [198]  ColorMap.put( {171} , {172} ) 
_B._colormap["purple darken-4"]="#4a148c";
// [199]  ColorMap.put( {173} , {174} ) 
_B._colormap["purple accent-1"]="#ea80fc";
// [200]  ColorMap.put( {175} , {176} ) 
_B._colormap["purple accent-2"]="#e040fb";
// [201]  ColorMap.put( {177} , {178} ) 
_B._colormap["purple accent-3"]="#d500f9";
// [202]  ColorMap.put( {179} , {180} ) 
_B._colormap["purple accent-4"]="#aa00ff";
// [203]  ColorMap.put( {181} , {182} ) 
_B._colormap["deep-purple lighten-5"]="#ede7f6";
// [204]  ColorMap.put( {183} , {184} ) 
_B._colormap["deep-purple lighten-4"]="#d1c4e9";
// [205]  ColorMap.put( {185} , {186} ) 
_B._colormap["deep-purple lighten-3"]="#b39ddb";
// [206]  ColorMap.put( {187} , {188} ) 
_B._colormap["deep-purple lighten-2"]="#9575cd";
// [207]  ColorMap.put( {189} , {190} ) 
_B._colormap["deep-purple lighten-1"]="#7e57c2";
// [208]  ColorMap.put( {191} , {192} ) 
_B._colormap["deep-purple"]="#673ab7";
// [209]  ColorMap.put( {193} , {194} ) 
_B._colormap["deep-purple darken-1"]="#5e35b1";
// [210]  ColorMap.put( {195} , {196} ) 
_B._colormap["deep-purple darken-2"]="#512da8";
// [211]  ColorMap.put( {197} , {198} ) 
_B._colormap["deep-purple darken-3"]="#4527a0";
// [212]  ColorMap.put( {199} , {200} ) 
_B._colormap["deep-purple darken-4"]="#311b92";
// [213]  ColorMap.put( {201} , {202} ) 
_B._colormap["deep-purple accent-1"]="#b388ff";
// [214]  ColorMap.put( {203} , {204} ) 
_B._colormap["deep-purple accent-2"]="#7c4dff";
// [215]  ColorMap.put( {205} , {206} ) 
_B._colormap["deep-purple accent-3"]="#651fff";
// [216]  ColorMap.put( {207} , {208} ) 
_B._colormap["deep-purple accent-4"]="#6200ea";
// [217]  ColorMap.put( {209} , {210} ) 
_B._colormap["indigo lighten-5"]="#e8eaf6";
// [218]  ColorMap.put( {211} , {212} ) 
_B._colormap["indigo lighten-4"]="#c5cae9";
// [219]  ColorMap.put( {213} , {214} ) 
_B._colormap["indigo lighten-3"]="#9fa8da";
// [220]  ColorMap.put( {215} , {216} ) 
_B._colormap["indigo lighten-2"]="#7986cb";
// [221]  ColorMap.put( {217} , {218} ) 
_B._colormap["indigo lighten-1"]="#5c6bc0";
// [222]  ColorMap.put( {219} , {220} ) 
_B._colormap["indigo"]="#3f51b5";
// [223]  ColorMap.put( {221} , {222} ) 
_B._colormap["indigo darken-1"]="#3949ab";
// [224]  ColorMap.put( {223} , {224} ) 
_B._colormap["indigo darken-2"]="#303f9f";
// [225]  ColorMap.put( {225} , {226} ) 
_B._colormap["indigo darken-3"]="#283593";
// [226]  ColorMap.put( {227} , {228} ) 
_B._colormap["indigo darken-4"]="#1a237e";
// [227]  ColorMap.put( {229} , {230} ) 
_B._colormap["indigo accent-1"]="#8c9eff";
// [228]  ColorMap.put( {231} , {232} ) 
_B._colormap["indigo accent-2"]="#536dfe";
// [229]  ColorMap.put( {233} , {234} ) 
_B._colormap["indigo accent-3"]="#3d5afe";
// [230]  ColorMap.put( {235} , {236} ) 
_B._colormap["indigo accent-4"]="#304ffe";
// [231]  ColorMap.put( {237} , {238} ) 
_B._colormap["blue lighten-5"]="#e3f2fd";
// [232]  ColorMap.put( {239} , {240} ) 
_B._colormap["blue lighten-4"]="#bbdefb";
// [233]  ColorMap.put( {241} , {242} ) 
_B._colormap["blue lighten-3"]="#90caf9";
// [234]  ColorMap.put( {243} , {244} ) 
_B._colormap["blue lighten-2"]="#64b5f6";
// [235]  ColorMap.put( {245} , {246} ) 
_B._colormap["blue lighten-1"]="#42a5f5";
// [236]  ColorMap.put( {247} , {248} ) 
_B._colormap["blue"]="#2196f3";
// [237]  ColorMap.put( {249} , {250} ) 
_B._colormap["blue darken-1"]="#1e88e5";
// [238]  ColorMap.put( {251} , {252} ) 
_B._colormap["blue darken-2"]="#1976d2";
// [239]  ColorMap.put( {253} , {254} ) 
_B._colormap["blue darken-3"]="#1565c0";
// [240]  ColorMap.put( {255} , {256} ) 
_B._colormap["blue darken-4"]="#0d47a1";
// [241]  ColorMap.put( {257} , {258} ) 
_B._colormap["blue accent-1"]="#82b1ff";
// [242]  ColorMap.put( {259} , {260} ) 
_B._colormap["blue accent-2"]="#448aff";
// [243]  ColorMap.put( {261} , {262} ) 
_B._colormap["blue accent-3"]="#2979ff";
// [244]  ColorMap.put( {263} , {264} ) 
_B._colormap["blue accent-4"]="#2962ff";
// [245]  ColorMap.put( {265} , {266} ) 
_B._colormap["light-blue lighten-5"]="#e1f5fe";
// [246]  ColorMap.put( {267} , {268} ) 
_B._colormap["light-blue lighten-4"]="#b3e5fc";
// [247]  ColorMap.put( {269} , {270} ) 
_B._colormap["light-blue lighten-3"]="#81d4fa";
// [248]  ColorMap.put( {271} , {272} ) 
_B._colormap["light-blue lighten-2"]="#4fc3f7";
// [249]  ColorMap.put( {273} , {274} ) 
_B._colormap["light-blue lighten-1"]="#29b6f6";
// [250]  ColorMap.put( {275} , {276} ) 
_B._colormap["light-blue"]="#03a9f4";
// [251]  ColorMap.put( {277} , {278} ) 
_B._colormap["light-blue darken-1"]="#039be5";
// [252]  ColorMap.put( {279} , {280} ) 
_B._colormap["light-blue darken-2"]="#0288d1";
// [253]  ColorMap.put( {281} , {282} ) 
_B._colormap["light-blue darken-3"]="#0277bd";
// [254]  ColorMap.put( {283} , {284} ) 
_B._colormap["light-blue darken-4"]="#01579b";
// [255]  ColorMap.put( {285} , {286} ) 
_B._colormap["light-blue accent-1"]="#80d8ff";
// [256]  ColorMap.put( {287} , {288} ) 
_B._colormap["light-blue accent-2"]="#40c4ff";
// [257]  ColorMap.put( {289} , {290} ) 
_B._colormap["light-blue accent-3"]="#00b0ff";
// [258]  ColorMap.put( {291} , {292} ) 
_B._colormap["light-blue accent-4"]="#0091ea";
// [259]  ColorMap.put( {293} , {294} ) 
_B._colormap["cyan lighten-5"]="#e0f7fa";
// [260]  ColorMap.put( {295} , {296} ) 
_B._colormap["cyan lighten-4"]="#b2ebf2";
// [261]  ColorMap.put( {297} , {298} ) 
_B._colormap["cyan lighten-3"]="#80deea";
// [262]  ColorMap.put( {299} , {300} ) 
_B._colormap["cyan lighten-2"]="#4dd0e1";
// [263]  ColorMap.put( {301} , {302} ) 
_B._colormap["cyan lighten-1"]="#26c6da";
// [264]  ColorMap.put( {303} , {304} ) 
_B._colormap["cyan"]="#00bcd4";
// [265]  ColorMap.put( {305} , {306} ) 
_B._colormap["cyan darken-1"]="#00acc1";
// [266]  ColorMap.put( {307} , {308} ) 
_B._colormap["cyan darken-2"]="#0097a7";
// [267]  ColorMap.put( {309} , {310} ) 
_B._colormap["cyan darken-3"]="#00838f";
// [268]  ColorMap.put( {311} , {312} ) 
_B._colormap["cyan darken-4"]="#006064";
// [269]  ColorMap.put( {313} , {314} ) 
_B._colormap["cyan accent-1"]="#84ffff";
// [270]  ColorMap.put( {315} , {316} ) 
_B._colormap["cyan accent-2"]="#18ffff";
// [271]  ColorMap.put( {317} , {318} ) 
_B._colormap["cyan accent-3"]="#00e5ff";
// [272]  ColorMap.put( {319} , {320} ) 
_B._colormap["cyan accent-4"]="#00b8d4";
// [273]  ColorMap.put( {321} , {322} ) 
_B._colormap["teal lighten-5"]="#e0f2f1";
// [274]  ColorMap.put( {323} , {324} ) 
_B._colormap["teal lighten-4"]="#b2dfdb";
// [275]  ColorMap.put( {325} , {326} ) 
_B._colormap["teal lighten-3"]="#80cbc4";
// [276]  ColorMap.put( {327} , {328} ) 
_B._colormap["teal lighten-2"]="#4db6ac";
// [277]  ColorMap.put( {329} , {330} ) 
_B._colormap["teal lighten-1"]="#26a69a";
// [278]  ColorMap.put( {331} , {332} ) 
_B._colormap["teal"]="#009688";
// [279]  ColorMap.put( {333} , {334} ) 
_B._colormap["teal darken-1"]="#00897b";
// [280]  ColorMap.put( {335} , {336} ) 
_B._colormap["teal darken-2"]="#00796b";
// [281]  ColorMap.put( {337} , {338} ) 
_B._colormap["teal darken-3"]="#00695c";
// [282]  ColorMap.put( {339} , {340} ) 
_B._colormap["teal darken-4"]="#004d40";
// [283]  ColorMap.put( {341} , {342} ) 
_B._colormap["teal accent-1"]="#a7ffeb";
// [284]  ColorMap.put( {343} , {344} ) 
_B._colormap["teal accent-2"]="#64ffda";
// [285]  ColorMap.put( {345} , {346} ) 
_B._colormap["teal accent-3"]="#1de9b6";
// [286]  ColorMap.put( {347} , {348} ) 
_B._colormap["teal accent-4"]="#00bfa5";
// [287]  ColorMap.put( {349} , {350} ) 
_B._colormap["green lighten-5"]="#e8f5e9";
// [288]  ColorMap.put( {351} , {352} ) 
_B._colormap["green lighten-4"]="#c8e6c9";
// [289]  ColorMap.put( {353} , {354} ) 
_B._colormap["green lighten-3"]="#a5d6a7";
// [290]  ColorMap.put( {355} , {356} ) 
_B._colormap["green lighten-2"]="#81c784";
// [291]  ColorMap.put( {357} , {358} ) 
_B._colormap["green lighten-1"]="#66bb6a";
// [292]  ColorMap.put( {359} , {360} ) 
_B._colormap["green"]="#4caf50";
// [293]  ColorMap.put( {361} , {362} ) 
_B._colormap["green darken-1"]="#43a047";
// [294]  ColorMap.put( {363} , {364} ) 
_B._colormap["green darken-2"]="#388e3c";
// [295]  ColorMap.put( {365} , {366} ) 
_B._colormap["green darken-3"]="#2e7d32";
// [296]  ColorMap.put( {367} , {368} ) 
_B._colormap["green darken-4"]="#1b5e20";
// [297]  ColorMap.put( {369} , {370} ) 
_B._colormap["green accent-1"]="#b9f6ca";
// [298]  ColorMap.put( {371} , {372} ) 
_B._colormap["green accent-2"]="#69f0ae";
// [299]  ColorMap.put( {373} , {374} ) 
_B._colormap["green accent-3"]="#00e676";
// [300]  ColorMap.put( {375} , {376} ) 
_B._colormap["green accent-4"]="#00c853";
// [301]  ColorMap.put( {377} , {378} ) 
_B._colormap["light-green lighten-5"]="#f1f8e9";
// [302]  ColorMap.put( {379} , {380} ) 
_B._colormap["light-green lighten-4"]="#dcedc8";
// [303]  ColorMap.put( {381} , {382} ) 
_B._colormap["light-green lighten-3"]="#c5e1a5";
// [304]  ColorMap.put( {383} , {384} ) 
_B._colormap["light-green lighten-2"]="#aed581";
// [305]  ColorMap.put( {385} , {386} ) 
_B._colormap["light-green lighten-1"]="#9ccc65";
// [306]  ColorMap.put( {387} , {388} ) 
_B._colormap["light-green"]="#8bc34a";
// [307]  ColorMap.put( {389} , {390} ) 
_B._colormap["light-green darken-1"]="#7cb342";
// [308]  ColorMap.put( {391} , {392} ) 
_B._colormap["light-green darken-2"]="#689f38";
// [309]  ColorMap.put( {393} , {394} ) 
_B._colormap["light-green darken-3"]="#558b2f";
// [310]  ColorMap.put( {395} , {396} ) 
_B._colormap["light-green darken-4"]="#33691e";
// [311]  ColorMap.put( {397} , {398} ) 
_B._colormap["light-green accent-1"]="#ccff90";
// [312]  ColorMap.put( {399} , {400} ) 
_B._colormap["light-green accent-2"]="#b2ff59";
// [313]  ColorMap.put( {401} , {402} ) 
_B._colormap["light-green accent-3"]="#76ff03";
// [314]  ColorMap.put( {403} , {404} ) 
_B._colormap["light-green accent-4"]="#64dd17";
// [315]  ColorMap.put( {405} , {406} ) 
_B._colormap["lime lighten-5"]="#f9fbe7";
// [316]  ColorMap.put( {407} , {408} ) 
_B._colormap["lime lighten-4"]="#f0f4c3";
// [317]  ColorMap.put( {409} , {410} ) 
_B._colormap["lime lighten-3"]="#e6ee9c";
// [318]  ColorMap.put( {411} , {412} ) 
_B._colormap["lime lighten-2"]="#dce775";
// [319]  ColorMap.put( {413} , {414} ) 
_B._colormap["lime lighten-1"]="#d4e157";
// [320]  ColorMap.put( {415} , {416} ) 
_B._colormap["lime"]="#cddc39";
// [321]  ColorMap.put( {417} , {418} ) 
_B._colormap["lime darken-1"]="#c0ca33";
// [322]  ColorMap.put( {419} , {420} ) 
_B._colormap["lime darken-2"]="#afb42b";
// [323]  ColorMap.put( {421} , {422} ) 
_B._colormap["lime darken-3"]="#9e9d24";
// [324]  ColorMap.put( {423} , {424} ) 
_B._colormap["lime darken-4"]="#827717";
// [325]  ColorMap.put( {425} , {426} ) 
_B._colormap["lime accent-1"]="#f4ff81";
// [326]  ColorMap.put( {427} , {428} ) 
_B._colormap["lime accent-2"]="#eeff41";
// [327]  ColorMap.put( {429} , {430} ) 
_B._colormap["lime accent-3"]="#c6ff00";
// [328]  ColorMap.put( {431} , {432} ) 
_B._colormap["lime accent-4"]="#aeea00";
// [329]  ColorMap.put( {433} , {434} ) 
_B._colormap["yellow lighten-5"]="#fffde7";
// [330]  ColorMap.put( {435} , {436} ) 
_B._colormap["yellow lighten-4"]="#fff9c4";
// [331]  ColorMap.put( {437} , {438} ) 
_B._colormap["yellow lighten-3"]="#fff59d";
// [332]  ColorMap.put( {439} , {440} ) 
_B._colormap["yellow lighten-2"]="#fff176";
// [333]  ColorMap.put( {441} , {442} ) 
_B._colormap["yellow lighten-1"]="#ffee58";
// [334]  ColorMap.put( {443} , {444} ) 
_B._colormap["yellow"]="#ffeb3b";
// [335]  ColorMap.put( {445} , {446} ) 
_B._colormap["yellow darken-1"]="#fdd835";
// [336]  ColorMap.put( {447} , {448} ) 
_B._colormap["yellow darken-2"]="#fbc02d";
// [337]  ColorMap.put( {449} , {450} ) 
_B._colormap["yellow darken-3"]="#f9a825";
// [338]  ColorMap.put( {451} , {452} ) 
_B._colormap["yellow darken-4"]="#f57f17";
// [339]  ColorMap.put( {453} , {454} ) 
_B._colormap["yellow accent-1"]="#ffff8d";
// [340]  ColorMap.put( {455} , {456} ) 
_B._colormap["yellow accent-2"]="#ffff00";
// [341]  ColorMap.put( {457} , {458} ) 
_B._colormap["yellow accent-3"]="#ffea00";
// [342]  ColorMap.put( {459} , {460} ) 
_B._colormap["yellow accent-4"]="#ffd600";
// [343]  ColorMap.put( {461} , {462} ) 
_B._colormap["amber lighten-5"]="#fff8e1";
// [344]  ColorMap.put( {463} , {464} ) 
_B._colormap["amber lighten-4"]="#ffecb3";
// [345]  ColorMap.put( {465} , {466} ) 
_B._colormap["amber lighten-3"]="#ffe082";
// [346]  ColorMap.put( {467} , {468} ) 
_B._colormap["amber lighten-2"]="#ffd54f";
// [347]  ColorMap.put( {469} , {470} ) 
_B._colormap["amber lighten-1"]="#ffca28";
// [348]  ColorMap.put( {471} , {472} ) 
_B._colormap["amber"]="#ffc107";
// [349]  ColorMap.put( {473} , {474} ) 
_B._colormap["amber darken-1"]="#ffb300";
// [350]  ColorMap.put( {475} , {476} ) 
_B._colormap["amber darken-2"]="#ffa000";
// [351]  ColorMap.put( {477} , {478} ) 
_B._colormap["amber darken-3"]="#ff8f00";
// [352]  ColorMap.put( {479} , {480} ) 
_B._colormap["amber darken-4"]="#ff6f00";
// [353]  ColorMap.put( {481} , {482} ) 
_B._colormap["amber accent-1"]="#ffe57f";
// [354]  ColorMap.put( {483} , {484} ) 
_B._colormap["amber accent-2"]="#ffd740";
// [355]  ColorMap.put( {485} , {486} ) 
_B._colormap["amber accent-3"]="#ffc400";
// [356]  ColorMap.put( {487} , {488} ) 
_B._colormap["amber accent-4"]="#ffab00";
// [357]  ColorMap.put( {489} , {490} ) 
_B._colormap["orange lighten-5"]="#fff3e0";
// [358]  ColorMap.put( {491} , {492} ) 
_B._colormap["orange lighten-4"]="#ffe0b2";
// [359]  ColorMap.put( {493} , {494} ) 
_B._colormap["orange lighten-3"]="#ffcc80";
// [360]  ColorMap.put( {495} , {496} ) 
_B._colormap["orange lighten-2"]="#ffb74d";
// [361]  ColorMap.put( {497} , {498} ) 
_B._colormap["orange lighten-1"]="#ffa726";
// [362]  ColorMap.put( {499} , {500} ) 
_B._colormap["orange"]="#ff9800";
// [363]  ColorMap.put( {501} , {502} ) 
_B._colormap["orange darken-1"]="#fb8c00";
// [364]  ColorMap.put( {503} , {504} ) 
_B._colormap["orange darken-2"]="#f57c00";
// [365]  ColorMap.put( {505} , {506} ) 
_B._colormap["orange darken-3"]="#ef6c00";
// [366]  ColorMap.put( {507} , {508} ) 
_B._colormap["orange darken-4"]="#e65100";
// [367]  ColorMap.put( {509} , {510} ) 
_B._colormap["orange accent-1"]="#ffd180";
// [368]  ColorMap.put( {511} , {512} ) 
_B._colormap["orange accent-2"]="#ffab40";
// [369]  ColorMap.put( {513} , {514} ) 
_B._colormap["orange accent-3"]="#ff9100";
// [370]  ColorMap.put( {515} , {516} ) 
_B._colormap["orange accent-4"]="#ff6d00";
// [371]  ColorMap.put( {517} , {518} ) 
_B._colormap["deep-orange lighten-5"]="#fbe9e7";
// [372]  ColorMap.put( {519} , {520} ) 
_B._colormap["deep-orange lighten-4"]="#ffccbc";
// [373]  ColorMap.put( {521} , {522} ) 
_B._colormap["deep-orange lighten-3"]="#ffab91";
// [374]  ColorMap.put( {523} , {524} ) 
_B._colormap["deep-orange lighten-2"]="#ff8a65";
// [375]  ColorMap.put( {525} , {526} ) 
_B._colormap["deep-orange lighten-1"]="#ff7043";
// [376]  ColorMap.put( {527} , {528} ) 
_B._colormap["deep-orange"]="#ff5722";
// [377]  ColorMap.put( {529} , {530} ) 
_B._colormap["deep-orange darken-1"]="#f4511e";
// [378]  ColorMap.put( {531} , {532} ) 
_B._colormap["deep-orange darken-2"]="#e64a19";
// [379]  ColorMap.put( {533} , {534} ) 
_B._colormap["deep-orange darken-3"]="#d84315";
// [380]  ColorMap.put( {535} , {536} ) 
_B._colormap["deep-orange darken-4"]="#bf360c";
// [381]  ColorMap.put( {537} , {538} ) 
_B._colormap["deep-orange accent-1"]="#ff9e80";
// [382]  ColorMap.put( {539} , {540} ) 
_B._colormap["deep-orange accent-2"]="#ff6e40";
// [383]  ColorMap.put( {541} , {542} ) 
_B._colormap["deep-orange accent-3"]="#ff3d00";
// [384]  ColorMap.put( {543} , {544} ) 
_B._colormap["deep-orange accent-4"]="#dd2c00";
// [385]  ColorMap.put( {545} , {546} ) 
_B._colormap["brown lighten-5"]="#efebe9";
// [386]  ColorMap.put( {547} , {548} ) 
_B._colormap["brown lighten-4"]="#d7ccc8";
// [387]  ColorMap.put( {549} , {550} ) 
_B._colormap["brown lighten-3"]="#bcaaa4";
// [388]  ColorMap.put( {551} , {552} ) 
_B._colormap["brown lighten-2"]="#a1887f";
// [389]  ColorMap.put( {553} , {554} ) 
_B._colormap["brown lighten-1"]="#8d6e63";
// [390]  ColorMap.put( {555} , {556} ) 
_B._colormap["brown"]="#795548";
// [391]  ColorMap.put( {557} , {558} ) 
_B._colormap["brown darken-1"]="#6d4c41";
// [392]  ColorMap.put( {559} , {560} ) 
_B._colormap["brown darken-2"]="#5d4037";
// [393]  ColorMap.put( {561} , {562} ) 
_B._colormap["brown darken-3"]="#4e342e";
// [394]  ColorMap.put( {563} , {564} ) 
_B._colormap["brown darken-4"]="#3e2723";
// [395]  ColorMap.put( {565} , {566} ) 
_B._colormap["grey lighten-5"]="#fafafa";
// [396]  ColorMap.put( {567} , {568} ) 
_B._colormap["grey lighten-4"]="#f5f5f5";
// [397]  ColorMap.put( {569} , {570} ) 
_B._colormap["grey lighten-3"]="#eeeeee";
// [398]  ColorMap.put( {571} , {572} ) 
_B._colormap["grey lighten-2"]="#e0e0e0";
// [399]  ColorMap.put( {573} , {574} ) 
_B._colormap["grey lighten-1"]="#bdbdbd";
// [400]  ColorMap.put( {575} , {576} ) 
_B._colormap["grey"]="#9e9e9e";
// [401]  ColorMap.put( {577} , {578} ) 
_B._colormap["grey darken-1"]="#757575";
// [402]  ColorMap.put( {579} , {580} ) 
_B._colormap["grey darken-2"]="#616161";
// [403]  ColorMap.put( {581} , {582} ) 
_B._colormap["grey darken-3"]="#424242";
// [404]  ColorMap.put( {583} , {584} ) 
_B._colormap["grey darken-4"]="#212121";
// [405]  ColorMap.put( {585} , {586} ) 
_B._colormap["blue-grey lighten-5"]="#eceff1";
// [406]  ColorMap.put( {587} , {588} ) 
_B._colormap["blue-grey lighten-4"]="#cfd8dc";
// [407]  ColorMap.put( {589} , {590} ) 
_B._colormap["blue-grey lighten-3"]="#b0bec5";
// [408]  ColorMap.put( {591} , {592} ) 
_B._colormap["blue-grey lighten-2"]="#90a4ae";
// [409]  ColorMap.put( {593} , {594} ) 
_B._colormap["blue-grey lighten-1"]="#78909c";
// [410]  ColorMap.put( {595} , {596} ) 
_B._colormap["blue-grey"]="#607d8b";
// [411]  ColorMap.put( {597} , {598} ) 
_B._colormap["blue-grey darken-1"]="#546e7a";
// [412]  ColorMap.put( {599} , {600} ) 
_B._colormap["blue-grey darken-2"]="#455a64";
// [413]  ColorMap.put( {601} , {602} ) 
_B._colormap["blue-grey darken-3"]="#37474f";
// [414]  ColorMap.put( {603} , {604} ) 
_B._colormap["blue-grey darken-4"]="#263238";
// [415]  ColorMap.put( {605} , {606} ) 
_B._colormap["black"]="#000000";
// [416]  ColorMap.put( {607} , {608} ) 
_B._colormap["white"]="#ffffff";
// [417]  ColorMap.put( {609} , {610} ) 
_B._colormap["transparent"]="transparent";
// End Sub
};

// [421] Sub AddTheme(themeName As String, ForeColor As String, ForeColorIntensity As String, BackColor As String, BackColorIntensity As String) 
_B.addtheme=function(_themename,_forecolor,_forecolorintensity,_backcolor,_backcolorintensity) {
var _fc,_fci,_bc,_classline;
// [422]  themeName = themeName.ToLowerCase 
_themename=_themename.toLowerCase();
// [424]  Dim fc As String = {1} 
_fc="" + _forecolor + "--text";
// [425]  Dim fci As String = {2} 
_fci="text--" + _forecolorintensity + "";
// [426]  Dim bc As String = {3} 
_bc="" + _backcolor + " " + _backcolorintensity + "";
// [428]  fc = fc.trim 
_fc=_fc.trim();
// [429]  fci = fci.Trim 
_fci=_fci.trim();
// [431]  If fc = {611} Then fc = {612} 
if (_fc=="--text") {_fc="";}
// [432]  If fci = {613} Then fci = {614} 
if (_fci=="text--") {_fci="";}
// [434]  Dim classLine As String = {4} 
_classline="" + _fc + " " + _fci + " " + _bc + "";
// [435]  classLine = classLine.Trim 
_classline=_classline.trim();
// [436]  classLine = classLine.Replace( {615} , {616} ) 
_classline=_classline.split("  ").join(" ");
// [437]  classLine = classLine.Trim 
_classline=_classline.trim();
// [438]  Themes.Put(themeName, classLine) 
_B._themes[_themename]=_classline;
// End Sub
};

// [441] Sub GetHexColor(Color As String, Intensity As String) As String 
_B.gethexcolor=function(_color,_intensity) {
var _scode,_hexcolor;
// [442]  Dim sCode As String = {5} 
_scode="" + _color + " " + _intensity + "";
// [443]  sCode = sCode.Trim 
_scode=_scode.trim();
// [445]  Dim hexColor As String = {617} 
_hexcolor="";
// [446]  If ColorMap.ContainsKey(sCode) Then 
if ((_scode in _B._colormap)) {
// [447]  hexColor = ColorMap.Get(sCode) 
_hexcolor=_B._colormap[_scode];
// [448]  End If 
}
// [449]  Return hexColor 
return _hexcolor;
// End Sub
};

// [453] Sub GetColorHex(sColor As String) As String 
_B.getcolorhex=function(_scolor) {
var _xcolor;
// [454]  sColor = sColor.tolowercase 
_scolor=_scolor.toLowerCase();
// [455]  If ColorMap.ContainsKey(sColor) Then 
if ((_scolor in _B._colormap)) {
// [456]  Dim xColor As String = ColorMap.Get(sColor) 
_xcolor=_B._colormap[_scolor];
// [457]  Return xColor 
return _xcolor;
// [458]  End If 
}
// [459]  Return {618} 
return "";
// End Sub
};

// [462] Sub ModuleExist(tagName As String) As Boolean 
_B.moduleexist=function(_tagname) {
var _b;
// [463]  tagName = tagName.tolowercase 
_tagname=_tagname.toLowerCase();
// [464]  Dim b As Boolean = Modules.ContainsKey(tagName) 
_b=(_tagname in _B._modules);
// [465]  Return b 
return _b;
// End Sub
};

// [469] Sub AddModule(tagName As String) As VueApp 
_B.addmodule=function(_tagname) {
// [470]  tagName = tagName.tolowercase 
_tagname=_tagname.toLowerCase();
// [471]  Modules.Put(tagName, tagName) 
_B._modules[_tagname]=_tagname;
// [472]  Return Me 
return _B;
// End Sub
};

// [476] Sub AddComponent(comp As VMElement) As VueApp 
_B.addcomponent=function(_comp) {
var _sid;
// [478]  comp.SetTag(comp.mName) 
_comp.settag(_comp._mname);
// [479]  Dim sid As String = comp.mName 
_sid=_comp._mname;
// [480]  If components.ContainsKey(sid) = True Then 
if ((_sid in _B._components)==true) {
// [481]  Return Me 
return _B;
// [482]  End If 
}
// [483]  components.Put(sid, comp.Component(False)) 
_B._components[_sid]=_comp.component(false);
// [484]  Return Me 
return _B;
// End Sub
};

// [488] Sub AddComponentZUI(comp As VMElement) As VueApp 
_B.addcomponentzui=function(_comp) {
var _sid;
// [490]  comp.TemplateFromPlaceholder 
_comp.templatefromplaceholder();
// [492]  comp.SetTag(comp.mName) 
_comp.settag(_comp._mname);
// [493]  Dim sid As String = comp.mName 
_sid=_comp._mname;
// [494]  If components.ContainsKey(sid) = True Then 
if ((_sid in _B._components)==true) {
// [495]  Return Me 
return _B;
// [496]  End If 
}
// [497]  components.Put(sid, comp.Component(False)) 
_B._components[_sid]=_comp.component(false);
// [498]  Return Me 
return _B;
// End Sub
};

// [503] Sub AddComponentBO(compName As String, comp As BANanoObject) As VueApp 
_B.addcomponentbo=function(_compname,_comp) {
// [504]  If components.ContainsKey(compName) = True Then Return Me 
if ((_compname in _B._components)==true) { return _B;}
// [505]  components.Put(compName, comp) 
_B._components[_compname]=_comp;
// [506]  Return Me 
return _B;
// End Sub
};

// [509] Sub NewList As List 
_B.newlist=function() {
var _elx;
// [510]  Dim elx As List 
_elx=[];
// [511]  elx.Initialize 
_elx.length=0;
// [512]  Return elx 
return _elx;
// End Sub
};

// [515] Sub NewMap As Map 
_B.newmap=function() {
var _nm;
// [516]  Dim nm As Map 
_nm={};
// [517]  nm.Initialize 
_nm={};
// [518]  Return nm 
return _nm;
// End Sub
};

// [523] Sub AddRoute(comp As VMElement) 
_B.addroute=function(_comp) {
var _eachroute;
// [524]  If comp.mname = {619} Then 
if (_comp._mname=="") {
// [525]  Log( {620} ) 
console.log("AddRoute: Please specify the name of the Route!");
// [526]  End If 
}
// [528]  Dim eachroute As Map = CreateMap() 
_eachroute={};
// [529]  eachroute.Put( {621} , comp.path) 
_eachroute["path"]=_comp._path;
// [530]  eachroute.Put( {622} , comp.mname) 
_eachroute["name"]=_comp._mname;
// [531]  eachroute.Put( {623} , comp.component(True)) 
_eachroute["component"]=_comp.component(true);
// [532]  eachroute.Put( {624} , True) 
_eachroute["props"]=true;
// [533]  routes.Add(eachroute) 
_B._routes.push(_eachroute);
// End Sub
};

// [538] Sub RegisterComponent(compName As String, compOptions As Map) As VueApp 
_B.registercomponent=function(_compname,_compoptions) {
// [539]  compName = compName.tolowercase 
_compname=_compname.toLowerCase();
// [540]  VAP.RunMethod( {625} , Array(compName, compOptions)) 
_B._vap["component"](_compname,_compoptions);
// [541]  Return Me 
return _B;
// End Sub
};

// [545] Sub BANanoEmpty(elID As String) 
_B.bananoempty=function(_elid) {
var _ph;
// [546]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [547]  Dim ph As BANanoElement 
_ph=null;
// [548]  ph.Initialize(elID) 
_ph=u(_elid);
// [549]  ph.empty 
_ph.empty();
// End Sub
};

// [553] Sub SetTemplate(tmp As String) As VueApp 
_B.settemplate=function(_tmp) {
// [554]  Template = tmp 
_B._template=_tmp;
// [555]  Return Me 
return _B;
// End Sub
};

// [571] Sub SetMounted(module As Object, methodName As String) As VueApp 
_B.setmounted=function(_module,_methodname) {
var _mounted;
// [572]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [573]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [574]  Dim mounted As BANanoObject = BANano.CallBack(module, methodName, Null) 
_mounted=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [575]  Options.Put( {629} , mounted) 
_B._options["mounted"]=_mounted;
// [576]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [577]  Return Me 
return _B;
// End Sub
};

// [582] Sub SetDestroyed(module As Object, methodName As String) As VueApp 
_B.setdestroyed=function(_module,_methodname) {
var _destroyed;
// [583]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [584]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [585]  Dim destroyed As BANanoObject = BANano.CallBack(module, methodName, Null) 
_destroyed=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [586]  Options.Put( {630} , destroyed) 
_B._options["destroyed"]=_destroyed;
// [587]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [588]  Return Me 
return _B;
// End Sub
};

// [593] Sub SetActivated(module As Object, methodName As String) As VueApp 
_B.setactivated=function(_module,_methodname) {
var _activated;
// [594]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [595]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [596]  Dim activated As BANanoObject = BANano.CallBack(module, methodName, Null) 
_activated=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [597]  Options.Put( {631} , activated) 
_B._options["activated"]=_activated;
// [598]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [599]  Return Me 
return _B;
// End Sub
};

// [604] Sub SetDeActivated(module As Object, methodName As String) As VueApp 
_B.setdeactivated=function(_module,_methodname) {
var _deactivated;
// [605]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [606]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [607]  Dim deactivated As BANanoObject = BANano.CallBack(module, methodName, Null) 
_deactivated=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [608]  Options.Put( {632} , deactivated) 
_B._options["deactivated"]=_deactivated;
// [609]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [610]  Return Me 
return _B;
// End Sub
};

// [615] Sub SetUpdated(module As Object, methodName As String) As VueApp 
_B.setupdated=function(_module,_methodname) {
var _updated;
// [616]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [617]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [618]  Dim updated As BANanoObject = BANano.CallBack(module, methodName, Null) 
_updated=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [619]  Options.Put( {633} , updated) 
_B._options["updated"]=_updated;
// [620]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [621]  Return Me 
return _B;
// End Sub
};

// [625] Sub SetBeforeMount(module As Object, methodName As String) As VueApp 
_B.setbeforemount=function(_module,_methodname) {
var _beforemount;
// [626]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [627]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [628]  Dim beforeMount As BANanoObject = BANano.CallBack(module, methodName, Null) 
_beforemount=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [629]  Options.Put( {634} , beforeMount) 
_B._options["beforeMount"]=_beforemount;
// [630]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [631]  Return Me 
return _B;
// End Sub
};

// [635] Sub SetBeforeUpdate(module As Object, methodName As String) As VueApp 
_B.setbeforeupdate=function(_module,_methodname) {
var _beforeupdate;
// [636]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [637]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [638]  Dim beforeUpdate As Boolean = BANano.CallBack(module, methodName, Null) 
_beforeupdate=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [639]  Options.Put( {635} , beforeUpdate) 
_B._options["beforeUpdate"]=_beforeupdate;
// [640]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [641]  Return Me 
return _B;
// End Sub
};

// [645] Sub SetBeforeDestroy(module As Object, methodName As String) As VueApp 
_B.setbeforedestroy=function(_module,_methodname) {
var _beforedestroy;
// [646]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [647]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [648]  Dim beforeDestroy As Boolean = BANano.CallBack(module, methodName, Null) 
_beforedestroy=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [649]  Options.Put( {636} , beforeDestroy) 
_B._options["beforeDestroy"]=_beforedestroy;
// [650]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [651]  Return Me 
return _B;
// End Sub
};

// [656] Sub SetBeforeCreate(module As Object, methodName As String) As VueApp 
_B.setbeforecreate=function(_module,_methodname) {
var _beforecreate;
// [657]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [658]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [659]  Dim beforeCreate As BANanoObject = BANano.CallBack(module, methodName, Null) 
_beforecreate=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [660]  Options.Put( {637} , beforeCreate) 
_B._options["beforeCreate"]=_beforecreate;
// [661]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [662]  Return Me 
return _B;
// End Sub
};

// [667] Sub SetCreated(module As Object, methodName As String) As VueApp 
_B.setcreated=function(_module,_methodname) {
var _created;
// [668]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [669]  If SubExists(module, methodName) = False Then Return Me 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return _B;}
// [670]  Dim created As BANanoObject = BANano.CallBack(module, methodName, Null) 
_created=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [671]  Options.Put( {638} , created) 
_B._options["created"]=_created;
// [672]  SetMethod(module, methodName) 
_B.setmethod(_module,_methodname,_B);
// [673]  Return Me 
return _B;
// End Sub
};

// [678] Sub State2Another(source As String, target As String, defaultValue As Object) 
_B.state2another=function(_source,_target,_defaultvalue) {
var _readobj;
// [679]  Dim readObj As Object = GetState(source) 
_readobj=_B.getstate(_source,_B);
// [680]  If readObj = Null Then readObj = defaultValue 
if (_readobj==null) {_readobj=_defaultvalue;}
// [681]  SetStateSingle(target, readObj) 
_B.setstatesingle(_target,_readobj,_B);
// End Sub
};

// [686] Sub SetFocus(refID As String) 
_B.setfocus=function(_refid) {
// [687]  refID = refID.tolowercase 
_refid=_refid.toLowerCase();
// [688]  refs.GetField(refID).RunMethod( {639} , Null) 
_B._refs[_refid]["focus"]();
// End Sub
};

// [692] Sub NullifyFileSelect(refID As String) 
_B.nullifyfileselect=function(_refid) {
// [693]  RefNull(refID) 
_B.refnull(_refid,_B);
// End Sub
};

// [696] Sub RefNull(refID As String) 
_B.refnull=function(_refid) {
// [697]  refID = refID.tolowercase 
_refid=_refid.toLowerCase();
// [698]  refs.GetField(refID).SetField( {640} , Null) 
_B._refs[_refid]["value"]=null;
// End Sub
};

// [703] Sub RefClick(refID As String) 
_B.refclick=function(_refid) {
// [704]  refID = refID.tolowercase 
_refid=_refid.toLowerCase();
// [705]  refs.GetField(refID).RunMethod( {641} , Null) 
_B._refs[_refid]["click"]();
// End Sub
};

// [708] Sub ShowFileSelect(fsName As String) 
_B.showfileselect=function(_fsname) {
// [709]  RefClick(fsName) 
_B.refclick(_fsname,_B);
// End Sub
};

// [713] Sub RefreshKey(keyName As String) As VueApp 
_B.refreshkey=function(_keyname) {
// [714]  keyName = keyName.ToLowerCase 
_keyname=_keyname.toLowerCase();
// [715]  SetData(keyName, DateTime.now) 
_B.setdata(_keyname,DateTime.Now(),_B);
// [716]  Return Me 
return _B;
// End Sub
};

// [719] Sub SetData(prop As String, value As Object) As VueApp 
_B.setdata=function(_prop,_value) {
var _bo,_cb;
// [720]  prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [721]  state.Put(prop, value) 
_B._state[_prop]=_value;
// [723]  Try 
try {
// [724]  Dim bo As BANanoObject = store.GetField(prop) 
_bo=_B._store[_prop];
// [725]  If BANano.IsNull(bo) Then Return Me 
if (is.null(_bo)) { return _B;}
// [726]  If BANano.IsUndefined(bo) Then Return Me 
if (is.undefined(_bo)) { return _B;}
// [728]  store.GetField(prop).SetField(prop, value) 
_B._store[_prop][_prop]=_value;
// [729]  Catch 
} catch(err) {
// [730]  Log( {6} ) 
console.log("Error - VueApp.SetDataGlobal: " + _prop + "." + _value + "");
// [731]  End Try 
}
// [734]  If computed.ContainsKey(prop) = False Then 
if ((_prop in _B._computed)==false) {
// [735]  Dim cb As BANanoObject = BANano.CallBackExtra(Me, {642} , Null, Array(prop)) 
_cb=function() {if (typeof _B[("getglobalstate").toLowerCase()]==="function") {return _B[("getglobalstate").toLowerCase()](_prop,_B)};};
// [736]  computed.Put(prop, cb.Result) 
_B._computed[_prop]=_cb;
// [737]  End If 
}
// [738]  Return Me 
return _B;
// End Sub
};

// [742] private Sub getglobalstate(prop As String) As Object 
_B.getglobalstate=function(_prop) {
var _rslt;
// [743]  prop = prop.tolowercase 
_prop=_prop.toLowerCase();
// [744]  Dim rslt As Object = GetData(prop) 
_rslt=_B.getdata(_prop,_B);
// [745]  Return rslt 
return _rslt;
// End Sub
};

// [748] Sub GetData(prop As String) As Object 
_B.getdata=function(_prop) {
var _rslt,_bo;
// [749]  prop = prop.tolowercase 
_prop=_prop.toLowerCase();
// [750]  Dim rslt As Object 
_rslt={};
// [751]  rslt = state.GetDefault(prop, Null) 
_rslt=(_B._state[_prop] || null);
// [752]  Try 
try {
// [753]  Dim bo As BANanoObject = store.GetField(prop) 
_bo=_B._store[_prop];
// [754]  If BANano.IsNull(bo) Then Return Me 
if (is.null(_bo)) { return _B;}
// [755]  If BANano.IsUndefined(bo) Then Return Me 
if (is.undefined(_bo)) { return _B;}
// [756]  rslt = store.GetField(prop) 
_rslt=_B._store[_prop];
// [757]  Catch 
} catch(err) {
// [758]  Log( {7} ) 
console.log("Error - VueApp.GetData: " + _prop + "");
// [759]  End Try 
}
// [760]  Return rslt 
return _rslt;
// End Sub
};

// [764] Sub IncrementGlobal(prop As String, addVal As Int) 
_B.incrementglobal=function(_prop,_addval) {
var _cc;
// [765]  prop = prop.tolowercase 
_prop=_prop.toLowerCase();
// [767]  Dim cc As Int = GetData(prop) 
_cc=_B.getdata(_prop,_B);
// [768]  cc = BANano.parseInt(cc) 
_cc=parseInt(_cc);
// [770]  cc = cc + addVal 
_cc=_cc+_addval;
// [772]  SetData(prop, cc) 
_B.setdata(_prop,_cc,_B);
// End Sub
};

// [776] Sub DecrementGlobal(prop As String, addVal As Int) 
_B.decrementglobal=function(_prop,_addval) {
var _cc;
// [777]  prop = prop.tolowercase 
_prop=_prop.toLowerCase();
// [779]  Dim cc As Int = GetData(prop) 
_cc=_B.getdata(_prop,_B);
// [780]  cc = BANano.parseInt(cc) 
_cc=parseInt(_cc);
// [782]  cc = cc - addVal 
_cc=_cc-_addval;
// [784]  SetData(prop, cc) 
_B.setdata(_prop,_cc,_B);
// End Sub
};

// [788] Sub SetFilter(Module As Object, methodName As String) As VueApp 
_B.setfilter=function(_module,_methodname) {
var _avalue,_cb;
// [789]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [790]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [791]  Dim avalue As Object 
_avalue={};
// [792]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(avalue)) 
_cb=function(_avalue) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_avalue,_B)};};
// [793]  filters.Put(methodName, cb) 
_B._filters[_methodname]=_cb;
// [794]  Else 
} else {
// [795]  Log( {8} ) 
console.log("SetFilter." + _methodname + " could not be found!");
// [796]  End If 
}
// [797]  Return Me 
return _B;
// End Sub
};

// [801] Sub SetComputed(k As String, module As Object, methodName As String) As VueApp 
_B.setcomputed=function(_k,_module,_methodname) {
var _cb;
// [802]  k = k.tolowercase 
_k=_k.toLowerCase();
// [803]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [804]  If SubExists(module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [805]  Dim cb As BANanoObject = BANano.CallBack(module, methodName, Null) 
_cb=function() {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_B)};};
// [806]  computed.Put(k, cb.Result) 
_B._computed[_k]=_cb;
// [807]  End If 
}
// [808]  Return Me 
return _B;
// End Sub
};

// [812] Sub SetWatch(Module As Object, k As String, bImmediate As Boolean, bDeep As Boolean, methodName As String) As VueApp 
_B.setwatch=function(_module,_k,_bimmediate,_bdeep,_methodname) {
var _newval,_cb,_deepit;
// [813]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [814]  k = k.tolowercase 
_k=_k.toLowerCase();
// [815]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [816]  Dim newVal As Object 
_newval={};
// [817]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(newVal)) 
_cb=function(_newval) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_newval,_B)};};
// [818]  Dim deepit As Map = CreateMap() 
_deepit={};
// [819]  deepit.Put( {643} , methodName) 
_deepit["handler"]=_methodname;
// [820]  deepit.Put( {644} , bDeep) 
_deepit["deep"]=_bdeep;
// [821]  deepit.Put( {645} , bImmediate) 
_deepit["immediate"]=_bimmediate;
// [822]  watches.Put(k, deepit) 
_B._watches[_k]=_deepit;
// [823]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [824]  End If 
}
// [825]  Return Me 
return _B;
// End Sub
};

// [829] Sub SetMethod(Module As Object, methodName As String) As VueApp 
_B.setmethod=function(_module,_methodname) {
var _e,_cb;
// [830]  methodName = methodName.ToLowerCase 
_methodname=_methodname.toLowerCase();
// [831]  If SubExists(Module, methodName) Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")) {
// [832]  Dim e As BANanoEvent 
_e=null;
// [833]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [834]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// [835]  End If 
}
// [836]  Return Me 
return _B;
// End Sub
};

// [840] Sub SetCallBack(methodName As String, cb As BANanoObject) 
_B.setcallback=function(_methodname,_cb) {
// [841]  methods.Put(methodName, cb) 
_B._methods[_methodname]=_cb;
// End Sub
};

// [845] Sub SetState(m As Map) As VueApp 
_B.setstate=function(_m) {
var _k,_v;
// [846]  For Each k As String In m.Keys 
var _kKeys = Object.keys(_m);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [847]  Dim v As Object = m.Get(k) 
_v=_m[_k];
// [848]  SetData(k, v) 
_B.setdata(_k,_v,_B);
// [849]  Next 
}
// [850]  Return Me 
return _B;
// End Sub
};

// [854] Sub HasState(k As String) As Boolean 
_B.hasstate=function(_k) {
// [855]  k = k.tolowercase 
_k=_k.toLowerCase();
// [856]  Return state.ContainsKey(k) 
return (_k in _B._state);
// End Sub
};

// [860] Sub GetState(k As String) As Object 
_B.getstate=function(_k) {
// [861]  Return GetData(k) 
return _B.getdata(_k,_B);
// End Sub
};

// [865] Sub ToggleItem(elID As String) As VueApp 
_B.toggleitem=function(_elid) {
var _sstate;
// [866]  elID = elID.ToLowerCase 
_elid=_elid.toLowerCase();
// [867]  Dim sstate As String = {9} 
_sstate="" + _elid + "show";
// [868]  ToggleState(sstate) 
_B.togglestate(_sstate,_B);
// [869]  Return Me 
return _B;
// End Sub
};

// [873] Sub ToggleState(stateName As String) As VueApp 
_B.togglestate=function(_statename) {
var _bcurrent,_optx;
// [874]  Dim bcurrent As Boolean = GetState(stateName) 
_bcurrent=_B.getstate(_statename,_B);
// [875]  bcurrent = Not(bcurrent) 
_bcurrent=!(_bcurrent);
// [876]  Dim optx As Map = CreateMap() 
_optx={};
// [877]  optx.Put(stateName, bcurrent) 
_optx[_statename]=_bcurrent;
// [878]  SetState(optx) 
_B.setstate(_optx,_B);
// [879]  Return Me 
return _B;
// End Sub
};

// [883] Sub StateExists(stateName As String) As Boolean 
_B.stateexists=function(_statename) {
// [884]  Return HasState(stateName) 
return _B.hasstate(_statename,_B);
// End Sub
};

// [888] Sub SetStateMap(mapKey As String, mapValues As Map) As VueApp 
_B.setstatemap=function(_mapkey,_mapvalues) {
var _opt;
// [889]  mapKey = mapKey.tolowercase 
_mapkey=_mapkey.toLowerCase();
// [890]  Dim opt As Map = CreateMap() 
_opt={};
// [891]  opt.Put(mapKey, mapValues) 
_opt[_mapkey]=_mapvalues;
// [892]  SetState(opt) 
_B.setstate(_opt,_B);
// [893]  Return Me 
return _B;
// End Sub
};

// [897] Sub SetStateList(mapKey As String, mapValues As List) As VueApp 
_B.setstatelist=function(_mapkey,_mapvalues) {
var _opt;
// [898]  mapKey = mapKey.tolowercase 
_mapkey=_mapkey.toLowerCase();
// [899]  Dim opt As Map = CreateMap() 
_opt={};
// [900]  opt.Put(mapKey, mapValues) 
_opt[_mapkey]=_mapvalues;
// [901]  SetState(opt) 
_B.setstate(_opt,_B);
// [902]  Return Me 
return _B;
// End Sub
};

// [905] Sub SetStateListValues(mapValues As List) As VueApp 
_B.setstatelistvalues=function(_mapvalues) {
var _lstvalue,_opt;
// [906]  For Each lstValue As String In mapValues 
for (var _lstvalueindex=0;_lstvalueindex<_mapvalues.length;_lstvalueindex++) {
_lstvalue=_mapvalues[_lstvalueindex];
// [907]  lstValue = lstValue.tolowercase 
_lstvalue=_lstvalue.toLowerCase();
// [908]  Dim opt As Map = CreateMap() 
_opt={};
// [909]  opt.Put(lstValue, {646} ) 
_opt[_lstvalue]="";
// [910]  SetState(opt) 
_B.setstate(_opt,_B);
// [911]  Next 
}
// [912]  Return Me 
return _B;
// End Sub
};

// [915] Sub GetStates(lst As List) As Map 
_B.getstates=function(_lst) {
var _smm,_lstrec,_ostate;
// [916]  Dim smm As Map = CreateMap() 
_smm={};
// [917]  For Each lstrec As String In lst 
for (var _lstrecindex=0;_lstrecindex<_lst.length;_lstrecindex++) {
_lstrec=_lst[_lstrecindex];
// [918]  lstrec = lstrec.tolowercase 
_lstrec=_lstrec.toLowerCase();
// [919]  Dim ostate As Object = GetState(lstrec) 
_ostate=_B.getstate(_lstrec,_B);
// [920]  smm.Put(lstrec, ostate) 
_smm[_lstrec]=_ostate;
// [921]  Next 
}
// [922]  Return smm 
return _smm;
// End Sub
};

// [925] Sub SetStateTrue(k As String) As VueApp 
_B.setstatetrue=function(_k) {
// [926]  SetStateSingle(k,True) 
_B.setstatesingle(_k,true,_B);
// [927]  Return Me 
return _B;
// End Sub
};

// [930] Sub SetStateFalse(k As String) As VueApp 
_B.setstatefalse=function(_k) {
// [931]  SetStateSingle(k,False) 
_B.setstatesingle(_k,false,_B);
// [932]  Return Me 
return _B;
// End Sub
};

// [935] private Sub CStr(o As Object) As String 
_B.cstr=function(_o) {
// [936]  If o = BANano.UNDEFINED Then o = {647} 
if (_o==undefined) {_o="";}
// [937]  Return {648} & o 
return ""+_o;
// End Sub
};

// [941] Sub SetStateSingle(k As String, v As Object) As VueApp 
_B.setstatesingle=function(_k,_v) {
var _optx;
// [942]  k = k.tolowercase 
_k=_k.toLowerCase();
// [943]  Dim optx As Map = CreateMap() 
_optx={};
// [944]  optx.Put(k, v) 
_optx[_k]=_v;
// [945]  SetState(optx) 
_B.setstate(_optx,_B);
// [946]  Return Me 
return _B;
// End Sub
};

// [949] Sub CallComputed(methodName As String) As Object 
_B.callcomputed=function(_methodname) {
// [950]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [951]  Return VAP.GetField(methodName) 
return _B._vap[_methodname];
// End Sub
};

// [954] Sub CallMethod(methodName As String) 
_B.callmethod=function(_methodname) {
// [955]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [956]  VAP.RunMethod(methodName, Null) 
_B._vap[_methodname]();
// End Sub
};

// [959] Sub RunMethod(methodName As String, params As Object) As BANanoObject 
_B.runmethod=function(_methodname,_params) {
// [960]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [961]  Return VAP.RunMethod(methodName, params) 
return _B._vap[_methodname](_params);
// End Sub
};

// [965] Sub GetElementByID(elID As String) As BANanoElement 
_B.getelementbyid=function(_elid) {
var _elx;
// [966]  Dim elx As BANanoElement 
_elx=null;
// [967]  elx.Initialize( {10} ) 
_elx=u("#" + _elid + "");
// [968]  Return elx 
return _elx;
// End Sub
};

// [972] Sub Serve 
_B.serve=function() {
var _ropt,_vrouter,_data,_rkey,_elkey,_emitkey,_srouter,_sstore,_szircle;
// [974]  store = VAP.RunMethod( {649} , Array(state)) 
_B._store=_B._vap["observable"](_B._state);
// [975]  VAP.GetField( {650} ).SetField( {651} , store) 
_B._vap["prototype"]["$store"]=_B._store;
// [977]  ZUICanvas.AddToParent( {652} ) 
_B._zuicanvas.addtoparent("app");
// [978]  ZUICanvas.AddToApp(Me) 
_B._zuicanvas.addtoapp(_B);
// [983]  Options.Put( {657} , {658} ) 
_B._options["el"]="#app";
// [984]  Options.Put( {659} , store) 
_B._options["store"]=_B._store;
// [990]  body.Initialize( {660} ) 
_B._body=u("#body");
// [992]  Template = body.GetHTML 
_B._template=_B._body.html();
// [993]  SetTemplate(Template) 
_B.settemplate(_B._template,_B);
// [995]  If routes.Size > 0 Then 
if (_B._routes.length>0) {
// [996]  Dim ropt As Map = CreateMap() 
_ropt={};
// [997]  ropt.Put( {661} , {662} ) 
_ropt["mode"]="history";
// [998]  ropt.Put( {663} , routes) 
_ropt["routes"]=_B._routes;
// [999]  Dim vrouter As BANanoObject 
_vrouter=null;
// [1000]  vrouter.Initialize2( {664} , Array(ropt)) 
_vrouter=new VueRouter(_ropt);
// [1001]  Options.Put( {665} , vrouter) 
_B._options["router"]=_vrouter;
// [1002]  End If 
}
// [1004]  Dim data As Map = CreateMap() 
_data={};
// [1005]  Options.Put( {666} , components) 
_B._options["components"]=_B._components;
// [1006]  Options.put( {667} , data) 
_B._options["data"]=_data;
// [1007]  Options.Put( {668} , methods) 
_B._options["methods"]=_B._methods;
// [1008]  Options.Put( {669} , filters) 
_B._options["filters"]=_B._filters;
// [1009]  Options.Put( {670} , computed) 
_B._options["computed"]=_B._computed;
// [1010]  Options.Put( {671} , watches) 
_B._options["watch"]=_B._watches;
// [1011]  Options.Put( {672} , Template) 
_B._options["template"]=_B._template;
// [1012]  VAP.Initialize2( {673} , Array(Options)) 
_B._vap=new Vue(_B._options);
// [1014]  Dim rKey As String = {674} 
_rkey="$refs";
// [1015]  refs = VAP.GetField(rKey) 
_B._refs=_B._vap[_rkey];
// [1016]  Dim elKey As String = {675} 
_elkey="$el";
// [1017]  el = VAP.GetField(elKey) 
_B._el=_B._vap[_elkey];
// [1018]  Dim emitKey As String = {676} 
_emitkey="$emit";
// [1019]  emit = VAP.GetField(emitKey) 
_B._emit=_B._vap[_emitkey];
// [1020]  Dim srouter As String = {677} 
_srouter="$router";
// [1021]  router = VAP.GetField(srouter) 
_B._router=_B._vap[_srouter];
// [1022]  Dim sstore As String = {678} 
_sstore="$store";
// [1023]  store = VAP.GetField(sstore) 
_B._store=_B._vap[_sstore];
// [1024]  Dim szircle As String = {679} 
_szircle="$zircle";
// [1025]  zircle = VAP.GetField(szircle) 
_B._zircle=_B._vap[_szircle];
// [1028]  zui.Initialize(zircle) 
_B._zui.initialize(_B._zircle);
// End Sub
};

// [1032] Sub ZuiSetView(sView As String) 
_B.zuisetview=function(_sview) {
// [1033]  zui.SetView(sView) 
_B._zui.setview(_sview);
// End Sub
};

// [1037] Sub ZuiToView(sview As String) 
_B.zuitoview=function(_sview) {
// [1038]  zui.ToView(sview) 
_B._zui.toview(_sview);
// End Sub
};

// [1042] Sub ZuiGetParams(prop As String) As BANanoObject 
_B.zuigetparams=function(_prop) {
// [1043]  Return zui.GetParams(prop) 
return _B._zui.getparams(_prop);
// End Sub
};

// [1047] Sub NavigateTo(sPath As String) 
_B.navigateto=function(_spath) {
var _namem;
// [1048]  sPath = sPath.tolowercase 
_spath=_spath.toLowerCase();
// [1049]  Dim namem As Map = CreateMap() 
_namem={};
// [1050]  namem.put( {680} , sPath) 
_namem["path"]=_spath;
// [1051]  router.RunMethod( {681} , Array(namem)) 
_B._router["push"](_namem);
// End Sub
};

// [1055] Sub Use(bo As BANanoObject) 
_B.use=function(_bo) {
// [1056]  VAP.RunMethod( {682} , bo) 
_B._vap["use"](_bo);
// End Sub
};

// [1060] Sub Use1(bo As BANanoObject, uopt As Map) 
_B.use1=function(_bo,_uopt) {
// [1061]  VAP.RunMethod( {683} , Array(bo, uopt)) 
_B._vap["use"](_bo,_uopt);
// End Sub
};

// [1064] Sub NotState(stateName As String) As Boolean 
_B.notstate=function(_statename) {
var _bcurrent;
// [1065]  Dim bcurrent As Boolean = GetState(stateName) 
_bcurrent=_B.getstate(_statename,_B);
// [1066]  If bcurrent = Null Then bcurrent = True 
if (_bcurrent==null) {_bcurrent=true;}
// [1067]  bcurrent = Not(bcurrent) 
_bcurrent=!(_bcurrent);
// [1068]  Return bcurrent 
return _bcurrent;
// End Sub
};

// [1071] Sub Increment(k As String) As VueApp 
_B.increment=function(_k) {
var _oldv;
// [1072]  Dim oldV As String = GetState(k) 
_oldv=_B.getstate(_k,_B);
// [1073]  If oldV = {684} Then oldV = {685} 
if (_oldv=="") {_oldv="1";}
// [1074]  oldV = BANano.parseInt(oldV) + 1 
_oldv=parseInt(_oldv)+1;
// [1075]  SetStateSingle(k, oldV) 
_B.setstatesingle(_k,_oldv,_B);
// [1076]  Return Me 
return _B;
// End Sub
};

// [1079] Sub Decrement(k As String) As VueApp 
_B.decrement=function(_k) {
var _oldv;
// [1080]  Dim oldV As String = GetState(k) 
_oldv=_B.getstate(_k,_B);
// [1081]  If oldV = {686} Then oldV = {687} 
if (_oldv=="") {_oldv="0";}
// [1082]  oldV = BANano.parseInt(oldV) - 1 
_oldv=parseInt(_oldv)-1;
// [1083]  SetStateSingle(k, oldV) 
_B.setstatesingle(_k,_oldv,_B);
// [1084]  Return Me 
return _B;
// End Sub
};

// [1088] Sub CreateOwnComponent(id As String, compName As String) As VMElement 
_B.createowncomponent=function(_id,_compname) {
var _elx;
// [1089]  Dim elx As VMElement 
_elx= new banano_bananozui_vmelement();
// [1090]  elx.Initialize(Me, id, id) 
_elx.initialize(_B,_id,_id);
// [1091]  elx.SetTag(compName) 
_elx.settag(_compname);
// [1092]  Return elx 
return _elx;
// End Sub
};

// [1096] Sub CreateDynamicComponent(id As String, viewID As String, compID As String) As VMElement 
_B.createdynamiccomponent=function(_id,_viewid,_compid) {
var _elx;
// [1097]  Dim elx As VMElement 
_elx= new banano_bananozui_vmelement();
// [1098]  elx.Initialize(Me, id, id) 
_elx.initialize(_B,_id,_id);
// [1099]  elx.SetTag( {688} ) 
_elx.settag("component");
// [1100]  elx.BindDynamicComponent(viewID, compID) 
_elx.binddynamiccomponent(_viewid,_compid);
// [1101]  Return elx 
return _elx;
// End Sub
};

// [1104] Sub SetRequired(elID As String, b As Boolean) 
_B.setrequired=function(_elid,_b) {
// [1105]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [1106]  SetStateSingle( {11} , b) 
_B.setstatesingle("" + _elid + "required",_b,_B);
// End Sub
};

// [1109] Sub Enable(elID As String) 
_B.enable=function(_elid) {
// [1110]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [1111]  SetStateSingle( {12} , False) 
_B.setstatesingle("" + _elid + "disabled",false,_B);
// End Sub
};

// [1114] Sub Disable(elID As String) 
_B.disable=function(_elid) {
// [1115]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [1116]  SetStateSingle( {13} , True) 
_B.setstatesingle("" + _elid + "disabled",true,_B);
// End Sub
};

// [1119] Sub SetEnabled(elID As String, b As Boolean) 
_B.setenabled=function(_elid,_b) {
// [1120]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [1121]  SetStateSingle( {14} , b) 
_B.setstatesingle("" + _elid + "disabled",_b,_B);
// End Sub
};

// [1125] Sub Hide(elID As String) 
_B.hide=function(_elid) {
// [1126]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [1127]  SetStateSingle( {15} , False) 
_B.setstatesingle("" + _elid + "show",false,_B);
// End Sub
};

// [1131] Sub Show(elID As String) 
_B.show=function(_elid) {
// [1132]  SetStateSingle( {16} , True) 
_B.setstatesingle("" + _elid + "show",true,_B);
// End Sub
};

// [1136] Sub BANanoGetHTML(id As String) As String 
_B.bananogethtml=function(_id) {
var _be,_stemplate;
// [1137]  id = id.tolowercase 
_id=_id.toLowerCase();
// [1138]  Dim be As BANanoElement 
_be=null;
// [1139]  be.Initialize(id) 
_be=u(_id);
// [1140]  Dim sTemplate As String = be.GetHTML 
_stemplate=_be.html();
// [1141]  be.Empty 
_be.empty();
// [1142]  Return sTemplate 
return _stemplate;
// End Sub
};

// [1147] Sub BANanoGetHTML1(source As String, target As String) 
_B.bananogethtml1=function(_source,_target) {
var _ssource;
// [1148]  source = source.tolowercase 
_source=_source.toLowerCase();
// [1149]  target = target.tolowercase 
_target=_target.toLowerCase();
// [1150]  Dim ssource As String = BANanoGetHTML(source) 
_ssource=_B.bananogethtml(_source,_B);
// [1152]  BANano.GetElement(target).Append(ssource) 
u(_target).append(_ssource);
// End Sub
};

// [1155] Sub FormValidate(frmID As String) 
_B.formvalidate=function(_frmid) {
// [1156]  frmID = frmID.tolowercase 
_frmid=_frmid.toLowerCase();
// [1157]  refs.GetField(frmID).RunMethod( {689} , Null) 
_B._refs[_frmid]["validate"]();
// End Sub
};

// [1160] Sub FormReset(frmID As String) 
_B.formreset=function(_frmid) {
// [1161]  frmID = frmID.tolowercase 
_frmid=_frmid.toLowerCase();
// [1162]  refs.GetField(frmID).RunMethod( {690} , Null) 
_B._refs[_frmid]["reset"]();
// End Sub
};

// [1166] Sub AddFileSelect(Module As Object, parentID As String, fid As String) 
_B.addfileselect=function(_module,_parentid,_fid) {
var _fu;
// [1167]  Dim fu As VMElement = CreateInvisibleFileInput(Module, fid) 
_fu=_B.createinvisiblefileinput(_module,_fid,_B);
// [1168]  fu.AddToParent(parentID) 
_fu.addtoparent(_parentid);
// End Sub
};

// [1172] private Sub CreateInvisibleFileInput(Module As Object, fid As String) As VMElement 
_B.createinvisiblefileinput=function(_module,_fid) {
var _methodname,_fu,_e,_cb;
// [1173]  fid = fid.tolowercase 
_fid=_fid.toLowerCase();
// [1174]  Dim methodName As String = {17} 
_methodname="" + _fid + "_change";
// [1176]  Dim fu As VMElement 
_fu= new banano_bananozui_vmelement();
// [1177]  fu.Initialize(Module, fid, fid) 
_fu.initialize(_module,_fid,_fid);
// [1178]  fu.SetTag( {691} ) 
_fu.settag("input");
// [1179]  fu.SetAttr( {692} , {693} ) 
_fu.setattr("v-show","false");
// [1180]  fu.SetAttr( {694} , fid) 
_fu.setattr("ref",_fid);
// [1181]  fu.SetAttr( {695} , {696} ) 
_fu.setattr("type","file");
// [1182]  fu.SetAttr( {697} , methodName) 
_fu.setattr("v-on:change",_methodname);
// [1184]  If SubExists(Module, methodName) = False Then 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) {
// [1185]  Return fu 
return _fu;
// [1186]  End If 
}
// [1187]  Dim e As BANanoEvent 
_e=null;
// [1188]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [1190]  SetCallBack(methodName, cb) 
_B.setcallback(_methodname,_cb,_B);
// [1191]  Return fu 
return _fu;
// End Sub
};

// [1195] Sub SetOnClick(Module As Object, methodName As String) 
_B.setonclick=function(_module,_methodname) {
var _e,_cb;
// [1196]  methodName = methodName.tolowercase 
_methodname=_methodname.toLowerCase();
// [1197]  If SubExists(Module, methodName) = False Then Return 
if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return ;}
// [1198]  Dim e As BANanoEvent 
_e=null;
// [1199]  Dim cb As BANanoObject = BANano.CallBack(Module, methodName, Array(e)) 
_cb=function(_e) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](_e,_B)};};
// [1201]  SetCallBack(methodName, cb) 
_B.setcallback(_methodname,_cb,_B);
// End Sub
};

// [1204] Sub AddHTMLElement(Module As Object, parentID As String, elID As String, tag As String, props As Map, styleProps As Map, classNames As List, loose As List, Text As String) 
_B.addhtmlelement=function(_module,_parentid,_elid,_tag,_props,_styleprops,_classnames,_loose,_text) {
var _elit,_k,_v,_selement;
// [1205]  parentID = parentID.ToLowerCase 
_parentid=_parentid.toLowerCase();
// [1206]  elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [1207]  parentID = parentID.Replace( {698} , {699} ) 
_parentid=_parentid.split("#").join("");
// [1208]  elID = elID.Replace( {700} , {701} ) 
_elid=_elid.split("#").join("");
// [1210]  Dim elIT As VHTML 
_elit= new banano_bananozui_vhtml();
// [1211]  elIT.Initialize(Module, elID, elID) 
_elit.initialize(_module,_elid,_elid);
// [1212]  elIT.SetText(Text) 
_elit.settext(_text);
// [1213]  elIT.SetTagName(tag) 
_elit.settagname(_tag);
// [1215]  If loose <> Null Then 
if (_loose!=null) {
// [1216]  For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [1217]  elIT.SetAttr(k, True) 
_elit.setattr(_k,true);
// [1218]  Next 
}
// [1219]  End If 
}
// [1220]  If props <> Null Then 
if (_props!=null) {
// [1221]  For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1222]  Dim v As String = props.Get(k) 
_v=_props[_k];
// [1223]  elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [1224]  Next 
}
// [1225]  End If 
}
// [1226]  If styleProps <> Null Then 
if (_styleprops!=null) {
// [1227]  For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [1228]  Dim v As String = styleProps.get(k) 
_v=_styleprops[_k];
// [1229]  elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [1230]  Next 
}
// [1231]  End If 
}
// [1232]  If classNames <> Null Then 
if (_classnames!=null) {
// [1233]  elIT.AddClass(classNames) 
_elit.addclass(_classnames);
// [1234]  End If 
}
// [1236]  Dim sElement As String = elIT.tostring 
_selement=_elit.tostring();
// [1237]  BANano.GetElement( {18} ).Append(sElement) 
u("#" + _parentid + "").append(_selement);
// End Sub
};

// [1241] Sub ZuiCreateSlide(Module As Object, slideName As String, templateName As String) As VMElement 
_B.zuicreateslide=function(_module,_slidename,_templatename) {
var _slide;
// [1242]  templateName = templateName.ToLowerCase 
_templatename=_templatename.toLowerCase();
// [1243]  templateName = templateName.Replace( {702} , {703} ) 
_templatename=_templatename.split("#").join("");
// [1244]  slideName = slideName.tolowercase 
_slidename=_slidename.toLowerCase();
// [1246]  Dim slide As VMElement 
_slide= new banano_bananozui_vmelement();
// [1247]  slide.Initialize(Module, slideName, slideName) 
_slide.initialize(_module,_slidename,_slidename);
// [1249]  slide.SetBANanoTemplate( {19} ) 
_slide.setbananotemplate("#" + _templatename + "");
// [1251]  Return slide 
return _slide;
// End Sub
};

}
/* =========================== ZircleUI  =========================== */
function banano_bananozui_zircleui() {
var _B=this;
_B._z=null;

_B._zui_style={};

_B._size_xxl="xxl";

_B._size_xl="xl";

_B._size_l="l";

_B._size_m="m";

_B._size_s="s";

_B._size_xs="xs";

_B._size_xxs="xxs";

_B._mode_light="light";

_B._mode_light_filled="light-filled";

_B._mode_dark="dark";

_B._mode_dark_filled="dark-filled";

_B._theme_white="white";

_B._theme_light_blue="light-blue";

_B._theme_blue="blue";

_B._theme_green="green";

_B._theme_orange="orange";

_B._theme_yellow="yellow";

_B._theme_red="red";

_B._theme_purple="purple";

_B._theme_black="black";

_B._theme_gray="gray";

_B._slot_extension="extension";

_B._slot_media="media";

_B._slot_default="";

_B._pos_top="top";

_B._pos_left="left";

_B._pos_bottom="bottom";

_B._pos_right="right";

_B._mode_full="full";

_B._mode_mixed="mixed";

_B._config={};

// [43] Public Sub Initialize(zui As BANanoObject) As ZircleUI 
_B.initialize=function(_zui) {
// [44]  z = zui 
_B._z=_zui;
// [45]  ZUI_Style.Initialize 
_B._zui_style={};
// [46]  config.Initialize 
_B._config={};
// [47]  Return Me 
return _B;
// End Sub
};

// [51] Sub SetFullMode As ZircleUI 
_B.setfullmode=function() {
// [52]  config.Put( {31} , MODE_FULL) 
_B._config["mode"]=_B._mode_full;
// [53]  Return Me 
return _B;
// End Sub
};

// [57] Sub SetMixedMode As ZircleUI 
_B.setmixedmode=function() {
// [58]  config.Put( {32} , MODE_FULL) 
_B._config["mode"]=_B._mode_full;
// [59]  Return Me 
return _B;
// End Sub
};

// [62] Sub SetView(View As String) As ZircleUI 
_B.setview=function(_view) {
// [63]  z.RunMethod( {33} , Array(View)) 
_B._z["setView"](_view);
// [64]  Return Me 
return _B;
// End Sub
};

// [67] Sub ToView(view As String) As ZircleUI 
_B.toview=function(_view) {
// [68]  z.RunMethod( {34} , Array(view)) 
_B._z["toView"](_view);
// [69]  Return Me 
return _B;
// End Sub
};

// [72] Sub GetParams(prop As String) As BANanoObject 
_B.getparams=function(_prop) {
var _bo,_item;
// [73]  Dim bo As BANanoObject 
_bo=null;
// [74]  Dim item As BANanoObject 
_item=null;
// [76]  bo = z.RunMethod( {35} , Null) 
_bo=_B._z["getParams"]();
// [77]  item = bo.GetField(prop) 
_item=_bo[_prop];
// [78]  Return item 
return _item;
// End Sub
};

// [82] Sub SetTheme1(scolor As String, sintensity As String) As ZircleUI 
_B.settheme1=function(_scolor,_sintensity) {
// [83]  ZUI_Style.Put( {36} , scolor) 
_B._zui_style["theme"]=_scolor;
// [84]  ZUI_Style.Put( {37} , sintensity) 
_B._zui_style["mode"]=_sintensity;
// [85]  Return Me 
return _B;
// End Sub
};

// [89] Sub SetTheme(scolor As String) As ZircleUI 
_B.settheme=function(_scolor) {
// [90]  ZUI_Style.Put( {38} , scolor) 
_B._zui_style["theme"]=_scolor;
// [91]  Return Me 
return _B;
// End Sub
};

// [95] Sub SetMode(smode As String) As ZircleUI 
_B.setmode=function(_smode) {
// [96]  ZUI_Style.Put( {39} , smode) 
_B._zui_style["mode"]=_smode;
// [97]  Return Me 
return _B;
// End Sub
};

// [100] Sub Refresh 
_B.refresh=function() {
// [101]  config.Put( {40} , ZUI_Style) 
_B._config["style"]=_B._zui_style;
// [102]  z.RunMethod( {41} , config) 
_B._z["config"](_B._config);
// End Sub
};

// [106] Sub GetTheme As String 
_B.gettheme=function() {
var _res;
// [107]  Dim res As String = z.RunMethod( {42} , Null).Result 
_res=_B._z["getTheme"]();
// [108]  Return res 
return _res;
// End Sub
};

// [112] Sub GetThemeMode As String 
_B.getthememode=function() {
var _res;
// [113]  Dim res As String = z.RunMethod( {43} , Null).Result 
_res=_B._z["getThemeMode"]();
// [114]  Return res 
return _res;
// End Sub
};

// [118] Sub AddView(Module As Object, vID As String, vLabel As String, vSize As String, vLabelPos As String, vSlider As Boolean, vProgress As Int, vImagePath As String, vSlot As String, Text As String) As ZUIZview 
_B.addview=function(_module,_vid,_vlabel,_vsize,_vlabelpos,_vslider,_vprogress,_vimagepath,_vslot,_text) {
var _parentid,_zv;
// [120]  Dim parentID As String = {44} 
_parentid="placeholder";
// [121]  vID = vID.tolowercase 
_vid=_vid.toLowerCase();
// [123]  parentID = parentID.Replace( {45} , {46} ) 
_parentid=_parentid.split("#").join("");
// [124]  vID = vID.Replace( {47} , {48} ) 
_vid=_vid.split("#").join("");
// [126]  Dim zv As ZUIZview 
_zv= new banano_bananozui_zuizview();
// [127]  zv.Initialize(Module, vID, vID) 
_zv.initialize(_module,_vid,_vid);
// [128]  zv.Label = vLabel 
_zv.setlabel(_vlabel);
// [129]  zv.Size = vSize 
_zv.setsize(_vsize);
// [130]  If vLabelPos <> {49} Then zv.LabelPos = vLabelPos 
if (_vlabelpos!="") {_zv.setlabelpos(_vlabelpos);}
// [131]  zv.Slider = vSlider 
_zv.setslider(_vslider);
// [132]  zv.Progress = vProgress 
_zv.setprogress(_vprogress);
// [133]  If vSlot <> {50} Then zv.Slot = vSlot 
if (_vslot!="") {_zv.setslot(_vslot);}
// [134]  If vImagePath <> {51} Then zv.ImagePath = vImagePath 
if (_vimagepath!="") {_zv.setimagepath(_vimagepath);}
// [135]  zv.SetText(Text) 
_zv.settext(_text);
// [137]  zv.AddToParent(parentID) 
_zv.addtoparent(_parentid);
// [139]  Return zv 
return _zv;
// End Sub
};

// [143] Sub AddList(Module As Object, parentID As String, vID As String, vSlot As String, vItems As String, vPerPage As String) As ZUIZlist 
_B.addlist=function(_module,_parentid,_vid,_vslot,_vitems,_vperpage) {
var _zl;
// [144]  parentID = parentID.tolowercase 
_parentid=_parentid.toLowerCase();
// [145]  vID = vID.tolowercase 
_vid=_vid.toLowerCase();
// [147]  parentID = parentID.Replace( {52} , {53} ) 
_parentid=_parentid.split("#").join("");
// [148]  vID = vID.Replace( {54} , {55} ) 
_vid=_vid.split("#").join("");
// [150]  Dim zl As ZUIZlist 
_zl= new banano_bananozui_zuizlist();
// [151]  zl.Initialize(Module, vID, vID) 
_zl.initialize(_module,_vid,_vid);
// [152]  zl.Slot = vSlot 
_zl.setslot(_vslot);
// [153]  zl.Items = vItems 
_zl.setitems(_vitems);
// [154]  zl.PerPage = vPerPage 
_zl.setperpage(_vperpage);
// [156]  zl.AddToParent(parentID) 
_zl.addtoparent(_parentid);
// [158]  Return zl 
return _zl;
// End Sub
};

// [163] Sub CreateSpot(Module As Object, vID As String, vLabel As String, vLabelPos As String, vSize As String, vDistance As String, vAngle As String, vToView As String, Text As String) As ZUIZspot 
_B.createspot=function(_module,_vid,_vlabel,_vlabelpos,_vsize,_vdistance,_vangle,_vtoview,_text) {
var _zv;
// [164]  vID = vID.tolowercase 
_vid=_vid.toLowerCase();
// [165]  Dim zv As ZUIZspot 
_zv= new banano_bananozui_zuizspot();
// [166]  zv.Initialize(Module, vID, vID) 
_zv.initialize(_module,_vid,_vid);
// [167]  zv.Label = vLabel 
_zv.setlabel(_vlabel);
// [168]  zv.LabelPos = vLabelPos 
_zv.setlabelpos(_vlabelpos);
// [169]  zv.Size = vSize 
_zv.setsize(_vsize);
// [170]  If vDistance <> {56} Then zv.Distance = vDistance 
if (_vdistance!="") {_zv.setdistance(_vdistance);}
// [171]  If vAngle <> {57} Then zv.Angle = vAngle 
if (_vangle!="") {_zv.setangle(_vangle);}
// [172]  zv.ToView = vToView 
_zv.settoview(_vtoview);
// [173]  zv.SetText(Text) 
_zv.settext(_text);
// [174]  Return zv 
return _zv;
// End Sub
};

// [178] Sub CreateComponent(Module As Object, slideName As String, templateName As String) As VMElement 
_B.createcomponent=function(_module,_slidename,_templatename) {
var _slide;
// [179]  templateName = templateName.ToLowerCase 
_templatename=_templatename.toLowerCase();
// [180]  templateName = templateName.Replace( {58} , {59} ) 
_templatename=_templatename.split("#").join("");
// [181]  slideName = slideName.tolowercase 
_slidename=_slidename.toLowerCase();
// [183]  Dim slide As VMElement 
_slide= new banano_bananozui_vmelement();
// [184]  slide.Initialize(Module, slideName, slideName) 
_slide.initialize(_module,_slidename,_slidename);
// [186]  slide.SetBANanoTemplate( {0} ) 
_slide.setbananotemplate("#" + _templatename + "");
// [188]  Return slide 
return _slide;
// End Sub
};

}
/* =========================== ZUIZcanvas  =========================== */
function banano_bananozui_zuizcanvas() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtext="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="z-canvas";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._methods={};

_B._mviews="$options.components";

_B._mkey="";

_B._mparentid="";

_B._mref="";

_B._mvbindclass="";

_B._mvbindstyle="";

_B._mvelse="";

_B._mvelseif="";

_B._mvfor="";

_B._mvhtml="";

_B._mvif="";

_B._mvmodel="";

_B._mvshow="";

_B._mvtext="";

_B._mbackgroundcolor="";

_B._mborder="";

_B._mcolor="";

_B._mfontfamily="";

_B._mfontsize="";

_B._mfontstyle="";

_B._mfontweight="";

_B._mheight="";

_B._mmargin="";

_B._mmarginbottom="";

_B._mmarginleft="";

_B._mmarginright="";

_B._mmargintop="";

_B._mpadding="";

_B._mpaddingbottom="";

_B._mpaddingleft="";

_B._mpaddingright="";

_B._mpaddingtop="";

_B._mtextalign="";

_B._mtextdecoration="";

_B._mwidth="";

_B._mbackgroundimage="";

_B._mbackgroundrepeat="";

_B._mbordercolor="";

_B._mborderradius="";

_B._mborderstyle="";

_B._mborderwidth="";

// [115] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [116] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [117] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [118] mCallBack = CallBack 
_B._mcallback=_callback;
// [119] classList.Initialize 
_B._classlist={};
// [120] styleList.Initialize 
_B._stylelist={};
// [121] attributeList.Initialize 
_B._attributelist={};
// [122] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// [123] bindings.Initialize 
_B._bindings={};
// [124] methods.Initialize 
_B._methods={};
// End Sub
};

// [128] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [129] mTarget = Target 
_B._mtarget=_target;
// [130] If Props <> Null Then 
if (_props!=null) {
// [131] mClasses = Props.Get( {44} ) 
_B._mclasses=_props["Classes"];
// [132] mAttributes = Props.Get( {45} ) 
_B._mattributes=_props["Attributes"];
// [133] mStyle = Props.Get( {46} ) 
_B._mstyle=_props["Style"];
// [134] mText = Props.Get( {47} ) 
_B._mtext=_props["Text"];
// [135] mViews = Props.Get( {48} ) 
_B._mviews=_props["Views"];
// [136] mKey = Props.Get( {49} ) 
_B._mkey=_props["Key"];
// [137] mParentId = Props.Get( {50} ) 
_B._mparentid=_props["ParentId"];
// [138] mRef = Props.Get( {51} ) 
_B._mref=_props["Ref"];
// [139] mVBindClass = Props.Get( {52} ) 
_B._mvbindclass=_props["VBindClass"];
// [140] mVBindStyle = Props.Get( {53} ) 
_B._mvbindstyle=_props["VBindStyle"];
// [141] mVElse = Props.Get( {54} ) 
_B._mvelse=_props["VElse"];
// [142] mVElseIf = Props.Get( {55} ) 
_B._mvelseif=_props["VElseIf"];
// [143] mVFor = Props.Get( {56} ) 
_B._mvfor=_props["VFor"];
// [144] mVHtml = Props.Get( {57} ) 
_B._mvhtml=_props["VHtml"];
// [145] mVIf = Props.Get( {58} ) 
_B._mvif=_props["VIf"];
// [146] mVModel = Props.Get( {59} ) 
_B._mvmodel=_props["VModel"];
// [147] mVShow = Props.Get( {60} ) 
_B._mvshow=_props["VShow"];
// [148] mVText = Props.Get( {61} ) 
_B._mvtext=_props["VText"];
// [149] mBackgroundColor = Props.Get( {62} ) 
_B._mbackgroundcolor=_props["BackgroundColor"];
// [150] mBorder = Props.Get( {63} ) 
_B._mborder=_props["Border"];
// [151] mColor = Props.Get( {64} ) 
_B._mcolor=_props["Color"];
// [152] mFontFamily = Props.Get( {65} ) 
_B._mfontfamily=_props["FontFamily"];
// [153] mFontSize = Props.Get( {66} ) 
_B._mfontsize=_props["FontSize"];
// [154] mFontStyle = Props.Get( {67} ) 
_B._mfontstyle=_props["FontStyle"];
// [155] mFontWeight = Props.Get( {68} ) 
_B._mfontweight=_props["FontWeight"];
// [156] mHeight = Props.Get( {69} ) 
_B._mheight=_props["Height"];
// [157] mMargin = Props.Get( {70} ) 
_B._mmargin=_props["Margin"];
// [158] mMarginBottom = Props.Get( {71} ) 
_B._mmarginbottom=_props["MarginBottom"];
// [159] mMarginLeft = Props.Get( {72} ) 
_B._mmarginleft=_props["MarginLeft"];
// [160] mMarginRight = Props.Get( {73} ) 
_B._mmarginright=_props["MarginRight"];
// [161] mMarginTop = Props.Get( {74} ) 
_B._mmargintop=_props["MarginTop"];
// [162] mPadding = Props.Get( {75} ) 
_B._mpadding=_props["Padding"];
// [163] mPaddingBottom = Props.Get( {76} ) 
_B._mpaddingbottom=_props["PaddingBottom"];
// [164] mPaddingLeft = Props.Get( {77} ) 
_B._mpaddingleft=_props["PaddingLeft"];
// [165] mPaddingRight = Props.Get( {78} ) 
_B._mpaddingright=_props["PaddingRight"];
// [166] mPaddingTop = Props.Get( {79} ) 
_B._mpaddingtop=_props["PaddingTop"];
// [167] mTextAlign = Props.Get( {80} ) 
_B._mtextalign=_props["TextAlign"];
// [168] mTextDecoration = Props.Get( {81} ) 
_B._mtextdecoration=_props["TextDecoration"];
// [169]  mWidth = Props.Get( {82} ) 
_B._mwidth=_props["Width"];
// [170]  mBackgroundImage = Props.Get( {83} ) 
_B._mbackgroundimage=_props["BackgroundImage"];
// [171]  mBackgroundRepeat = Props.Get( {84} ) 
_B._mbackgroundrepeat=_props["BackgroundRepeat"];
// [172]  mBorderColor = Props.Get( {85} ) 
_B._mbordercolor=_props["BorderColor"];
// [173]  mBorderRadius = Props.Get( {86} ) 
_B._mborderradius=_props["BorderRadius"];
// [174]  mBorderStyle = Props.Get( {87} ) 
_B._mborderstyle=_props["BorderStyle"];
// [175]  mBorderWidth = Props.Get( {88} ) 
_B._mborderwidth=_props["BorderWidth"];
// [177] End If 
}
// [179] AddAttr( {89} , mViews) 
_B.addattr(":views",_B._mviews,_B);
// [180] AddAttr( {90} , mKey) 
_B.addattr("key",_B._mkey,_B);
// [181] AddAttr( {91} , mParentId) 
_B.addattr("parent-id",_B._mparentid,_B);
// [182] AddAttr( {92} , mRef) 
_B.addattr("ref",_B._mref,_B);
// [183] AddAttr( {93} , mVBindClass) 
_B.addattr("v-bind:class",_B._mvbindclass,_B);
// [184] AddAttr( {94} , mVBindStyle) 
_B.addattr("v-bind:style",_B._mvbindstyle,_B);
// [185] AddAttr( {95} , mVElse) 
_B.addattr("v-else",_B._mvelse,_B);
// [186] AddAttr( {96} , mVElseIf) 
_B.addattr("v-else-if",_B._mvelseif,_B);
// [187] AddAttr( {97} , mVFor) 
_B.addattr("v-for",_B._mvfor,_B);
// [188] AddAttr( {98} , mVHtml) 
_B.addattr("v-html",_B._mvhtml,_B);
// [189] AddAttr( {99} , mVIf) 
_B.addattr("v-if",_B._mvif,_B);
// [190] AddAttr( {100} , mVModel) 
_B.addattr("v-model",_B._mvmodel,_B);
// [191] AddAttr( {101} , mVShow) 
_B.addattr("v-show",_B._mvshow,_B);
// [192] AddAttr( {102} , mVText) 
_B.addattr("v-text",_B._mvtext,_B);
// [193] AddStyle( {103} , mBackgroundColor) 
_B.addstyle("background-color",_B._mbackgroundcolor,_B);
// [194] AddStyle( {104} , mBorder) 
_B.addstyle("border",_B._mborder,_B);
// [195] AddStyle( {105} , mColor) 
_B.addstyle("color",_B._mcolor,_B);
// [196] AddStyle( {106} , mFontFamily) 
_B.addstyle("font-family",_B._mfontfamily,_B);
// [197] AddStyle( {107} , mFontSize) 
_B.addstyle("font-size",_B._mfontsize,_B);
// [198] AddStyle( {108} , mFontStyle) 
_B.addstyle("font-style",_B._mfontstyle,_B);
// [199] AddStyle( {109} , mFontWeight) 
_B.addstyle("font-weight",_B._mfontweight,_B);
// [200] AddStyle( {110} , mHeight) 
_B.addstyle("height",_B._mheight,_B);
// [201] AddStyle( {111} , mMargin) 
_B.addstyle("margin",_B._mmargin,_B);
// [202] AddStyle( {112} , mMarginBottom) 
_B.addstyle("margin-bottom",_B._mmarginbottom,_B);
// [203] AddStyle( {113} , mMarginLeft) 
_B.addstyle("margin-left",_B._mmarginleft,_B);
// [204] AddStyle( {114} , mMarginRight) 
_B.addstyle("margin-right",_B._mmarginright,_B);
// [205] AddStyle( {115} , mMarginTop) 
_B.addstyle("margin-top",_B._mmargintop,_B);
// [206] AddStyle( {116} , mPadding) 
_B.addstyle("padding",_B._mpadding,_B);
// [207] AddStyle( {117} , mPaddingBottom) 
_B.addstyle("padding-bottom",_B._mpaddingbottom,_B);
// [208] AddStyle( {118} , mPaddingLeft) 
_B.addstyle("padding-left",_B._mpaddingleft,_B);
// [209] AddStyle( {119} , mPaddingRight) 
_B.addstyle("padding-right",_B._mpaddingright,_B);
// [210] AddStyle( {120} , mPaddingTop) 
_B.addstyle("padding-top",_B._mpaddingtop,_B);
// [211] AddStyle( {121} , mTextAlign) 
_B.addstyle("text-align",_B._mtextalign,_B);
// [212] AddStyle( {122} , mTextDecoration) 
_B.addstyle("text-decoration",_B._mtextdecoration,_B);
// [213]  AddStyle( {123} , mWidth) 
_B.addstyle("width",_B._mwidth,_B);
// [214]  AddStyle( {124} , mBackgroundImage) 
_B.addstyle("background-image",_B._mbackgroundimage,_B);
// [215]  AddStyle( {125} , mBackgroundRepeat) 
_B.addstyle("background-repeat",_B._mbackgroundrepeat,_B);
// [216]  AddStyle( {126} , mBorderColor) 
_B.addstyle("border-color",_B._mbordercolor,_B);
// [217]  AddStyle( {127} , mBorderRadius) 
_B.addstyle("border-radius",_B._mborderradius,_B);
// [218]  AddStyle( {128} , mBorderStyle) 
_B.addstyle("border-style",_B._mborderstyle,_B);
// [219]  AddStyle( {129} , mBorderWidth) 
_B.addstyle("border-width",_B._mborderwidth,_B);
// [221] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [222] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [223] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [226] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [227] mElement = mTarget.Append(strHTML).Get( {130} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [233] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [235] Dim className As String = BANanoShared.JoinMapKeys(classList, {131} ) 
_classname=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [236] AddAttr( {132} , className) 
_B.addattr("class",_classname,_B);
// [238] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananozui_bananoshared.buildstyle(_B._stylelist);
// [239] AddAttr( {133} , styleName) 
_B.addattr("style",_stylename,_B);
// [241] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananozui_bananoshared.buildattributes(_B._attributelist);
// [242] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mtext + "</" + _B._mtagname + ">";
// [243] Return rslt 
return _rslt;
// End Sub
};

// [247] Sub SetVBind(prop As String, value As String) 
_B.setvbind=function(_prop,_value) {
// [248] prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [249] value = value.ToLowerCase 
_value=_value.toLowerCase();
// [250] prop = {1} 
_prop="v-bind:" + _prop + "";
// [251] AddAttr(prop,value) 
_B.addattr(_prop,_value,_B);
// [252] bindings.Put(value, Null) 
_B._bindings[_value]=null;
// End Sub
};

// [256] Sub AddToApp(vap As VueApp) 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [258] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [259] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [260] vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [261] Next 
}
// [263] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [264] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [265] vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [266] Next 
}
// End Sub
};

// [270] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [272] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [273] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [274] ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [275] Next 
}
// [277] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [278] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [279] ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [280] Next 
}
// End Sub
};

// [284] Sub AddBR 
_B.addbr=function() {
// [285] sbText.Append( {134} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [289] Sub AddHR 
_B.addhr=function() {
// [290] sbText.Append( {135} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [294] Sub AddElement(elID As String, tag As String, props As Map, styleProps As Map, classNames As List, loose As List, Text As String) 
_B.addelement=function(_elid,_tag,_props,_styleprops,_classnames,_loose,_text) {
var _elit,_k,_v,_selement;
// [295] elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [296] elID = elID.Replace( {136} , {137} ) 
_elid=_elid.split("#").join("");
// [297] Dim elIT As VHTML 
_elit= new banano_bananozui_vhtml();
// [298] elIT.Initialize(mCallBack, elID, elID) 
_elit.initialize(_B._mcallback,_elid,_elid);
// [299] elIT.SetText(Text) 
_elit.settext(_text);
// [300] elIT.SetTagName(tag) 
_elit.settagname(_tag);
// [301] If loose <> Null Then 
if (_loose!=null) {
// [302] For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [303] elIT.SetAttr(k, True) 
_elit.setattr(_k,true);
// [304] Next 
}
// [305] End If 
}
// [306] If props <> Null Then 
if (_props!=null) {
// [307] For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [308] Dim v As String = props.Get(k) 
_v=_props[_k];
// [309] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [310] Next 
}
// [311] End If 
}
// [312] If styleProps <> Null Then 
if (_styleprops!=null) {
// [313] For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [314] Dim v As String = styleProps.Get(k) 
_v=_styleprops[_k];
// [315] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [316] Next 
}
// [317] End If 
}
// [318] If classNames <> Null Then 
if (_classnames!=null) {
// [319] elIT.AddClass(classNames) 
_elit.addclass(_classnames);
// [320] End If 
}
// [322] Dim sElement As String = elIT.tostring 
_selement=_elit.tostring();
// [323] sbText.Append(sElement) 
_B._sbtext.append(_selement);
// End Sub
};

// [327] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [328] Return mElement 
return _B._melement;
// End Sub
};

// [332] public Sub getID() As String 
_B.getid=function() {
// [333] Return mName 
return _B._mname;
// End Sub
};

// [337] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [338] mTarget = BANano.GetElement( {138} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [339] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [343] public Sub Remove() 
_B.remove=function() {
// [344] mElement.Remove 
_B._melement.remove();
// [345] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [349] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [350] If mElement <> Null Then 
if (_B._melement!=null) {
// [351] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [352] End If 
}
// End Sub
};

// [356] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mitems,_mt;
// [357] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [358] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [359] varClass = varClass.trim 
_varclass=_varclass.trim();
// [360] If varClass = {139} Then Return 
if (_varclass=="") { return ;}
// [361] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [362] Dim mItems As List = BANanoShared.StrParse( {140} , varClass) 
_mitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [363] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [364] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [365] Next 
}
// End Sub
};

// [369] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As Boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mitems,_mt;
// [370] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [371] If varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [372] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [373] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [374] varClass = varClass.trim 
_varclass=_varclass.trim();
// [375] If varClass = {141} Then Return 
if (_varclass=="") { return ;}
// [376] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [377] Dim mItems As List = BANanoShared.StrParse( {142} , varClass) 
_mitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [378] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [379] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [380] Next 
}
// End Sub
};

// [384] public Sub AddStyle(varProp As String, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [385] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [386] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananozui_bananoshared.cstr(_varstyle);}
// [387] If mElement <> Null Then 
if (_B._melement!=null) {
// [388] Dim aStyle As Map = CreateMap() 
_astyle={};
// [389] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [390] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [391] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [392] End If 
}
// [393] styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [397] public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [398]  If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [399]  If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananozui_bananoshared.cstr(_varvalue);}
// [401]  If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [402]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [403]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [404]  Else 
} else {
// [406]  If varValue.StartsWith( {143} ) Then 
if (_varvalue.startsWith(":")) {
// [407]  If varValue.StartsWith( {144} ) Then 
if (_varvalue.startsWith("$")) {
// [408]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [409]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [410]  Else 
} else {
// [411]  Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varvalue,2);
// [412]  If rname.Contains( {145} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [413]  attributeList.put( {2} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [414]  If mElement <> Null Then mElement.SetAttr( {3} , varValue) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_varvalue);}
// [415]  End If 
}
// [416]  Else 
} else {
// [418]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [419]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [420]  Select Case varProp 
switch ("" + _varprop) {
// [421]  Case {146} , {147} , {148} , {149} , {150} , {151} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [422]  bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [423]  End Select 
break;
}
// [424]  End If 
}
// [425]  End If 
}
// End Sub
};

// [429] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [430] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [431] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [432] For Each k As String In classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [433] sbClass.Append(k).Append( {152} ) 
_sbclass.append(_k).append(" ");
// [434] Next 
}
// [435] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [436] Return mClasses 
return _B._mclasses;
// End Sub
};

// [440] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [441] If mElement <> Null Then 
if (_B._melement!=null) {
// [442] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [443] End If 
}
// [444] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [445] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [446] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [447] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [448] Next 
}
// End Sub
};

// [452] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [453] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [454] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [455] sbStyle.Append( {153} ) 
_sbstyle.append("{");
// [456] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [457] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [458] sbStyle.Append(k).Append( {154} ).Append(v).Append( {155} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [459] Next 
}
// [460] sbStyle.Append( {156} ) 
_sbstyle.append("}");
// [461] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [462] Return mStyle 
return _B._mstyle;
// End Sub
};

// [466] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mitems,_mt,_k,_v;
// [467] Dim mItems As List = BANanoShared.StrParse( {157} , varAttributes) 
_mitems=_banano_bananozui_bananoshared.strparse(";",_varattributes);
// [468] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [469] Dim k As String = BANanoShared.MvField(mt,1, {158} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [470] Dim v As String = BANanoShared.MvField(mt,2, {159} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [471] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [472] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [473] Next 
}
// End Sub
};

// [477] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mitems,_mt,_k,_v;
// [478] Dim mItems As List = BANanoShared.StrParse( {160} , varStyles) 
_mitems=_banano_bananozui_bananoshared.strparse(",",_varstyles);
// [479] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [480] Dim k As String = BANanoShared.MvField(mt,1, {161} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,":");
// [481] Dim v As String = BANanoShared.MvField(mt,2, {162} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,":");
// [482] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [483] Next 
}
// End Sub
};

// [487] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [488] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [489] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [490] For Each k As String In attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [491] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [492] sbAttr.Append(k).Append( {163} ).Append(v).Append( {164} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [493] Next 
}
// [494] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [495] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [499] public Sub setText(varText As String) 
_B.settext=function(_vartext) {
// [500] If mElement <> Null Then 
if (_B._melement!=null) {
// [501] mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [502] End If 
}
// [503] mText = varText 
_B._mtext=_vartext;
// End Sub
};

// [507] public Sub getText() As String 
_B.gettext=function() {
// [508] Return mText 
return _B._mtext;
// End Sub
};

// [511] public Sub setViews(varViews As String) 
_B.setviews=function(_varviews) {
// [512] AddAttr( {165} , varViews) 
_B.addattr(":views",_varviews,_B);
// [513] mViews = varViews 
_B._mviews=_varviews;
// End Sub
};

// [516] public Sub getViews() As String 
_B.getviews=function() {
// [517] Return mViews 
return _B._mviews;
// End Sub
};

// [520] public Sub setKey(varKey As String) 
_B.setkey=function(_varkey) {
// [521] AddAttr( {166} , varKey) 
_B.addattr("key",_varkey,_B);
// [522] mKey = varKey 
_B._mkey=_varkey;
// End Sub
};

// [525] public Sub getKey() As String 
_B.getkey=function() {
// [526] Return mKey 
return _B._mkey;
// End Sub
};

// [529] public Sub setParentId(varParentId As String) 
_B.setparentid=function(_varparentid) {
// [530] AddAttr( {167} , varParentId) 
_B.addattr("parent-id",_varparentid,_B);
// [531] mParentId = varParentId 
_B._mparentid=_varparentid;
// End Sub
};

// [534] public Sub getParentId() As String 
_B.getparentid=function() {
// [535] Return mParentId 
return _B._mparentid;
// End Sub
};

// [538] public Sub setRef(varRef As String) 
_B.setref=function(_varref) {
// [539] AddAttr( {168} , varRef) 
_B.addattr("ref",_varref,_B);
// [540] mRef = varRef 
_B._mref=_varref;
// End Sub
};

// [543] public Sub getRef() As String 
_B.getref=function() {
// [544] Return mRef 
return _B._mref;
// End Sub
};

// [547] public Sub setVBindClass(varVBindClass As String) 
_B.setvbindclass=function(_varvbindclass) {
// [548] AddAttr( {169} , varVBindClass) 
_B.addattr("v-bind:class",_varvbindclass,_B);
// [549] mVBindClass = varVBindClass 
_B._mvbindclass=_varvbindclass;
// End Sub
};

// [552] public Sub getVBindClass() As String 
_B.getvbindclass=function() {
// [553] Return mVBindClass 
return _B._mvbindclass;
// End Sub
};

// [556] public Sub setVBindStyle(varVBindStyle As String) 
_B.setvbindstyle=function(_varvbindstyle) {
// [557] AddAttr( {170} , varVBindStyle) 
_B.addattr("v-bind:style",_varvbindstyle,_B);
// [558] mVBindStyle = varVBindStyle 
_B._mvbindstyle=_varvbindstyle;
// End Sub
};

// [561] public Sub getVBindStyle() As String 
_B.getvbindstyle=function() {
// [562] Return mVBindStyle 
return _B._mvbindstyle;
// End Sub
};

// [565] public Sub setVElse(varVElse As String) 
_B.setvelse=function(_varvelse) {
// [566] AddAttr( {171} , varVElse) 
_B.addattr("v-else",_varvelse,_B);
// [567] mVElse = varVElse 
_B._mvelse=_varvelse;
// End Sub
};

// [570] public Sub getVElse() As String 
_B.getvelse=function() {
// [571] Return mVElse 
return _B._mvelse;
// End Sub
};

// [574] public Sub setVElseIf(varVElseIf As String) 
_B.setvelseif=function(_varvelseif) {
// [575] AddAttr( {172} , varVElseIf) 
_B.addattr("v-else-if",_varvelseif,_B);
// [576] mVElseIf = varVElseIf 
_B._mvelseif=_varvelseif;
// End Sub
};

// [579] public Sub getVElseIf() As String 
_B.getvelseif=function() {
// [580] Return mVElseIf 
return _B._mvelseif;
// End Sub
};

// [583] public Sub setVFor(varVFor As String) 
_B.setvfor=function(_varvfor) {
// [584] AddAttr( {173} , varVFor) 
_B.addattr("v-for",_varvfor,_B);
// [585] mVFor = varVFor 
_B._mvfor=_varvfor;
// End Sub
};

// [588] public Sub getVFor() As String 
_B.getvfor=function() {
// [589] Return mVFor 
return _B._mvfor;
// End Sub
};

// [592] public Sub setVHtml(varVHtml As String) 
_B.setvhtml=function(_varvhtml) {
// [593] AddAttr( {174} , varVHtml) 
_B.addattr("v-html",_varvhtml,_B);
// [594] mVHtml = varVHtml 
_B._mvhtml=_varvhtml;
// End Sub
};

// [597] public Sub getVHtml() As String 
_B.getvhtml=function() {
// [598] Return mVHtml 
return _B._mvhtml;
// End Sub
};

// [601] public Sub setVIf(varVIf As String) 
_B.setvif=function(_varvif) {
// [602] AddAttr( {175} , varVIf) 
_B.addattr("v-if",_varvif,_B);
// [603] mVIf = varVIf 
_B._mvif=_varvif;
// End Sub
};

// [606] public Sub getVIf() As String 
_B.getvif=function() {
// [607] Return mVIf 
return _B._mvif;
// End Sub
};

// [610] public Sub setVModel(varVModel As String) 
_B.setvmodel=function(_varvmodel) {
// [611] AddAttr( {176} , varVModel) 
_B.addattr("v-model",_varvmodel,_B);
// [612] mVModel = varVModel 
_B._mvmodel=_varvmodel;
// End Sub
};

// [615] public Sub getVModel() As String 
_B.getvmodel=function() {
// [616] Return mVModel 
return _B._mvmodel;
// End Sub
};

// [619] public Sub setVShow(varVShow As String) 
_B.setvshow=function(_varvshow) {
// [620] AddAttr( {177} , varVShow) 
_B.addattr("v-show",_varvshow,_B);
// [621] mVShow = varVShow 
_B._mvshow=_varvshow;
// End Sub
};

// [624] public Sub getVShow() As String 
_B.getvshow=function() {
// [625] Return mVShow 
return _B._mvshow;
// End Sub
};

// [628] public Sub setVText(varVText As String) 
_B.setvtext=function(_varvtext) {
// [629] AddAttr( {178} , varVText) 
_B.addattr("v-text",_varvtext,_B);
// [630] mVText = varVText 
_B._mvtext=_varvtext;
// End Sub
};

// [633] public Sub getVText() As String 
_B.getvtext=function() {
// [634] Return mVText 
return _B._mvtext;
// End Sub
};

// [637] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [638] AddStyle( {179} , varBackgroundColor) 
_B.addstyle("background-color",_varbackgroundcolor,_B);
// [639] mBackgroundColor = varBackgroundColor 
_B._mbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [642] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [643] Return mBackgroundColor 
return _B._mbackgroundcolor;
// End Sub
};

// [646] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [647] AddStyle( {180} , varBorder) 
_B.addstyle("border",_varborder,_B);
// [648] mBorder = varBorder 
_B._mborder=_varborder;
// End Sub
};

// [651] public Sub getBorder() As String 
_B.getborder=function() {
// [652] Return mBorder 
return _B._mborder;
// End Sub
};

// [655] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [656] AddStyle( {181} , varColor) 
_B.addstyle("color",_varcolor,_B);
// [657] mColor = varColor 
_B._mcolor=_varcolor;
// End Sub
};

// [660] public Sub getColor() As String 
_B.getcolor=function() {
// [661] Return mColor 
return _B._mcolor;
// End Sub
};

// [664] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [665] AddStyle( {182} , varFontFamily) 
_B.addstyle("font-family",_varfontfamily,_B);
// [666] mFontFamily = varFontFamily 
_B._mfontfamily=_varfontfamily;
// End Sub
};

// [669] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [670] Return mFontFamily 
return _B._mfontfamily;
// End Sub
};

// [673] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [674] AddStyle( {183} , varFontSize) 
_B.addstyle("font-size",_varfontsize,_B);
// [675] mFontSize = varFontSize 
_B._mfontsize=_varfontsize;
// End Sub
};

// [678] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [679] Return mFontSize 
return _B._mfontsize;
// End Sub
};

// [682] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [683] AddStyle( {184} , varFontStyle) 
_B.addstyle("font-style",_varfontstyle,_B);
// [684] mFontStyle = varFontStyle 
_B._mfontstyle=_varfontstyle;
// End Sub
};

// [687] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [688] Return mFontStyle 
return _B._mfontstyle;
// End Sub
};

// [691] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [692] AddStyle( {185} , varFontWeight) 
_B.addstyle("font-weight",_varfontweight,_B);
// [693] mFontWeight = varFontWeight 
_B._mfontweight=_varfontweight;
// End Sub
};

// [696] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [697] Return mFontWeight 
return _B._mfontweight;
// End Sub
};

// [700] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [701] AddStyle( {186} , varHeight) 
_B.addstyle("height",_varheight,_B);
// [702] mHeight = varHeight 
_B._mheight=_varheight;
// End Sub
};

// [705] public Sub getHeight() As String 
_B.getheight=function() {
// [706] Return mHeight 
return _B._mheight;
// End Sub
};

// [709] public Sub setMargin(varMargin As String) 
_B.setmargin=function(_varmargin) {
// [710] AddStyle( {187} , varMargin) 
_B.addstyle("margin",_varmargin,_B);
// [711] mMargin = varMargin 
_B._mmargin=_varmargin;
// End Sub
};

// [714] public Sub getMargin() As String 
_B.getmargin=function() {
// [715] Return mMargin 
return _B._mmargin;
// End Sub
};

// [718] public Sub setMarginBottom(varMarginBottom As String) 
_B.setmarginbottom=function(_varmarginbottom) {
// [719] AddStyle( {188} , varMarginBottom) 
_B.addstyle("margin-bottom",_varmarginbottom,_B);
// [720] mMarginBottom = varMarginBottom 
_B._mmarginbottom=_varmarginbottom;
// End Sub
};

// [723] public Sub getMarginBottom() As String 
_B.getmarginbottom=function() {
// [724] Return mMarginBottom 
return _B._mmarginbottom;
// End Sub
};

// [727] public Sub setMarginLeft(varMarginLeft As String) 
_B.setmarginleft=function(_varmarginleft) {
// [728] AddStyle( {189} , varMarginLeft) 
_B.addstyle("margin-left",_varmarginleft,_B);
// [729] mMarginLeft = varMarginLeft 
_B._mmarginleft=_varmarginleft;
// End Sub
};

// [732] public Sub getMarginLeft() As String 
_B.getmarginleft=function() {
// [733] Return mMarginLeft 
return _B._mmarginleft;
// End Sub
};

// [736] public Sub setMarginRight(varMarginRight As String) 
_B.setmarginright=function(_varmarginright) {
// [737] AddStyle( {190} , varMarginRight) 
_B.addstyle("margin-right",_varmarginright,_B);
// [738] mMarginRight = varMarginRight 
_B._mmarginright=_varmarginright;
// End Sub
};

// [741] public Sub getMarginRight() As String 
_B.getmarginright=function() {
// [742] Return mMarginRight 
return _B._mmarginright;
// End Sub
};

// [745] public Sub setMarginTop(varMarginTop As String) 
_B.setmargintop=function(_varmargintop) {
// [746] AddStyle( {191} , varMarginTop) 
_B.addstyle("margin-top",_varmargintop,_B);
// [747] mMarginTop = varMarginTop 
_B._mmargintop=_varmargintop;
// End Sub
};

// [750] public Sub getMarginTop() As String 
_B.getmargintop=function() {
// [751] Return mMarginTop 
return _B._mmargintop;
// End Sub
};

// [754] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [755] AddStyle( {192} , varPadding) 
_B.addstyle("padding",_varpadding,_B);
// [756] mPadding = varPadding 
_B._mpadding=_varpadding;
// End Sub
};

// [759] public Sub getPadding() As String 
_B.getpadding=function() {
// [760] Return mPadding 
return _B._mpadding;
// End Sub
};

// [763] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [764] AddStyle( {193} , varPaddingBottom) 
_B.addstyle("padding-bottom",_varpaddingbottom,_B);
// [765] mPaddingBottom = varPaddingBottom 
_B._mpaddingbottom=_varpaddingbottom;
// End Sub
};

// [768] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [769] Return mPaddingBottom 
return _B._mpaddingbottom;
// End Sub
};

// [772] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [773] AddStyle( {194} , varPaddingLeft) 
_B.addstyle("padding-left",_varpaddingleft,_B);
// [774] mPaddingLeft = varPaddingLeft 
_B._mpaddingleft=_varpaddingleft;
// End Sub
};

// [777] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [778] Return mPaddingLeft 
return _B._mpaddingleft;
// End Sub
};

// [781] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [782] AddStyle( {195} , varPaddingRight) 
_B.addstyle("padding-right",_varpaddingright,_B);
// [783] mPaddingRight = varPaddingRight 
_B._mpaddingright=_varpaddingright;
// End Sub
};

// [786] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [787] Return mPaddingRight 
return _B._mpaddingright;
// End Sub
};

// [790] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [791] AddStyle( {196} , varPaddingTop) 
_B.addstyle("padding-top",_varpaddingtop,_B);
// [792] mPaddingTop = varPaddingTop 
_B._mpaddingtop=_varpaddingtop;
// End Sub
};

// [795] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [796] Return mPaddingTop 
return _B._mpaddingtop;
// End Sub
};

// [799] public Sub setTextAlign(varTextAlign As String) 
_B.settextalign=function(_vartextalign) {
// [800] AddStyle( {197} , varTextAlign) 
_B.addstyle("text-align",_vartextalign,_B);
// [801] mTextAlign = varTextAlign 
_B._mtextalign=_vartextalign;
// End Sub
};

// [804] public Sub getTextAlign() As String 
_B.gettextalign=function() {
// [805] Return mTextAlign 
return _B._mtextalign;
// End Sub
};

// [808] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [809] AddStyle( {198} , varTextDecoration) 
_B.addstyle("text-decoration",_vartextdecoration,_B);
// [810] mTextDecoration = varTextDecoration 
_B._mtextdecoration=_vartextdecoration;
// End Sub
};

// [813] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [814] Return mTextDecoration 
return _B._mtextdecoration;
// End Sub
};

// [817] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [818] AddStyle( {199} , varWidth) 
_B.addstyle("width",_varwidth,_B);
// [819] mWidth = varWidth 
_B._mwidth=_varwidth;
// End Sub
};

// [822] public Sub getWidth() As String 
_B.getwidth=function() {
// [823]  Return mWidth 
return _B._mwidth;
// End Sub
};

// [828] public Sub setBackgroundImage(varBackgroundImage As String) 
_B.setbackgroundimage=function(_varbackgroundimage) {
// [829]  AddStyle( {200} , varBackgroundImage) 
_B.addstyle("background-image",_varbackgroundimage,_B);
// [830]  mBackgroundImage = varBackgroundImage 
_B._mbackgroundimage=_varbackgroundimage;
// End Sub
};

// [833] public Sub getBackgroundImage() As String 
_B.getbackgroundimage=function() {
// [834]  Return mBackgroundImage 
return _B._mbackgroundimage;
// End Sub
};

// [837] public Sub setBackgroundRepeat(varBackgroundRepeat As String) 
_B.setbackgroundrepeat=function(_varbackgroundrepeat) {
// [838]  AddStyle( {201} , varBackgroundRepeat) 
_B.addstyle("background-repeat",_varbackgroundrepeat,_B);
// [839]  mBackgroundRepeat = varBackgroundRepeat 
_B._mbackgroundrepeat=_varbackgroundrepeat;
// End Sub
};

// [842] public Sub getBackgroundRepeat() As String 
_B.getbackgroundrepeat=function() {
// [843]  Return mBackgroundRepeat 
return _B._mbackgroundrepeat;
// End Sub
};

// [846] public Sub setBorderColor(varBorderColor As String) 
_B.setbordercolor=function(_varbordercolor) {
// [847]  AddStyle( {202} , varBorderColor) 
_B.addstyle("border-color",_varbordercolor,_B);
// [848]  mBorderColor = varBorderColor 
_B._mbordercolor=_varbordercolor;
// End Sub
};

// [851] public Sub getBorderColor() As String 
_B.getbordercolor=function() {
// [852]  Return mBorderColor 
return _B._mbordercolor;
// End Sub
};

// [855] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [856]  AddStyle( {203} , varBorderRadius) 
_B.addstyle("border-radius",_varborderradius,_B);
// [857]  mBorderRadius = varBorderRadius 
_B._mborderradius=_varborderradius;
// End Sub
};

// [860] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [861]  Return mBorderRadius 
return _B._mborderradius;
// End Sub
};

// [864] public Sub setBorderStyle(varBorderStyle As String) 
_B.setborderstyle=function(_varborderstyle) {
// [865]  AddStyle( {204} , varBorderStyle) 
_B.addstyle("border-style",_varborderstyle,_B);
// [866]  mBorderStyle = varBorderStyle 
_B._mborderstyle=_varborderstyle;
// End Sub
};

// [869] public Sub getBorderStyle() As String 
_B.getborderstyle=function() {
// [870]  Return mBorderStyle 
return _B._mborderstyle;
// End Sub
};

// [873] public Sub setBorderWidth(varBorderWidth As String) 
_B.setborderwidth=function(_varborderwidth) {
// [874]  AddStyle( {205} , varBorderWidth) 
_B.addstyle("border-width",_varborderwidth,_B);
// [875]  mBorderWidth = varBorderWidth 
_B._mborderwidth=_varborderwidth;
// End Sub
};

// [878] public Sub getBorderWidth() As String 
_B.getborderwidth=function() {
// [879]  Return mBorderWidth 
return _B._mborderwidth;
// End Sub
};

}
/* =========================== ZUIZdialog  =========================== */
function banano_bananozui_zuizdialog() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtext="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="z-dialog";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._methods={};

_B._mkey="";

_B._mparentid="";

_B._mref="";

_B._mselfclose=false;

_B._mvbindclass="";

_B._mvbindstyle="";

_B._mvelse="";

_B._mvelseif="";

_B._mvfor="";

_B._mvhtml="";

_B._mvif="";

_B._mvmodel="";

_B._mvondone="";

_B._mvshow="";

_B._mvtext="";

// [62] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [63] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [64] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [65] mCallBack = CallBack 
_B._mcallback=_callback;
// [66] classList.Initialize 
_B._classlist={};
// [67] styleList.Initialize 
_B._stylelist={};
// [68] attributeList.Initialize 
_B._attributelist={};
// [69] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// [70] bindings.Initialize 
_B._bindings={};
// [71] methods.Initialize 
_B._methods={};
// End Sub
};

// [75] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [76] mTarget = Target 
_B._mtarget=_target;
// [77] If Props <> Null Then 
if (_props!=null) {
// [78] mClasses = Props.Get( {23} ) 
_B._mclasses=_props["Classes"];
// [79] mAttributes = Props.Get( {24} ) 
_B._mattributes=_props["Attributes"];
// [80] mStyle = Props.Get( {25} ) 
_B._mstyle=_props["Style"];
// [81] mText = Props.Get( {26} ) 
_B._mtext=_props["Text"];
// [82] mKey = Props.Get( {27} ) 
_B._mkey=_props["Key"];
// [83] mParentId = Props.Get( {28} ) 
_B._mparentid=_props["ParentId"];
// [84] mRef = Props.Get( {29} ) 
_B._mref=_props["Ref"];
// [85] mSelfClose = Props.Get( {30} ) 
_B._mselfclose=_props["SelfClose"];
// [86] mVBindClass = Props.Get( {31} ) 
_B._mvbindclass=_props["VBindClass"];
// [87] mVBindStyle = Props.Get( {32} ) 
_B._mvbindstyle=_props["VBindStyle"];
// [88] mVElse = Props.Get( {33} ) 
_B._mvelse=_props["VElse"];
// [89] mVElseIf = Props.Get( {34} ) 
_B._mvelseif=_props["VElseIf"];
// [90] mVFor = Props.Get( {35} ) 
_B._mvfor=_props["VFor"];
// [91] mVHtml = Props.Get( {36} ) 
_B._mvhtml=_props["VHtml"];
// [92] mVIf = Props.Get( {37} ) 
_B._mvif=_props["VIf"];
// [93] mVModel = Props.Get( {38} ) 
_B._mvmodel=_props["VModel"];
// [94] mVOnDone = Props.Get( {39} ) 
_B._mvondone=_props["VOnDone"];
// [95] mVShow = Props.Get( {40} ) 
_B._mvshow=_props["VShow"];
// [96] mVText = Props.Get( {41} ) 
_B._mvtext=_props["VText"];
// [97] End If 
}
// [99] AddAttr( {42} , mKey) 
_B.addattr("key",_B._mkey,_B);
// [100] AddAttr( {43} , mParentId) 
_B.addattr("parent-id",_B._mparentid,_B);
// [101] AddAttr( {44} , mRef) 
_B.addattr("ref",_B._mref,_B);
// [102] AddAttr( {45} , mSelfClose) 
_B.addattr("self-close",_B._mselfclose,_B);
// [103] AddAttr( {46} , mVBindClass) 
_B.addattr("v-bind:class",_B._mvbindclass,_B);
// [104] AddAttr( {47} , mVBindStyle) 
_B.addattr("v-bind:style",_B._mvbindstyle,_B);
// [105] AddAttr( {48} , mVElse) 
_B.addattr("v-else",_B._mvelse,_B);
// [106] AddAttr( {49} , mVElseIf) 
_B.addattr("v-else-if",_B._mvelseif,_B);
// [107] AddAttr( {50} , mVFor) 
_B.addattr("v-for",_B._mvfor,_B);
// [108] AddAttr( {51} , mVHtml) 
_B.addattr("v-html",_B._mvhtml,_B);
// [109] AddAttr( {52} , mVIf) 
_B.addattr("v-if",_B._mvif,_B);
// [110] AddAttr( {53} , mVModel) 
_B.addattr("v-model",_B._mvmodel,_B);
// [111] AddAttr( {54} , mVOnDone) 
_B.addattr("v-on:done",_B._mvondone,_B);
// [112] AddAttr( {55} , mVShow) 
_B.addattr("v-show",_B._mvshow,_B);
// [113] AddAttr( {56} , mVText) 
_B.addattr("v-text",_B._mvtext,_B);
// [114] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [115] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [116] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [119] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [120] mElement = mTarget.Append(strHTML).Get( {57} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// [122] mElement.HandleEvents( {58} , mCallBack, mEventName & {59} ) 
_B._melement.handle("done", function(event) {if (typeof _B._mcallback[(_B._meventname+"_done").toLowerCase()]==="function") {return _B._mcallback[(_B._meventname+"_done").toLowerCase()](event,_B)}});
// End Sub
};

// [127] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [129] Dim className As String = BANanoShared.JoinMapKeys(classList, {60} ) 
_classname=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [130] AddAttr( {61} , className) 
_B.addattr("class",_classname,_B);
// [132] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananozui_bananoshared.buildstyle(_B._stylelist);
// [133] AddAttr( {62} , styleName) 
_B.addattr("style",_stylename,_B);
// [135] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananozui_bananoshared.buildattributes(_B._attributelist);
// [136] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mtext + "</" + _B._mtagname + ">";
// [137] Return rslt 
return _rslt;
// End Sub
};

// [141] Sub SetVBind(prop As String, value As String) 
_B.setvbind=function(_prop,_value) {
// [142] prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [143] value = value.ToLowerCase 
_value=_value.toLowerCase();
// [144] prop = {1} 
_prop="v-bind:" + _prop + "";
// [145] AddAttr(prop,value) 
_B.addattr(_prop,_value,_B);
// [146] bindings.Put(value, Null) 
_B._bindings[_value]=null;
// End Sub
};

// [150] Sub AddToApp(vap As VueApp) 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [152] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [153] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [154] vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [155] Next 
}
// [157] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [158] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [159] vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [160] Next 
}
// End Sub
};

// [164] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [166] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [167] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [168] ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [169] Next 
}
// [171] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [172] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [173] ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [174] Next 
}
// End Sub
};

// [178] Sub AddBR 
_B.addbr=function() {
// [179] sbText.Append( {63} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [183] Sub AddHR 
_B.addhr=function() {
// [184] sbText.Append( {64} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [188] Sub AddElement(elID As String, tag As String, props As Map, styleProps As Map, classNames As List, loose As List, Text As String) 
_B.addelement=function(_elid,_tag,_props,_styleprops,_classnames,_loose,_text) {
var _elit,_k,_v,_selement;
// [189] elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [190] elID = elID.Replace( {65} , {66} ) 
_elid=_elid.split("#").join("");
// [191] Dim elIT As VHTML 
_elit= new banano_bananozui_vhtml();
// [192] elIT.Initialize(mCallBack, elID, elID) 
_elit.initialize(_B._mcallback,_elid,_elid);
// [193] elIT.SetText(Text) 
_elit.settext(_text);
// [194] elIT.SetTagName(tag) 
_elit.settagname(_tag);
// [195] If loose <> Null Then 
if (_loose!=null) {
// [196] For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [197] elIT.SetAttr(k, True) 
_elit.setattr(_k,true);
// [198] Next 
}
// [199] End If 
}
// [200] If props <> Null Then 
if (_props!=null) {
// [201] For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [202] Dim v As String = props.Get(k) 
_v=_props[_k];
// [203] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [204] Next 
}
// [205] End If 
}
// [206] If styleProps <> Null Then 
if (_styleprops!=null) {
// [207] For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [208] Dim v As String = styleProps.Get(k) 
_v=_styleprops[_k];
// [209] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [210] Next 
}
// [211] End If 
}
// [212] If classNames <> Null Then 
if (_classnames!=null) {
// [213] elIT.AddClass(classNames) 
_elit.addclass(_classnames);
// [214] End If 
}
// [216] Dim sElement As String = elIT.tostring 
_selement=_elit.tostring();
// [217] sbText.Append(sElement) 
_B._sbtext.append(_selement);
// End Sub
};

// [221] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [222] Return mElement 
return _B._melement;
// End Sub
};

// [226] public Sub getID() As String 
_B.getid=function() {
// [227] Return mName 
return _B._mname;
// End Sub
};

// [231] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [232] mTarget = BANano.GetElement( {67} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [233] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [237] public Sub Remove() 
_B.remove=function() {
// [238] mElement.Remove 
_B._melement.remove();
// [239] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [243] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [244] If mElement <> Null Then 
if (_B._melement!=null) {
// [245] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [246] End If 
}
// End Sub
};

// [250] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mitems,_mt;
// [251] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [252] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [253] varClass = varClass.trim 
_varclass=_varclass.trim();
// [254] if varClass = {68} Then Return 
if (_varclass=="") { return ;}
// [255] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [256] Dim mItems As List = BANanoShared.StrParse( {69} , varClass) 
_mitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [257] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [258] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [259] Next 
}
// End Sub
};

// [263] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mitems,_mt;
// [264] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [265] if varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [266] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [267] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [268] varClass = varClass.trim 
_varclass=_varclass.trim();
// [269] If varClass = {70} Then Return 
if (_varclass=="") { return ;}
// [270] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [271] Dim mItems As List = BANanoShared.StrParse( {71} , varClass) 
_mitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [272] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [273] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [274] Next 
}
// End Sub
};

// [278] public Sub AddStyle(varProp As String, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [279] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [280] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananozui_bananoshared.cstr(_varstyle);}
// [281] If mElement <> Null Then 
if (_B._melement!=null) {
// [282] Dim aStyle As Map = CreateMap() 
_astyle={};
// [283] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [284] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [285] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [286] End If 
}
// [287]  styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [291] public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [292]  If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [293]  If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananozui_bananoshared.cstr(_varvalue);}
// [295]  If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [296]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [297]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [298]  Else 
} else {
// [300]  If varValue.StartsWith( {72} ) Then 
if (_varvalue.startsWith(":")) {
// [301]  If varValue.StartsWith( {73} ) Then 
if (_varvalue.startsWith("$")) {
// [302]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [303]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [304]  Else 
} else {
// [305]  Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varvalue,2);
// [306]  If rname.Contains( {74} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [307]  attributeList.put( {2} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [308]  If mElement <> Null Then mElement.SetAttr( {3} , varValue) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_varvalue);}
// [309]  End If 
}
// [310]  Else 
} else {
// [312]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [313]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [314]  Select Case varProp 
switch ("" + _varprop) {
// [315]  Case {75} , {76} , {77} , {78} , {79} , {80} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [316]  bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [317]  End Select 
break;
}
// [318]  End If 
}
// [319]  End If 
}
// End Sub
};

// [323] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [324] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [325] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [326] For each k As String in classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [327] sbClass.Append(k).Append( {81} ) 
_sbclass.append(_k).append(" ");
// [328] Next 
}
// [329] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [330] Return mClasses 
return _B._mclasses;
// End Sub
};

// [334] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [335] If mElement <> Null Then 
if (_B._melement!=null) {
// [336] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [337] End If 
}
// [338] Dim mres as Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [339] For each k As String in mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [340] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [341] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [342] Next 
}
// End Sub
};

// [346] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [347] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [348] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [349] sbStyle.Append( {82} ) 
_sbstyle.append("{");
// [350] For each k As String in styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [351] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [352] sbStyle.Append(k).Append( {83} ).Append(v).Append( {84} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [353] Next 
}
// [354] sbStyle.Append( {85} ) 
_sbstyle.append("}");
// [355] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [356] Return mStyle 
return _B._mstyle;
// End Sub
};

// [360] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mitems,_mt,_k,_v;
// [361] Dim mItems As List = BANanoShared.StrParse( {86} , varAttributes) 
_mitems=_banano_bananozui_bananoshared.strparse(";",_varattributes);
// [362] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [363] Dim k As String = BANanoShared.MvField(mt,1, {87} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [364] Dim v As String = BANanoShared.MvField(mt,2, {88} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [365] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [366] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [367] Next 
}
// End Sub
};

// [371] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mitems,_mt,_k,_v;
// [372] Dim mItems As List = BANanoShared.StrParse( {89} , varStyles) 
_mitems=_banano_bananozui_bananoshared.strparse(",",_varstyles);
// [373] For Each mt As String In mItems 
for (var _mtindex=0;_mtindex<_mitems.length;_mtindex++) {
_mt=_mitems[_mtindex];
// [374] Dim k As String = BANanoShared.MvField(mt,1, {90} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,":");
// [375] Dim v As String = BANanoShared.MvField(mt,2, {91} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,":");
// [376] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [377] Next 
}
// End Sub
};

// [381] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [382] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [383] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [384] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [385] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [386] sbAttr.Append(k).Append( {92} ).Append(v).Append( {93} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [387] Next 
}
// [388] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [389] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [393] public Sub setText(varText As String) 
_B.settext=function(_vartext) {
// [394] If mElement <> Null Then 
if (_B._melement!=null) {
// [395] mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [396] End If 
}
// [397] mText = varText 
_B._mtext=_vartext;
// End Sub
};

// [401] public Sub getText() As String 
_B.gettext=function() {
// [402] Return mText 
return _B._mtext;
// End Sub
};

// [405] public Sub setKey(varKey As String) 
_B.setkey=function(_varkey) {
// [406] AddAttr( {94} , varKey) 
_B.addattr("key",_varkey,_B);
// [407] mKey = varKey 
_B._mkey=_varkey;
// End Sub
};

// [410] public Sub getKey() As String 
_B.getkey=function() {
// [411] Return mKey 
return _B._mkey;
// End Sub
};

// [414] public Sub setParentId(varParentId As String) 
_B.setparentid=function(_varparentid) {
// [415] AddAttr( {95} , varParentId) 
_B.addattr("parent-id",_varparentid,_B);
// [416] mParentId = varParentId 
_B._mparentid=_varparentid;
// End Sub
};

// [419] public Sub getParentId() As String 
_B.getparentid=function() {
// [420] Return mParentId 
return _B._mparentid;
// End Sub
};

// [423] public Sub setRef(varRef As String) 
_B.setref=function(_varref) {
// [424] AddAttr( {96} , varRef) 
_B.addattr("ref",_varref,_B);
// [425] mRef = varRef 
_B._mref=_varref;
// End Sub
};

// [428] public Sub getRef() As String 
_B.getref=function() {
// [429] Return mRef 
return _B._mref;
// End Sub
};

// [432] public Sub setSelfClose(varSelfClose As Boolean) 
_B.setselfclose=function(_varselfclose) {
// [433] AddAttr( {97} , varSelfClose) 
_B.addattr("self-close",_varselfclose,_B);
// [434] mSelfClose = varSelfClose 
_B._mselfclose=_varselfclose;
// End Sub
};

// [437] public Sub getSelfClose() As Boolean 
_B.getselfclose=function() {
// [438] Return mSelfClose 
return _B._mselfclose;
// End Sub
};

// [441] public Sub setVBindClass(varVBindClass As String) 
_B.setvbindclass=function(_varvbindclass) {
// [442] AddAttr( {98} , varVBindClass) 
_B.addattr("v-bind:class",_varvbindclass,_B);
// [443] mVBindClass = varVBindClass 
_B._mvbindclass=_varvbindclass;
// End Sub
};

// [446] public Sub getVBindClass() As String 
_B.getvbindclass=function() {
// [447] Return mVBindClass 
return _B._mvbindclass;
// End Sub
};

// [450] public Sub setVBindStyle(varVBindStyle As String) 
_B.setvbindstyle=function(_varvbindstyle) {
// [451] AddAttr( {99} , varVBindStyle) 
_B.addattr("v-bind:style",_varvbindstyle,_B);
// [452] mVBindStyle = varVBindStyle 
_B._mvbindstyle=_varvbindstyle;
// End Sub
};

// [455] public Sub getVBindStyle() As String 
_B.getvbindstyle=function() {
// [456] Return mVBindStyle 
return _B._mvbindstyle;
// End Sub
};

// [459] public Sub setVElse(varVElse As String) 
_B.setvelse=function(_varvelse) {
// [460] AddAttr( {100} , varVElse) 
_B.addattr("v-else",_varvelse,_B);
// [461] mVElse = varVElse 
_B._mvelse=_varvelse;
// End Sub
};

// [464] public Sub getVElse() As String 
_B.getvelse=function() {
// [465] Return mVElse 
return _B._mvelse;
// End Sub
};

// [468] public Sub setVElseIf(varVElseIf As String) 
_B.setvelseif=function(_varvelseif) {
// [469] AddAttr( {101} , varVElseIf) 
_B.addattr("v-else-if",_varvelseif,_B);
// [470] mVElseIf = varVElseIf 
_B._mvelseif=_varvelseif;
// End Sub
};

// [473] public Sub getVElseIf() As String 
_B.getvelseif=function() {
// [474] Return mVElseIf 
return _B._mvelseif;
// End Sub
};

// [477] public Sub setVFor(varVFor As String) 
_B.setvfor=function(_varvfor) {
// [478] AddAttr( {102} , varVFor) 
_B.addattr("v-for",_varvfor,_B);
// [479] mVFor = varVFor 
_B._mvfor=_varvfor;
// End Sub
};

// [482] public Sub getVFor() As String 
_B.getvfor=function() {
// [483] Return mVFor 
return _B._mvfor;
// End Sub
};

// [486] public Sub setVHtml(varVHtml As String) 
_B.setvhtml=function(_varvhtml) {
// [487] AddAttr( {103} , varVHtml) 
_B.addattr("v-html",_varvhtml,_B);
// [488] mVHtml = varVHtml 
_B._mvhtml=_varvhtml;
// End Sub
};

// [491] public Sub getVHtml() As String 
_B.getvhtml=function() {
// [492] Return mVHtml 
return _B._mvhtml;
// End Sub
};

// [495] public Sub setVIf(varVIf As String) 
_B.setvif=function(_varvif) {
// [496] AddAttr( {104} , varVIf) 
_B.addattr("v-if",_varvif,_B);
// [497] mVIf = varVIf 
_B._mvif=_varvif;
// End Sub
};

// [500] public Sub getVIf() As String 
_B.getvif=function() {
// [501] Return mVIf 
return _B._mvif;
// End Sub
};

// [504] public Sub setVModel(varVModel As String) 
_B.setvmodel=function(_varvmodel) {
// [505] AddAttr( {105} , varVModel) 
_B.addattr("v-model",_varvmodel,_B);
// [506] mVModel = varVModel 
_B._mvmodel=_varvmodel;
// End Sub
};

// [509] public Sub getVModel() As String 
_B.getvmodel=function() {
// [510] Return mVModel 
return _B._mvmodel;
// End Sub
};

// [513] public Sub setVOnDone(varVOnDone As String) 
_B.setvondone=function(_varvondone) {
// [514] AddAttr( {106} , varVOnDone) 
_B.addattr("v-on:done",_varvondone,_B);
// [515] mVOnDone = varVOnDone 
_B._mvondone=_varvondone;
// End Sub
};

// [518] public Sub getVOnDone() As String 
_B.getvondone=function() {
// [519] Return mVOnDone 
return _B._mvondone;
// End Sub
};

// [522] public Sub setVShow(varVShow As String) 
_B.setvshow=function(_varvshow) {
// [523] AddAttr( {107} , varVShow) 
_B.addattr("v-show",_varvshow,_B);
// [524] mVShow = varVShow 
_B._mvshow=_varvshow;
// End Sub
};

// [527] public Sub getVShow() As String 
_B.getvshow=function() {
// [528] Return mVShow 
return _B._mvshow;
// End Sub
};

// [531] public Sub setVText(varVText As String) 
_B.setvtext=function(_varvtext) {
// [532] AddAttr( {108} , varVText) 
_B.addattr("v-text",_varvtext,_B);
// [533] mVText = varVText 
_B._mvtext=_varvtext;
// End Sub
};

// [536] public Sub getVText() As String 
_B.getvtext=function() {
// [537] Return mVText 
return _B._mvtext;
// End Sub
};

}
/* =========================== ZUIZimage  =========================== */
function banano_bananozui_zuizimage() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtext="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="img";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._methods={};

_B._maccesskey="";

_B._malt="";

_B._mcontenteditable=false;

_B._mcontextmenu="";

_B._mdir="";

_B._mdraggable="";

_B._mdropzone="";

_B._mheight="";

_B._mhidden=false;

_B._mkey="";

_B._mlang="";

_B._mparentid="";

_B._mref="";

_B._mspellcheck=false;

_B._msrc="";

_B._mtabindex="";

_B._mtitle="";

_B._mvbindclass="";

_B._mvbindstyle="";

_B._mvelse="";

_B._mvelseif="";

_B._mvfor="";

_B._mvhtml="";

_B._mvif="";

_B._mvmodel="";

_B._mvshow="";

_B._mvtext="";

_B._mwidth="";

_B._mbackgroundcolor="";

_B._mbackgroundimage="";

_B._mbackgroundrepeat="";

_B._mborder="";

_B._mbordercolor="";

_B._mborderradius="";

_B._mborderstyle="";

_B._mborderwidth="";

_B._mcolor="";

_B._mfontfamily="";

_B._mfontsize="";

_B._mfontstyle="";

_B._mfontweight="";

_B._mstyleheight="";

_B._mmargin="";

_B._mmarginbottom="";

_B._mmarginleft="";

_B._mmarginright="";

_B._mmargintop="";

_B._mpadding="";

_B._mpaddingbottom="";

_B._mpaddingleft="";

_B._mpaddingright="";

_B._mpaddingtop="";

_B._mtextalign="";

_B._mtextdecoration="";

_B._mstylewidth="";

// [145] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [146] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [147] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [148] mCallBack = CallBack 
_B._mcallback=_callback;
// [149] classList.Initialize 
_B._classlist={};
// [150] styleList.Initialize 
_B._stylelist={};
// [151] attributeList.Initialize 
_B._attributelist={};
// [152] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// [153] bindings.Initialize 
_B._bindings={};
// [154] methods.Initialize 
_B._methods={};
// End Sub
};

// [158] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [159] mTarget = Target 
_B._mtarget=_target;
// [160] If Props <> Null Then 
if (_props!=null) {
// [161] mClasses = Props.Get( {61} ) 
_B._mclasses=_props["Classes"];
// [162] mAttributes = Props.Get( {62} ) 
_B._mattributes=_props["Attributes"];
// [163] mStyle = Props.Get( {63} ) 
_B._mstyle=_props["Style"];
// [164] mText = Props.Get( {64} ) 
_B._mtext=_props["Text"];
// [165] mAccesskey = Props.Get( {65} ) 
_B._maccesskey=_props["Accesskey"];
// [166] mAlt = Props.Get( {66} ) 
_B._malt=_props["Alt"];
// [167] mContenteditable = Props.Get( {67} ) 
_B._mcontenteditable=_props["Contenteditable"];
// [168] mContextmenu = Props.Get( {68} ) 
_B._mcontextmenu=_props["Contextmenu"];
// [169] mDir = Props.Get( {69} ) 
_B._mdir=_props["Dir"];
// [170] mDraggable = Props.Get( {70} ) 
_B._mdraggable=_props["Draggable"];
// [171] mDropzone = Props.Get( {71} ) 
_B._mdropzone=_props["Dropzone"];
// [172] mHeight = Props.Get( {72} ) 
_B._mheight=_props["Height"];
// [173] mHidden = Props.Get( {73} ) 
_B._mhidden=_props["Hidden"];
// [174] mKey = Props.Get( {74} ) 
_B._mkey=_props["Key"];
// [175] mLang = Props.Get( {75} ) 
_B._mlang=_props["Lang"];
// [176] mParentId = Props.Get( {76} ) 
_B._mparentid=_props["ParentId"];
// [177] mRef = Props.Get( {77} ) 
_B._mref=_props["Ref"];
// [178] mSpellcheck = Props.Get( {78} ) 
_B._mspellcheck=_props["Spellcheck"];
// [179] mSrc = Props.Get( {79} ) 
_B._msrc=_props["Src"];
// [180] mTabindex = Props.Get( {80} ) 
_B._mtabindex=_props["Tabindex"];
// [181] mTitle = Props.Get( {81} ) 
_B._mtitle=_props["Title"];
// [182] mVBindClass = Props.Get( {82} ) 
_B._mvbindclass=_props["VBindClass"];
// [183] mVBindStyle = Props.Get( {83} ) 
_B._mvbindstyle=_props["VBindStyle"];
// [184] mVElse = Props.Get( {84} ) 
_B._mvelse=_props["VElse"];
// [185] mVElseIf = Props.Get( {85} ) 
_B._mvelseif=_props["VElseIf"];
// [186] mVFor = Props.Get( {86} ) 
_B._mvfor=_props["VFor"];
// [187] mVHtml = Props.Get( {87} ) 
_B._mvhtml=_props["VHtml"];
// [188] mVIf = Props.Get( {88} ) 
_B._mvif=_props["VIf"];
// [189] mVModel = Props.Get( {89} ) 
_B._mvmodel=_props["VModel"];
// [190] mVShow = Props.Get( {90} ) 
_B._mvshow=_props["VShow"];
// [191] mVText = Props.Get( {91} ) 
_B._mvtext=_props["VText"];
// [192] mWidth = Props.Get( {92} ) 
_B._mwidth=_props["Width"];
// [193] mBackgroundColor = Props.Get( {93} ) 
_B._mbackgroundcolor=_props["BackgroundColor"];
// [194] mBackgroundImage = Props.Get( {94} ) 
_B._mbackgroundimage=_props["BackgroundImage"];
// [195] mBackgroundRepeat = Props.Get( {95} ) 
_B._mbackgroundrepeat=_props["BackgroundRepeat"];
// [196] mBorder = Props.Get( {96} ) 
_B._mborder=_props["Border"];
// [197] mBorderColor = Props.Get( {97} ) 
_B._mbordercolor=_props["BorderColor"];
// [198] mBorderRadius = Props.Get( {98} ) 
_B._mborderradius=_props["BorderRadius"];
// [199] mBorderStyle = Props.Get( {99} ) 
_B._mborderstyle=_props["BorderStyle"];
// [200] mBorderWidth = Props.Get( {100} ) 
_B._mborderwidth=_props["BorderWidth"];
// [201] mColor = Props.Get( {101} ) 
_B._mcolor=_props["Color"];
// [202] mFontFamily = Props.Get( {102} ) 
_B._mfontfamily=_props["FontFamily"];
// [203] mFontSize = Props.Get( {103} ) 
_B._mfontsize=_props["FontSize"];
// [204] mFontStyle = Props.Get( {104} ) 
_B._mfontstyle=_props["FontStyle"];
// [205] mFontWeight = Props.Get( {105} ) 
_B._mfontweight=_props["FontWeight"];
// [206] mStyleHeight = Props.Get( {106} ) 
_B._mstyleheight=_props["StyleHeight"];
// [207] mMargin = Props.Get( {107} ) 
_B._mmargin=_props["Margin"];
// [208] mMarginBottom = Props.Get( {108} ) 
_B._mmarginbottom=_props["MarginBottom"];
// [209] mMarginLeft = Props.Get( {109} ) 
_B._mmarginleft=_props["MarginLeft"];
// [210] mMarginRight = Props.Get( {110} ) 
_B._mmarginright=_props["MarginRight"];
// [211] mMarginTop = Props.Get( {111} ) 
_B._mmargintop=_props["MarginTop"];
// [212] mPadding = Props.Get( {112} ) 
_B._mpadding=_props["Padding"];
// [213] mPaddingBottom = Props.Get( {113} ) 
_B._mpaddingbottom=_props["PaddingBottom"];
// [214] mPaddingLeft = Props.Get( {114} ) 
_B._mpaddingleft=_props["PaddingLeft"];
// [215] mPaddingRight = Props.Get( {115} ) 
_B._mpaddingright=_props["PaddingRight"];
// [216] mPaddingTop = Props.Get( {116} ) 
_B._mpaddingtop=_props["PaddingTop"];
// [217] mTextAlign = Props.Get( {117} ) 
_B._mtextalign=_props["TextAlign"];
// [218] mTextDecoration = Props.Get( {118} ) 
_B._mtextdecoration=_props["TextDecoration"];
// [219] mStyleWidth = Props.Get( {119} ) 
_B._mstylewidth=_props["StyleWidth"];
// [220] End If 
}
// [222] AddAttr( {120} , mAccesskey) 
_B.addattr("accesskey",_B._maccesskey,_B);
// [223] AddAttr( {121} , mAlt) 
_B.addattr("alt",_B._malt,_B);
// [224] AddAttr( {122} , mContenteditable) 
_B.addattr("contenteditable",_B._mcontenteditable,_B);
// [225] AddAttr( {123} , mContextmenu) 
_B.addattr("contextmenu",_B._mcontextmenu,_B);
// [226] AddAttr( {124} , mDir) 
_B.addattr("dir",_B._mdir,_B);
// [227] AddAttr( {125} , mDraggable) 
_B.addattr("draggable",_B._mdraggable,_B);
// [228] AddAttr( {126} , mDropzone) 
_B.addattr("dropzone",_B._mdropzone,_B);
// [229] AddAttr( {127} , mHeight) 
_B.addattr("height",_B._mheight,_B);
// [230] AddAttr( {128} , mHidden) 
_B.addattr("hidden",_B._mhidden,_B);
// [231] AddAttr( {129} , mKey) 
_B.addattr("key",_B._mkey,_B);
// [232] AddAttr( {130} , mLang) 
_B.addattr("lang",_B._mlang,_B);
// [233] AddAttr( {131} , mParentId) 
_B.addattr("parent-id",_B._mparentid,_B);
// [234] AddAttr( {132} , mRef) 
_B.addattr("ref",_B._mref,_B);
// [235] AddAttr( {133} , mSpellcheck) 
_B.addattr("spellcheck",_B._mspellcheck,_B);
// [236] AddAttr( {134} , mSrc) 
_B.addattr("src",_B._msrc,_B);
// [237] AddAttr( {135} , mTabindex) 
_B.addattr("tabindex",_B._mtabindex,_B);
// [238] AddAttr( {136} , mTitle) 
_B.addattr("title",_B._mtitle,_B);
// [239] AddAttr( {137} , mVBindClass) 
_B.addattr("v-bind:class",_B._mvbindclass,_B);
// [240] AddAttr( {138} , mVBindStyle) 
_B.addattr("v-bind:style",_B._mvbindstyle,_B);
// [241] AddAttr( {139} , mVElse) 
_B.addattr("v-else",_B._mvelse,_B);
// [242] AddAttr( {140} , mVElseIf) 
_B.addattr("v-else-if",_B._mvelseif,_B);
// [243] AddAttr( {141} , mVFor) 
_B.addattr("v-for",_B._mvfor,_B);
// [244] AddAttr( {142} , mVHtml) 
_B.addattr("v-html",_B._mvhtml,_B);
// [245] AddAttr( {143} , mVIf) 
_B.addattr("v-if",_B._mvif,_B);
// [246] AddAttr( {144} , mVModel) 
_B.addattr("v-model",_B._mvmodel,_B);
// [247] AddAttr( {145} , mVShow) 
_B.addattr("v-show",_B._mvshow,_B);
// [248] AddAttr( {146} , mVText) 
_B.addattr("v-text",_B._mvtext,_B);
// [249] AddAttr( {147} , mWidth) 
_B.addattr("width",_B._mwidth,_B);
// [250] AddStyle( {148} , mBackgroundColor) 
_B.addstyle("background-color",_B._mbackgroundcolor,_B);
// [251] AddStyle( {149} , mBackgroundImage) 
_B.addstyle("background-image",_B._mbackgroundimage,_B);
// [252] AddStyle( {150} , mBackgroundRepeat) 
_B.addstyle("background-repeat",_B._mbackgroundrepeat,_B);
// [253] AddStyle( {151} , mBorder) 
_B.addstyle("border",_B._mborder,_B);
// [254] AddStyle( {152} , mBorderColor) 
_B.addstyle("border-color",_B._mbordercolor,_B);
// [255] AddStyle( {153} , mBorderRadius) 
_B.addstyle("border-radius",_B._mborderradius,_B);
// [256] AddStyle( {154} , mBorderStyle) 
_B.addstyle("border-style",_B._mborderstyle,_B);
// [257] AddStyle( {155} , mBorderWidth) 
_B.addstyle("border-width",_B._mborderwidth,_B);
// [258] AddStyle( {156} , mColor) 
_B.addstyle("color",_B._mcolor,_B);
// [259] AddStyle( {157} , mFontFamily) 
_B.addstyle("font-family",_B._mfontfamily,_B);
// [260] AddStyle( {158} , mFontSize) 
_B.addstyle("font-size",_B._mfontsize,_B);
// [261] AddStyle( {159} , mFontStyle) 
_B.addstyle("font-style",_B._mfontstyle,_B);
// [262] AddStyle( {160} , mFontWeight) 
_B.addstyle("font-weight",_B._mfontweight,_B);
// [263] AddStyle( {161} , mStyleHeight) 
_B.addstyle("height",_B._mstyleheight,_B);
// [264] AddStyle( {162} , mMargin) 
_B.addstyle("margin",_B._mmargin,_B);
// [265] AddStyle( {163} , mMarginBottom) 
_B.addstyle("margin-bottom",_B._mmarginbottom,_B);
// [266] AddStyle( {164} , mMarginLeft) 
_B.addstyle("margin-left",_B._mmarginleft,_B);
// [267] AddStyle( {165} , mMarginRight) 
_B.addstyle("margin-right",_B._mmarginright,_B);
// [268] AddStyle( {166} , mMarginTop) 
_B.addstyle("margin-top",_B._mmargintop,_B);
// [269] AddStyle( {167} , mPadding) 
_B.addstyle("padding",_B._mpadding,_B);
// [270] AddStyle( {168} , mPaddingBottom) 
_B.addstyle("padding-bottom",_B._mpaddingbottom,_B);
// [271] AddStyle( {169} , mPaddingLeft) 
_B.addstyle("padding-left",_B._mpaddingleft,_B);
// [272] AddStyle( {170} , mPaddingRight) 
_B.addstyle("padding-right",_B._mpaddingright,_B);
// [273] AddStyle( {171} , mPaddingTop) 
_B.addstyle("padding-top",_B._mpaddingtop,_B);
// [274] AddStyle( {172} , mTextAlign) 
_B.addstyle("text-align",_B._mtextalign,_B);
// [275] AddStyle( {173} , mTextDecoration) 
_B.addstyle("text-decoration",_B._mtextdecoration,_B);
// [276] AddStyle( {174} , mStyleWidth) 
_B.addstyle("width",_B._mstylewidth,_B);
// [277] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [278] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [279] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [282] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [283] mElement = mTarget.Append(strHTML).Get( {175} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// [285] mElement.HandleEvents( {176} , mCallBack, mEventName & {177} ) 
_B._melement.handle("click", function(event) {if (typeof _B._mcallback[(_B._meventname+"_click").toLowerCase()]==="function") {return _B._mcallback[(_B._meventname+"_click").toLowerCase()](event,_B)}});
// End Sub
};

// [290] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [292] Dim className As String = BANanoShared.JoinMapKeys(classList, {178} ) 
_classname=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [293] AddAttr( {179} , className) 
_B.addattr("class",_classname,_B);
// [295] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananozui_bananoshared.buildstyle(_B._stylelist);
// [296] AddAttr( {180} , styleName) 
_B.addattr("style",_stylename,_B);
// [298] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananozui_bananoshared.buildattributes(_B._attributelist);
// [299] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mtext + "</" + _B._mtagname + ">";
// [300] Return rslt 
return _rslt;
// End Sub
};

// [304] Sub SetVBind(prop As String, value As String) 
_B.setvbind=function(_prop,_value) {
// [305] prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [306] value = value.ToLowerCase 
_value=_value.toLowerCase();
// [307] prop = {1} 
_prop="v-bind:" + _prop + "";
// [308] AddAttr(prop,value) 
_B.addattr(_prop,_value,_B);
// [309] bindings.Put(value, Null) 
_B._bindings[_value]=null;
// End Sub
};

// [313] Sub AddToApp(vap As VueApp) 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [315] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [316] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [317] vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [318] Next 
}
// [320] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [321] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [322] vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [323] Next 
}
// End Sub
};

// [327] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [329] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [330] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [331] ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [332] Next 
}
// [334] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [335] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [336] ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [337] Next 
}
// End Sub
};

// [341] Sub AddBR 
_B.addbr=function() {
// [342] sbText.Append( {181} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [346] Sub AddHR 
_B.addhr=function() {
// [347] sbText.Append( {182} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [351] Sub AddElement(elID As String, tag As String, props As Map, styleProps As Map, classNames As List, loose As List, Text As String) 
_B.addelement=function(_elid,_tag,_props,_styleprops,_classnames,_loose,_text) {
var _elit,_k,_v,_selement;
// [352] elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [353] elID = elID.Replace( {183} , {184} ) 
_elid=_elid.split("#").join("");
// [354] Dim elIT As VHTML 
_elit= new banano_bananozui_vhtml();
// [355] elIT.Initialize(mCallBack, elID, elID) 
_elit.initialize(_B._mcallback,_elid,_elid);
// [356] elIT.SetText(Text) 
_elit.settext(_text);
// [357] elIT.SetTagName(tag) 
_elit.settagname(_tag);
// [358] If loose <> Null Then 
if (_loose!=null) {
// [359] For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [360] elIT.SetAttr(k, True) 
_elit.setattr(_k,true);
// [361] Next 
}
// [362] End If 
}
// [363] If props <> Null Then 
if (_props!=null) {
// [364] For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [365] Dim v As String = props.Get(k) 
_v=_props[_k];
// [366] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [367] Next 
}
// [368] End If 
}
// [369] If styleProps <> Null Then 
if (_styleprops!=null) {
// [370] For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [371] Dim v As String = styleProps.Get(k) 
_v=_styleprops[_k];
// [372] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [373] Next 
}
// [374] End If 
}
// [375] If classNames <> Null Then 
if (_classnames!=null) {
// [376] elIT.AddClass(classNames) 
_elit.addclass(_classnames);
// [377] End If 
}
// [379] Dim sElement As String = elIT.tostring 
_selement=_elit.tostring();
// [380] sbText.Append(sElement) 
_B._sbtext.append(_selement);
// End Sub
};

// [384] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [385] Return mElement 
return _B._melement;
// End Sub
};

// [389] public Sub getID() As String 
_B.getid=function() {
// [390] Return mName 
return _B._mname;
// End Sub
};

// [394] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [395] mTarget = BANano.GetElement( {185} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [396] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [400] public Sub Remove() 
_B.remove=function() {
// [401] mElement.Remove 
_B._melement.remove();
// [402] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [406] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [407] If mElement <> Null Then 
if (_B._melement!=null) {
// [408] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [409] End If 
}
// End Sub
};

// [413] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [414] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [415] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [416] varClass = varClass.trim 
_varclass=_varclass.trim();
// [417] if varClass = {186} Then Return 
if (_varclass=="") { return ;}
// [418] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [419] Dim mxItems As List = BANanoShared.StrParse( {187} , varClass) 
_mxitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [420] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [421] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [422] Next 
}
// End Sub
};

// [426] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As Boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [427] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [428] If varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [429] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [430] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [431] varClass = varClass.trim 
_varclass=_varclass.trim();
// [432] If varClass = {188} Then Return 
if (_varclass=="") { return ;}
// [433] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [434] Dim mxItems As List = BANanoShared.StrParse( {189} , varClass) 
_mxitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [435] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [436] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [437] Next 
}
// End Sub
};

// [441] public Sub AddStyle(varProp As String, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [442] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [443] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananozui_bananoshared.cstr(_varstyle);}
// [444] If mElement <> Null Then 
if (_B._melement!=null) {
// [445] Dim aStyle As Map = CreateMap() 
_astyle={};
// [446] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [447] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [448] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [449] End If 
}
// [450]  styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [453] public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [454]  If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [455]  If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananozui_bananoshared.cstr(_varvalue);}
// [457]  If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [458]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [459]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [460]  Else 
} else {
// [462]  If varValue.StartsWith( {190} ) Then 
if (_varvalue.startsWith(":")) {
// [463]  If varValue.StartsWith( {191} ) Then 
if (_varvalue.startsWith("$")) {
// [464]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [465]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [466]  Else 
} else {
// [467]  Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varvalue,2);
// [468]  If rname.Contains( {192} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [469]  attributeList.put( {2} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [470]  If mElement <> Null Then mElement.SetAttr( {3} , varValue) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_varvalue);}
// [471]  End If 
}
// [472]  Else 
} else {
// [474]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [475]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [476]  Select Case varProp 
switch ("" + _varprop) {
// [477]  Case {193} , {194} , {195} , {196} , {197} , {198} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [478]  bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [479]  End Select 
break;
}
// [480]  End If 
}
// [481]  End If 
}
// End Sub
};

// [485] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [486] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [487] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [488] For Each k As String In classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [489] sbClass.Append(k).Append( {199} ) 
_sbclass.append(_k).append(" ");
// [490] Next 
}
// [491] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [492] Return mClasses 
return _B._mclasses;
// End Sub
};

// [496] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [497] If mElement <> Null Then 
if (_B._melement!=null) {
// [498] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [499] End If 
}
// [500] Dim mres As Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [501] For Each k As String In mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [502] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [503] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [504] Next 
}
// End Sub
};

// [508] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [509] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [510] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [511] sbStyle.Append( {200} ) 
_sbstyle.append("{");
// [512] For Each k As String In styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [513] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [514] sbStyle.Append(k).Append( {201} ).Append(v).Append( {202} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [515] Next 
}
// [516] sbStyle.Append( {203} ) 
_sbstyle.append("}");
// [517] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [518] Return mStyle 
return _B._mstyle;
// End Sub
};

// [522] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [523] Dim mxItems As List = BANanoShared.StrParse( {204} , varAttributes) 
_mxitems=_banano_bananozui_bananoshared.strparse(";",_varattributes);
// [524] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [525] Dim k As String = BANanoShared.MvField(mt,1, {205} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [526] Dim v As String = BANanoShared.MvField(mt,2, {206} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [527] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [528] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [529] Next 
}
// End Sub
};

// [533] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [534] Dim mxItems As List = BANanoShared.StrParse( {207} , varStyles) 
_mxitems=_banano_bananozui_bananoshared.strparse(",",_varstyles);
// [535] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [536] Dim k As String = BANanoShared.MvField(mt,1, {208} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,":");
// [537] Dim v As String = BANanoShared.MvField(mt,2, {209} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,":");
// [538] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [539] Next 
}
// End Sub
};

// [543] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [544] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [545] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [546] For each k As String in attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [547] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [548] sbAttr.Append(k).Append( {210} ).Append(v).Append( {211} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [549] Next 
}
// [550] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [551] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [555] public Sub setText(varText As String) 
_B.settext=function(_vartext) {
// [556] If mElement <> Null Then 
if (_B._melement!=null) {
// [557] mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [558] End If 
}
// [559] mText = varText 
_B._mtext=_vartext;
// End Sub
};

// [563] public Sub getText() As String 
_B.gettext=function() {
// [564] Return mText 
return _B._mtext;
// End Sub
};

// [567] public Sub setAccesskey(varAccesskey As String) 
_B.setaccesskey=function(_varaccesskey) {
// [568] AddAttr( {212} , varAccesskey) 
_B.addattr("accesskey",_varaccesskey,_B);
// [569] mAccesskey = varAccesskey 
_B._maccesskey=_varaccesskey;
// End Sub
};

// [572] public Sub getAccesskey() As String 
_B.getaccesskey=function() {
// [573] Return mAccesskey 
return _B._maccesskey;
// End Sub
};

// [576] public Sub setAlt(varAlt As String) 
_B.setalt=function(_varalt) {
// [577] AddAttr( {213} , varAlt) 
_B.addattr("alt",_varalt,_B);
// [578] mAlt = varAlt 
_B._malt=_varalt;
// End Sub
};

// [581] public Sub getAlt() As String 
_B.getalt=function() {
// [582] Return mAlt 
return _B._malt;
// End Sub
};

// [585] public Sub setContenteditable(varContenteditable As Boolean) 
_B.setcontenteditable=function(_varcontenteditable) {
// [586] AddAttr( {214} , varContenteditable) 
_B.addattr("contenteditable",_varcontenteditable,_B);
// [587] mContenteditable = varContenteditable 
_B._mcontenteditable=_varcontenteditable;
// End Sub
};

// [590] public Sub getContenteditable() As Boolean 
_B.getcontenteditable=function() {
// [591] Return mContenteditable 
return _B._mcontenteditable;
// End Sub
};

// [594] public Sub setContextmenu(varContextmenu As String) 
_B.setcontextmenu=function(_varcontextmenu) {
// [595] AddAttr( {215} , varContextmenu) 
_B.addattr("contextmenu",_varcontextmenu,_B);
// [596] mContextmenu = varContextmenu 
_B._mcontextmenu=_varcontextmenu;
// End Sub
};

// [599] public Sub getContextmenu() As String 
_B.getcontextmenu=function() {
// [600] Return mContextmenu 
return _B._mcontextmenu;
// End Sub
};

// [603] public Sub setDir(varDir As String) 
_B.setdir=function(_vardir) {
// [604] AddAttr( {216} , varDir) 
_B.addattr("dir",_vardir,_B);
// [605] mDir = varDir 
_B._mdir=_vardir;
// End Sub
};

// [608] public Sub getDir() As String 
_B.getdir=function() {
// [609] Return mDir 
return _B._mdir;
// End Sub
};

// [612] public Sub setDraggable(varDraggable As String) 
_B.setdraggable=function(_vardraggable) {
// [613] AddAttr( {217} , varDraggable) 
_B.addattr("draggable",_vardraggable,_B);
// [614] mDraggable = varDraggable 
_B._mdraggable=_vardraggable;
// End Sub
};

// [617] public Sub getDraggable() As String 
_B.getdraggable=function() {
// [618] Return mDraggable 
return _B._mdraggable;
// End Sub
};

// [621] public Sub setDropzone(varDropzone As String) 
_B.setdropzone=function(_vardropzone) {
// [622] AddAttr( {218} , varDropzone) 
_B.addattr("dropzone",_vardropzone,_B);
// [623] mDropzone = varDropzone 
_B._mdropzone=_vardropzone;
// End Sub
};

// [626] public Sub getDropzone() As String 
_B.getdropzone=function() {
// [627] Return mDropzone 
return _B._mdropzone;
// End Sub
};

// [630] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [631] AddAttr( {219} , varHeight) 
_B.addattr("height",_varheight,_B);
// [632] mHeight = varHeight 
_B._mheight=_varheight;
// End Sub
};

// [635] public Sub getHeight() As String 
_B.getheight=function() {
// [636] Return mHeight 
return _B._mheight;
// End Sub
};

// [639] public Sub setHidden(varHidden As Boolean) 
_B.sethidden=function(_varhidden) {
// [640] AddAttr( {220} , varHidden) 
_B.addattr("hidden",_varhidden,_B);
// [641] mHidden = varHidden 
_B._mhidden=_varhidden;
// End Sub
};

// [644] public Sub getHidden() As Boolean 
_B.gethidden=function() {
// [645] Return mHidden 
return _B._mhidden;
// End Sub
};

// [648] public Sub setKey(varKey As String) 
_B.setkey=function(_varkey) {
// [649] AddAttr( {221} , varKey) 
_B.addattr("key",_varkey,_B);
// [650] mKey = varKey 
_B._mkey=_varkey;
// End Sub
};

// [653] public Sub getKey() As String 
_B.getkey=function() {
// [654] Return mKey 
return _B._mkey;
// End Sub
};

// [657] public Sub setLang(varLang As String) 
_B.setlang=function(_varlang) {
// [658] AddAttr( {222} , varLang) 
_B.addattr("lang",_varlang,_B);
// [659] mLang = varLang 
_B._mlang=_varlang;
// End Sub
};

// [662] public Sub getLang() As String 
_B.getlang=function() {
// [663] Return mLang 
return _B._mlang;
// End Sub
};

// [666] public Sub setParentId(varParentId As String) 
_B.setparentid=function(_varparentid) {
// [667] AddAttr( {223} , varParentId) 
_B.addattr("parent-id",_varparentid,_B);
// [668] mParentId = varParentId 
_B._mparentid=_varparentid;
// End Sub
};

// [671] public Sub getParentId() As String 
_B.getparentid=function() {
// [672] Return mParentId 
return _B._mparentid;
// End Sub
};

// [675] public Sub setRef(varRef As String) 
_B.setref=function(_varref) {
// [676] AddAttr( {224} , varRef) 
_B.addattr("ref",_varref,_B);
// [677] mRef = varRef 
_B._mref=_varref;
// End Sub
};

// [680] public Sub getRef() As String 
_B.getref=function() {
// [681] Return mRef 
return _B._mref;
// End Sub
};

// [684] public Sub setSpellcheck(varSpellcheck As Boolean) 
_B.setspellcheck=function(_varspellcheck) {
// [685] AddAttr( {225} , varSpellcheck) 
_B.addattr("spellcheck",_varspellcheck,_B);
// [686] mSpellcheck = varSpellcheck 
_B._mspellcheck=_varspellcheck;
// End Sub
};

// [689] public Sub getSpellcheck() As Boolean 
_B.getspellcheck=function() {
// [690] Return mSpellcheck 
return _B._mspellcheck;
// End Sub
};

// [693] public Sub setSrc(varSrc As String) 
_B.setsrc=function(_varsrc) {
// [694] AddAttr( {226} , varSrc) 
_B.addattr("src",_varsrc,_B);
// [695] mSrc = varSrc 
_B._msrc=_varsrc;
// End Sub
};

// [698] public Sub getSrc() As String 
_B.getsrc=function() {
// [699] Return mSrc 
return _B._msrc;
// End Sub
};

// [702] public Sub setTabindex(varTabindex As String) 
_B.settabindex=function(_vartabindex) {
// [703] AddAttr( {227} , varTabindex) 
_B.addattr("tabindex",_vartabindex,_B);
// [704] mTabindex = varTabindex 
_B._mtabindex=_vartabindex;
// End Sub
};

// [707] public Sub getTabindex() As String 
_B.gettabindex=function() {
// [708] Return mTabindex 
return _B._mtabindex;
// End Sub
};

// [711] public Sub setTitle(varTitle As String) 
_B.settitle=function(_vartitle) {
// [712] AddAttr( {228} , varTitle) 
_B.addattr("title",_vartitle,_B);
// [713] mTitle = varTitle 
_B._mtitle=_vartitle;
// End Sub
};

// [716] public Sub getTitle() As String 
_B.gettitle=function() {
// [717] Return mTitle 
return _B._mtitle;
// End Sub
};

// [720] public Sub setVBindClass(varVBindClass As String) 
_B.setvbindclass=function(_varvbindclass) {
// [721] AddAttr( {229} , varVBindClass) 
_B.addattr("v-bind:class",_varvbindclass,_B);
// [722] mVBindClass = varVBindClass 
_B._mvbindclass=_varvbindclass;
// End Sub
};

// [725] public Sub getVBindClass() As String 
_B.getvbindclass=function() {
// [726] Return mVBindClass 
return _B._mvbindclass;
// End Sub
};

// [729] public Sub setVBindStyle(varVBindStyle As String) 
_B.setvbindstyle=function(_varvbindstyle) {
// [730] AddAttr( {230} , varVBindStyle) 
_B.addattr("v-bind:style",_varvbindstyle,_B);
// [731] mVBindStyle = varVBindStyle 
_B._mvbindstyle=_varvbindstyle;
// End Sub
};

// [734] public Sub getVBindStyle() As String 
_B.getvbindstyle=function() {
// [735] Return mVBindStyle 
return _B._mvbindstyle;
// End Sub
};

// [738] public Sub setVElse(varVElse As String) 
_B.setvelse=function(_varvelse) {
// [739] AddAttr( {231} , varVElse) 
_B.addattr("v-else",_varvelse,_B);
// [740] mVElse = varVElse 
_B._mvelse=_varvelse;
// End Sub
};

// [743] public Sub getVElse() As String 
_B.getvelse=function() {
// [744] Return mVElse 
return _B._mvelse;
// End Sub
};

// [747] public Sub setVElseIf(varVElseIf As String) 
_B.setvelseif=function(_varvelseif) {
// [748] AddAttr( {232} , varVElseIf) 
_B.addattr("v-else-if",_varvelseif,_B);
// [749] mVElseIf = varVElseIf 
_B._mvelseif=_varvelseif;
// End Sub
};

// [752] public Sub getVElseIf() As String 
_B.getvelseif=function() {
// [753] Return mVElseIf 
return _B._mvelseif;
// End Sub
};

// [756] public Sub setVFor(varVFor As String) 
_B.setvfor=function(_varvfor) {
// [757] AddAttr( {233} , varVFor) 
_B.addattr("v-for",_varvfor,_B);
// [758] mVFor = varVFor 
_B._mvfor=_varvfor;
// End Sub
};

// [761] public Sub getVFor() As String 
_B.getvfor=function() {
// [762] Return mVFor 
return _B._mvfor;
// End Sub
};

// [765] public Sub setVHtml(varVHtml As String) 
_B.setvhtml=function(_varvhtml) {
// [766] AddAttr( {234} , varVHtml) 
_B.addattr("v-html",_varvhtml,_B);
// [767] mVHtml = varVHtml 
_B._mvhtml=_varvhtml;
// End Sub
};

// [770] public Sub getVHtml() As String 
_B.getvhtml=function() {
// [771] Return mVHtml 
return _B._mvhtml;
// End Sub
};

// [774] public Sub setVIf(varVIf As String) 
_B.setvif=function(_varvif) {
// [775] AddAttr( {235} , varVIf) 
_B.addattr("v-if",_varvif,_B);
// [776] mVIf = varVIf 
_B._mvif=_varvif;
// End Sub
};

// [779] public Sub getVIf() As String 
_B.getvif=function() {
// [780] Return mVIf 
return _B._mvif;
// End Sub
};

// [783] public Sub setVModel(varVModel As String) 
_B.setvmodel=function(_varvmodel) {
// [784] AddAttr( {236} , varVModel) 
_B.addattr("v-model",_varvmodel,_B);
// [785] mVModel = varVModel 
_B._mvmodel=_varvmodel;
// End Sub
};

// [788] public Sub getVModel() As String 
_B.getvmodel=function() {
// [789] Return mVModel 
return _B._mvmodel;
// End Sub
};

// [792] public Sub setVShow(varVShow As String) 
_B.setvshow=function(_varvshow) {
// [793] AddAttr( {237} , varVShow) 
_B.addattr("v-show",_varvshow,_B);
// [794] mVShow = varVShow 
_B._mvshow=_varvshow;
// End Sub
};

// [797] public Sub getVShow() As String 
_B.getvshow=function() {
// [798] Return mVShow 
return _B._mvshow;
// End Sub
};

// [801] public Sub setVText(varVText As String) 
_B.setvtext=function(_varvtext) {
// [802] AddAttr( {238} , varVText) 
_B.addattr("v-text",_varvtext,_B);
// [803] mVText = varVText 
_B._mvtext=_varvtext;
// End Sub
};

// [806] public Sub getVText() As String 
_B.getvtext=function() {
// [807] Return mVText 
return _B._mvtext;
// End Sub
};

// [810] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [811] AddAttr( {239} , varWidth) 
_B.addattr("width",_varwidth,_B);
// [812] mWidth = varWidth 
_B._mwidth=_varwidth;
// End Sub
};

// [815] public Sub getWidth() As String 
_B.getwidth=function() {
// [816] Return mWidth 
return _B._mwidth;
// End Sub
};

// [819] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [820] AddStyle( {240} , varBackgroundColor) 
_B.addstyle("background-color",_varbackgroundcolor,_B);
// [821] mBackgroundColor = varBackgroundColor 
_B._mbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [824] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [825] Return mBackgroundColor 
return _B._mbackgroundcolor;
// End Sub
};

// [828] public Sub setBackgroundImage(varBackgroundImage As String) 
_B.setbackgroundimage=function(_varbackgroundimage) {
// [829] AddStyle( {241} , varBackgroundImage) 
_B.addstyle("background-image",_varbackgroundimage,_B);
// [830] mBackgroundImage = varBackgroundImage 
_B._mbackgroundimage=_varbackgroundimage;
// End Sub
};

// [833] public Sub getBackgroundImage() As String 
_B.getbackgroundimage=function() {
// [834] Return mBackgroundImage 
return _B._mbackgroundimage;
// End Sub
};

// [837] public Sub setBackgroundRepeat(varBackgroundRepeat As String) 
_B.setbackgroundrepeat=function(_varbackgroundrepeat) {
// [838] AddStyle( {242} , varBackgroundRepeat) 
_B.addstyle("background-repeat",_varbackgroundrepeat,_B);
// [839] mBackgroundRepeat = varBackgroundRepeat 
_B._mbackgroundrepeat=_varbackgroundrepeat;
// End Sub
};

// [842] public Sub getBackgroundRepeat() As String 
_B.getbackgroundrepeat=function() {
// [843] Return mBackgroundRepeat 
return _B._mbackgroundrepeat;
// End Sub
};

// [846] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [847] AddStyle( {243} , varBorder) 
_B.addstyle("border",_varborder,_B);
// [848] mBorder = varBorder 
_B._mborder=_varborder;
// End Sub
};

// [851] public Sub getBorder() As String 
_B.getborder=function() {
// [852] Return mBorder 
return _B._mborder;
// End Sub
};

// [855] public Sub setBorderColor(varBorderColor As String) 
_B.setbordercolor=function(_varbordercolor) {
// [856] AddStyle( {244} , varBorderColor) 
_B.addstyle("border-color",_varbordercolor,_B);
// [857] mBorderColor = varBorderColor 
_B._mbordercolor=_varbordercolor;
// End Sub
};

// [860] public Sub getBorderColor() As String 
_B.getbordercolor=function() {
// [861] Return mBorderColor 
return _B._mbordercolor;
// End Sub
};

// [864] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [865] AddStyle( {245} , varBorderRadius) 
_B.addstyle("border-radius",_varborderradius,_B);
// [866] mBorderRadius = varBorderRadius 
_B._mborderradius=_varborderradius;
// End Sub
};

// [869] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [870] Return mBorderRadius 
return _B._mborderradius;
// End Sub
};

// [873] public Sub setBorderStyle(varBorderStyle As String) 
_B.setborderstyle=function(_varborderstyle) {
// [874] AddStyle( {246} , varBorderStyle) 
_B.addstyle("border-style",_varborderstyle,_B);
// [875] mBorderStyle = varBorderStyle 
_B._mborderstyle=_varborderstyle;
// End Sub
};

// [878] public Sub getBorderStyle() As String 
_B.getborderstyle=function() {
// [879] Return mBorderStyle 
return _B._mborderstyle;
// End Sub
};

// [882] public Sub setBorderWidth(varBorderWidth As String) 
_B.setborderwidth=function(_varborderwidth) {
// [883] AddStyle( {247} , varBorderWidth) 
_B.addstyle("border-width",_varborderwidth,_B);
// [884] mBorderWidth = varBorderWidth 
_B._mborderwidth=_varborderwidth;
// End Sub
};

// [887] public Sub getBorderWidth() As String 
_B.getborderwidth=function() {
// [888] Return mBorderWidth 
return _B._mborderwidth;
// End Sub
};

// [891] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [892] AddStyle( {248} , varColor) 
_B.addstyle("color",_varcolor,_B);
// [893] mColor = varColor 
_B._mcolor=_varcolor;
// End Sub
};

// [896] public Sub getColor() As String 
_B.getcolor=function() {
// [897] Return mColor 
return _B._mcolor;
// End Sub
};

// [900] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [901] AddStyle( {249} , varFontFamily) 
_B.addstyle("font-family",_varfontfamily,_B);
// [902] mFontFamily = varFontFamily 
_B._mfontfamily=_varfontfamily;
// End Sub
};

// [905] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [906] Return mFontFamily 
return _B._mfontfamily;
// End Sub
};

// [909] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [910] AddStyle( {250} , varFontSize) 
_B.addstyle("font-size",_varfontsize,_B);
// [911] mFontSize = varFontSize 
_B._mfontsize=_varfontsize;
// End Sub
};

// [914] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [915] Return mFontSize 
return _B._mfontsize;
// End Sub
};

// [918] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [919] AddStyle( {251} , varFontStyle) 
_B.addstyle("font-style",_varfontstyle,_B);
// [920] mFontStyle = varFontStyle 
_B._mfontstyle=_varfontstyle;
// End Sub
};

// [923] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [924] Return mFontStyle 
return _B._mfontstyle;
// End Sub
};

// [927] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [928] AddStyle( {252} , varFontWeight) 
_B.addstyle("font-weight",_varfontweight,_B);
// [929] mFontWeight = varFontWeight 
_B._mfontweight=_varfontweight;
// End Sub
};

// [932] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [933] Return mFontWeight 
return _B._mfontweight;
// End Sub
};

// [936] public Sub setStyleHeight(varHeight As String) 
_B.setstyleheight=function(_varheight) {
// [937] AddStyle( {253} , varHeight) 
_B.addstyle("height",_varheight,_B);
// [938] mStyleHeight = varHeight 
_B._mstyleheight=_varheight;
// End Sub
};

// [941] public Sub getStyleHeight() As String 
_B.getstyleheight=function() {
// [942] Return mStyleHeight 
return _B._mstyleheight;
// End Sub
};

// [945] public Sub setMargin(varMargin As String) 
_B.setmargin=function(_varmargin) {
// [946] AddStyle( {254} , varMargin) 
_B.addstyle("margin",_varmargin,_B);
// [947] mMargin = varMargin 
_B._mmargin=_varmargin;
// End Sub
};

// [950] public Sub getMargin() As String 
_B.getmargin=function() {
// [951] Return mMargin 
return _B._mmargin;
// End Sub
};

// [954] public Sub setMarginBottom(varMarginBottom As String) 
_B.setmarginbottom=function(_varmarginbottom) {
// [955] AddStyle( {255} , varMarginBottom) 
_B.addstyle("margin-bottom",_varmarginbottom,_B);
// [956] mMarginBottom = varMarginBottom 
_B._mmarginbottom=_varmarginbottom;
// End Sub
};

// [959] public Sub getMarginBottom() As String 
_B.getmarginbottom=function() {
// [960] Return mMarginBottom 
return _B._mmarginbottom;
// End Sub
};

// [963] public Sub setMarginLeft(varMarginLeft As String) 
_B.setmarginleft=function(_varmarginleft) {
// [964] AddStyle( {256} , varMarginLeft) 
_B.addstyle("margin-left",_varmarginleft,_B);
// [965] mMarginLeft = varMarginLeft 
_B._mmarginleft=_varmarginleft;
// End Sub
};

// [968] public Sub getMarginLeft() As String 
_B.getmarginleft=function() {
// [969] Return mMarginLeft 
return _B._mmarginleft;
// End Sub
};

// [972] public Sub setMarginRight(varMarginRight As String) 
_B.setmarginright=function(_varmarginright) {
// [973] AddStyle( {257} , varMarginRight) 
_B.addstyle("margin-right",_varmarginright,_B);
// [974] mMarginRight = varMarginRight 
_B._mmarginright=_varmarginright;
// End Sub
};

// [977] public Sub getMarginRight() As String 
_B.getmarginright=function() {
// [978] Return mMarginRight 
return _B._mmarginright;
// End Sub
};

// [981] public Sub setMarginTop(varMarginTop As String) 
_B.setmargintop=function(_varmargintop) {
// [982] AddStyle( {258} , varMarginTop) 
_B.addstyle("margin-top",_varmargintop,_B);
// [983] mMarginTop = varMarginTop 
_B._mmargintop=_varmargintop;
// End Sub
};

// [986] public Sub getMarginTop() As String 
_B.getmargintop=function() {
// [987] Return mMarginTop 
return _B._mmargintop;
// End Sub
};

// [990] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [991] AddStyle( {259} , varPadding) 
_B.addstyle("padding",_varpadding,_B);
// [992] mPadding = varPadding 
_B._mpadding=_varpadding;
// End Sub
};

// [995] public Sub getPadding() As String 
_B.getpadding=function() {
// [996] Return mPadding 
return _B._mpadding;
// End Sub
};

// [999] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [1000] AddStyle( {260} , varPaddingBottom) 
_B.addstyle("padding-bottom",_varpaddingbottom,_B);
// [1001] mPaddingBottom = varPaddingBottom 
_B._mpaddingbottom=_varpaddingbottom;
// End Sub
};

// [1004] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [1005] Return mPaddingBottom 
return _B._mpaddingbottom;
// End Sub
};

// [1008] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [1009] AddStyle( {261} , varPaddingLeft) 
_B.addstyle("padding-left",_varpaddingleft,_B);
// [1010] mPaddingLeft = varPaddingLeft 
_B._mpaddingleft=_varpaddingleft;
// End Sub
};

// [1013] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [1014] Return mPaddingLeft 
return _B._mpaddingleft;
// End Sub
};

// [1017] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [1018] AddStyle( {262} , varPaddingRight) 
_B.addstyle("padding-right",_varpaddingright,_B);
// [1019] mPaddingRight = varPaddingRight 
_B._mpaddingright=_varpaddingright;
// End Sub
};

// [1022] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [1023] Return mPaddingRight 
return _B._mpaddingright;
// End Sub
};

// [1026] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [1027] AddStyle( {263} , varPaddingTop) 
_B.addstyle("padding-top",_varpaddingtop,_B);
// [1028] mPaddingTop = varPaddingTop 
_B._mpaddingtop=_varpaddingtop;
// End Sub
};

// [1031] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [1032] Return mPaddingTop 
return _B._mpaddingtop;
// End Sub
};

// [1035] public Sub setTextAlign(varTextAlign As String) 
_B.settextalign=function(_vartextalign) {
// [1036] AddStyle( {264} , varTextAlign) 
_B.addstyle("text-align",_vartextalign,_B);
// [1037] mTextAlign = varTextAlign 
_B._mtextalign=_vartextalign;
// End Sub
};

// [1040] public Sub getTextAlign() As String 
_B.gettextalign=function() {
// [1041] Return mTextAlign 
return _B._mtextalign;
// End Sub
};

// [1044] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [1045] AddStyle( {265} , varTextDecoration) 
_B.addstyle("text-decoration",_vartextdecoration,_B);
// [1046] mTextDecoration = varTextDecoration 
_B._mtextdecoration=_vartextdecoration;
// End Sub
};

// [1049] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [1050] Return mTextDecoration 
return _B._mtextdecoration;
// End Sub
};

// [1053] public Sub setStyleWidth(varWidth As String) 
_B.setstylewidth=function(_varwidth) {
// [1054] AddStyle( {266} , varWidth) 
_B.addstyle("width",_varwidth,_B);
// [1055] mStyleWidth = varWidth 
_B._mstylewidth=_varwidth;
// End Sub
};

// [1058] public Sub getStyleWidth() As String 
_B.getstylewidth=function() {
// [1059] Return mStyleWidth 
return _B._mstylewidth;
// End Sub
};

// [1063] Sub AddToView(vName As ZUIZview) 
_B.addtoview=function(_vname) {
// [1064]  AddToParent(vName.ID) 
_B.addtoparent(_vname.getid(),_B);
// End Sub
};

// [1068] Sub AddToList(vName As ZUIZlist) 
_B.addtolist=function(_vname) {
// [1069]  AddToParent(vName.ID) 
_B.addtoparent(_vname.getid(),_B);
// End Sub
};

}
/* =========================== ZUIZlist  =========================== */
function banano_bananozui_zuizlist() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtext="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="z-list";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._methods={};

_B._mitems="";

_B._mkey="";

_B._mparentid="";

_B._mperpage="";

_B._mref="";

_B._mslot="";

_B._mvbindclass="";

_B._mvbindstyle="";

_B._mvelse="";

_B._mvelseif="";

_B._mvfor="";

_B._mvhtml="";

_B._mvif="";

_B._mvmodel="";

_B._mvshow="";

_B._mvtext="";

_B._mbackgroundcolor="";

_B._mborder="";

_B._mcolor="";

_B._mfontfamily="";

_B._mfontsize="";

_B._mfontstyle="";

_B._mfontweight="";

_B._mheight="";

_B._mmargin="";

_B._mmarginbottom="";

_B._mmarginleft="";

_B._mmarginright="";

_B._mmargintop="";

_B._mpadding="";

_B._mpaddingbottom="";

_B._mpaddingleft="";

_B._mpaddingright="";

_B._mpaddingtop="";

_B._mtextalign="";

_B._mtextdecoration="";

_B._mwidth="";

// [105] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) 
_B.initialize=function(_callback,_name,_eventname) {
// [106] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [107] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [108] mCallBack = CallBack 
_B._mcallback=_callback;
// [109] classList.Initialize 
_B._classlist={};
// [110] styleList.Initialize 
_B._stylelist={};
// [111] attributeList.Initialize 
_B._attributelist={};
// [112] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// [113] bindings.Initialize 
_B._bindings={};
// [114] methods.Initialize 
_B._methods={};
// End Sub
};

// [118] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [119] mTarget = Target 
_B._mtarget=_target;
// [120] If Props <> Null Then 
if (_props!=null) {
// [121] mClasses = Props.Get( {46} ) 
_B._mclasses=_props["Classes"];
// [122] mAttributes = Props.Get( {47} ) 
_B._mattributes=_props["Attributes"];
// [123] mStyle = Props.Get( {48} ) 
_B._mstyle=_props["Style"];
// [124] mText = Props.Get( {49} ) 
_B._mtext=_props["Text"];
// [125] mItems = Props.Get( {50} ) 
_B._mitems=_props["Items"];
// [126] mKey = Props.Get( {51} ) 
_B._mkey=_props["Key"];
// [127] mParentId = Props.Get( {52} ) 
_B._mparentid=_props["ParentId"];
// [128] mPerPage = Props.Get( {53} ) 
_B._mperpage=_props["PerPage"];
// [129] mRef = Props.Get( {54} ) 
_B._mref=_props["Ref"];
// [130] mSlot = Props.Get( {55} ) 
_B._mslot=_props["Slot"];
// [131] mVBindClass = Props.Get( {56} ) 
_B._mvbindclass=_props["VBindClass"];
// [132] mVBindStyle = Props.Get( {57} ) 
_B._mvbindstyle=_props["VBindStyle"];
// [133] mVElse = Props.Get( {58} ) 
_B._mvelse=_props["VElse"];
// [134] mVElseIf = Props.Get( {59} ) 
_B._mvelseif=_props["VElseIf"];
// [135] mVFor = Props.Get( {60} ) 
_B._mvfor=_props["VFor"];
// [136] mVHtml = Props.Get( {61} ) 
_B._mvhtml=_props["VHtml"];
// [137] mVIf = Props.Get( {62} ) 
_B._mvif=_props["VIf"];
// [138] mVModel = Props.Get( {63} ) 
_B._mvmodel=_props["VModel"];
// [139] mVShow = Props.Get( {64} ) 
_B._mvshow=_props["VShow"];
// [140] mVText = Props.Get( {65} ) 
_B._mvtext=_props["VText"];
// [141] mBackgroundColor = Props.Get( {66} ) 
_B._mbackgroundcolor=_props["BackgroundColor"];
// [142] mBorder = Props.Get( {67} ) 
_B._mborder=_props["Border"];
// [143] mColor = Props.Get( {68} ) 
_B._mcolor=_props["Color"];
// [144] mFontFamily = Props.Get( {69} ) 
_B._mfontfamily=_props["FontFamily"];
// [145] mFontSize = Props.Get( {70} ) 
_B._mfontsize=_props["FontSize"];
// [146] mFontStyle = Props.Get( {71} ) 
_B._mfontstyle=_props["FontStyle"];
// [147] mFontWeight = Props.Get( {72} ) 
_B._mfontweight=_props["FontWeight"];
// [148] mHeight = Props.Get( {73} ) 
_B._mheight=_props["Height"];
// [149] mMargin = Props.Get( {74} ) 
_B._mmargin=_props["Margin"];
// [150] mMarginBottom = Props.Get( {75} ) 
_B._mmarginbottom=_props["MarginBottom"];
// [151] mMarginLeft = Props.Get( {76} ) 
_B._mmarginleft=_props["MarginLeft"];
// [152] mMarginRight = Props.Get( {77} ) 
_B._mmarginright=_props["MarginRight"];
// [153] mMarginTop = Props.Get( {78} ) 
_B._mmargintop=_props["MarginTop"];
// [154] mPadding = Props.Get( {79} ) 
_B._mpadding=_props["Padding"];
// [155] mPaddingBottom = Props.Get( {80} ) 
_B._mpaddingbottom=_props["PaddingBottom"];
// [156] mPaddingLeft = Props.Get( {81} ) 
_B._mpaddingleft=_props["PaddingLeft"];
// [157] mPaddingRight = Props.Get( {82} ) 
_B._mpaddingright=_props["PaddingRight"];
// [158] mPaddingTop = Props.Get( {83} ) 
_B._mpaddingtop=_props["PaddingTop"];
// [159] mTextAlign = Props.Get( {84} ) 
_B._mtextalign=_props["TextAlign"];
// [160] mTextDecoration = Props.Get( {85} ) 
_B._mtextdecoration=_props["TextDecoration"];
// [161] mWidth = Props.Get( {86} ) 
_B._mwidth=_props["Width"];
// [162] End If 
}
// [164] AddAttr( {87} , mItems) 
_B.addattr(":items",_B._mitems,_B);
// [165] AddAttr( {88} , mKey) 
_B.addattr("key",_B._mkey,_B);
// [166] AddAttr( {89} , mParentId) 
_B.addattr("parent-id",_B._mparentid,_B);
// [167] AddAttr( {90} , mPerPage) 
_B.addattr("per-page",_B._mperpage,_B);
// [168] AddAttr( {91} , mRef) 
_B.addattr("ref",_B._mref,_B);
// [169] AddAttr( {92} , mSlot) 
_B.addattr("slot",_B._mslot,_B);
// [170] AddAttr( {93} , mVBindClass) 
_B.addattr("v-bind:class",_B._mvbindclass,_B);
// [171] AddAttr( {94} , mVBindStyle) 
_B.addattr("v-bind:style",_B._mvbindstyle,_B);
// [172] AddAttr( {95} , mVElse) 
_B.addattr("v-else",_B._mvelse,_B);
// [173] AddAttr( {96} , mVElseIf) 
_B.addattr("v-else-if",_B._mvelseif,_B);
// [174] AddAttr( {97} , mVFor) 
_B.addattr("v-for",_B._mvfor,_B);
// [175] AddAttr( {98} , mVHtml) 
_B.addattr("v-html",_B._mvhtml,_B);
// [176] AddAttr( {99} , mVIf) 
_B.addattr("v-if",_B._mvif,_B);
// [177] AddAttr( {100} , mVModel) 
_B.addattr("v-model",_B._mvmodel,_B);
// [178] AddAttr( {101} , mVShow) 
_B.addattr("v-show",_B._mvshow,_B);
// [179] AddAttr( {102} , mVText) 
_B.addattr("v-text",_B._mvtext,_B);
// [180] AddStyle( {103} , mBackgroundColor) 
_B.addstyle("background-color",_B._mbackgroundcolor,_B);
// [181] AddStyle( {104} , mBorder) 
_B.addstyle("border",_B._mborder,_B);
// [182] AddStyle( {105} , mColor) 
_B.addstyle("color",_B._mcolor,_B);
// [183] AddStyle( {106} , mFontFamily) 
_B.addstyle("font-family",_B._mfontfamily,_B);
// [184] AddStyle( {107} , mFontSize) 
_B.addstyle("font-size",_B._mfontsize,_B);
// [185] AddStyle( {108} , mFontStyle) 
_B.addstyle("font-style",_B._mfontstyle,_B);
// [186] AddStyle( {109} , mFontWeight) 
_B.addstyle("font-weight",_B._mfontweight,_B);
// [187] AddStyle( {110} , mHeight) 
_B.addstyle("height",_B._mheight,_B);
// [188] AddStyle( {111} , mMargin) 
_B.addstyle("margin",_B._mmargin,_B);
// [189] AddStyle( {112} , mMarginBottom) 
_B.addstyle("margin-bottom",_B._mmarginbottom,_B);
// [190] AddStyle( {113} , mMarginLeft) 
_B.addstyle("margin-left",_B._mmarginleft,_B);
// [191] AddStyle( {114} , mMarginRight) 
_B.addstyle("margin-right",_B._mmarginright,_B);
// [192] AddStyle( {115} , mMarginTop) 
_B.addstyle("margin-top",_B._mmargintop,_B);
// [193] AddStyle( {116} , mPadding) 
_B.addstyle("padding",_B._mpadding,_B);
// [194] AddStyle( {117} , mPaddingBottom) 
_B.addstyle("padding-bottom",_B._mpaddingbottom,_B);
// [195] AddStyle( {118} , mPaddingLeft) 
_B.addstyle("padding-left",_B._mpaddingleft,_B);
// [196] AddStyle( {119} , mPaddingRight) 
_B.addstyle("padding-right",_B._mpaddingright,_B);
// [197] AddStyle( {120} , mPaddingTop) 
_B.addstyle("padding-top",_B._mpaddingtop,_B);
// [198] AddStyle( {121} , mTextAlign) 
_B.addstyle("text-align",_B._mtextalign,_B);
// [199] AddStyle( {122} , mTextDecoration) 
_B.addstyle("text-decoration",_B._mtextdecoration,_B);
// [200] AddStyle( {123} , mWidth) 
_B.addstyle("width",_B._mwidth,_B);
// [201] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [202] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [203] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [206] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [207] mElement = mTarget.Append(strHTML).Get( {124} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [213] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [215] Dim className As String = BANanoShared.JoinMapKeys(classList, {125} ) 
_classname=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [216] AddAttr( {126} , className) 
_B.addattr("class",_classname,_B);
// [218] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananozui_bananoshared.buildstyle(_B._stylelist);
// [219] AddAttr( {127} , styleName) 
_B.addattr("style",_stylename,_B);
// [221] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananozui_bananoshared.buildattributes(_B._attributelist);
// [222] Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mtext + "</" + _B._mtagname + ">";
// [223] Return rslt 
return _rslt;
// End Sub
};

// [227] Sub SetVBind(prop As String, value As String) 
_B.setvbind=function(_prop,_value) {
// [228] prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [229] value = value.ToLowerCase 
_value=_value.toLowerCase();
// [230] prop = {1} 
_prop="v-bind:" + _prop + "";
// [231] AddAttr(prop,value) 
_B.addattr(_prop,_value,_B);
// [232] bindings.Put(value, Null) 
_B._bindings[_value]=null;
// End Sub
};

// [236] Sub AddToApp(vap As VueApp) 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [238] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [239] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [240] vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [241] Next 
}
// [243] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [244] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [245] vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [246] Next 
}
// End Sub
};

// [250] Sub AddToComponent(ve As VMElement) 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [252] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [253] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [254] ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [255] Next 
}
// [257] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [258] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [259] ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [260] Next 
}
// End Sub
};

// [264] Sub AddBR 
_B.addbr=function() {
// [265] sbText.Append( {128} ) 
_B._sbtext.append("<br>");
// End Sub
};

// [269] Sub AddHR 
_B.addhr=function() {
// [270] sbText.Append( {129} ) 
_B._sbtext.append("<hr>");
// End Sub
};

// [274] Sub AddElement(elID As String, tag As String, props As Map, styleProps As Map, classNames As List, loose As List, Text As String) 
_B.addelement=function(_elid,_tag,_props,_styleprops,_classnames,_loose,_text) {
var _elit,_k,_v,_selement;
// [275] elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [276] elID = elID.Replace( {130} , {131} ) 
_elid=_elid.split("#").join("");
// [277] Dim elIT As VHTML 
_elit= new banano_bananozui_vhtml();
// [278] elIT.Initialize(mCallBack, elID, elID) 
_elit.initialize(_B._mcallback,_elid,_elid);
// [279] elIT.SetText(Text) 
_elit.settext(_text);
// [280] elIT.SetTagName(tag) 
_elit.settagname(_tag);
// [281] If loose <> Null Then 
if (_loose!=null) {
// [282] For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [283] elIT.SetAttr(k, True) 
_elit.setattr(_k,true);
// [284] Next 
}
// [285] End If 
}
// [286] If props <> Null Then 
if (_props!=null) {
// [287] For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [288] Dim v As String = props.Get(k) 
_v=_props[_k];
// [289] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [290] Next 
}
// [291] End If 
}
// [292] If styleProps <> Null Then 
if (_styleprops!=null) {
// [293] For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [294] Dim v As String = styleProps.Get(k) 
_v=_styleprops[_k];
// [295] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [296] Next 
}
// [297] End If 
}
// [298] If classNames <> Null Then 
if (_classnames!=null) {
// [299] elIT.AddClass(classNames) 
_elit.addclass(_classnames);
// [300] End If 
}
// [302] Dim sElement As String = elIT.tostring 
_selement=_elit.tostring();
// [303] sbText.Append(sElement) 
_B._sbtext.append(_selement);
// End Sub
};

// [307] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [308] Return mElement 
return _B._melement;
// End Sub
};

// [312] public Sub getID() As String 
_B.getid=function() {
// [313] Return mName 
return _B._mname;
// End Sub
};

// [317] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [318] mTarget = BANano.GetElement( {132} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [319] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [323] public Sub Remove() 
_B.remove=function() {
// [324] mElement.Remove 
_B._melement.remove();
// [325] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [329] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [330] If mElement <> Null Then 
if (_B._melement!=null) {
// [331] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [332] End If 
}
// End Sub
};

// [336] public Sub AddClass(varClass As String) 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [337] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [338] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [339] varClass = varClass.trim 
_varclass=_varclass.trim();
// [340] If varClass = {133} Then Return 
if (_varclass=="") { return ;}
// [341] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [342] Dim mxItems As List = BANanoShared.StrParse( {134} , varClass) 
_mxitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [343] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [344] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [345] Next 
}
// End Sub
};

// [349] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As Boolean) 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [350] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return ;}
// [351] If varShouldBe <> varCondition Then Return 
if (_varshouldbe!=_varcondition) { return ;}
// [352] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return 
if (is.undefined(_varclass) || is.null(_varclass)) { return ;}
// [353] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [354] varClass = varClass.trim 
_varclass=_varclass.trim();
// [355] If varClass = {135} Then Return 
if (_varclass=="") { return ;}
// [356] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [357] Dim mxItems As List = BANanoShared.StrParse( {136} , varClass) 
_mxitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [358] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [359] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [360] Next 
}
// End Sub
};

// [364] public Sub AddStyle(varProp As String, varStyle As String) 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [365] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return ;}
// [366] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananozui_bananoshared.cstr(_varstyle);}
// [367] If mElement <> Null Then 
if (_B._melement!=null) {
// [368] Dim aStyle As Map = CreateMap() 
_astyle={};
// [369] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [370] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [371] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [372] End If 
}
// [373]  styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// End Sub
};

// [377] public Sub AddAttr(varProp As String, varValue As String) 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [378]  If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return ;}
// [379]  If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananozui_bananoshared.cstr(_varvalue);}
// [381]  If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [382]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [383]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [384]  Else 
} else {
// [386]  If varValue.StartsWith( {137} ) Then 
if (_varvalue.startsWith(":")) {
// [387]  If varValue.StartsWith( {138} ) Then 
if (_varvalue.startsWith("$")) {
// [388]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [389]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [390]  Else 
} else {
// [391]  Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varvalue,2);
// [392]  If rname.Contains( {139} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [393]  attributeList.put( {2} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [394]  If mElement <> Null Then mElement.SetAttr( {3} , varValue) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_varvalue);}
// [395]  End If 
}
// [396]  Else 
} else {
// [398]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [399]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [400]  Select Case varProp 
switch ("" + _varprop) {
// [401]  Case {140} , {141} , {142} , {143} , {144} , {145} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [402]  bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [403]  End Select 
break;
}
// [404]  End If 
}
// [405]  End If 
}
// End Sub
};

// [409] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [410] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [411] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [412] For Each k As String In classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [413] sbClass.Append(k).Append( {146} ) 
_sbclass.append(_k).append(" ");
// [414] Next 
}
// [415] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [416] Return mClasses 
return _B._mclasses;
// End Sub
};

// [420] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [421] If mElement <> Null Then 
if (_B._melement!=null) {
// [422] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [423] End If 
}
// [424] Dim mres As Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [425] For Each k As String In mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [426] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [427] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [428] Next 
}
// End Sub
};

// [432] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [433] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [434] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [435] sbStyle.Append( {147} ) 
_sbstyle.append("{");
// [436] For Each k As String In styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [437] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [438] sbStyle.Append(k).Append( {148} ).Append(v).Append( {149} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [439] Next 
}
// [440] sbStyle.Append( {150} ) 
_sbstyle.append("}");
// [441] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [442] Return mStyle 
return _B._mstyle;
// End Sub
};

// [446] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [447] Dim mxItems As List = BANanoShared.StrParse( {151} , varAttributes) 
_mxitems=_banano_bananozui_bananoshared.strparse(";",_varattributes);
// [448] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [449] Dim k As String = BANanoShared.MvField(mt,1, {152} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [450] Dim v As String = BANanoShared.MvField(mt,2, {153} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [451] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [452] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [453] Next 
}
// End Sub
};

// [457] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [458] Dim mxItems As List = BANanoShared.StrParse( {154} , varStyles) 
_mxitems=_banano_bananozui_bananoshared.strparse(",",_varstyles);
// [459] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [460] Dim k As String = BANanoShared.MvField(mt,1, {155} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,":");
// [461] Dim v As String = BANanoShared.MvField(mt,2, {156} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,":");
// [462] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [463] Next 
}
// End Sub
};

// [467] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [468] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [469] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [470] For Each k As String In attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [471] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [472] sbAttr.Append(k).Append( {157} ).Append(v).Append( {158} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [473] Next 
}
// [474] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [475] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [479] public Sub setText(varText As String) 
_B.settext=function(_vartext) {
// [480] If mElement <> Null Then 
if (_B._melement!=null) {
// [481] mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [482] End If 
}
// [483] mText = varText 
_B._mtext=_vartext;
// End Sub
};

// [487] public Sub getText() As String 
_B.gettext=function() {
// [488] Return mText 
return _B._mtext;
// End Sub
};

// [491] public Sub setItems(varItems As String) 
_B.setitems=function(_varitems) {
// [492] AddAttr( {159} , varItems) 
_B.addattr(":items",_varitems,_B);
// [493] mItems = varItems 
_B._mitems=_varitems;
// End Sub
};

// [496] public Sub getItems() As String 
_B.getitems=function() {
// [497] Return mItems 
return _B._mitems;
// End Sub
};

// [500] public Sub setKey(varKey As String) 
_B.setkey=function(_varkey) {
// [501] AddAttr( {160} , varKey) 
_B.addattr("key",_varkey,_B);
// [502] mKey = varKey 
_B._mkey=_varkey;
// End Sub
};

// [505] public Sub getKey() As String 
_B.getkey=function() {
// [506] Return mKey 
return _B._mkey;
// End Sub
};

// [509] public Sub setParentId(varParentId As String) 
_B.setparentid=function(_varparentid) {
// [510] AddAttr( {161} , varParentId) 
_B.addattr("parent-id",_varparentid,_B);
// [511] mParentId = varParentId 
_B._mparentid=_varparentid;
// End Sub
};

// [514] public Sub getParentId() As String 
_B.getparentid=function() {
// [515] Return mParentId 
return _B._mparentid;
// End Sub
};

// [518] public Sub setPerPage(varPerPage As String) 
_B.setperpage=function(_varperpage) {
// [519] AddAttr( {162} , varPerPage) 
_B.addattr("per-page",_varperpage,_B);
// [520] mPerPage = varPerPage 
_B._mperpage=_varperpage;
// End Sub
};

// [523] public Sub getPerPage() As String 
_B.getperpage=function() {
// [524] Return mPerPage 
return _B._mperpage;
// End Sub
};

// [527] public Sub setRef(varRef As String) 
_B.setref=function(_varref) {
// [528] AddAttr( {163} , varRef) 
_B.addattr("ref",_varref,_B);
// [529] mRef = varRef 
_B._mref=_varref;
// End Sub
};

// [532] public Sub getRef() As String 
_B.getref=function() {
// [533] Return mRef 
return _B._mref;
// End Sub
};

// [536] public Sub setSlot(varSlot As String) 
_B.setslot=function(_varslot) {
// [537] AddAttr( {164} , varSlot) 
_B.addattr("slot",_varslot,_B);
// [538] mSlot = varSlot 
_B._mslot=_varslot;
// End Sub
};

// [541] public Sub getSlot() As String 
_B.getslot=function() {
// [542] Return mSlot 
return _B._mslot;
// End Sub
};

// [545] public Sub setVBindClass(varVBindClass As String) 
_B.setvbindclass=function(_varvbindclass) {
// [546] AddAttr( {165} , varVBindClass) 
_B.addattr("v-bind:class",_varvbindclass,_B);
// [547] mVBindClass = varVBindClass 
_B._mvbindclass=_varvbindclass;
// End Sub
};

// [550] public Sub getVBindClass() As String 
_B.getvbindclass=function() {
// [551] Return mVBindClass 
return _B._mvbindclass;
// End Sub
};

// [554] public Sub setVBindStyle(varVBindStyle As String) 
_B.setvbindstyle=function(_varvbindstyle) {
// [555] AddAttr( {166} , varVBindStyle) 
_B.addattr("v-bind:style",_varvbindstyle,_B);
// [556] mVBindStyle = varVBindStyle 
_B._mvbindstyle=_varvbindstyle;
// End Sub
};

// [559] public Sub getVBindStyle() As String 
_B.getvbindstyle=function() {
// [560] Return mVBindStyle 
return _B._mvbindstyle;
// End Sub
};

// [563] public Sub setVElse(varVElse As String) 
_B.setvelse=function(_varvelse) {
// [564] AddAttr( {167} , varVElse) 
_B.addattr("v-else",_varvelse,_B);
// [565] mVElse = varVElse 
_B._mvelse=_varvelse;
// End Sub
};

// [568] public Sub getVElse() As String 
_B.getvelse=function() {
// [569] Return mVElse 
return _B._mvelse;
// End Sub
};

// [572] public Sub setVElseIf(varVElseIf As String) 
_B.setvelseif=function(_varvelseif) {
// [573] AddAttr( {168} , varVElseIf) 
_B.addattr("v-else-if",_varvelseif,_B);
// [574] mVElseIf = varVElseIf 
_B._mvelseif=_varvelseif;
// End Sub
};

// [577] public Sub getVElseIf() As String 
_B.getvelseif=function() {
// [578] Return mVElseIf 
return _B._mvelseif;
// End Sub
};

// [581] public Sub setVFor(varVFor As String) 
_B.setvfor=function(_varvfor) {
// [582] AddAttr( {169} , varVFor) 
_B.addattr("v-for",_varvfor,_B);
// [583] mVFor = varVFor 
_B._mvfor=_varvfor;
// End Sub
};

// [586] public Sub getVFor() As String 
_B.getvfor=function() {
// [587] Return mVFor 
return _B._mvfor;
// End Sub
};

// [590] public Sub setVHtml(varVHtml As String) 
_B.setvhtml=function(_varvhtml) {
// [591] AddAttr( {170} , varVHtml) 
_B.addattr("v-html",_varvhtml,_B);
// [592] mVHtml = varVHtml 
_B._mvhtml=_varvhtml;
// End Sub
};

// [595] public Sub getVHtml() As String 
_B.getvhtml=function() {
// [596] Return mVHtml 
return _B._mvhtml;
// End Sub
};

// [599] public Sub setVIf(varVIf As String) 
_B.setvif=function(_varvif) {
// [600] AddAttr( {171} , varVIf) 
_B.addattr("v-if",_varvif,_B);
// [601] mVIf = varVIf 
_B._mvif=_varvif;
// End Sub
};

// [604] public Sub getVIf() As String 
_B.getvif=function() {
// [605] Return mVIf 
return _B._mvif;
// End Sub
};

// [608] public Sub setVModel(varVModel As String) 
_B.setvmodel=function(_varvmodel) {
// [609] AddAttr( {172} , varVModel) 
_B.addattr("v-model",_varvmodel,_B);
// [610] mVModel = varVModel 
_B._mvmodel=_varvmodel;
// End Sub
};

// [613] public Sub getVModel() As String 
_B.getvmodel=function() {
// [614] Return mVModel 
return _B._mvmodel;
// End Sub
};

// [617] public Sub setVShow(varVShow As String) 
_B.setvshow=function(_varvshow) {
// [618] AddAttr( {173} , varVShow) 
_B.addattr("v-show",_varvshow,_B);
// [619] mVShow = varVShow 
_B._mvshow=_varvshow;
// End Sub
};

// [622] public Sub getVShow() As String 
_B.getvshow=function() {
// [623] Return mVShow 
return _B._mvshow;
// End Sub
};

// [626] public Sub setVText(varVText As String) 
_B.setvtext=function(_varvtext) {
// [627] AddAttr( {174} , varVText) 
_B.addattr("v-text",_varvtext,_B);
// [628] mVText = varVText 
_B._mvtext=_varvtext;
// End Sub
};

// [631] public Sub getVText() As String 
_B.getvtext=function() {
// [632] Return mVText 
return _B._mvtext;
// End Sub
};

// [635] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [636] AddStyle( {175} , varBackgroundColor) 
_B.addstyle("background-color",_varbackgroundcolor,_B);
// [637] mBackgroundColor = varBackgroundColor 
_B._mbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [640] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [641] Return mBackgroundColor 
return _B._mbackgroundcolor;
// End Sub
};

// [644] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [645] AddStyle( {176} , varBorder) 
_B.addstyle("border",_varborder,_B);
// [646] mBorder = varBorder 
_B._mborder=_varborder;
// End Sub
};

// [649] public Sub getBorder() As String 
_B.getborder=function() {
// [650] Return mBorder 
return _B._mborder;
// End Sub
};

// [653] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [654] AddStyle( {177} , varColor) 
_B.addstyle("color",_varcolor,_B);
// [655] mColor = varColor 
_B._mcolor=_varcolor;
// End Sub
};

// [658] public Sub getColor() As String 
_B.getcolor=function() {
// [659] Return mColor 
return _B._mcolor;
// End Sub
};

// [662] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [663] AddStyle( {178} , varFontFamily) 
_B.addstyle("font-family",_varfontfamily,_B);
// [664] mFontFamily = varFontFamily 
_B._mfontfamily=_varfontfamily;
// End Sub
};

// [667] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [668] Return mFontFamily 
return _B._mfontfamily;
// End Sub
};

// [671] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [672] AddStyle( {179} , varFontSize) 
_B.addstyle("font-size",_varfontsize,_B);
// [673] mFontSize = varFontSize 
_B._mfontsize=_varfontsize;
// End Sub
};

// [676] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [677] Return mFontSize 
return _B._mfontsize;
// End Sub
};

// [680] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [681] AddStyle( {180} , varFontStyle) 
_B.addstyle("font-style",_varfontstyle,_B);
// [682] mFontStyle = varFontStyle 
_B._mfontstyle=_varfontstyle;
// End Sub
};

// [685] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [686] Return mFontStyle 
return _B._mfontstyle;
// End Sub
};

// [689] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [690] AddStyle( {181} , varFontWeight) 
_B.addstyle("font-weight",_varfontweight,_B);
// [691] mFontWeight = varFontWeight 
_B._mfontweight=_varfontweight;
// End Sub
};

// [694] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [695] Return mFontWeight 
return _B._mfontweight;
// End Sub
};

// [698] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [699] AddStyle( {182} , varHeight) 
_B.addstyle("height",_varheight,_B);
// [700] mHeight = varHeight 
_B._mheight=_varheight;
// End Sub
};

// [703] public Sub getHeight() As String 
_B.getheight=function() {
// [704] Return mHeight 
return _B._mheight;
// End Sub
};

// [707] public Sub setMargin(varMargin As String) 
_B.setmargin=function(_varmargin) {
// [708] AddStyle( {183} , varMargin) 
_B.addstyle("margin",_varmargin,_B);
// [709] mMargin = varMargin 
_B._mmargin=_varmargin;
// End Sub
};

// [712] public Sub getMargin() As String 
_B.getmargin=function() {
// [713] Return mMargin 
return _B._mmargin;
// End Sub
};

// [716] public Sub setMarginBottom(varMarginBottom As String) 
_B.setmarginbottom=function(_varmarginbottom) {
// [717] AddStyle( {184} , varMarginBottom) 
_B.addstyle("margin-bottom",_varmarginbottom,_B);
// [718] mMarginBottom = varMarginBottom 
_B._mmarginbottom=_varmarginbottom;
// End Sub
};

// [721] public Sub getMarginBottom() As String 
_B.getmarginbottom=function() {
// [722] Return mMarginBottom 
return _B._mmarginbottom;
// End Sub
};

// [725] public Sub setMarginLeft(varMarginLeft As String) 
_B.setmarginleft=function(_varmarginleft) {
// [726] AddStyle( {185} , varMarginLeft) 
_B.addstyle("margin-left",_varmarginleft,_B);
// [727] mMarginLeft = varMarginLeft 
_B._mmarginleft=_varmarginleft;
// End Sub
};

// [730] public Sub getMarginLeft() As String 
_B.getmarginleft=function() {
// [731] Return mMarginLeft 
return _B._mmarginleft;
// End Sub
};

// [734] public Sub setMarginRight(varMarginRight As String) 
_B.setmarginright=function(_varmarginright) {
// [735] AddStyle( {186} , varMarginRight) 
_B.addstyle("margin-right",_varmarginright,_B);
// [736] mMarginRight = varMarginRight 
_B._mmarginright=_varmarginright;
// End Sub
};

// [739] public Sub getMarginRight() As String 
_B.getmarginright=function() {
// [740] Return mMarginRight 
return _B._mmarginright;
// End Sub
};

// [743] public Sub setMarginTop(varMarginTop As String) 
_B.setmargintop=function(_varmargintop) {
// [744] AddStyle( {187} , varMarginTop) 
_B.addstyle("margin-top",_varmargintop,_B);
// [745] mMarginTop = varMarginTop 
_B._mmargintop=_varmargintop;
// End Sub
};

// [748] public Sub getMarginTop() As String 
_B.getmargintop=function() {
// [749] Return mMarginTop 
return _B._mmargintop;
// End Sub
};

// [752] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [753] AddStyle( {188} , varPadding) 
_B.addstyle("padding",_varpadding,_B);
// [754] mPadding = varPadding 
_B._mpadding=_varpadding;
// End Sub
};

// [757] public Sub getPadding() As String 
_B.getpadding=function() {
// [758] Return mPadding 
return _B._mpadding;
// End Sub
};

// [761] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [762] AddStyle( {189} , varPaddingBottom) 
_B.addstyle("padding-bottom",_varpaddingbottom,_B);
// [763] mPaddingBottom = varPaddingBottom 
_B._mpaddingbottom=_varpaddingbottom;
// End Sub
};

// [766] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [767] Return mPaddingBottom 
return _B._mpaddingbottom;
// End Sub
};

// [770] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [771] AddStyle( {190} , varPaddingLeft) 
_B.addstyle("padding-left",_varpaddingleft,_B);
// [772] mPaddingLeft = varPaddingLeft 
_B._mpaddingleft=_varpaddingleft;
// End Sub
};

// [775] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [776] Return mPaddingLeft 
return _B._mpaddingleft;
// End Sub
};

// [779] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [780] AddStyle( {191} , varPaddingRight) 
_B.addstyle("padding-right",_varpaddingright,_B);
// [781] mPaddingRight = varPaddingRight 
_B._mpaddingright=_varpaddingright;
// End Sub
};

// [784] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [785] Return mPaddingRight 
return _B._mpaddingright;
// End Sub
};

// [788] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [789] AddStyle( {192} , varPaddingTop) 
_B.addstyle("padding-top",_varpaddingtop,_B);
// [790] mPaddingTop = varPaddingTop 
_B._mpaddingtop=_varpaddingtop;
// End Sub
};

// [793] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [794] Return mPaddingTop 
return _B._mpaddingtop;
// End Sub
};

// [797] public Sub setTextAlign(varTextAlign As String) 
_B.settextalign=function(_vartextalign) {
// [798] AddStyle( {193} , varTextAlign) 
_B.addstyle("text-align",_vartextalign,_B);
// [799] mTextAlign = varTextAlign 
_B._mtextalign=_vartextalign;
// End Sub
};

// [802] public Sub getTextAlign() As String 
_B.gettextalign=function() {
// [803] Return mTextAlign 
return _B._mtextalign;
// End Sub
};

// [806] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [807] AddStyle( {194} , varTextDecoration) 
_B.addstyle("text-decoration",_vartextdecoration,_B);
// [808] mTextDecoration = varTextDecoration 
_B._mtextdecoration=_vartextdecoration;
// End Sub
};

// [811] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [812] Return mTextDecoration 
return _B._mtextdecoration;
// End Sub
};

// [815] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [816] AddStyle( {195} , varWidth) 
_B.addstyle("width",_varwidth,_B);
// [817] mWidth = varWidth 
_B._mwidth=_varwidth;
// End Sub
};

// [820] public Sub getWidth() As String 
_B.getwidth=function() {
// [821] Return mWidth 
return _B._mwidth;
// End Sub
};

}
/* =========================== ZUIZspot  =========================== */
function banano_bananozui_zuizspot() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mlabelpos="";

_B._mattributes="";

_B._mtext="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="z-spot";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._methods={};

_B._mangle="0";

_B._mbutton=false;

_B._mdistance="";

_B._mimagepath="";

_B._mindex="";

_B._mkey="";

_B._mknob=false;

_B._mlabel="";

_B._mparentid="";

_B._mprogress="";

_B._mqtysync="";

_B._mref="";

_B._msize="";

_B._mslider=false;

_B._mslot="";

_B._mslotscope="";

_B._mtoview="";

_B._mvbindsync="";

_B._mvbindclass="";

_B._mvbindstyle="";

_B._mvelse="";

_B._mvelseif="";

_B._mvfor="";

_B._mvhtml="";

_B._mvif="";

_B._mvmodel="";

_B._mvonclicknative="";

_B._mvshow="";

_B._mvtext="";

_B._mbackgroundcolor="";

_B._mborder="";

_B._mcolor="";

_B._mfontfamily="";

_B._mfontsize="";

_B._mfontstyle="";

_B._mfontweight="";

_B._mheight="";

_B._mmargin="";

_B._mmarginbottom="";

_B._mmarginleft="";

_B._mmarginright="";

_B._mmargintop="";

_B._mpadding="";

_B._mpaddingbottom="";

_B._mpaddingleft="";

_B._mpaddingright="";

_B._mpaddingtop="";

_B._mtextalign="";

_B._mtextdecoration="";

_B._mwidth="";

_B._mvalues={};

_B._mbackgroundimage="";

_B._mbackgroundrepeat="";

_B._mbordercolor="";

_B._mborderradius="";

_B._mborderstyle="";

_B._mborderwidth="";

// [149] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) As ZUIZspot 
_B.initialize=function(_callback,_name,_eventname) {
// [150] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [151] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [152] mCallBack = CallBack 
_B._mcallback=_callback;
// [153] classList.Initialize 
_B._classlist={};
// [154] styleList.Initialize 
_B._stylelist={};
// [155] attributeList.Initialize 
_B._attributelist={};
// [156] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// [157] bindings.Initialize 
_B._bindings={};
// [158] methods.Initialize 
_B._methods={};
// [159] mValues.Initialize 
_B._mvalues={};
// [160] Return Me 
return _B;
// End Sub
};

// [164] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [165] mTarget = Target 
_B._mtarget=_target;
// [166] If Props <> Null Then 
if (_props!=null) {
// [167] mClasses = Props.Get( {60} ) 
_B._mclasses=_props["Classes"];
// [168] mAttributes = Props.Get( {61} ) 
_B._mattributes=_props["Attributes"];
// [169] mStyle = Props.Get( {62} ) 
_B._mstyle=_props["Style"];
// [170] mText = Props.Get( {63} ) 
_B._mtext=_props["Text"];
// [171] mAngle = Props.Get( {64} ) 
_B._mangle=_props["Angle"];
// [172] mButton = Props.Get( {65} ) 
_B._mbutton=_props["Button"];
// [173] mDistance = Props.Get( {66} ) 
_B._mdistance=_props["Distance"];
// [174] mImagePath = Props.Get( {67} ) 
_B._mimagepath=_props["ImagePath"];
// [175] mIndex = Props.Get( {68} ) 
_B._mindex=_props["Index"];
// [176] mKey = Props.Get( {69} ) 
_B._mkey=_props["Key"];
// [177] mKnob = Props.Get( {70} ) 
_B._mknob=_props["Knob"];
// [178] mLabel = Props.Get( {71} ) 
_B._mlabel=_props["Label"];
// [179] mParentId = Props.Get( {72} ) 
_B._mparentid=_props["ParentId"];
// [180] mProgress = Props.Get( {73} ) 
_B._mprogress=_props["Progress"];
// [181] mLabelPos = Props.Get( {74} ) 
_B._mlabelpos=_props["LabelPos"];
// [182] mQtySync = Props.Get( {75} ) 
_B._mqtysync=_props["QtySync"];
// [183] mRef = Props.Get( {76} ) 
_B._mref=_props["Ref"];
// [184] mSize = Props.Get( {77} ) 
_B._msize=_props["Size"];
// [185] mSlider = Props.Get( {78} ) 
_B._mslider=_props["Slider"];
// [186] mSlot = Props.Get( {79} ) 
_B._mslot=_props["Slot"];
// [187] mSlotScope = Props.Get( {80} ) 
_B._mslotscope=_props["SlotScope"];
// [188] mToView = Props.Get( {81} ) 
_B._mtoview=_props["ToView"];
// [189] mVBindSync = Props.Get( {82} ) 
_B._mvbindsync=_props["VBindSync"];
// [190] mVBindClass = Props.Get( {83} ) 
_B._mvbindclass=_props["VBindClass"];
// [191] mVBindStyle = Props.Get( {84} ) 
_B._mvbindstyle=_props["VBindStyle"];
// [192] mVElse = Props.Get( {85} ) 
_B._mvelse=_props["VElse"];
// [193] mVElseIf = Props.Get( {86} ) 
_B._mvelseif=_props["VElseIf"];
// [194] mVFor = Props.Get( {87} ) 
_B._mvfor=_props["VFor"];
// [195] mVHtml = Props.Get( {88} ) 
_B._mvhtml=_props["VHtml"];
// [196] mVIf = Props.Get( {89} ) 
_B._mvif=_props["VIf"];
// [197] mVModel = Props.Get( {90} ) 
_B._mvmodel=_props["VModel"];
// [198] mVOnClickNative = Props.Get( {91} ) 
_B._mvonclicknative=_props["VOnClickNative"];
// [199] mVShow = Props.Get( {92} ) 
_B._mvshow=_props["VShow"];
// [200] mVText = Props.Get( {93} ) 
_B._mvtext=_props["VText"];
// [201] mBackgroundColor = Props.Get( {94} ) 
_B._mbackgroundcolor=_props["BackgroundColor"];
// [202] mBorder = Props.Get( {95} ) 
_B._mborder=_props["Border"];
// [203] mColor = Props.Get( {96} ) 
_B._mcolor=_props["Color"];
// [204] mFontFamily = Props.Get( {97} ) 
_B._mfontfamily=_props["FontFamily"];
// [205] mFontSize = Props.Get( {98} ) 
_B._mfontsize=_props["FontSize"];
// [206] mFontStyle = Props.Get( {99} ) 
_B._mfontstyle=_props["FontStyle"];
// [207] mFontWeight = Props.Get( {100} ) 
_B._mfontweight=_props["FontWeight"];
// [208] mHeight = Props.Get( {101} ) 
_B._mheight=_props["Height"];
// [209] mMargin = Props.Get( {102} ) 
_B._mmargin=_props["Margin"];
// [210] mMarginBottom = Props.Get( {103} ) 
_B._mmarginbottom=_props["MarginBottom"];
// [211] mMarginLeft = Props.Get( {104} ) 
_B._mmarginleft=_props["MarginLeft"];
// [212] mMarginRight = Props.Get( {105} ) 
_B._mmarginright=_props["MarginRight"];
// [213] mMarginTop = Props.Get( {106} ) 
_B._mmargintop=_props["MarginTop"];
// [214] mPadding = Props.Get( {107} ) 
_B._mpadding=_props["Padding"];
// [215] mPaddingBottom = Props.Get( {108} ) 
_B._mpaddingbottom=_props["PaddingBottom"];
// [216] mPaddingLeft = Props.Get( {109} ) 
_B._mpaddingleft=_props["PaddingLeft"];
// [217] mPaddingRight = Props.Get( {110} ) 
_B._mpaddingright=_props["PaddingRight"];
// [218] mPaddingTop = Props.Get( {111} ) 
_B._mpaddingtop=_props["PaddingTop"];
// [219] mTextAlign = Props.Get( {112} ) 
_B._mtextalign=_props["TextAlign"];
// [220] mTextDecoration = Props.Get( {113} ) 
_B._mtextdecoration=_props["TextDecoration"];
// [221]  mWidth = Props.Get( {114} ) 
_B._mwidth=_props["Width"];
// [222]  mBackgroundImage = Props.Get( {115} ) 
_B._mbackgroundimage=_props["BackgroundImage"];
// [223]  mBackgroundRepeat = Props.Get( {116} ) 
_B._mbackgroundrepeat=_props["BackgroundRepeat"];
// [224]  mBorderColor = Props.Get( {117} ) 
_B._mbordercolor=_props["BorderColor"];
// [225]  mBorderRadius = Props.Get( {118} ) 
_B._mborderradius=_props["BorderRadius"];
// [226]  mBorderStyle = Props.Get( {119} ) 
_B._mborderstyle=_props["BorderStyle"];
// [227]  mBorderWidth = Props.Get( {120} ) 
_B._mborderwidth=_props["BorderWidth"];
// [229] End If 
}
// [231] AddAttr( {121} , mAngle) 
_B.addattr("angle",_B._mangle,_B);
// [232] AddAttr( {122} , mButton) 
_B.addattr("button",_B._mbutton,_B);
// [233] AddAttr( {123} , mDistance) 
_B.addattr("distance",_B._mdistance,_B);
// [234] AddAttr( {124} , mImagePath) 
_B.addattr("image-path",_B._mimagepath,_B);
// [235] AddAttr( {125} , mIndex) 
_B.addattr("index",_B._mindex,_B);
// [236] AddAttr( {126} , mKey) 
_B.addattr("key",_B._mkey,_B);
// [237] AddAttr( {127} , mKnob) 
_B.addattr("knob",_B._mknob,_B);
// [238] AddAttr( {128} , mLabel) 
_B.addattr("label",_B._mlabel,_B);
// [239] AddAttr( {129} , mLabelPos) 
_B.addattr("label-pos",_B._mlabelpos,_B);
// [240] AddAttr( {130} , mParentId) 
_B.addattr("parent-id",_B._mparentid,_B);
// [241] AddAttr( {131} , mProgress) 
_B.addattr("progress",_B._mprogress,_B);
// [242] AddAttr( {132} , mQtySync) 
_B.addattr(":qty.sync",_B._mqtysync,_B);
// [243] AddAttr( {133} , mRef) 
_B.addattr("ref",_B._mref,_B);
// [244] AddAttr( {134} , mSize) 
_B.addattr("size",_B._msize,_B);
// [245] AddAttr( {135} , mSlider) 
_B.addattr("slider",_B._mslider,_B);
// [246] AddAttr( {136} , mSlot) 
_B.addattr("slot",_B._mslot,_B);
// [247] AddAttr( {137} , mSlotScope) 
_B.addattr("slot-scope",_B._mslotscope,_B);
// [248] AddAttr( {138} , mToView) 
_B.addattr("to-view",_B._mtoview,_B);
// [249] AddAttr( {139} , mVBindSync) 
_B.addattr("v-bind.sync",_B._mvbindsync,_B);
// [250] AddAttr( {140} , mVBindClass) 
_B.addattr("v-bind:class",_B._mvbindclass,_B);
// [251] AddAttr( {141} , mVBindStyle) 
_B.addattr("v-bind:style",_B._mvbindstyle,_B);
// [252] AddAttr( {142} , mVElse) 
_B.addattr("v-else",_B._mvelse,_B);
// [253] AddAttr( {143} , mVElseIf) 
_B.addattr("v-else-if",_B._mvelseif,_B);
// [254] AddAttr( {144} , mVFor) 
_B.addattr("v-for",_B._mvfor,_B);
// [255] AddAttr( {145} , mVHtml) 
_B.addattr("v-html",_B._mvhtml,_B);
// [256] AddAttr( {146} , mVIf) 
_B.addattr("v-if",_B._mvif,_B);
// [257] AddAttr( {147} , mVModel) 
_B.addattr("v-model",_B._mvmodel,_B);
// [258] AddAttr( {148} , mVOnClickNative) 
_B.addattr("v-on:click.native",_B._mvonclicknative,_B);
// [259] AddAttr( {149} , mVShow) 
_B.addattr("v-show",_B._mvshow,_B);
// [260] AddAttr( {150} , mVText) 
_B.addattr("v-text",_B._mvtext,_B);
// [261] AddStyle( {151} , mBackgroundColor) 
_B.addstyle("background-color",_B._mbackgroundcolor,_B);
// [262] AddStyle( {152} , mBorder) 
_B.addstyle("border",_B._mborder,_B);
// [263] AddStyle( {153} , mColor) 
_B.addstyle("color",_B._mcolor,_B);
// [264] AddStyle( {154} , mFontFamily) 
_B.addstyle("font-family",_B._mfontfamily,_B);
// [265] AddStyle( {155} , mFontSize) 
_B.addstyle("font-size",_B._mfontsize,_B);
// [266] AddStyle( {156} , mFontStyle) 
_B.addstyle("font-style",_B._mfontstyle,_B);
// [267] AddStyle( {157} , mFontWeight) 
_B.addstyle("font-weight",_B._mfontweight,_B);
// [268] AddStyle( {158} , mHeight) 
_B.addstyle("height",_B._mheight,_B);
// [269] AddStyle( {159} , mMargin) 
_B.addstyle("margin",_B._mmargin,_B);
// [270] AddStyle( {160} , mMarginBottom) 
_B.addstyle("margin-bottom",_B._mmarginbottom,_B);
// [271] AddStyle( {161} , mMarginLeft) 
_B.addstyle("margin-left",_B._mmarginleft,_B);
// [272] AddStyle( {162} , mMarginRight) 
_B.addstyle("margin-right",_B._mmarginright,_B);
// [273] AddStyle( {163} , mMarginTop) 
_B.addstyle("margin-top",_B._mmargintop,_B);
// [274] AddStyle( {164} , mPadding) 
_B.addstyle("padding",_B._mpadding,_B);
// [275] AddStyle( {165} , mPaddingBottom) 
_B.addstyle("padding-bottom",_B._mpaddingbottom,_B);
// [276] AddStyle( {166} , mPaddingLeft) 
_B.addstyle("padding-left",_B._mpaddingleft,_B);
// [277] AddStyle( {167} , mPaddingRight) 
_B.addstyle("padding-right",_B._mpaddingright,_B);
// [278] AddStyle( {168} , mPaddingTop) 
_B.addstyle("padding-top",_B._mpaddingtop,_B);
// [279] AddStyle( {169} , mTextAlign) 
_B.addstyle("text-align",_B._mtextalign,_B);
// [280] AddStyle( {170} , mTextDecoration) 
_B.addstyle("text-decoration",_B._mtextdecoration,_B);
// [281]  AddStyle( {171} , mWidth) 
_B.addstyle("width",_B._mwidth,_B);
// [282]  AddStyle( {172} , mBackgroundImage) 
_B.addstyle("background-image",_B._mbackgroundimage,_B);
// [283]  AddStyle( {173} , mBackgroundRepeat) 
_B.addstyle("background-repeat",_B._mbackgroundrepeat,_B);
// [284]  AddStyle( {174} , mBorderColor) 
_B.addstyle("border-color",_B._mbordercolor,_B);
// [285]  AddStyle( {175} , mBorderRadius) 
_B.addstyle("border-radius",_B._mborderradius,_B);
// [286]  AddStyle( {176} , mBorderStyle) 
_B.addstyle("border-style",_B._mborderstyle,_B);
// [287]  AddStyle( {177} , mBorderWidth) 
_B.addstyle("border-width",_B._mborderwidth,_B);
// [289] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [290] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [291] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [294] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [295] mElement = mTarget.Append(strHTML).Get( {178} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// [297] mElement.HandleEvents( {179} , mCallBack, mEventName & {180} ) 
_B._melement.handle("click.native", function(event) {if (typeof _B._mcallback[(_B._meventname+"_click.native").toLowerCase()]==="function") {return _B._mcallback[(_B._meventname+"_click.native").toLowerCase()](event,_B)}});
// End Sub
};

// [302] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [304] Dim className As String = BANanoShared.JoinMapKeys(classList, {181} ) 
_classname=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [305] AddAttr( {182} , className) 
_B.addattr("class",_classname,_B);
// [307] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananozui_bananoshared.buildstyle(_B._stylelist);
// [308] AddAttr( {183} , styleName) 
_B.addattr("style",_stylename,_B);
// [310] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananozui_bananoshared.buildattributes(_B._attributelist);
// [311]  Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mtext + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [312] Return rslt 
return _rslt;
// End Sub
};

// [316] Sub SetVBind(prop As String, value As String) As ZUIZspot 
_B.setvbind=function(_prop,_value) {
// [317] prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [318] value = value.ToLowerCase 
_value=_value.toLowerCase();
// [319] prop = {1} 
_prop="v-bind:" + _prop + "";
// [320] AddAttr(prop,value) 
_B.addattr(_prop,_value,_B);
// [321] bindings.Put(value, Null) 
_B._bindings[_value]=null;
// [322] Return Me 
return _B;
// End Sub
};

// [326] Sub AddToApp(vap As VueApp) As ZUIZspot 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [328] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [329] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [330] vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [331] Next 
}
// [333] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [334] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [335] vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [336] Next 
}
// [337] Return Me 
return _B;
// End Sub
};

// [341] Sub AddToComponent(ve As VMElement) As ZUIZspot 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [343] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [344] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [345] ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [346] Next 
}
// [348] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [349] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [350] ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [351] Next 
}
// [352] Return Me 
return _B;
// End Sub
};

// [355] Sub AddText(t As String) As ZUIZspot 
_B.addtext=function(_t) {
// [356]  sbText.Append(t) 
_B._sbtext.append(_t);
// [357]  Return Me 
return _B;
// End Sub
};

// [362] Sub AddBR As ZUIZspot 
_B.addbr=function() {
// [363] sbText.Append( {184} ) 
_B._sbtext.append("<br>");
// [364] Return Me 
return _B;
// End Sub
};

// [368] Sub AddHR As ZUIZspot 
_B.addhr=function() {
// [369] sbText.Append( {185} ) 
_B._sbtext.append("<hr>");
// [370] Return Me 
return _B;
// End Sub
};

// [374] public Sub setLabelPos(varLabelPos As String) 
_B.setlabelpos=function(_varlabelpos) {
// [375]  AddAttr( {186} , varLabelPos) 
_B.addattr("label-pos",_varlabelpos,_B);
// [376]  mLabelPos = varLabelPos 
_B._mlabelpos=_varlabelpos;
// End Sub
};

// [379] public Sub getLabelPos() As String 
_B.getlabelpos=function() {
// [380]  Return mLabelPos 
return _B._mlabelpos;
// End Sub
};

// [384] Sub SlotExtension As ZUIZspot 
_B.slotextension=function() {
// [385]  setSlot( {187} ) 
_B.setslot("extension",_B);
// [386]  Return Me 
return _B;
// End Sub
};

// [390] Sub AddToView(vName As ZUIZview) 
_B.addtoview=function(_vname) {
// [391]  AddToParent(vName.ID) 
_B.addtoparent(_vname.getid(),_B);
// End Sub
};

// [395] Sub AddToViewSlot(vName As ZUIZview) 
_B.addtoviewslot=function(_vname) {
// [396]  AddToParent( {2} ) 
_B.addtoparent("" + _vname.getid() + "slot",_B);
// End Sub
};

// [400] Sub AddToList(vName As ZUIZlist) 
_B.addtolist=function(_vname) {
// [401]  AddToParent(vName.ID) 
_B.addtoparent(_vname.getid(),_B);
// End Sub
};

// [406] Sub AddIcon(iColor As String, iName As String) As ZUIZspot 
_B.addicon=function(_icolor,_iname) {
var _iprop;
// [408]  Dim iprop As Map = CreateMap() 
_iprop={};
// [409]  iprop.Put( {188} , iColor) 
_iprop["color"]=_icolor;
// [410]  AddElement( {3} , {189} , Null, iprop, Array(iName), Null, {190} ) 
_B.addelement("" + _B._mname + "icon","i",null,_iprop,[_iname],null,"",_B);
// [411]  Return Me 
return _B;
// End Sub
};

// [415] Sub AddSpan(iColor As String, spanText As String) As ZUIZspot 
_B.addspan=function(_icolor,_spantext) {
var _iprop;
// [417]  Dim iprop As Map = CreateMap() 
_iprop={};
// [418]  iprop.Put( {191} , iColor) 
_iprop["color"]=_icolor;
// [419]  AddElement( {192} , {193} , Null, iprop, Null, Null, spanText) 
_B.addelement("","span",null,_iprop,null,null,_spantext,_B);
// [420]  Return Me 
return _B;
// End Sub
};

// [425] Sub AddElement(elID As String, tag As String, props As Map, styleProps As Map, classNames As List, loose As List, Text As String) As ZUIZspot 
_B.addelement=function(_elid,_tag,_props,_styleprops,_classnames,_loose,_text) {
var _elit,_k,_v,_selement;
// [426] elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [427] elID = elID.Replace( {194} , {195} ) 
_elid=_elid.split("#").join("");
// [428] Dim elIT As VHTML 
_elit= new banano_bananozui_vhtml();
// [429] elIT.Initialize(mCallBack, elID, elID) 
_elit.initialize(_B._mcallback,_elid,_elid);
// [430] elIT.SetText(Text) 
_elit.settext(_text);
// [431] elIT.SetTagName(tag) 
_elit.settagname(_tag);
// [432] If loose <> Null Then 
if (_loose!=null) {
// [433] For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [434] elIT.SetAttr(k, True) 
_elit.setattr(_k,true);
// [435] Next 
}
// [436] End If 
}
// [437] If props <> Null Then 
if (_props!=null) {
// [438] For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [439] Dim v As String = props.Get(k) 
_v=_props[_k];
// [440] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [441] Next 
}
// [442] End If 
}
// [443] If styleProps <> Null Then 
if (_styleprops!=null) {
// [444] For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [445] Dim v As String = styleProps.Get(k) 
_v=_styleprops[_k];
// [446] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [447] Next 
}
// [448] End If 
}
// [449] If classNames <> Null Then 
if (_classnames!=null) {
// [450] elIT.AddClass(classNames) 
_elit.addclass(_classnames);
// [451] End If 
}
// [453] Dim sElement As String = elIT.tostring 
_selement=_elit.tostring();
// [454] sbText.Append(sElement) 
_B._sbtext.append(_selement);
// [455] Return Me 
return _B;
// End Sub
};

// [459] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [460] Return mElement 
return _B._melement;
// End Sub
};

// [464] public Sub getID() As String 
_B.getid=function() {
// [465] Return mName 
return _B._mname;
// End Sub
};

// [469] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [470] mTarget = BANano.GetElement( {196} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [471] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [475] public Sub Remove() 
_B.remove=function() {
// [476] mElement.Remove 
_B._melement.remove();
// [477] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [481] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [482] If mElement <> Null Then 
if (_B._melement!=null) {
// [483] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [484] End If 
}
// End Sub
};

// [488] public Sub AddClass(varClass As String) As ZUIZspot 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [489] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return Me 
if (is.undefined(_varclass) || is.null(_varclass)) { return _B;}
// [490] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [491] varClass = varClass.trim 
_varclass=_varclass.trim();
// [492] If varClass = {197} Then Return Me 
if (_varclass=="") { return _B;}
// [493] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [494] Dim mxItems As List = BANanoShared.StrParse( {198} , varClass) 
_mxitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [495] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [496] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [497] Next 
}
// [498] Return Me 
return _B;
// End Sub
};

// [502] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As Boolean) As ZUIZspot 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [503] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return Me 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return _B;}
// [504] If varShouldBe <> varCondition Then Return Me 
if (_varshouldbe!=_varcondition) { return _B;}
// [505] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return Me 
if (is.undefined(_varclass) || is.null(_varclass)) { return _B;}
// [506] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [507] varClass = varClass.trim 
_varclass=_varclass.trim();
// [508] If varClass = {199} Then Return Me 
if (_varclass=="") { return _B;}
// [509] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [510] Dim mxItems As List = BANanoShared.StrParse( {200} , varClass) 
_mxitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [511] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [512] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [513] Next 
}
// [514] Return Me 
return _B;
// End Sub
};

// [518] public Sub AddStyle(varProp As String, varStyle As String) As ZUIZspot 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [519] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return Me 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return _B;}
// [520] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananozui_bananoshared.cstr(_varstyle);}
// [521] If mElement <> Null Then 
if (_B._melement!=null) {
// [522] Dim aStyle As Map = CreateMap() 
_astyle={};
// [523] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [524] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [525] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [526] End If 
}
// [527]  styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// [528]  Return Me 
return _B;
// End Sub
};

// [532] public Sub AddAttr(varProp As String, varValue As String) As ZUIZspot 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [533]  If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return Me 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return _B;}
// [534]  If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananozui_bananoshared.cstr(_varvalue);}
// [536]  If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [537]  If varValue = True Then 
if (_varvalue==true) {
// [538]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [539]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [540]  End If 
}
// [541]  Else 
} else {
// [543]  If varValue.StartsWith( {201} ) Then 
if (_varvalue.startsWith(":")) {
// [544]  If varValue.StartsWith( {202} ) Then 
if (_varvalue.startsWith("$")) {
// [545]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [546]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [547]  Else 
} else {
// [548]  Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varvalue,2);
// [549]  If rname.Contains( {203} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [550]  attributeList.put( {4} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [551]  If mElement <> Null Then mElement.SetAttr( {5} , varValue) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_varvalue);}
// [552]  End If 
}
// [553]  Else 
} else {
// [555]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [556]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [557]  Select Case varProp 
switch ("" + _varprop) {
// [558]  Case {204} , {205} , {206} , {207} , {208} , {209} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [559]  bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [560]  End Select 
break;
}
// [561]  End If 
}
// [562]  End If 
}
// [563]  Return Me 
return _B;
// End Sub
};

// [567] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [568] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [569] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [570] For Each k As String In classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [571] sbClass.Append(k).Append( {210} ) 
_sbclass.append(_k).append(" ");
// [572] Next 
}
// [573] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [574] Return mClasses 
return _B._mclasses;
// End Sub
};

// [578] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [579] If mElement <> Null Then 
if (_B._melement!=null) {
// [580] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [581] End If 
}
// [582] Dim mres As Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [583] For Each k As String In mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [584] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [585] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [586] Next 
}
// End Sub
};

// [590] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [591] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [592] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [593] sbStyle.Append( {211} ) 
_sbstyle.append("{");
// [594] For Each k As String In styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [595] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [596] sbStyle.Append(k).Append( {212} ).Append(v).Append( {213} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [597] Next 
}
// [598] sbStyle.Append( {214} ) 
_sbstyle.append("}");
// [599] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [600] Return mStyle 
return _B._mstyle;
// End Sub
};

// [604] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [605] Dim mxItems As List = BANanoShared.StrParse( {215} , varAttributes) 
_mxitems=_banano_bananozui_bananoshared.strparse(";",_varattributes);
// [606] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [607] Dim k As String = BANanoShared.MvField(mt,1, {216} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [608] Dim v As String = BANanoShared.MvField(mt,2, {217} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [609] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [610] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [611] Next 
}
// End Sub
};

// [615] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [616] Dim mxItems As List = BANanoShared.StrParse( {218} , varStyles) 
_mxitems=_banano_bananozui_bananoshared.strparse(",",_varstyles);
// [617] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [618] Dim k As String = BANanoShared.MvField(mt,1, {219} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,":");
// [619] Dim v As String = BANanoShared.MvField(mt,2, {220} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,":");
// [620] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [621] Next 
}
// End Sub
};

// [625] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [626] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [627] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [628] For Each k As String In attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [629] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [630] sbAttr.Append(k).Append( {221} ).Append(v).Append( {222} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [631] Next 
}
// [632] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [633] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [637] public Sub setText(varText As String) 
_B.settext=function(_vartext) {
// [638] If mElement <> Null Then 
if (_B._melement!=null) {
// [639] mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [640] End If 
}
// [641] mText = varText 
_B._mtext=_vartext;
// End Sub
};

// [645] public Sub getText() As String 
_B.gettext=function() {
// [646] Return mText 
return _B._mtext;
// End Sub
};

// [649] public Sub setAngle(varAngle As String) 
_B.setangle=function(_varangle) {
// [650] AddAttr( {223} , varAngle) 
_B.addattr("angle",_varangle,_B);
// [651] mAngle = varAngle 
_B._mangle=_varangle;
// End Sub
};

// [654] public Sub getAngle() As String 
_B.getangle=function() {
// [655] Return mAngle 
return _B._mangle;
// End Sub
};

// [658] public Sub setButton(varButton As Boolean) 
_B.setbutton=function(_varbutton) {
// [659] AddAttr( {224} , varButton) 
_B.addattr("button",_varbutton,_B);
// [660] mButton = varButton 
_B._mbutton=_varbutton;
// End Sub
};

// [663] public Sub getButton() As Boolean 
_B.getbutton=function() {
// [664] Return mButton 
return _B._mbutton;
// End Sub
};

// [667] public Sub setDistance(varDistance As String) 
_B.setdistance=function(_vardistance) {
// [668] AddAttr( {225} , varDistance) 
_B.addattr("distance",_vardistance,_B);
// [669] mDistance = varDistance 
_B._mdistance=_vardistance;
// End Sub
};

// [672] public Sub getDistance() As String 
_B.getdistance=function() {
// [673] Return mDistance 
return _B._mdistance;
// End Sub
};

// [676] public Sub setImagePath(varImagePath As String) 
_B.setimagepath=function(_varimagepath) {
// [677] AddAttr( {226} , varImagePath) 
_B.addattr("image-path",_varimagepath,_B);
// [678] mImagePath = varImagePath 
_B._mimagepath=_varimagepath;
// End Sub
};

// [681] public Sub getImagePath() As String 
_B.getimagepath=function() {
// [682] Return mImagePath 
return _B._mimagepath;
// End Sub
};

// [685] public Sub setIndex(varIndex As String) 
_B.setindex=function(_varindex) {
// [686] AddAttr( {227} , varIndex) 
_B.addattr("index",_varindex,_B);
// [687] mIndex = varIndex 
_B._mindex=_varindex;
// End Sub
};

// [690] public Sub getIndex() As String 
_B.getindex=function() {
// [691] Return mIndex 
return _B._mindex;
// End Sub
};

// [694] public Sub setKey(varKey As String) 
_B.setkey=function(_varkey) {
// [695] AddAttr( {228} , varKey) 
_B.addattr("key",_varkey,_B);
// [696] mKey = varKey 
_B._mkey=_varkey;
// End Sub
};

// [699] public Sub getKey() As String 
_B.getkey=function() {
// [700] Return mKey 
return _B._mkey;
// End Sub
};

// [703] public Sub setKnob(varKnob As Boolean) 
_B.setknob=function(_varknob) {
// [704] AddAttr( {229} , varKnob) 
_B.addattr("knob",_varknob,_B);
// [705] mKnob = varKnob 
_B._mknob=_varknob;
// End Sub
};

// [708] public Sub getKnob() As Boolean 
_B.getknob=function() {
// [709] Return mKnob 
return _B._mknob;
// End Sub
};

// [712] public Sub setLabel(varLabel As String) 
_B.setlabel=function(_varlabel) {
// [713] AddAttr( {230} , varLabel) 
_B.addattr("label",_varlabel,_B);
// [714] mLabel = varLabel 
_B._mlabel=_varlabel;
// End Sub
};

// [717] public Sub getLabel() As String 
_B.getlabel=function() {
// [718] Return mLabel 
return _B._mlabel;
// End Sub
};

// [721] public Sub setParentId(varParentId As String) 
_B.setparentid=function(_varparentid) {
// [722] AddAttr( {231} , varParentId) 
_B.addattr("parent-id",_varparentid,_B);
// [723] mParentId = varParentId 
_B._mparentid=_varparentid;
// End Sub
};

// [726] public Sub getParentId() As String 
_B.getparentid=function() {
// [727] Return mParentId 
return _B._mparentid;
// End Sub
};

// [730] public Sub setProgress(varProgress As String) 
_B.setprogress=function(_varprogress) {
// [731] AddAttr( {232} , varProgress) 
_B.addattr("progress",_varprogress,_B);
// [732] mProgress = varProgress 
_B._mprogress=_varprogress;
// End Sub
};

// [735] public Sub getProgress() As String 
_B.getprogress=function() {
// [736] Return mProgress 
return _B._mprogress;
// End Sub
};

// [739] public Sub setQtySync(varQtySync As String) 
_B.setqtysync=function(_varqtysync) {
// [740] AddAttr( {233} , varQtySync) 
_B.addattr(":qty.sync",_varqtysync,_B);
// [741] mQtySync = varQtySync 
_B._mqtysync=_varqtysync;
// End Sub
};

// [744] public Sub getQtySync() As String 
_B.getqtysync=function() {
// [745] Return mQtySync 
return _B._mqtysync;
// End Sub
};

// [748] public Sub setRef(varRef As String) 
_B.setref=function(_varref) {
// [749] AddAttr( {234} , varRef) 
_B.addattr("ref",_varref,_B);
// [750] mRef = varRef 
_B._mref=_varref;
// End Sub
};

// [753] public Sub getRef() As String 
_B.getref=function() {
// [754] Return mRef 
return _B._mref;
// End Sub
};

// [757] public Sub setSize(varSize As String) 
_B.setsize=function(_varsize) {
// [758] AddAttr( {235} , varSize) 
_B.addattr("size",_varsize,_B);
// [759] mSize = varSize 
_B._msize=_varsize;
// End Sub
};

// [762] public Sub getSize() As String 
_B.getsize=function() {
// [763] Return mSize 
return _B._msize;
// End Sub
};

// [766] public Sub setSlider(varSlider As Boolean) 
_B.setslider=function(_varslider) {
// [767] AddAttr( {236} , varSlider) 
_B.addattr("slider",_varslider,_B);
// [768] mSlider = varSlider 
_B._mslider=_varslider;
// End Sub
};

// [771] public Sub getSlider() As Boolean 
_B.getslider=function() {
// [772] Return mSlider 
return _B._mslider;
// End Sub
};

// [775] public Sub setSlot(varSlot As String) 
_B.setslot=function(_varslot) {
// [776] AddAttr( {237} , varSlot) 
_B.addattr("slot",_varslot,_B);
// [777] mSlot = varSlot 
_B._mslot=_varslot;
// End Sub
};

// [780] public Sub getSlot() As String 
_B.getslot=function() {
// [781] Return mSlot 
return _B._mslot;
// End Sub
};

// [784] public Sub setSlotScope(varSlotScope As String) 
_B.setslotscope=function(_varslotscope) {
// [785] AddAttr( {238} , varSlotScope) 
_B.addattr("slot-scope",_varslotscope,_B);
// [786] mSlotScope = varSlotScope 
_B._mslotscope=_varslotscope;
// End Sub
};

// [789] public Sub getSlotScope() As String 
_B.getslotscope=function() {
// [790] Return mSlotScope 
return _B._mslotscope;
// End Sub
};

// [793] public Sub setToView(varToView As String) 
_B.settoview=function(_vartoview) {
// [794] AddAttr( {239} , varToView) 
_B.addattr("to-view",_vartoview,_B);
// [795] mToView = varToView 
_B._mtoview=_vartoview;
// End Sub
};

// [798] public Sub getToView() As String 
_B.gettoview=function() {
// [799] Return mToView 
return _B._mtoview;
// End Sub
};

// [802] public Sub setVBindSync(varVBindSync As String) 
_B.setvbindsync=function(_varvbindsync) {
// [803] AddAttr( {240} , varVBindSync) 
_B.addattr("v-bind.sync",_varvbindsync,_B);
// [804] mVBindSync = varVBindSync 
_B._mvbindsync=_varvbindsync;
// End Sub
};

// [807] public Sub getVBindSync() As String 
_B.getvbindsync=function() {
// [808] Return mVBindSync 
return _B._mvbindsync;
// End Sub
};

// [811] public Sub setVBindClass(varVBindClass As String) 
_B.setvbindclass=function(_varvbindclass) {
// [812] AddAttr( {241} , varVBindClass) 
_B.addattr("v-bind:class",_varvbindclass,_B);
// [813] mVBindClass = varVBindClass 
_B._mvbindclass=_varvbindclass;
// End Sub
};

// [816] public Sub getVBindClass() As String 
_B.getvbindclass=function() {
// [817] Return mVBindClass 
return _B._mvbindclass;
// End Sub
};

// [820] public Sub setVBindStyle(varVBindStyle As String) 
_B.setvbindstyle=function(_varvbindstyle) {
// [821] AddAttr( {242} , varVBindStyle) 
_B.addattr("v-bind:style",_varvbindstyle,_B);
// [822] mVBindStyle = varVBindStyle 
_B._mvbindstyle=_varvbindstyle;
// End Sub
};

// [825] public Sub getVBindStyle() As String 
_B.getvbindstyle=function() {
// [826] Return mVBindStyle 
return _B._mvbindstyle;
// End Sub
};

// [829] public Sub setVElse(varVElse As String) 
_B.setvelse=function(_varvelse) {
// [830] AddAttr( {243} , varVElse) 
_B.addattr("v-else",_varvelse,_B);
// [831] mVElse = varVElse 
_B._mvelse=_varvelse;
// End Sub
};

// [834] public Sub getVElse() As String 
_B.getvelse=function() {
// [835] Return mVElse 
return _B._mvelse;
// End Sub
};

// [838] public Sub setVElseIf(varVElseIf As String) 
_B.setvelseif=function(_varvelseif) {
// [839] AddAttr( {244} , varVElseIf) 
_B.addattr("v-else-if",_varvelseif,_B);
// [840] mVElseIf = varVElseIf 
_B._mvelseif=_varvelseif;
// End Sub
};

// [843] public Sub getVElseIf() As String 
_B.getvelseif=function() {
// [844] Return mVElseIf 
return _B._mvelseif;
// End Sub
};

// [847] public Sub setVFor(varVFor As String) 
_B.setvfor=function(_varvfor) {
// [848] AddAttr( {245} , varVFor) 
_B.addattr("v-for",_varvfor,_B);
// [849] mVFor = varVFor 
_B._mvfor=_varvfor;
// End Sub
};

// [852] public Sub getVFor() As String 
_B.getvfor=function() {
// [853] Return mVFor 
return _B._mvfor;
// End Sub
};

// [856] public Sub setVHtml(varVHtml As String) 
_B.setvhtml=function(_varvhtml) {
// [857] AddAttr( {246} , varVHtml) 
_B.addattr("v-html",_varvhtml,_B);
// [858] mVHtml = varVHtml 
_B._mvhtml=_varvhtml;
// End Sub
};

// [861] public Sub getVHtml() As String 
_B.getvhtml=function() {
// [862] Return mVHtml 
return _B._mvhtml;
// End Sub
};

// [865] public Sub setVIf(varVIf As String) 
_B.setvif=function(_varvif) {
// [866] AddAttr( {247} , varVIf) 
_B.addattr("v-if",_varvif,_B);
// [867] mVIf = varVIf 
_B._mvif=_varvif;
// End Sub
};

// [870] public Sub getVIf() As String 
_B.getvif=function() {
// [871] Return mVIf 
return _B._mvif;
// End Sub
};

// [874] public Sub setVModel(varVModel As String) 
_B.setvmodel=function(_varvmodel) {
// [875] AddAttr( {248} , varVModel) 
_B.addattr("v-model",_varvmodel,_B);
// [876] mVModel = varVModel 
_B._mvmodel=_varvmodel;
// End Sub
};

// [879] public Sub getVModel() As String 
_B.getvmodel=function() {
// [880] Return mVModel 
return _B._mvmodel;
// End Sub
};

// [883] public Sub setVOnClickNative(varVOnClickNative As String) 
_B.setvonclicknative=function(_varvonclicknative) {
// [884] AddAttr( {249} , varVOnClickNative) 
_B.addattr("v-on:click.native",_varvonclicknative,_B);
// [885] mVOnClickNative = varVOnClickNative 
_B._mvonclicknative=_varvonclicknative;
// End Sub
};

// [888] public Sub getVOnClickNative() As String 
_B.getvonclicknative=function() {
// [889] Return mVOnClickNative 
return _B._mvonclicknative;
// End Sub
};

// [892] public Sub setVShow(varVShow As String) 
_B.setvshow=function(_varvshow) {
// [893] AddAttr( {250} , varVShow) 
_B.addattr("v-show",_varvshow,_B);
// [894] mVShow = varVShow 
_B._mvshow=_varvshow;
// End Sub
};

// [897] public Sub getVShow() As String 
_B.getvshow=function() {
// [898] Return mVShow 
return _B._mvshow;
// End Sub
};

// [901] public Sub setVText(varVText As String) 
_B.setvtext=function(_varvtext) {
// [902] AddAttr( {251} , varVText) 
_B.addattr("v-text",_varvtext,_B);
// [903] mVText = varVText 
_B._mvtext=_varvtext;
// End Sub
};

// [906] public Sub getVText() As String 
_B.getvtext=function() {
// [907] Return mVText 
return _B._mvtext;
// End Sub
};

// [910] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [911] AddStyle( {252} , varBackgroundColor) 
_B.addstyle("background-color",_varbackgroundcolor,_B);
// [912] mBackgroundColor = varBackgroundColor 
_B._mbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [915] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [916] Return mBackgroundColor 
return _B._mbackgroundcolor;
// End Sub
};

// [919] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [920] AddStyle( {253} , varBorder) 
_B.addstyle("border",_varborder,_B);
// [921] mBorder = varBorder 
_B._mborder=_varborder;
// End Sub
};

// [924] public Sub getBorder() As String 
_B.getborder=function() {
// [925] Return mBorder 
return _B._mborder;
// End Sub
};

// [928] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [929] AddStyle( {254} , varColor) 
_B.addstyle("color",_varcolor,_B);
// [930] mColor = varColor 
_B._mcolor=_varcolor;
// End Sub
};

// [933] public Sub getColor() As String 
_B.getcolor=function() {
// [934] Return mColor 
return _B._mcolor;
// End Sub
};

// [937] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [938] AddStyle( {255} , varFontFamily) 
_B.addstyle("font-family",_varfontfamily,_B);
// [939] mFontFamily = varFontFamily 
_B._mfontfamily=_varfontfamily;
// End Sub
};

// [942] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [943] Return mFontFamily 
return _B._mfontfamily;
// End Sub
};

// [946] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [947] AddStyle( {256} , varFontSize) 
_B.addstyle("font-size",_varfontsize,_B);
// [948] mFontSize = varFontSize 
_B._mfontsize=_varfontsize;
// End Sub
};

// [951] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [952] Return mFontSize 
return _B._mfontsize;
// End Sub
};

// [955] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [956] AddStyle( {257} , varFontStyle) 
_B.addstyle("font-style",_varfontstyle,_B);
// [957] mFontStyle = varFontStyle 
_B._mfontstyle=_varfontstyle;
// End Sub
};

// [960] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [961] Return mFontStyle 
return _B._mfontstyle;
// End Sub
};

// [964] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [965] AddStyle( {258} , varFontWeight) 
_B.addstyle("font-weight",_varfontweight,_B);
// [966] mFontWeight = varFontWeight 
_B._mfontweight=_varfontweight;
// End Sub
};

// [969] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [970] Return mFontWeight 
return _B._mfontweight;
// End Sub
};

// [973] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [974] AddStyle( {259} , varHeight) 
_B.addstyle("height",_varheight,_B);
// [975] mHeight = varHeight 
_B._mheight=_varheight;
// End Sub
};

// [978] public Sub getHeight() As String 
_B.getheight=function() {
// [979] Return mHeight 
return _B._mheight;
// End Sub
};

// [982] public Sub setMargin(varMargin As String) 
_B.setmargin=function(_varmargin) {
// [983] AddStyle( {260} , varMargin) 
_B.addstyle("margin",_varmargin,_B);
// [984] mMargin = varMargin 
_B._mmargin=_varmargin;
// End Sub
};

// [987] public Sub getMargin() As String 
_B.getmargin=function() {
// [988] Return mMargin 
return _B._mmargin;
// End Sub
};

// [991] public Sub setMarginBottom(varMarginBottom As String) 
_B.setmarginbottom=function(_varmarginbottom) {
// [992] AddStyle( {261} , varMarginBottom) 
_B.addstyle("margin-bottom",_varmarginbottom,_B);
// [993] mMarginBottom = varMarginBottom 
_B._mmarginbottom=_varmarginbottom;
// End Sub
};

// [996] public Sub getMarginBottom() As String 
_B.getmarginbottom=function() {
// [997] Return mMarginBottom 
return _B._mmarginbottom;
// End Sub
};

// [1000] public Sub setMarginLeft(varMarginLeft As String) 
_B.setmarginleft=function(_varmarginleft) {
// [1001] AddStyle( {262} , varMarginLeft) 
_B.addstyle("margin-left",_varmarginleft,_B);
// [1002] mMarginLeft = varMarginLeft 
_B._mmarginleft=_varmarginleft;
// End Sub
};

// [1005] public Sub getMarginLeft() As String 
_B.getmarginleft=function() {
// [1006] Return mMarginLeft 
return _B._mmarginleft;
// End Sub
};

// [1009] public Sub setMarginRight(varMarginRight As String) 
_B.setmarginright=function(_varmarginright) {
// [1010] AddStyle( {263} , varMarginRight) 
_B.addstyle("margin-right",_varmarginright,_B);
// [1011] mMarginRight = varMarginRight 
_B._mmarginright=_varmarginright;
// End Sub
};

// [1014] public Sub getMarginRight() As String 
_B.getmarginright=function() {
// [1015] Return mMarginRight 
return _B._mmarginright;
// End Sub
};

// [1018] public Sub setMarginTop(varMarginTop As String) 
_B.setmargintop=function(_varmargintop) {
// [1019] AddStyle( {264} , varMarginTop) 
_B.addstyle("margin-top",_varmargintop,_B);
// [1020] mMarginTop = varMarginTop 
_B._mmargintop=_varmargintop;
// End Sub
};

// [1023] public Sub getMarginTop() As String 
_B.getmargintop=function() {
// [1024] Return mMarginTop 
return _B._mmargintop;
// End Sub
};

// [1027] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [1028] AddStyle( {265} , varPadding) 
_B.addstyle("padding",_varpadding,_B);
// [1029] mPadding = varPadding 
_B._mpadding=_varpadding;
// End Sub
};

// [1032] public Sub getPadding() As String 
_B.getpadding=function() {
// [1033] Return mPadding 
return _B._mpadding;
// End Sub
};

// [1036] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [1037] AddStyle( {266} , varPaddingBottom) 
_B.addstyle("padding-bottom",_varpaddingbottom,_B);
// [1038] mPaddingBottom = varPaddingBottom 
_B._mpaddingbottom=_varpaddingbottom;
// End Sub
};

// [1041] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [1042] Return mPaddingBottom 
return _B._mpaddingbottom;
// End Sub
};

// [1045] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [1046] AddStyle( {267} , varPaddingLeft) 
_B.addstyle("padding-left",_varpaddingleft,_B);
// [1047] mPaddingLeft = varPaddingLeft 
_B._mpaddingleft=_varpaddingleft;
// End Sub
};

// [1050] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [1051] Return mPaddingLeft 
return _B._mpaddingleft;
// End Sub
};

// [1054] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [1055] AddStyle( {268} , varPaddingRight) 
_B.addstyle("padding-right",_varpaddingright,_B);
// [1056] mPaddingRight = varPaddingRight 
_B._mpaddingright=_varpaddingright;
// End Sub
};

// [1059] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [1060] Return mPaddingRight 
return _B._mpaddingright;
// End Sub
};

// [1063] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [1064] AddStyle( {269} , varPaddingTop) 
_B.addstyle("padding-top",_varpaddingtop,_B);
// [1065] mPaddingTop = varPaddingTop 
_B._mpaddingtop=_varpaddingtop;
// End Sub
};

// [1068] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [1069] Return mPaddingTop 
return _B._mpaddingtop;
// End Sub
};

// [1072] public Sub setTextAlign(varTextAlign As String) 
_B.settextalign=function(_vartextalign) {
// [1073] AddStyle( {270} , varTextAlign) 
_B.addstyle("text-align",_vartextalign,_B);
// [1074] mTextAlign = varTextAlign 
_B._mtextalign=_vartextalign;
// End Sub
};

// [1077] public Sub getTextAlign() As String 
_B.gettextalign=function() {
// [1078] Return mTextAlign 
return _B._mtextalign;
// End Sub
};

// [1081] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [1082] AddStyle( {271} , varTextDecoration) 
_B.addstyle("text-decoration",_vartextdecoration,_B);
// [1083] mTextDecoration = varTextDecoration 
_B._mtextdecoration=_vartextdecoration;
// End Sub
};

// [1086] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [1087] Return mTextDecoration 
return _B._mtextdecoration;
// End Sub
};

// [1090] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [1091] AddStyle( {272} , varWidth) 
_B.addstyle("width",_varwidth,_B);
// [1092] mWidth = varWidth 
_B._mwidth=_varwidth;
// End Sub
};

// [1095] public Sub getWidth() As String 
_B.getwidth=function() {
// [1096] Return mWidth 
return _B._mwidth;
// End Sub
};

// [1100] public Sub SetValues(qty As Int, unit As String, minValue As Int, maxValue As Int, pos As String) 
_B.setvalues=function(_qty,_unit,_minvalue,_maxvalue,_pos) {
// [1101]  If BANano.IsNull(qty) = False Then 
if (is.null(_qty)==false) {
// [1102]  mValues.Put( {273} , BANano.parseInt(qty)) 
_B._mvalues["qty"]=parseInt(_qty);
// [1103]  End If 
}
// [1104]  If BANano.IsNull(unit) = False Then mValues.Put( {274} , unit) 
if (is.null(_unit)==false) {_B._mvalues["unit"]=_unit;}
// [1105]  If BANano.IsNull(minValue) = False Then 
if (is.null(_minvalue)==false) {
// [1106]  mValues.Put( {275} , BANano.parseInt(minValue)) 
_B._mvalues["min"]=parseInt(_minvalue);
// [1107]  End If 
}
// [1108]  If BANano.IsNull(maxValue) = False Then 
if (is.null(_maxvalue)==false) {
// [1109]  mValues.Put( {276} , BANano.parseInt(maxValue)) 
_B._mvalues["max"]=parseInt(_maxvalue);
// [1110]  End If 
}
// [1111]  If BANano.IsNull(pos) = False Then mValues.Put( {277} , pos) 
if (is.null(_pos)==false) {_B._mvalues["pos"]=_pos;}
// End Sub
};

// [1114] public Sub GetValues() As Map 
_B.getvalues=function() {
// [1115]  Return mValues 
return _B._mvalues;
// End Sub
};

// [1119] Sub SetColors(white As String, black As String) 
_B.setcolors=function(_white,_black) {
var _scolors;
// [1120]  Dim sColors As String = {6} 
_scolors="{white: '" + _white + "', black: '" + _black + "'}";
// [1121]  AddAttr( {278} , sColors) 
_B.addattr("colors",_scolors,_B);
// End Sub
};

// [1126] public Sub setBackgroundImage(varBackgroundImage As String) 
_B.setbackgroundimage=function(_varbackgroundimage) {
// [1127]  AddStyle( {279} , varBackgroundImage) 
_B.addstyle("background-image",_varbackgroundimage,_B);
// [1128]  mBackgroundImage = varBackgroundImage 
_B._mbackgroundimage=_varbackgroundimage;
// End Sub
};

// [1131] public Sub getBackgroundImage() As String 
_B.getbackgroundimage=function() {
// [1132]  Return mBackgroundImage 
return _B._mbackgroundimage;
// End Sub
};

// [1135] public Sub setBackgroundRepeat(varBackgroundRepeat As String) 
_B.setbackgroundrepeat=function(_varbackgroundrepeat) {
// [1136]  AddStyle( {280} , varBackgroundRepeat) 
_B.addstyle("background-repeat",_varbackgroundrepeat,_B);
// [1137]  mBackgroundRepeat = varBackgroundRepeat 
_B._mbackgroundrepeat=_varbackgroundrepeat;
// End Sub
};

// [1140] public Sub getBackgroundRepeat() As String 
_B.getbackgroundrepeat=function() {
// [1141]  Return mBackgroundRepeat 
return _B._mbackgroundrepeat;
// End Sub
};

// [1144] public Sub setBorderColor(varBorderColor As String) 
_B.setbordercolor=function(_varbordercolor) {
// [1145]  AddStyle( {281} , varBorderColor) 
_B.addstyle("border-color",_varbordercolor,_B);
// [1146]  mBorderColor = varBorderColor 
_B._mbordercolor=_varbordercolor;
// End Sub
};

// [1149] public Sub getBorderColor() As String 
_B.getbordercolor=function() {
// [1150]  Return mBorderColor 
return _B._mbordercolor;
// End Sub
};

// [1153] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [1154]  AddStyle( {282} , varBorderRadius) 
_B.addstyle("border-radius",_varborderradius,_B);
// [1155]  mBorderRadius = varBorderRadius 
_B._mborderradius=_varborderradius;
// End Sub
};

// [1158] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [1159]  Return mBorderRadius 
return _B._mborderradius;
// End Sub
};

// [1162] public Sub setBorderStyle(varBorderStyle As String) 
_B.setborderstyle=function(_varborderstyle) {
// [1163]  AddStyle( {283} , varBorderStyle) 
_B.addstyle("border-style",_varborderstyle,_B);
// [1164]  mBorderStyle = varBorderStyle 
_B._mborderstyle=_varborderstyle;
// End Sub
};

// [1167] public Sub getBorderStyle() As String 
_B.getborderstyle=function() {
// [1168]  Return mBorderStyle 
return _B._mborderstyle;
// End Sub
};

// [1171] public Sub setBorderWidth(varBorderWidth As String) 
_B.setborderwidth=function(_varborderwidth) {
// [1172]  AddStyle( {284} , varBorderWidth) 
_B.addstyle("border-width",_varborderwidth,_B);
// [1173]  mBorderWidth = varBorderWidth 
_B._mborderwidth=_varborderwidth;
// End Sub
};

// [1176] public Sub getBorderWidth() As String 
_B.getborderwidth=function() {
// [1177]  Return mBorderWidth 
return _B._mborderwidth;
// End Sub
};

}
/* =========================== ZUIZview  =========================== */
function banano_bananozui_zuizview() {
var _B=this;
_B._mname="";

_B._meventname="";

_B._mcallback={};

_B._mtarget=null;

_B._melement=null;

_B._mclasses="";

_B._mstyle="";

_B._mattributes="";

_B._mtext="";

_B._classlist={};

_B._stylelist={};

_B._attributelist={};

_B._mtagname="z-view";

_B._sbtext=new StringBuilder();

_B._bindings={};

_B._methods={};

_B._mimagepath="";

_B._mkey="";

_B._mlabel="";

_B._mlabelpos="";

_B._mparentid="";

_B._mprogress="";

_B._mref="";

_B._msize="";

_B._mslider=false;

_B._mvbindclass="";

_B._mvbindstyle="";

_B._mvelse="";

_B._mvelseif="";

_B._mvfor="";

_B._mvhtml="";

_B._mvif="";

_B._mvmodel="";

_B._mvshow="";

_B._mvtext="";

_B._mbackgroundcolor="";

_B._mborder="";

_B._mcolor="";

_B._mfontfamily="";

_B._mfontsize="";

_B._mfontstyle="";

_B._mfontweight="";

_B._mheight="";

_B._mmargin="";

_B._mmarginbottom="";

_B._mmarginleft="";

_B._mmarginright="";

_B._mmargintop="";

_B._mpadding="";

_B._mpaddingbottom="";

_B._mpaddingleft="";

_B._mpaddingright="";

_B._mpaddingtop="";

_B._mtextalign="";

_B._mtextdecoration="";

_B._mwidth="";

_B._mslot="";

_B._mbackgroundimage="";

_B._mbackgroundrepeat="";

_B._mbordercolor="";

_B._mborderradius="";

_B._mborderstyle="";

_B._mborderwidth="";

// [127] Public Sub Initialize (CallBack As Object, Name As String, EventName As String) As ZUIZview 
_B.initialize=function(_callback,_name,_eventname) {
// [128] mName = Name.ToLowerCase 
_B._mname=_name.toLowerCase();
// [129] mEventName = EventName.ToLowerCase 
_B._meventname=_eventname.toLowerCase();
// [130] mCallBack = CallBack 
_B._mcallback=_callback;
// [131] classList.Initialize 
_B._classlist={};
// [132] styleList.Initialize 
_B._stylelist={};
// [133] attributeList.Initialize 
_B._attributelist={};
// [134] sbText.Initialize 
_B._sbtext.init();
_B._sbtext.isinitialized=true;
// [135] bindings.Initialize 
_B._bindings={};
// [136] methods.Initialize 
_B._methods={};
// [137] Return Me 
return _B;
// End Sub
};

// [141] Public Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
_B.designercreateview=function(_target,_props) {
var _strhtml;
// [142] mTarget = Target 
_B._mtarget=_target;
// [143] If Props <> Null Then 
if (_props!=null) {
// [144] mClasses = Props.Get( {51} ) 
_B._mclasses=_props["Classes"];
// [145] mAttributes = Props.Get( {52} ) 
_B._mattributes=_props["Attributes"];
// [146] mStyle = Props.Get( {53} ) 
_B._mstyle=_props["Style"];
// [147] mText = Props.Get( {54} ) 
_B._mtext=_props["Text"];
// [148] mImagePath = Props.Get( {55} ) 
_B._mimagepath=_props["ImagePath"];
// [149] mKey = Props.Get( {56} ) 
_B._mkey=_props["Key"];
// [150] mLabel = Props.Get( {57} ) 
_B._mlabel=_props["Label"];
// [151] mLabelPos = Props.Get( {58} ) 
_B._mlabelpos=_props["LabelPos"];
// [152] mParentId = Props.Get( {59} ) 
_B._mparentid=_props["ParentId"];
// [153] mProgress = Props.Get( {60} ) 
_B._mprogress=_props["Progress"];
// [154] mRef = Props.Get( {61} ) 
_B._mref=_props["Ref"];
// [155] mSize = Props.Get( {62} ) 
_B._msize=_props["Size"];
// [156] mSlider = Props.Get( {63} ) 
_B._mslider=_props["Slider"];
// [157] mVBindClass = Props.Get( {64} ) 
_B._mvbindclass=_props["VBindClass"];
// [158] mVBindStyle = Props.Get( {65} ) 
_B._mvbindstyle=_props["VBindStyle"];
// [159] mVElse = Props.Get( {66} ) 
_B._mvelse=_props["VElse"];
// [160] mVElseIf = Props.Get( {67} ) 
_B._mvelseif=_props["VElseIf"];
// [161] mVFor = Props.Get( {68} ) 
_B._mvfor=_props["VFor"];
// [162] mVHtml = Props.Get( {69} ) 
_B._mvhtml=_props["VHtml"];
// [163] mVIf = Props.Get( {70} ) 
_B._mvif=_props["VIf"];
// [164] mVModel = Props.Get( {71} ) 
_B._mvmodel=_props["VModel"];
// [165] mVShow = Props.Get( {72} ) 
_B._mvshow=_props["VShow"];
// [166] mVText = Props.Get( {73} ) 
_B._mvtext=_props["VText"];
// [167] mBackgroundColor = Props.Get( {74} ) 
_B._mbackgroundcolor=_props["BackgroundColor"];
// [168] mBorder = Props.Get( {75} ) 
_B._mborder=_props["Border"];
// [169] mColor = Props.Get( {76} ) 
_B._mcolor=_props["Color"];
// [170] mFontFamily = Props.Get( {77} ) 
_B._mfontfamily=_props["FontFamily"];
// [171] mFontSize = Props.Get( {78} ) 
_B._mfontsize=_props["FontSize"];
// [172] mFontStyle = Props.Get( {79} ) 
_B._mfontstyle=_props["FontStyle"];
// [173] mFontWeight = Props.Get( {80} ) 
_B._mfontweight=_props["FontWeight"];
// [174] mHeight = Props.Get( {81} ) 
_B._mheight=_props["Height"];
// [175] mMargin = Props.Get( {82} ) 
_B._mmargin=_props["Margin"];
// [176] mMarginBottom = Props.Get( {83} ) 
_B._mmarginbottom=_props["MarginBottom"];
// [177] mMarginLeft = Props.Get( {84} ) 
_B._mmarginleft=_props["MarginLeft"];
// [178] mMarginRight = Props.Get( {85} ) 
_B._mmarginright=_props["MarginRight"];
// [179] mMarginTop = Props.Get( {86} ) 
_B._mmargintop=_props["MarginTop"];
// [180] mPadding = Props.Get( {87} ) 
_B._mpadding=_props["Padding"];
// [181] mPaddingBottom = Props.Get( {88} ) 
_B._mpaddingbottom=_props["PaddingBottom"];
// [182] mPaddingLeft = Props.Get( {89} ) 
_B._mpaddingleft=_props["PaddingLeft"];
// [183] mPaddingRight = Props.Get( {90} ) 
_B._mpaddingright=_props["PaddingRight"];
// [184] mPaddingTop = Props.Get( {91} ) 
_B._mpaddingtop=_props["PaddingTop"];
// [185] mTextAlign = Props.Get( {92} ) 
_B._mtextalign=_props["TextAlign"];
// [186] mTextDecoration = Props.Get( {93} ) 
_B._mtextdecoration=_props["TextDecoration"];
// [187] mWidth = Props.Get( {94} ) 
_B._mwidth=_props["Width"];
// [188]  mSlot = Props.Get( {95} ) 
_B._mslot=_props["Slot"];
// [189]  mBackgroundImage = Props.Get( {96} ) 
_B._mbackgroundimage=_props["BackgroundImage"];
// [190]  mBackgroundRepeat = Props.Get( {97} ) 
_B._mbackgroundrepeat=_props["BackgroundRepeat"];
// [191]  mBorderColor = Props.Get( {98} ) 
_B._mbordercolor=_props["BorderColor"];
// [192]  mBorderRadius = Props.Get( {99} ) 
_B._mborderradius=_props["BorderRadius"];
// [193]  mBorderStyle = Props.Get( {100} ) 
_B._mborderstyle=_props["BorderStyle"];
// [194]  mBorderWidth = Props.Get( {101} ) 
_B._mborderwidth=_props["BorderWidth"];
// [196] End If 
}
// [198]  AddAttr( {102} , mSlot) 
_B.addattr("slot",_B._mslot,_B);
// [199] AddAttr( {103} , mImagePath) 
_B.addattr("image-path",_B._mimagepath,_B);
// [200] AddAttr( {104} , mKey) 
_B.addattr("key",_B._mkey,_B);
// [201] AddAttr( {105} , mLabel) 
_B.addattr("label",_B._mlabel,_B);
// [202] AddAttr( {106} , mLabelPos) 
_B.addattr("label-pos",_B._mlabelpos,_B);
// [203] AddAttr( {107} , mParentId) 
_B.addattr("parent-id",_B._mparentid,_B);
// [204] AddAttr( {108} , mProgress) 
_B.addattr("progress",_B._mprogress,_B);
// [205] AddAttr( {109} , mRef) 
_B.addattr("ref",_B._mref,_B);
// [206] AddAttr( {110} , mSize) 
_B.addattr("size",_B._msize,_B);
// [207] AddAttr( {111} , mSlider) 
_B.addattr("slider",_B._mslider,_B);
// [208] AddAttr( {112} , mVBindClass) 
_B.addattr("v-bind:class",_B._mvbindclass,_B);
// [209] AddAttr( {113} , mVBindStyle) 
_B.addattr("v-bind:style",_B._mvbindstyle,_B);
// [210] AddAttr( {114} , mVElse) 
_B.addattr("v-else",_B._mvelse,_B);
// [211] AddAttr( {115} , mVElseIf) 
_B.addattr("v-else-if",_B._mvelseif,_B);
// [212] AddAttr( {116} , mVFor) 
_B.addattr("v-for",_B._mvfor,_B);
// [213] AddAttr( {117} , mVHtml) 
_B.addattr("v-html",_B._mvhtml,_B);
// [214] AddAttr( {118} , mVIf) 
_B.addattr("v-if",_B._mvif,_B);
// [215] AddAttr( {119} , mVModel) 
_B.addattr("v-model",_B._mvmodel,_B);
// [216] AddAttr( {120} , mVShow) 
_B.addattr("v-show",_B._mvshow,_B);
// [217] AddAttr( {121} , mVText) 
_B.addattr("v-text",_B._mvtext,_B);
// [218] AddStyle( {122} , mBackgroundColor) 
_B.addstyle("background-color",_B._mbackgroundcolor,_B);
// [219] AddStyle( {123} , mBorder) 
_B.addstyle("border",_B._mborder,_B);
// [220] AddStyle( {124} , mColor) 
_B.addstyle("color",_B._mcolor,_B);
// [221] AddStyle( {125} , mFontFamily) 
_B.addstyle("font-family",_B._mfontfamily,_B);
// [222] AddStyle( {126} , mFontSize) 
_B.addstyle("font-size",_B._mfontsize,_B);
// [223] AddStyle( {127} , mFontStyle) 
_B.addstyle("font-style",_B._mfontstyle,_B);
// [224] AddStyle( {128} , mFontWeight) 
_B.addstyle("font-weight",_B._mfontweight,_B);
// [225] AddStyle( {129} , mHeight) 
_B.addstyle("height",_B._mheight,_B);
// [226] AddStyle( {130} , mMargin) 
_B.addstyle("margin",_B._mmargin,_B);
// [227] AddStyle( {131} , mMarginBottom) 
_B.addstyle("margin-bottom",_B._mmarginbottom,_B);
// [228] AddStyle( {132} , mMarginLeft) 
_B.addstyle("margin-left",_B._mmarginleft,_B);
// [229] AddStyle( {133} , mMarginRight) 
_B.addstyle("margin-right",_B._mmarginright,_B);
// [230] AddStyle( {134} , mMarginTop) 
_B.addstyle("margin-top",_B._mmargintop,_B);
// [231] AddStyle( {135} , mPadding) 
_B.addstyle("padding",_B._mpadding,_B);
// [232] AddStyle( {136} , mPaddingBottom) 
_B.addstyle("padding-bottom",_B._mpaddingbottom,_B);
// [233] AddStyle( {137} , mPaddingLeft) 
_B.addstyle("padding-left",_B._mpaddingleft,_B);
// [234] AddStyle( {138} , mPaddingRight) 
_B.addstyle("padding-right",_B._mpaddingright,_B);
// [235] AddStyle( {139} , mPaddingTop) 
_B.addstyle("padding-top",_B._mpaddingtop,_B);
// [236] AddStyle( {140} , mTextAlign) 
_B.addstyle("text-align",_B._mtextalign,_B);
// [237] AddStyle( {141} , mTextDecoration) 
_B.addstyle("text-decoration",_B._mtextdecoration,_B);
// [238]  AddStyle( {142} , mWidth) 
_B.addstyle("width",_B._mwidth,_B);
// [239]  AddStyle( {143} , mBackgroundImage) 
_B.addstyle("background-image",_B._mbackgroundimage,_B);
// [240]  AddStyle( {144} , mBackgroundRepeat) 
_B.addstyle("background-repeat",_B._mbackgroundrepeat,_B);
// [241]  AddStyle( {145} , mBorderColor) 
_B.addstyle("border-color",_B._mbordercolor,_B);
// [242]  AddStyle( {146} , mBorderRadius) 
_B.addstyle("border-radius",_B._mborderradius,_B);
// [243]  AddStyle( {147} , mBorderStyle) 
_B.addstyle("border-style",_B._mborderstyle,_B);
// [244]  AddStyle( {148} , mBorderWidth) 
_B.addstyle("border-width",_B._mborderwidth,_B);
// [246] AddClass(mClasses) 
_B.addclass(_B._mclasses,_B);
// [247] setAttributes(mAttributes) 
_B.setattributes(_B._mattributes,_B);
// [248] setStyles(mStyle) 
_B.setstyles(_B._mstyle,_B);
// [251] Dim strHTML As String = ToString 
_strhtml=_B.tostring(_B);
// [252] mElement = mTarget.Append(strHTML).Get( {149} & mName) 
_B._melement=_B._mtarget.append(_strhtml).find("#"+_B._mname).bananofirst();
// End Sub
};

// [258] Sub ToString As String 
_B.tostring=function() {
var _classname,_stylename,_istructure,_rslt;
// [260] Dim className As String = BANanoShared.JoinMapKeys(classList, {150} ) 
_classname=_banano_bananozui_bananoshared.joinmapkeys(_B._classlist," ");
// [261] AddAttr( {151} , className) 
_B.addattr("class",_classname,_B);
// [263] Dim styleName As String = BANanoShared.BuildStyle(styleList) 
_stylename=_banano_bananozui_bananoshared.buildstyle(_B._stylelist);
// [264] AddAttr( {152} , styleName) 
_B.addattr("style",_stylename,_B);
// [266] Dim iStructure As String = BANanoShared.BuildAttributes(attributeList) 
_istructure=_banano_bananozui_bananoshared.buildattributes(_B._attributelist);
// [267]  Dim rslt As String = {0} 
_rslt="<" + _B._mtagname + " id=\"" + _B._mname + "\" " + _istructure + ">" + _B._mtext + "" + _B._sbtext.toString() + "</" + _B._mtagname + ">";
// [268] Return rslt 
return _rslt;
// End Sub
};

// [272] Sub SetVBind(prop As String, value As String) As ZUIZview 
_B.setvbind=function(_prop,_value) {
// [273] prop = prop.ToLowerCase 
_prop=_prop.toLowerCase();
// [274] value = value.ToLowerCase 
_value=_value.toLowerCase();
// [275] prop = {1} 
_prop="v-bind:" + _prop + "";
// [276] AddAttr(prop,value) 
_B.addattr(_prop,_value,_B);
// [277] bindings.Put(value, Null) 
_B._bindings[_value]=null;
// [278] Return Me 
return _B;
// End Sub
};

// [282] Sub AddToApp(vap As VueApp) As ZUIZview 
_B.addtoapp=function(_vap) {
var _k,_v,_cb;
// [284] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [285] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [286] vap.SetData(k, v) 
_vap.setdata(_k,_v);
// [287] Next 
}
// [289] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [290] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [291] vap.SetCallBack(k, cb) 
_vap.setcallback(_k,_cb);
// [292] Next 
}
// [293] Return Me 
return _B;
// End Sub
};

// [297] Sub AddToComponent(ve As VMElement) As ZUIZview 
_B.addtocomponent=function(_ve) {
var _k,_v,_cb;
// [299] For Each k As String In bindings.Keys 
var _kKeys = Object.keys(_B._bindings);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [300] Dim v As String = bindings.Get(k) 
_v=_B._bindings[_k];
// [301] ve.SetData(k, v) 
_ve.setdata(_k,_v);
// [302] Next 
}
// [304] For Each k As String In methods.Keys 
var _kKeys = Object.keys(_B._methods);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [305] Dim cb As BANanoObject = methods.Get(k) 
_cb=_B._methods[_k];
// [306] ve.SetCallBack(k, cb) 
_ve.setcallback(_k,_cb);
// [307] Next 
}
// [308] Return Me 
return _B;
// End Sub
};

// [312] Sub AddBR As ZUIZview 
_B.addbr=function() {
// [313] sbText.Append( {153} ) 
_B._sbtext.append("<br>");
// [314] Return Me 
return _B;
// End Sub
};

// [317] Sub AddText(t As String) As ZUIZview 
_B.addtext=function(_t) {
// [318]  sbText.Append(t) 
_B._sbtext.append(_t);
// [319]  Return Me 
return _B;
// End Sub
};

// [324] Sub AddHR As ZUIZview 
_B.addhr=function() {
// [325] sbText.Append( {154} ) 
_B._sbtext.append("<hr>");
// [326] Return Me 
return _B;
// End Sub
};

// [330] Sub AddDivSlotExtension As ZUIZview 
_B.adddivslotextension=function() {
// [332]  AddElement( {2} , {155} , CreateMap( {156} : {157} ), Null, Null, Null, {158} ) 
_B.addelement("" + _B._mname + "slot","div",{"slot":"extension"},null,null,null,"",_B);
// [333]  Return Me 
return _B;
// End Sub
};

// [337] Sub AddElement(elID As String, tag As String, props As Map, styleProps As Map, classNames As List, loose As List, Text As String) As ZUIZview 
_B.addelement=function(_elid,_tag,_props,_styleprops,_classnames,_loose,_text) {
var _elit,_k,_v,_selement;
// [338] elID = elID.tolowercase 
_elid=_elid.toLowerCase();
// [339] elID = elID.Replace( {159} , {160} ) 
_elid=_elid.split("#").join("");
// [340] Dim elIT As VHTML 
_elit= new banano_bananozui_vhtml();
// [341] elIT.Initialize(mCallBack, elID, elID) 
_elit.initialize(_B._mcallback,_elid,_elid);
// [342] elIT.SetText(Text) 
_elit.settext(_text);
// [343] elIT.SetTagName(tag) 
_elit.settagname(_tag);
// [344] If loose <> Null Then 
if (_loose!=null) {
// [345] For Each k As String In loose 
for (var _kindex=0;_kindex<_loose.length;_kindex++) {
_k=_loose[_kindex];
// [346] elIT.SetAttr(k, True) 
_elit.setattr(_k,true);
// [347] Next 
}
// [348] End If 
}
// [349] If props <> Null Then 
if (_props!=null) {
// [350] For Each k As String In props.Keys 
var _kKeys = Object.keys(_props);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [351] Dim v As String = props.Get(k) 
_v=_props[_k];
// [352] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [353] Next 
}
// [354] End If 
}
// [355] If styleProps <> Null Then 
if (_styleprops!=null) {
// [356] For Each k As String In styleProps.Keys 
var _kKeys = Object.keys(_styleprops);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [357] Dim v As String = styleProps.Get(k) 
_v=_styleprops[_k];
// [358] elIT.SetAttr(k, v) 
_elit.setattr(_k,_v);
// [359] Next 
}
// [360] End If 
}
// [361] If classNames <> Null Then 
if (_classnames!=null) {
// [362] elIT.AddClass(classNames) 
_elit.addclass(_classnames);
// [363] End If 
}
// [365] Dim sElement As String = elIT.tostring 
_selement=_elit.tostring();
// [366] sbText.Append(sElement) 
_B._sbtext.append(_selement);
// [367] Return Me 
return _B;
// End Sub
};

// [371] public Sub getElement() As BANanoElement 
_B.getelement=function() {
// [372] Return mElement 
return _B._melement;
// End Sub
};

// [376] public Sub getID() As String 
_B.getid=function() {
// [377] Return mName 
return _B._mname;
// End Sub
};

// [381] public Sub AddToParent(targetID As String) 
_B.addtoparent=function(_targetid) {
// [382] mTarget = BANano.GetElement( {161} & targetID.ToLowerCase) 
_B._mtarget=u("#"+_targetid.toLowerCase());
// [383] DesignerCreateView(mTarget, Null) 
_B.designercreateview(_B._mtarget,null,_B);
// End Sub
};

// [387] public Sub Remove() 
_B.remove=function() {
// [388] mElement.Remove 
_B._melement.remove();
// [389] BANano.SetMeToNull 
_B=null;
// End Sub
};

// [393] public Sub Trigger(event As String, params() As String) 
_B.trigger=function(_event,_params) {
// [394] If mElement <> Null Then 
if (_B._melement!=null) {
// [395] mElement.Trigger(event, params) 
_B._melement.trigger(_event, _params);
// [396] End If 
}
// End Sub
};

// [400] public Sub AddClass(varClass As String) As ZUIZview 
_B.addclass=function(_varclass) {
var _mxitems,_mt;
// [401] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return Me 
if (is.undefined(_varclass) || is.null(_varclass)) { return _B;}
// [402] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [403] varClass = varClass.trim 
_varclass=_varclass.trim();
// [404] If varClass = {162} Then Return Me 
if (_varclass=="") { return _B;}
// [405] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [406] Dim mxItems As List = BANanoShared.StrParse( {163} , varClass) 
_mxitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [407] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [408] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [409] Next 
}
// [410] Return Me 
return _B;
// End Sub
};

// [414] public Sub AddClassOnCondition(varClass As String, varCondition As Boolean, varShouldBe As Boolean) As ZUIZview 
_B.addclassoncondition=function(_varclass,_varcondition,_varshouldbe) {
var _mxitems,_mt;
// [415] If BANano.IsUndefined(varCondition) Or BANano.IsNull(varCondition) Then Return Me 
if (is.undefined(_varcondition) || is.null(_varcondition)) { return _B;}
// [416] If varShouldBe <> varCondition Then Return Me 
if (_varshouldbe!=_varcondition) { return _B;}
// [417] If BANano.IsUndefined(varClass) Or BANano.IsNull(varClass) Then Return Me 
if (is.undefined(_varclass) || is.null(_varclass)) { return _B;}
// [418] If BANano.IsNumber(varClass) Then varClass = BANanoShared.CStr(varClass) 
if (is.number(_varclass)) {_varclass=_banano_bananozui_bananoshared.cstr(_varclass);}
// [419] varClass = varClass.trim 
_varclass=_varclass.trim();
// [420] If varClass = {164} Then Return Me 
if (_varclass=="") { return _B;}
// [421] If mElement <> Null Then mElement.AddClass(varClass) 
if (_B._melement!=null) {_B._melement.addClass(_varclass);}
// [422] Dim mxItems As List = BANanoShared.StrParse( {165} , varClass) 
_mxitems=_banano_bananozui_bananoshared.strparse(" ",_varclass);
// [423] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [424] classList.put(mt, mt) 
_B._classlist[_mt]=_mt;
// [425] Next 
}
// [426] Return Me 
return _B;
// End Sub
};

// [430] public Sub AddStyle(varProp As String, varStyle As String) As ZUIZview 
_B.addstyle=function(_varprop,_varstyle) {
var _astyle,_sstyle;
// [431] If BANano.IsUndefined(varStyle) Or BANano.IsNull(varStyle) Then Return Me 
if (is.undefined(_varstyle) || is.null(_varstyle)) { return _B;}
// [432] If BANano.IsNumber(varStyle) Then varStyle = BANanoShared.CStr(varStyle) 
if (is.number(_varstyle)) {_varstyle=_banano_bananozui_bananoshared.cstr(_varstyle);}
// [433] If mElement <> Null Then 
if (_B._melement!=null) {
// [434] Dim aStyle As Map = CreateMap() 
_astyle={};
// [435] aStyle.put(varProp, varStyle) 
_astyle[_varprop]=_varstyle;
// [436] Dim sStyle As String = BANano.ToJSON(aStyle) 
_sstyle=JSON.stringify(_astyle);
// [437] mElement.SetStyle(sStyle) 
_B._melement.css(JSON.parse(_sstyle));
// [438] End If 
}
// [439]  styleList.put(varProp, varStyle) 
_B._stylelist[_varprop]=_varstyle;
// [440]  Return Me 
return _B;
// End Sub
};

// [444] public Sub AddAttr(varProp As String, varValue As String) As ZUIZview 
_B.addattr=function(_varprop,_varvalue) {
var _rname;
// [445]  If BANano.IsUndefined(varValue) Or BANano.IsNull(varValue) Then Return Me 
if (is.undefined(_varvalue) || is.null(_varvalue)) { return _B;}
// [446]  If BANano.IsNumber(varValue) Then varValue = BANanoShared.CStr(varValue) 
if (is.number(_varvalue)) {_varvalue=_banano_bananozui_bananoshared.cstr(_varvalue);}
// [448]  If BANano.IsBoolean(varValue) Then 
if (is.boolean(_varvalue)) {
// [449]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [450]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [451]  Else 
} else {
// [453]  If varValue.StartsWith( {166} ) Then 
if (_varvalue.startsWith(":")) {
// [454]  If varValue.StartsWith( {167} ) Then 
if (_varvalue.startsWith("$")) {
// [455]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [456]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [457]  Else 
} else {
// [458]  Dim rname As String = BANanoShared.MidString2(varValue, 2) 
_rname=_banano_bananozui_bananoshared.midstring2(_varvalue,2);
// [459]  If rname.Contains( {168} ) = False Then bindings.Put(rname, Null) 
if (_rname.contains(".")==false) {_B._bindings[_rname]=null;}
// [460]  attributeList.put( {3} , rname) 
_B._attributelist[":" + _varprop + ""]=_rname;
// [461]  If mElement <> Null Then mElement.SetAttr( {4} , varValue) 
if (_B._melement!=null) {_B._melement.attr(":" + _varprop + "",_varvalue);}
// [462]  End If 
}
// [463]  Else 
} else {
// [465]  If mElement <> Null Then mElement.SetAttr(varProp, varValue) 
if (_B._melement!=null) {_B._melement.attr(_varprop,_varvalue);}
// [466]  attributeList.put(varProp, varValue) 
_B._attributelist[_varprop]=_varvalue;
// [467]  Select Case varProp 
switch ("" + _varprop) {
// [468]  Case {169} , {170} , {171} , {172} , {173} , {174} 
case "" + "v-model":
case "" + "v-show":
case "" + "v-if":
case "" + "required":
case "" + "disabled":
case "" + "readonly":
// [469]  bindings.Put(varValue, Null) 
_B._bindings[_varvalue]=null;
// [470]  End Select 
break;
}
// [471]  End If 
}
// [472]  End If 
}
// [473]  Return Me 
return _B;
// End Sub
};

// [477] Public Sub getClasses() As String 
_B.getclasses=function() {
var _sbclass,_k;
// [478] Dim sbClass As StringBuilder 
_sbclass=new StringBuilder();
// [479] sbClass.Initialize 
_sbclass.init();
_sbclass.isinitialized=true;
// [480] For Each k As String In classList.Keys 
var _kKeys = Object.keys(_B._classlist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [481] sbClass.Append(k).Append( {175} ) 
_sbclass.append(_k).append(" ");
// [482] Next 
}
// [483] mClasses = sbClass.ToString 
_B._mclasses=_sbclass.toString();
// [484] Return mClasses 
return _B._mclasses;
// End Sub
};

// [488] public Sub setStyle(varStyle As String) 
_B.setstyle=function(_varstyle) {
var _mres,_k,_v;
// [489] If mElement <> Null Then 
if (_B._melement!=null) {
// [490] mElement.SetStyle(varStyle) 
_B._melement.css(JSON.parse(_varstyle));
// [491] End If 
}
// [492] Dim mres As Map = BANano.FromJSON(varStyle) 
_mres=JSON.parse(_varstyle);
// [493] For Each k As String In mres.Keys 
var _kKeys = Object.keys(_mres);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [494] Dim v As String = mres.Get(k) 
_v=_mres[_k];
// [495] styleList.put(k, v) 
_B._stylelist[_k]=_v;
// [496] Next 
}
// End Sub
};

// [500] public Sub getStyle() As String 
_B.getstyle=function() {
var _sbstyle,_k,_v;
// [501] Dim sbStyle As StringBuilder 
_sbstyle=new StringBuilder();
// [502] sbStyle.Initialize 
_sbstyle.init();
_sbstyle.isinitialized=true;
// [503] sbStyle.Append( {176} ) 
_sbstyle.append("{");
// [504] For Each k As String In styleList.Keys 
var _kKeys = Object.keys(_B._stylelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [505] Dim v As String = styleList.Get(k) 
_v=_B._stylelist[_k];
// [506] sbStyle.Append(k).Append( {177} ).Append(v).Append( {178} ) 
_sbstyle.append(_k).append(":").append(_v).append(",");
// [507] Next 
}
// [508] sbStyle.Append( {179} ) 
_sbstyle.append("}");
// [509] mStyle = sbStyle.ToString 
_B._mstyle=_sbstyle.toString();
// [510] Return mStyle 
return _B._mstyle;
// End Sub
};

// [514] public Sub setAttributes(varAttributes As String) 
_B.setattributes=function(_varattributes) {
var _mxitems,_mt,_k,_v;
// [515] Dim mxItems As List = BANanoShared.StrParse( {180} , varAttributes) 
_mxitems=_banano_bananozui_bananoshared.strparse(";",_varattributes);
// [516] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [517] Dim k As String = BANanoShared.MvField(mt,1, {181} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,"=");
// [518] Dim v As String = BANanoShared.MvField(mt,2, {182} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,"=");
// [519] If mElement <> Null Then mElement.SetAttr(k, v) 
if (_B._melement!=null) {_B._melement.attr(_k,_v);}
// [520] attributeList.put(k, v) 
_B._attributelist[_k]=_v;
// [521] Next 
}
// End Sub
};

// [525] public Sub setStyles(varStyles As String) 
_B.setstyles=function(_varstyles) {
var _mxitems,_mt,_k,_v;
// [526] Dim mxItems As List = BANanoShared.StrParse( {183} , varStyles) 
_mxitems=_banano_bananozui_bananoshared.strparse(",",_varstyles);
// [527] For Each mt As String In mxItems 
for (var _mtindex=0;_mtindex<_mxitems.length;_mtindex++) {
_mt=_mxitems[_mtindex];
// [528] Dim k As String = BANanoShared.MvField(mt,1, {184} ) 
_k=_banano_bananozui_bananoshared.mvfield(_mt,1,":");
// [529] Dim v As String = BANanoShared.MvField(mt,2, {185} ) 
_v=_banano_bananozui_bananoshared.mvfield(_mt,2,":");
// [530] AddStyle(k, v) 
_B.addstyle(_k,_v,_B);
// [531] Next 
}
// End Sub
};

// [535] public Sub getAttributes() As String 
_B.getattributes=function() {
var _sbattr,_k,_v;
// [536] Dim sbAttr As StringBuilder 
_sbattr=new StringBuilder();
// [537] sbAttr.Initialize 
_sbattr.init();
_sbattr.isinitialized=true;
// [538] For Each k As String In attributeList.Keys 
var _kKeys = Object.keys(_B._attributelist);
for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {
_k=_kKeys[_kindex];
// [539] Dim v As String = attributeList.Get(k) 
_v=_B._attributelist[_k];
// [540] sbAttr.Append(k).Append( {186} ).Append(v).Append( {187} ) 
_sbattr.append(_k).append("=").append(_v).append(";");
// [541] Next 
}
// [542] mAttributes = sbAttr.ToString 
_B._mattributes=_sbattr.toString();
// [543] Return mAttributes 
return _B._mattributes;
// End Sub
};

// [547] public Sub setText(varText As String) 
_B.settext=function(_vartext) {
// [548] If mElement <> Null Then 
if (_B._melement!=null) {
// [549] mElement.SetHTML(BANano.SF(varText)) 
_B._melement.html(banano_sf(_vartext,false));
// [550] End If 
}
// [551] mText = varText 
_B._mtext=_vartext;
// End Sub
};

// [555] public Sub getText() As String 
_B.gettext=function() {
// [556] Return mText 
return _B._mtext;
// End Sub
};

// [559] public Sub setImagePath(varImagePath As String) 
_B.setimagepath=function(_varimagepath) {
// [560] AddAttr( {188} , varImagePath) 
_B.addattr("image-path",_varimagepath,_B);
// [561] mImagePath = varImagePath 
_B._mimagepath=_varimagepath;
// End Sub
};

// [564] public Sub getImagePath() As String 
_B.getimagepath=function() {
// [565] Return mImagePath 
return _B._mimagepath;
// End Sub
};

// [569] public Sub setSlot(varSlot As String) 
_B.setslot=function(_varslot) {
// [570] AddAttr( {189} , varSlot) 
_B.addattr("slot",_varslot,_B);
// [571] mSlot = varSlot 
_B._mslot=_varslot;
// End Sub
};

// [574] public Sub getSlot() As String 
_B.getslot=function() {
// [575] Return mSlot 
return _B._mslot;
// End Sub
};

// [578] public Sub setKey(varKey As String) 
_B.setkey=function(_varkey) {
// [579] AddAttr( {190} , varKey) 
_B.addattr("key",_varkey,_B);
// [580] mKey = varKey 
_B._mkey=_varkey;
// End Sub
};

// [583] public Sub getKey() As String 
_B.getkey=function() {
// [584] Return mKey 
return _B._mkey;
// End Sub
};

// [587] public Sub setLabel(varLabel As String) 
_B.setlabel=function(_varlabel) {
// [588] AddAttr( {191} , varLabel) 
_B.addattr("label",_varlabel,_B);
// [589] mLabel = varLabel 
_B._mlabel=_varlabel;
// End Sub
};

// [592] public Sub getLabel() As String 
_B.getlabel=function() {
// [593] Return mLabel 
return _B._mlabel;
// End Sub
};

// [596] public Sub setLabelPos(varLabelPos As String) 
_B.setlabelpos=function(_varlabelpos) {
// [597] AddAttr( {192} , varLabelPos) 
_B.addattr("label-pos",_varlabelpos,_B);
// [598] mLabelPos = varLabelPos 
_B._mlabelpos=_varlabelpos;
// End Sub
};

// [601] public Sub getLabelPos() As String 
_B.getlabelpos=function() {
// [602] Return mLabelPos 
return _B._mlabelpos;
// End Sub
};

// [605] public Sub setParentId(varParentId As String) 
_B.setparentid=function(_varparentid) {
// [606] AddAttr( {193} , varParentId) 
_B.addattr("parent-id",_varparentid,_B);
// [607] mParentId = varParentId 
_B._mparentid=_varparentid;
// End Sub
};

// [610] public Sub getParentId() As String 
_B.getparentid=function() {
// [611] Return mParentId 
return _B._mparentid;
// End Sub
};

// [614] public Sub setProgress(varProgress As String) 
_B.setprogress=function(_varprogress) {
// [615] AddAttr( {194} , varProgress) 
_B.addattr("progress",_varprogress,_B);
// [616] mProgress = varProgress 
_B._mprogress=_varprogress;
// End Sub
};

// [619] public Sub getProgress() As String 
_B.getprogress=function() {
// [620] Return mProgress 
return _B._mprogress;
// End Sub
};

// [623] public Sub setRef(varRef As String) 
_B.setref=function(_varref) {
// [624] AddAttr( {195} , varRef) 
_B.addattr("ref",_varref,_B);
// [625] mRef = varRef 
_B._mref=_varref;
// End Sub
};

// [628] public Sub getRef() As String 
_B.getref=function() {
// [629] Return mRef 
return _B._mref;
// End Sub
};

// [632] public Sub setSize(varSize As String) 
_B.setsize=function(_varsize) {
// [633] AddAttr( {196} , varSize) 
_B.addattr("size",_varsize,_B);
// [634] mSize = varSize 
_B._msize=_varsize;
// End Sub
};

// [637] public Sub getSize() As String 
_B.getsize=function() {
// [638] Return mSize 
return _B._msize;
// End Sub
};

// [641] public Sub setSlider(varSlider As Boolean) 
_B.setslider=function(_varslider) {
// [642] AddAttr( {197} , varSlider) 
_B.addattr("slider",_varslider,_B);
// [643] mSlider = varSlider 
_B._mslider=_varslider;
// End Sub
};

// [646] public Sub getSlider() As Boolean 
_B.getslider=function() {
// [647] Return mSlider 
return _B._mslider;
// End Sub
};

// [650] public Sub setVBindClass(varVBindClass As String) 
_B.setvbindclass=function(_varvbindclass) {
// [651] AddAttr( {198} , varVBindClass) 
_B.addattr("v-bind:class",_varvbindclass,_B);
// [652] mVBindClass = varVBindClass 
_B._mvbindclass=_varvbindclass;
// End Sub
};

// [655] public Sub getVBindClass() As String 
_B.getvbindclass=function() {
// [656] Return mVBindClass 
return _B._mvbindclass;
// End Sub
};

// [659] public Sub setVBindStyle(varVBindStyle As String) 
_B.setvbindstyle=function(_varvbindstyle) {
// [660] AddAttr( {199} , varVBindStyle) 
_B.addattr("v-bind:style",_varvbindstyle,_B);
// [661] mVBindStyle = varVBindStyle 
_B._mvbindstyle=_varvbindstyle;
// End Sub
};

// [664] public Sub getVBindStyle() As String 
_B.getvbindstyle=function() {
// [665] Return mVBindStyle 
return _B._mvbindstyle;
// End Sub
};

// [668] public Sub setVElse(varVElse As String) 
_B.setvelse=function(_varvelse) {
// [669] AddAttr( {200} , varVElse) 
_B.addattr("v-else",_varvelse,_B);
// [670] mVElse = varVElse 
_B._mvelse=_varvelse;
// End Sub
};

// [673] public Sub getVElse() As String 
_B.getvelse=function() {
// [674] Return mVElse 
return _B._mvelse;
// End Sub
};

// [677] public Sub setVElseIf(varVElseIf As String) 
_B.setvelseif=function(_varvelseif) {
// [678] AddAttr( {201} , varVElseIf) 
_B.addattr("v-else-if",_varvelseif,_B);
// [679] mVElseIf = varVElseIf 
_B._mvelseif=_varvelseif;
// End Sub
};

// [682] public Sub getVElseIf() As String 
_B.getvelseif=function() {
// [683] Return mVElseIf 
return _B._mvelseif;
// End Sub
};

// [686] public Sub setVFor(varVFor As String) 
_B.setvfor=function(_varvfor) {
// [687] AddAttr( {202} , varVFor) 
_B.addattr("v-for",_varvfor,_B);
// [688] mVFor = varVFor 
_B._mvfor=_varvfor;
// End Sub
};

// [691] public Sub getVFor() As String 
_B.getvfor=function() {
// [692] Return mVFor 
return _B._mvfor;
// End Sub
};

// [695] public Sub setVHtml(varVHtml As String) 
_B.setvhtml=function(_varvhtml) {
// [696] AddAttr( {203} , varVHtml) 
_B.addattr("v-html",_varvhtml,_B);
// [697] mVHtml = varVHtml 
_B._mvhtml=_varvhtml;
// End Sub
};

// [700] public Sub getVHtml() As String 
_B.getvhtml=function() {
// [701] Return mVHtml 
return _B._mvhtml;
// End Sub
};

// [704] public Sub setVIf(varVIf As String) 
_B.setvif=function(_varvif) {
// [705] AddAttr( {204} , varVIf) 
_B.addattr("v-if",_varvif,_B);
// [706] mVIf = varVIf 
_B._mvif=_varvif;
// End Sub
};

// [709] public Sub getVIf() As String 
_B.getvif=function() {
// [710] Return mVIf 
return _B._mvif;
// End Sub
};

// [713] public Sub setVModel(varVModel As String) 
_B.setvmodel=function(_varvmodel) {
// [714] AddAttr( {205} , varVModel) 
_B.addattr("v-model",_varvmodel,_B);
// [715] mVModel = varVModel 
_B._mvmodel=_varvmodel;
// End Sub
};

// [718] public Sub getVModel() As String 
_B.getvmodel=function() {
// [719] Return mVModel 
return _B._mvmodel;
// End Sub
};

// [722] public Sub setVShow(varVShow As String) 
_B.setvshow=function(_varvshow) {
// [723] AddAttr( {206} , varVShow) 
_B.addattr("v-show",_varvshow,_B);
// [724] mVShow = varVShow 
_B._mvshow=_varvshow;
// End Sub
};

// [727] public Sub getVShow() As String 
_B.getvshow=function() {
// [728] Return mVShow 
return _B._mvshow;
// End Sub
};

// [731] public Sub setVText(varVText As String) 
_B.setvtext=function(_varvtext) {
// [732] AddAttr( {207} , varVText) 
_B.addattr("v-text",_varvtext,_B);
// [733] mVText = varVText 
_B._mvtext=_varvtext;
// End Sub
};

// [736] public Sub getVText() As String 
_B.getvtext=function() {
// [737] Return mVText 
return _B._mvtext;
// End Sub
};

// [740] public Sub setBackgroundColor(varBackgroundColor As String) 
_B.setbackgroundcolor=function(_varbackgroundcolor) {
// [741] AddStyle( {208} , varBackgroundColor) 
_B.addstyle("background-color",_varbackgroundcolor,_B);
// [742] mBackgroundColor = varBackgroundColor 
_B._mbackgroundcolor=_varbackgroundcolor;
// End Sub
};

// [745] public Sub getBackgroundColor() As String 
_B.getbackgroundcolor=function() {
// [746] Return mBackgroundColor 
return _B._mbackgroundcolor;
// End Sub
};

// [749] public Sub setBorder(varBorder As String) 
_B.setborder=function(_varborder) {
// [750] AddStyle( {209} , varBorder) 
_B.addstyle("border",_varborder,_B);
// [751] mBorder = varBorder 
_B._mborder=_varborder;
// End Sub
};

// [754] public Sub getBorder() As String 
_B.getborder=function() {
// [755] Return mBorder 
return _B._mborder;
// End Sub
};

// [758] public Sub setColor(varColor As String) 
_B.setcolor=function(_varcolor) {
// [759] AddStyle( {210} , varColor) 
_B.addstyle("color",_varcolor,_B);
// [760] mColor = varColor 
_B._mcolor=_varcolor;
// End Sub
};

// [763] public Sub getColor() As String 
_B.getcolor=function() {
// [764] Return mColor 
return _B._mcolor;
// End Sub
};

// [767] public Sub setFontFamily(varFontFamily As String) 
_B.setfontfamily=function(_varfontfamily) {
// [768] AddStyle( {211} , varFontFamily) 
_B.addstyle("font-family",_varfontfamily,_B);
// [769] mFontFamily = varFontFamily 
_B._mfontfamily=_varfontfamily;
// End Sub
};

// [772] public Sub getFontFamily() As String 
_B.getfontfamily=function() {
// [773] Return mFontFamily 
return _B._mfontfamily;
// End Sub
};

// [776] public Sub setFontSize(varFontSize As String) 
_B.setfontsize=function(_varfontsize) {
// [777] AddStyle( {212} , varFontSize) 
_B.addstyle("font-size",_varfontsize,_B);
// [778] mFontSize = varFontSize 
_B._mfontsize=_varfontsize;
// End Sub
};

// [781] public Sub getFontSize() As String 
_B.getfontsize=function() {
// [782] Return mFontSize 
return _B._mfontsize;
// End Sub
};

// [785] public Sub setFontStyle(varFontStyle As String) 
_B.setfontstyle=function(_varfontstyle) {
// [786] AddStyle( {213} , varFontStyle) 
_B.addstyle("font-style",_varfontstyle,_B);
// [787] mFontStyle = varFontStyle 
_B._mfontstyle=_varfontstyle;
// End Sub
};

// [790] public Sub getFontStyle() As String 
_B.getfontstyle=function() {
// [791] Return mFontStyle 
return _B._mfontstyle;
// End Sub
};

// [794] public Sub setFontWeight(varFontWeight As String) 
_B.setfontweight=function(_varfontweight) {
// [795] AddStyle( {214} , varFontWeight) 
_B.addstyle("font-weight",_varfontweight,_B);
// [796] mFontWeight = varFontWeight 
_B._mfontweight=_varfontweight;
// End Sub
};

// [799] public Sub getFontWeight() As String 
_B.getfontweight=function() {
// [800] Return mFontWeight 
return _B._mfontweight;
// End Sub
};

// [803] public Sub setHeight(varHeight As String) 
_B.setheight=function(_varheight) {
// [804] AddStyle( {215} , varHeight) 
_B.addstyle("height",_varheight,_B);
// [805] mHeight = varHeight 
_B._mheight=_varheight;
// End Sub
};

// [808] public Sub getHeight() As String 
_B.getheight=function() {
// [809] Return mHeight 
return _B._mheight;
// End Sub
};

// [812] public Sub setMargin(varMargin As String) 
_B.setmargin=function(_varmargin) {
// [813] AddStyle( {216} , varMargin) 
_B.addstyle("margin",_varmargin,_B);
// [814] mMargin = varMargin 
_B._mmargin=_varmargin;
// End Sub
};

// [817] public Sub getMargin() As String 
_B.getmargin=function() {
// [818] Return mMargin 
return _B._mmargin;
// End Sub
};

// [821] public Sub setMarginBottom(varMarginBottom As String) 
_B.setmarginbottom=function(_varmarginbottom) {
// [822] AddStyle( {217} , varMarginBottom) 
_B.addstyle("margin-bottom",_varmarginbottom,_B);
// [823] mMarginBottom = varMarginBottom 
_B._mmarginbottom=_varmarginbottom;
// End Sub
};

// [826] public Sub getMarginBottom() As String 
_B.getmarginbottom=function() {
// [827] Return mMarginBottom 
return _B._mmarginbottom;
// End Sub
};

// [830] public Sub setMarginLeft(varMarginLeft As String) 
_B.setmarginleft=function(_varmarginleft) {
// [831] AddStyle( {218} , varMarginLeft) 
_B.addstyle("margin-left",_varmarginleft,_B);
// [832] mMarginLeft = varMarginLeft 
_B._mmarginleft=_varmarginleft;
// End Sub
};

// [835] public Sub getMarginLeft() As String 
_B.getmarginleft=function() {
// [836] Return mMarginLeft 
return _B._mmarginleft;
// End Sub
};

// [839] public Sub setMarginRight(varMarginRight As String) 
_B.setmarginright=function(_varmarginright) {
// [840] AddStyle( {219} , varMarginRight) 
_B.addstyle("margin-right",_varmarginright,_B);
// [841] mMarginRight = varMarginRight 
_B._mmarginright=_varmarginright;
// End Sub
};

// [844] public Sub getMarginRight() As String 
_B.getmarginright=function() {
// [845] Return mMarginRight 
return _B._mmarginright;
// End Sub
};

// [848] public Sub setMarginTop(varMarginTop As String) 
_B.setmargintop=function(_varmargintop) {
// [849] AddStyle( {220} , varMarginTop) 
_B.addstyle("margin-top",_varmargintop,_B);
// [850] mMarginTop = varMarginTop 
_B._mmargintop=_varmargintop;
// End Sub
};

// [853] public Sub getMarginTop() As String 
_B.getmargintop=function() {
// [854] Return mMarginTop 
return _B._mmargintop;
// End Sub
};

// [857] public Sub setPadding(varPadding As String) 
_B.setpadding=function(_varpadding) {
// [858] AddStyle( {221} , varPadding) 
_B.addstyle("padding",_varpadding,_B);
// [859] mPadding = varPadding 
_B._mpadding=_varpadding;
// End Sub
};

// [862] public Sub getPadding() As String 
_B.getpadding=function() {
// [863] Return mPadding 
return _B._mpadding;
// End Sub
};

// [866] public Sub setPaddingBottom(varPaddingBottom As String) 
_B.setpaddingbottom=function(_varpaddingbottom) {
// [867] AddStyle( {222} , varPaddingBottom) 
_B.addstyle("padding-bottom",_varpaddingbottom,_B);
// [868] mPaddingBottom = varPaddingBottom 
_B._mpaddingbottom=_varpaddingbottom;
// End Sub
};

// [871] public Sub getPaddingBottom() As String 
_B.getpaddingbottom=function() {
// [872] Return mPaddingBottom 
return _B._mpaddingbottom;
// End Sub
};

// [875] public Sub setPaddingLeft(varPaddingLeft As String) 
_B.setpaddingleft=function(_varpaddingleft) {
// [876] AddStyle( {223} , varPaddingLeft) 
_B.addstyle("padding-left",_varpaddingleft,_B);
// [877] mPaddingLeft = varPaddingLeft 
_B._mpaddingleft=_varpaddingleft;
// End Sub
};

// [880] public Sub getPaddingLeft() As String 
_B.getpaddingleft=function() {
// [881] Return mPaddingLeft 
return _B._mpaddingleft;
// End Sub
};

// [884] public Sub setPaddingRight(varPaddingRight As String) 
_B.setpaddingright=function(_varpaddingright) {
// [885] AddStyle( {224} , varPaddingRight) 
_B.addstyle("padding-right",_varpaddingright,_B);
// [886] mPaddingRight = varPaddingRight 
_B._mpaddingright=_varpaddingright;
// End Sub
};

// [889] public Sub getPaddingRight() As String 
_B.getpaddingright=function() {
// [890] Return mPaddingRight 
return _B._mpaddingright;
// End Sub
};

// [893] public Sub setPaddingTop(varPaddingTop As String) 
_B.setpaddingtop=function(_varpaddingtop) {
// [894] AddStyle( {225} , varPaddingTop) 
_B.addstyle("padding-top",_varpaddingtop,_B);
// [895] mPaddingTop = varPaddingTop 
_B._mpaddingtop=_varpaddingtop;
// End Sub
};

// [898] public Sub getPaddingTop() As String 
_B.getpaddingtop=function() {
// [899] Return mPaddingTop 
return _B._mpaddingtop;
// End Sub
};

// [902] public Sub setTextAlign(varTextAlign As String) 
_B.settextalign=function(_vartextalign) {
// [903] AddStyle( {226} , varTextAlign) 
_B.addstyle("text-align",_vartextalign,_B);
// [904] mTextAlign = varTextAlign 
_B._mtextalign=_vartextalign;
// End Sub
};

// [907] public Sub getTextAlign() As String 
_B.gettextalign=function() {
// [908] Return mTextAlign 
return _B._mtextalign;
// End Sub
};

// [911] public Sub setTextDecoration(varTextDecoration As String) 
_B.settextdecoration=function(_vartextdecoration) {
// [912] AddStyle( {227} , varTextDecoration) 
_B.addstyle("text-decoration",_vartextdecoration,_B);
// [913] mTextDecoration = varTextDecoration 
_B._mtextdecoration=_vartextdecoration;
// End Sub
};

// [916] public Sub getTextDecoration() As String 
_B.gettextdecoration=function() {
// [917] Return mTextDecoration 
return _B._mtextdecoration;
// End Sub
};

// [920] public Sub setWidth(varWidth As String) 
_B.setwidth=function(_varwidth) {
// [921] AddStyle( {228} , varWidth) 
_B.addstyle("width",_varwidth,_B);
// [922] mWidth = varWidth 
_B._mwidth=_varwidth;
// End Sub
};

// [925] public Sub getWidth() As String 
_B.getwidth=function() {
// [926] Return mWidth 
return _B._mwidth;
// End Sub
};

// [930] Sub AddToPlaceholder 
_B.addtoplaceholder=function() {
// [931]  AddToParent( {229} ) 
_B.addtoparent("placeholder",_B);
// End Sub
};

// [934] public Sub setBackgroundImage(varBackgroundImage As String) 
_B.setbackgroundimage=function(_varbackgroundimage) {
// [935]  AddStyle( {230} , varBackgroundImage) 
_B.addstyle("background-image",_varbackgroundimage,_B);
// [936]  mBackgroundImage = varBackgroundImage 
_B._mbackgroundimage=_varbackgroundimage;
// End Sub
};

// [939] public Sub getBackgroundImage() As String 
_B.getbackgroundimage=function() {
// [940]  Return mBackgroundImage 
return _B._mbackgroundimage;
// End Sub
};

// [943] public Sub setBackgroundRepeat(varBackgroundRepeat As String) 
_B.setbackgroundrepeat=function(_varbackgroundrepeat) {
// [944]  AddStyle( {231} , varBackgroundRepeat) 
_B.addstyle("background-repeat",_varbackgroundrepeat,_B);
// [945]  mBackgroundRepeat = varBackgroundRepeat 
_B._mbackgroundrepeat=_varbackgroundrepeat;
// End Sub
};

// [948] public Sub getBackgroundRepeat() As String 
_B.getbackgroundrepeat=function() {
// [949]  Return mBackgroundRepeat 
return _B._mbackgroundrepeat;
// End Sub
};

// [952] public Sub setBorderColor(varBorderColor As String) 
_B.setbordercolor=function(_varbordercolor) {
// [953]  AddStyle( {232} , varBorderColor) 
_B.addstyle("border-color",_varbordercolor,_B);
// [954]  mBorderColor = varBorderColor 
_B._mbordercolor=_varbordercolor;
// End Sub
};

// [957] public Sub getBorderColor() As String 
_B.getbordercolor=function() {
// [958]  Return mBorderColor 
return _B._mbordercolor;
// End Sub
};

// [961] public Sub setBorderRadius(varBorderRadius As String) 
_B.setborderradius=function(_varborderradius) {
// [962]  AddStyle( {233} , varBorderRadius) 
_B.addstyle("border-radius",_varborderradius,_B);
// [963]  mBorderRadius = varBorderRadius 
_B._mborderradius=_varborderradius;
// End Sub
};

// [966] public Sub getBorderRadius() As String 
_B.getborderradius=function() {
// [967]  Return mBorderRadius 
return _B._mborderradius;
// End Sub
};

// [970] public Sub setBorderStyle(varBorderStyle As String) 
_B.setborderstyle=function(_varborderstyle) {
// [971]  AddStyle( {234} , varBorderStyle) 
_B.addstyle("border-style",_varborderstyle,_B);
// [972]  mBorderStyle = varBorderStyle 
_B._mborderstyle=_varborderstyle;
// End Sub
};

// [975] public Sub getBorderStyle() As String 
_B.getborderstyle=function() {
// [976]  Return mBorderStyle 
return _B._mborderstyle;
// End Sub
};

// [979] public Sub setBorderWidth(varBorderWidth As String) 
_B.setborderwidth=function(_varborderwidth) {
// [980]  AddStyle( {235} , varBorderWidth) 
_B.addstyle("border-width",_varborderwidth,_B);
// [981]  mBorderWidth = varBorderWidth 
_B._mborderwidth=_varborderwidth;
// End Sub
};

// [984] public Sub getBorderWidth() As String 
_B.getborderwidth=function() {
// [985]  Return mBorderWidth 
return _B._mborderwidth;
// End Sub
};

// [989] Sub SetCoverImage(url As String) 
_B.setcoverimage=function(_url) {
var _imgkey,_img;
// [990]  Dim imgKey As String = {5} 
_imgkey="" + _B._mname + "img";
// [991]  Dim img As ZUIZimage 
_img= new banano_bananozui_zuizimage();
// [992]  img.Initialize(mCallBack, imgKey, imgKey) 
_img.initialize(_B._mcallback,_imgkey,_imgkey);
// [993]  img.AddAttr( {236} , {237} ) 
_img.addattr("slot","image");
// [994]  img.Src = url 
_img.setsrc(_url);
// [995]  img.Width = {238} 
_img.setwidth("100%");
// [996]  img.Height = {239} 
_img.setheight("100%");
// [997]  sbText.Append(img.ToString) 
_B._sbtext.append(_img.tostring());
// End Sub
};

}
