B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
Sub Process_Globals
	Private BANano As BANano   'ignore
	Private sh As VueApp
	Public zui As ZircleUI
End Sub


Sub Initialize
	'get the reference of the app
	sh = pgIndex.myapp
	zui = pgIndex.zui
	'define the component
	Dim comp As VMElement
	'initialie the component
	comp.Initialize(Me, "search", "search")
	comp.SetData("scene", "Night Scene")
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "searchview", "searchview")
	zview.Text = "Search"
	zview.AddToPlaceholder
	'
	Dim zform As ZUIZform
	zform.Initialize(Me, "zform", "zform")
	zform.action = "search_submit"
	zform.method = "get"
	zform.acceptcharset = "utf-8"
	'add input
	Dim zinput As ZUIZinput
	zinput.Initialize(Me, "devices", "devices")
	zinput.InputType = "text"
	zform.AddInput(zinput)
	'
	zform.AddToView(zview)
	'
	zview.AddDivSlotExtension
	'
	Dim zspot As ZUIZspot
	zspot.Initialize(Me,"zspot", "zspot")
	zspot.angle = 45
	zspot.size = "m"
	zspot.distance = "120"
	zspot.label = "Search"
	zspot.Toview = "devices"
	zspot.AddIcon("", "fa fas-search")
	zspot.AddToViewSlot(zview)
	
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub