B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.31
@EndOfDesignText@
'Static code module
#IgnoreWarnings:12
Sub Process_Globals
	Private BANano As BANano
	Private MyApp As VueApp
	Private canvas As ZUIZcanvas
	Private zui As ZircleUI
End Sub

Sub Init
	MyApp.Initialize(Me)
	'get the canvas
	canvas = MyApp.ZUICanvas
	'apply styles to canvas
	'canvas.Width = "40%"
	'canvas.Height = "400px"
	'canvas.Border = "2px solid red"
	'
	BuildHome
	'serve the webapp
	MyApp.Serve
	
	'get the zui stage, you process stuff after
	zui = MyApp.zui
	'
	'zui.SetTheme(zui.THEME_GREEN)
	'zui.SetMode(zui.MODE_DARK)
	'add a view
	
	'show the home view
	zui.SetView("home")
	'
	'ensure themes are applied
	'zui.Refresh
	
	
End Sub


Sub BuildHome
	'create the component
	Dim home As VMElement
	'initialie the component
	home.Initialize(Me, "home", "home")
	
	
	'create the view
	Dim homeview As ZUIZview
	homeview.Initialize(Me, "homeview", "homeview")
	homeview.Text = "Lounge"
	homeview.AddToPlaceholder
	
	'*** add Quantity spot
	Dim QtySpot As ZUIZspot
	QtySpot.Initialize(Me, "qty", "qty")
'	make this a knob
	QtySpot.Knob = True
'	set the label, it appears outside the knob
	QtySpot.Label = "Fan Speed"
'	the value of the knob bound To the state
	QtySpot.QtySync = "knobvalue"
'	set To slot extension (we will add individual spots
	QtySpot.Slot = zui.SLOT_EXTENSION
	'add spot To view - build up HTML
	QtySpot.AddToView(homeview)
'	IMPORTANT: add spot To component, because it has a binding value For Qty.
	QtySpot.AddToComponent(home)
	'
	'*** add the temperature spot
	Dim TempSpot As ZUIZspot
	TempSpot.Initialize(Me, "temp", "temp")
	TempSpot.SlotExtension
	TempSpot.Angle = 180
	TempSpot.Knob = True
	TempSpot.Label = "Temperature"
	TempSpot.VBindSync = "temperature"
	TempSpot.setValues(19, "˚C", 18, 32, Null)
	TempSpot.AddToView(homeview)
	TempSpot.AddToComponent(home)
			
	'
	'assign template from placeholder content
	home.TemplateFromPlaceholder
	'set the initial quantity
	home.setdata("knobvalue", 72)
	home.SetData("temperature", TempSpot.getValues)
	'
	'add the component to the app
	MyApp.AddComponent(home)
End Sub