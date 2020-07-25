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
End Sub

Sub Init
	MyApp.Initialize(Me)
	
	'build the components
	BuildHome
	BuildDocs
	
	'serve the webapp
	MyApp.Serve
	 
	'show the home page
	MyApp.ZuiSetView("home")
		
	Log(MyApp.Template)
	
End Sub

Sub openurl(url As String)
	If url = "" Then Return
	'open link in another window
	BANano.Window.Open(url,"","","")
End Sub

''build the home screen
Sub BuildHome
	'load the home layout
	BANano.LoadLayout("#placeholder", "viewhome")
	'create a home component
	Dim home As VMElement = MyApp.ZuiCreateSlide(Me, "home", "#placeholder")
	'
	Log(home.Template)
	'add events for slide
	home.SetMethod(Me, "openurl")
	'
	'add component to page
	MyApp.AddComponent(home)
End Sub

Sub BuildDocs
	'load the docs layout
	BANano.LoadLayout("#placeholder", "viewdocs")
	'add the slide to the app
	Dim docs As VMElement = MyApp.ZuiCreateSlide(Me, "docs", "#placeholder")
	'
	Dim sections As List = MyApp.NewList
	sections.Add(CreateMap("name": "BANanoZUI", "url":"https://www.b4x.com/android/forum/threads/bananozui-creating-zoomable-user-interfaces-with-zircleui.120514/#content", "icon":"mdi mdi-view-carousel-outline"))
	sections.Add(CreateMap("name": "Guide", "url": "https://zircleui.github.io/docs/guide/", "icon": "mdi mdi-compass-outline"))
	sections.add(CreateMap("name": "Tutorial", "url": "https://zircleui.github.io/docs/tutorial/", "icon": "mdi mdi-wizard-hat"))
	sections.Add(CreateMap("name": "API", "url": "https://zircleui.github.io/docs/api/", "icon": "mdi mdi-code-braces"))
	sections.add(CreateMap("name": "Examples", "url": "https://zircleui.github.io/docs/examples/vuejs-ecosystem.html", "icon": "mdi mdi-palette-outline"))
	docs.setdata("sections", sections)
	'
	'add events for slide
	docs.SetMethod(Me, "openurl")
	'
	Log(docs)
	
	
	'Log(docs.template)
	'add component / slide to app
	MyApp.AddComponent(docs) 
End  Sub