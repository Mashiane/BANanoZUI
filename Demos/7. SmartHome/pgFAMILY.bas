B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
'#ignorewarnings:12
Sub Process_Globals
	Private BANano As BANano  'ignore
	Private sh As VueApp
	Public zui As ZircleUI
	'define the component
	Dim comp As VMElement
End Sub


Sub Initialize
	'get the reference of the app
	sh = pgIndex.myapp
	zui = pgIndex.zui
	'initialie the component
	comp.Initialize(Me, "family", "family")
	comp.setdata("map", Null)
	comp.SetData("markers", sh.newlist)
	comp.SetData("active", "")
	comp.setdata("zviewbordercolor", "")
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "family", "family")
	zview.Label = "Leaflet Map"
	zview.AddAttr("ref", "map")
	zview.AddDivSlotMedia("100%", "100%")
	zview.ImagePath = "./assets/famlocation.jpg"
	zview.BorderColor = ":zviewbordercolor"
	zview.AddSectionSlotExtension
	zview.AddToPlaceholder
	'
	Dim mary As ZUIZspot = zui.CreateSpot(Me, "mary", "Mary", "top", "s", "", "-90", "", "")
	mary.Button = True
	mary.Bind("style", "getfemalestyle")
	mary.AddIcon("", "fas fa-female")
	mary.VOnClickNative = "showme('0-purple')"
	mary.AddToViewSlot(zview)
	'	
	Dim john As ZUIZspot = zui.CreateSpot(Me, "john", "John", "top", "s", "", "30", "", "")
	john.Button = True
	john.Bind("style", "getmalestyle")
	john.AddIcon("", "fas fa-male")
	john.VOnClickNative = "showme('1-green')"
	john.AddToViewSlot(zview)
	'
	Dim peter As ZUIZspot = zui.CreateSpot(Me, "peter", "Peter", "top", "s", "", "150", "", "")
	peter.Button = True
	peter.Bind("style", "getchildstyle")
	peter.AddIcon("", "fas fa-child")
	peter.VOnClickNative = "showme('2-orange')"
	peter.AddToViewSlot(zview)
		
	comp.SetMethod(Me, "getfemalestyle")
	comp.SetMethod(Me, "getmalestyle")
	comp.SetMethod(Me, "getchildstyle")
	comp.SetMethod(Me, "showme")
	
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub

Sub getfemalestyle As String   'IgnoreDeadCode
	Dim sactive As String = comp.getdata("active")
	Select Case sactive
	Case "0"
		Return "border-color: purple; color: purple;"	
	Case Else
		Return ""
	End Select
End Sub
'

Sub getmalestyle As String   'IgnoreDeadCode
	Dim sactive As String = comp.getdata("active")
	Select Case sactive
	Case "1"
		Return "border-color: green; color: green;"	
	Case Else
		Return ""
	End Select
End Sub


Sub getchildstyle As String  'IgnoreDeadCode
	Dim sactive As String = comp.getdata("active")
	Select Case sactive
	Case "1"
		Return "border-color: orange; color: orange;"	
	Case Else
		Return ""
	End Select
End Sub

Sub showme(scolor As String)   'IgnoreDeadCode
	Dim idx As String = BANanoShared.MvField(scolor,1,"-")
	Dim ncx As String = BANanoShared.mvfield(scolor,2,"-")
	comp.SetData("active", idx)
	comp.setdata("zviewbordercolor", ncx)
End Sub
