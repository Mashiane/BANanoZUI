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
End Sub

'STEPS
'1. Each slide = VMElement
'2. One adds a ZView to the VMElement
'3. Then one add spots to the view
'4. Then add the template to the view
'5. Then add slide to app

Sub Init
	MyApp.Initialize(Me)
	'these are 2 VMElements
	BuildFoo
	BuildBar
	'serve the webapp
	MyApp.Serve
	
	'get the zui stage, you process stuff after
	zui = MyApp.zui
	'we made the theme to be white and refreshed it
	zui.SetTheme(zui.THEME_WHITE).Refresh
	'show the starting view
	zui.SetView("foo")
End Sub


Sub BuildFoo
	'create the component
	'STEP 1
	Dim foo As VMElement
	'initialie the component
	foo.Initialize(Me, "foo", "foo")
	
	'STEP 2
	'create the view
	Dim fooview As ZUIZview
	fooview.Initialize(Me, "fooview", "fooview")
	fooview.Text = "BANano 5.10"
	fooview.AddToPlaceholder
	
	'STEP 3
	'*** add about slot, this should go to the bar slide
	Dim s1 As ZUIZspot
	s1.Initialize(Me, "about", "about")
	s1.ref = "about"
	s1.Angle = 45
	s1.SlotExtension
	s1.Label = "BANanoZUI 1.01"
	s1.ToView = "bar"
	s1.AddToView(fooview)
'	
	'STEP 4
	'assign template from placeholder content
	foo.TemplateFromPlaceholder
	'
	'STEP 5
	'add the component to the app
	MyApp.AddComponent(foo)
End Sub
'
'we will not add a spot here...
Sub BuildBar
	'create the component
	Dim bar As VMElement
	'initialie the component
	bar.Initialize(Me, "bar", "bar")
	
	'create the view
	Dim barview As ZUIZview
	barview.Initialize(Me, "barview", "barview")
	barview.Text = "BANanoZUI 1.01"
	barview.AddToPlaceholder
		
	'assign template from placeholder content
	bar.TemplateFromPlaceholder
	'
	'add the component to the app
	MyApp.AddComponent(bar)
End Sub
