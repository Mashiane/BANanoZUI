B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
#IgnoreWarnings:12
Sub Process_Globals
	Private BANano As BANano
	Private MyApp As VueApp
	
	'
	Private zui As ZircleUI
	Private canvas As VHTML
End Sub

Sub Init
	BANano.LoadLayout("#body", "pagezircle")
	'initialize the vue instance, we will render it to #app div element
	MyApp.Initialize(Me, "#app", "#body")
	'hide the placeholder
	MyApp.SetData("placeholder", False)
	
	'build the components
	BuildHome
	
	'link main component to app
	canvas.AddToApp(MyApp)
	'serve the webapp
	MyApp.Serve
	'
	'initialize zui
	zui.Initialize(MyApp.zircle)
	 
	'show the home page
	zui.SetView("home")
	
	
	Log(MyApp.Template)
	
End Sub

'build the home screen
Sub BuildHome
	'load the home layout
	BANano.LoadLayout("#placeholder", "homelayout")
	'create a home component
	Dim home As VMElement
	home.Initialize(Me, "home", "home")
	'set the contents from the home layout
	home.SetBANanoTemplate("#placeholder")
	'
	'add component to page
	MyApp.AddComponent(home) 
End Sub