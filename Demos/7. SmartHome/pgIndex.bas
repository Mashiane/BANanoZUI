B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.31
@EndOfDesignText@
'Static code module
#IgnoreWarnings:12
Sub Process_Globals
	Private BANano As BANano 'ignore
	Public MyApp As VueApp
	Public zui As ZircleUI
	'we will style the canvas also
	'Private canvas As ZUIZcanvas
End Sub

Sub Init
	MyApp.Initialize(Me)
	'set the initial theme and mode
	MyApp.SetData("theme", "black")
	MyApp.SetData("mode", "dark")
	'
	pgHOME.Initialize
	pgDEVICE.Initialize  
	pgDEVICES.Initialize 
	pgFAMILY.Initialize 
	pgLIVING.Initialize 
	pgLOGS.Initialize
	pgROOMS.Initialize
	pgSCENES.Initialize 
	pgSEARCH.Initialize 
	pgSETTINGS.Initialize
	pgSTATUS.Initialize
	pgTV.Initialize 
	 
	'get the canvas and change the background
	'canvas = MyApp.ZUICanvas
	'set the background color of the stage
	'canvas.BackgroundColor = MyApp.GetHexColor(MyApp.COLOR_BROWN, MyApp.INTENSITY_LIGHTEN1)
	'
	MyApp.SetWatch(Me, "theme", True, True, "themechanged")
	MyApp.SetWatch(Me, "mode", True, True, "modechanged")
	
	'serve the webapp
	MyApp.Serve
	'get the zui instance
	zui = MyApp.zui
	
	'get the zui stage, you process stuff after
	'zui = MyApp.zui
	'set full mode
	zui.SetFullMode
	
	'we made the theme to be white and refreshed it
	'zui.SetTheme(zui.THEME_BLACK)
	'zui.SetMode(zui.MODE_DARK)
	'zui.Refresh
	'show the starting view
	zui.SetView("home")
End Sub

'fires each time a theme is changed
Sub themechanged
	Try
		'read saved theme
		Dim stheme As String = MyApp.GetData("theme")
		'apply the theme to UI
		zui.SetTheme(stheme).refresh
	Catch
		Log("Error: themechanged")
	End Try
End Sub

'fires each time a mode is changed
Sub modechanged
	Try
		'read the saved mode
		Dim smode As String = MyApp.GetData("mode")
		'apply the mode
		zui.SetMode(smode).refresh
	Catch
		Log("Error: modechanged")
	End Try
End Sub