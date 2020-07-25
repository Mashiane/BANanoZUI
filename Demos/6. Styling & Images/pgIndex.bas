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
	Private zui As ZircleUI
	'we will style the canvas also
	Private canvas As ZUIZcanvas
End Sub

'STEPS
'1. Each slide = VMElement
'2. One adds a ZView to the VMElement
'3. Then one add spots to the view
'4. Then add the template to the view
'5. Then add slide to app

Sub Init
	MyApp.Initialize(Me)
	'these are 3 VMElements
	
	One
	Two
	Three
	
	'get the canvas and change the background
	canvas = MyApp.ZUICanvas
	'set the background color of the stage
	canvas.BackgroundColor = MyApp.GetHexColor(MyApp.COLOR_BROWN, MyApp.INTENSITY_LIGHTEN1)
	
	'serve the webapp
	MyApp.Serve
	
	'get the zui stage, you process stuff after
	zui = MyApp.zui
	
	'we made the theme to be white and refreshed it
	'zui.SetTheme(zui.THEME_WHITE).Refresh
	'show the starting view
	zui.SetView("one")
End Sub


Sub One
	'create the component
	Dim eOne As VMElement
	'initialie the component
	eOne.Initialize(Me, "one", "one")
	
'	'create the view
	Dim oneview As ZUIZview
	oneview.Initialize(Me, "oneview", "oneview")
	'apply style
	oneview.BorderColor = MyApp.COLOR_YELLOW
	'we set the border width
	oneview.BorderWidth = "12px"
	'we set a cover image for the view
	'this takes 100% with and height
	oneview.SetCoverImage("./assets/one.jpg")
	oneview.AddToPlaceholder
'	
'	'*** add about slot, this should go to the bar slide
	Dim s1 As ZUIZspot
	s1.Initialize(Me, "onespot", "onespot")
	s1.Slot = zui.SLOT_EXTENSION
	s1.Angle = -45
	s1.Size = zui.SIZE_M
	'apply styles to the spot
	s1.BorderColor = "orange"
	s1.BorderWidth = "10px"
	'the color of the internal text
	s1.Color = "white"
	'when selected goto slide two
	s1.ToView = "two"
	'we use a generic method to add an icon
	'this is a font - awesome icon
	s1.AddElement("", "i", Null, Null, Array("fa fa-search-plus"), Null, "")
	'we use a generic method as we can use it to add any element.
	s1.AddToView(oneview)
	
	'assign template from placeholder content
	eOne.TemplateFromPlaceholder
	'
	'add the component to the app
	MyApp.AddComponent(eOne)
End Sub

Sub Three
	'create the component
	Dim eOne As VMElement
	'initialie the component
	eOne.Initialize(Me, "three", "three")
	
	'create the view
	Dim oneview As ZUIZview
	oneview.Initialize(Me, "threeview", "threeview")
	oneview.BorderColor = "lavanda"
	oneview.BorderWidth = "12px"
	oneview.color = MyApp.COLOR_WHITE
	oneview.SetCoverImage("./assets/three.jpg")
	oneview.AddToPlaceholder
	
	'*** add about slot, this should go to the bar slide
	Dim s1 As ZUIZspot
	s1.Initialize(Me, "twospot", "twospot")
	s1.Slot = zui.SLOT_EXTENSION
	s1.Angle = 45
	s1.Size = zui.SIZE_L
	'
	s1.BorderColor = "orange"
	s1.BorderWidth = "5px"
	s1.Color = "white"
	s1.Text = "Thanks"
	s1.AddToView(oneview)
	
	'assign template from placeholder content
	eOne.TemplateFromPlaceholder
	'
	'add the component to the app
	MyApp.AddComponent(eOne)
End Sub


Sub Two
	'create the component
	Dim eOne As VMElement
	'initialie the component
	eOne.Initialize(Me, "two", "two")
	
	'create the view
	'we follow the same approach with page 1
	Dim oneview As ZUIZview
	oneview.Initialize(Me, "twoview", "twoview")
	'apply styles
	oneview.BorderColor = MyApp.COLOR_ORANGE
	oneview.BorderWidth = "12px"
	oneview.Color = MyApp.color_white
	'set cover image
	oneview.SetCoverImage("./assets/two.jpg")
	oneview.AddToPlaceholder
'	
'	'*** add about slot, this should go to the bar slide
	Dim s1 As ZUIZspot
	s1.Initialize(Me, "twospot", "twospot")
	s1.Slot = zui.SLOT_EXTENSION
	s1.Angle = -45
	s1.Size = zui.SIZE_M
	s1.BorderColor = "lavanda"
	s1.BorderWidth = "12px"
	s1.Color = "white"
	s1.ToView = "three"
	s1.AddElement("", "i", Null, Null, Array("fa fa-search-plus"), Null, "")
	s1.AddToView(oneview)
	
	'assign template from placeholder content
	eOne.TemplateFromPlaceholder
	'
	'add the component to the app
	MyApp.AddComponent(eOne)
End Sub
