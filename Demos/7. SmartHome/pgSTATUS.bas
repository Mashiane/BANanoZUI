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
	comp.Initialize(Me, "status", "status")
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "statusview", "statussview")
	zview.Text = "Home Status"
	zview.BackgroundColor = "black"
	zview.AddDivSlotExtension
	zview.AddToPlaceholder
	'
	'lets add a canvas, normal html element
	Dim zcanvas As ZUICanvas
	zcanvas.Initialize(Me, "smoothiechart", "smoothiechart")
	zcanvas.SlotMedia
	zcanvas.Height = "50%"
	zcanvas.Width = "inherit"
	zcanvas.AddToview(zview)
	'
	'add a z spot to point us to logs
	Dim zlogs As ZUIZspot
	zlogs.Initialize(Me, "logs", "logs")
	zlogs.angle = -45
	zlogs.distance = 120
	zlogs.label = "Events"
	zlogs.LabelPos = zui.pos_right
	zlogs.Size = zui.SIZE_S
	zlogs.Toview = "logs"
	zlogs.text = "15"
	zlogs.AddToViewSlot(zview)
	
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub
