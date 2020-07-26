B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=Class
Version=8.5
@EndOfDesignText@
#IgnoreWarnings:12
Sub Class_Globals
	Private z As BANanoObject
	Private ZUI_Style As Map
	'
	Public const SIZE_XXL As String = "xxl"
	Public const SIZE_XL As String = "xl"
	Public const SIZE_L As String = "l"
	Public const SIZE_M As String = "m"
	Public const SIZE_S As String = "s"
	Public const SIZE_XS As String = "xs"
	Public const SIZE_XXS As String = "xxs"
	'
	Public const MODE_LIGHT As String = "light"
	Public const MODE_LIGHT_FILLED As String = "light-filled"
	Public const MODE_DARK As String = "dark"
	Public const MODE_DARK_FILLED As String = "dark-filled"
	'
	Public const THEME_WHITE As String = "white"
	Public const THEME_LIGHT_BLUE As String = "light-blue"
	Public const THEME_BLUE As String = "blue"
	Public const THEME_GREEN As String = "green"
	Public const THEME_ORANGE As String = "orange"
	Public const THEME_YELLOW As String = "yellow"
	Public const THEME_RED As String = "red"
	Public const THEME_PURPLE As String = "purple"
	Public const THEME_BLACK As String = "black"
	Public const THEME_GRAY As String = "gray"
	'
	Public const SLOT_EXTENSION As String = "extension"
	Public const SLOT_MEDIA As String = "media"
	Public const SLOT_DEFAULT As String = ""
	'
	Public const POS_TOP As String = "top"
	Public const POS_LEFT As String = "left"
	Public const POS_BOTTOM As String = "bottom"
	Public const POS_RIGHT As String = "right"
	Public const MODE_FULL As String = "full"
	Public const MODE_MIXED As String = "mixed"
	Private config As Map
End Sub

Public Sub Initialize(zui As BANanoObject) As ZircleUI
	z = zui
	ZUI_Style.Initialize
	config.Initialize 
	Return Me
End Sub

'use in full screen mode
Sub SetFullMode As ZircleUI
	config.Put("mode", MODE_FULL)
	Return Me
End Sub

'use inside another app
Sub SetMixedMode As ZircleUI
	config.Put("mode", MODE_FULL)
	Return Me
End Sub

Sub SetView(View As String) As ZircleUI
	z.RunMethod("setView", Array(View))
	Return Me
End Sub

Sub ToView(view As String) As ZircleUI
	z.RunMethod("toView", Array(view))
	Return Me
End Sub

Sub GetParams(prop As String) As BANanoObject
	Dim bo As BANanoObject
	Dim item As BANanoObject
	'
	bo = z.RunMethod("getParams", Null)
	item = bo.GetField(prop)
	Return item
End Sub

'set the theme of the zui
Sub SetTheme1(scolor As String, sintensity As String) As ZircleUI
	ZUI_Style.Put("theme", scolor)
	ZUI_Style.Put("mode", sintensity)
	Return Me
End Sub

'set the theme of the zui
Sub SetTheme(scolor As String) As ZircleUI
	ZUI_Style.Put("theme", scolor)
	Return Me
End Sub

'set the mode of the zui
Sub SetMode(smode As String) As ZircleUI
	ZUI_Style.Put("mode", smode)
	Return Me
End Sub

Sub Refresh
	config.Put("style", ZUI_Style)
	z.RunMethod("config", config)
End Sub

'get the active theme
Sub GetTheme As String
	Dim res As String = z.RunMethod("getTheme", Null).Result
	Return res
End Sub

'get theme mode
Sub GetThemeMode As String
	Dim res As String = z.RunMethod("getThemeMode", Null).Result
	Return res
End Sub

'add a view to the canvas
Sub AddView(Module As Object, vID As String, vLabel As String, vSize As String, vLabelPos As String, vSlider As Boolean, vProgress As Int, vImagePath As String, vSlot As String, Text As String) As ZUIZview
	'
	Dim parentID As String = "placeholder"
	vID = vID.tolowercase
	'
	parentID = parentID.Replace("#","")
	vID = vID.Replace("#","")
	
	Dim zv As ZUIZview
	zv.Initialize(Module, vID, vID)
	zv.Label = vLabel
	zv.Size = vSize
	If vLabelPos <> "" Then zv.LabelPos = vLabelPos
	zv.Slider = vSlider
	zv.Progress = vProgress
	If vSlot <> "" Then zv.Slot = vSlot
	If vImagePath <> "" Then zv.ImagePath = vImagePath
	zv.SetText(Text)
	'
	zv.AddToParent(parentID)
	'
	Return zv
End Sub

'add a list, usually to a view
Sub AddList(Module As Object, parentID As String, vID As String, vSlot As String, vItems As String, vPerPage As String) As ZUIZlist
	parentID = parentID.tolowercase
	vID = vID.tolowercase
	'
	parentID = parentID.Replace("#","")
	vID = vID.Replace("#","")
	'
	Dim zl As ZUIZlist
	zl.Initialize(Module, vID, vID)
	zl.Slot = vSlot
	zl.Items = vItems
	zl.PerPage = vPerPage
	
	zl.AddToParent(parentID)
	
	Return zl
	
End Sub

'add a spot to a view
Sub CreateSpot(Module As Object, vID As String, vLabel As String, vLabelPos As String, vSize As String, vDistance As String, vAngle As String, vToView As String, Text As String) As ZUIZspot
	vID = vID.tolowercase
	Dim zv As ZUIZspot
	zv.Initialize(Module, vID, vID)
	zv.Label = vLabel
	zv.LabelPos = vLabelPos
	zv.Size = vSize
	If vDistance <> "" Then zv.Distance = vDistance
	If vAngle <> "" Then  zv.Angle = vAngle
	zv.ToView = vToView
	zv.SetText(Text)
	Return zv
End Sub

'create a slide from a template
Sub CreateComponent(Module As Object, slideName As String, templateName As String) As VMElement
	templateName = templateName.ToLowerCase
	templateName = templateName.Replace("#","")
	slideName = slideName.tolowercase
	'create a component
	Dim slide As VMElement
	slide.Initialize(Module, slideName, slideName)
	'set the contents from the home layout
	slide.SetBANanoTemplate($"#${templateName}"$)
	'return the component
	Return slide
End Sub

