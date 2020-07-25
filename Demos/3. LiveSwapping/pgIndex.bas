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
	zui.SetTheme(zui.THEME_GREEN)
	zui.SetMode(zui.MODE_DARK)
	'add a view
	
	'show the home view
	zui.SetView("home")
	'
	'ensure themes are applied
	zui.Refresh
	
	
End Sub


Sub BuildHome
	'add a view to the placeholder
	Dim view As ZUIZview
	view.Initialize(Me, "homeview", "homeview")
	'view.Label = "BANanoZUI"
	view.LabelPos = zui.POS_BOTTOM  
	view.Slider = True
	view.Progress = "32"
	view.Text = "B4X"
	view.AddToParent("placeholder")
'	
'	'add list to the view
	Dim list As ZUIZlist
	list.Initialize(Me, "homelist", "homelist")
	list.Slot = zui.SLOT_EXTENSION
	list.Items = "collection"
	list.PerPage = 4
	list.AddToParent("homeview")
	
	'add spot to the list
	Dim spot As ZUIZspot
	spot.Initialize(Me, "spots", "spots")
	spot.SlotScope = "props"
	spot.Index = ":props.index"
	spot.Label = ":props.name"
	spot.AddToParent("homelist")
	
	'create a component from the placeholder
	Dim home As VMElement = zui.CreateComponent(Me, "home", "#placeholder")
	'save to the state
	'items to display
	Dim collection As List = MyApp.NewList
	collection.Add(CreateMap("name": "B4X", "color": "red"))
	collection.Add(CreateMap("name": "B4i", "color": "green"))
	collection.Add(CreateMap("name": "B4A", "color": "yellow"))
	collection.Add(CreateMap("name": "B4J", "color": "purple"))
	home.SetData("collection", collection)
	
	'add the component to the app
	MyApp.AddComponent(home)
End Sub