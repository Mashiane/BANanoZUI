B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
Sub Process_Globals
	Private BANano As BANano  'ignore
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
	comp.Initialize(Me, "device", "device")
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "deviceview", "deviceview")
	zview.Text = "{{ $store.category }}"
	zview.AddToPlaceholder

	Dim zspot As ZUIZspot
	zspot.Initialize(Me, "zspot", "zspot")
	zspot.SlotExtension
	zspot.ToView = "home"
	zspot.Distance = 130
	zspot.angle = 30
	zspot.size = "small"
    zspot.Text = "{{ $store.qty }}"
    zspot.AddToView(zview)
	
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub
