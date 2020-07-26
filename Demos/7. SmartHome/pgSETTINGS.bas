B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
#IgnoreWarnings:12
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
	comp.Initialize(Me, "settings", "settings")
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "settingsview", "settingsview")
	'the theme text is bound to a variable
	zview.AddText("Theme").AddBR
	zview.AddText("{{ $store.mode }} - {{ $store.theme }}")
	
	'add the div slot extension
	zview.AddDivSlotExtension
	zview.AddToPlaceholder
	'
	'add spots
	Dim els As ZUIZspot
	els.Initialize(Me, "settingszpot", "settingszpot")
	'loop through each element from elements in saved state list
	els.VFor = "(el, index) in elements"
	'make this a button, dont zoom
	els.Button = True
	'size is extra small
	els.Size = zui.SIZE_XS
	els.Distance = 120
	'bind the angle, label, labelpos for each element
	els.Angle = ":el.angle"
	els.Label = ":el.label"
	els.LabelPos = ":el.labelpos"
	els.Key = ":index"
	'class will be computed
	els.AddAttr(":class", "getclassname(el)")
	'when clicked we want to change the style
	'pass the bound item to the event
	els.VOnClickNative = "changestyle(el)"
	'add this spot to the div slot we created above
	els.AddToViewSlot(zview)
	
	'set the theme message
	comp.setdata("theme", "Select your theme")
	'bind the method for this component
	comp.setmethod(Me, "changestyle")
	comp.setmethod(Me, "getclassname")
	'add elements that are needed
	Dim elements As List = sh.newlist
	elements.add(CreateMap("type": "theme", "angle": -50, "label": "blue", "labelpos": "right"))
	elements.add(CreateMap("type": "theme", "angle": -30, "label": "black", "labelpos": "right"))
	elements.add(CreateMap("type": "theme", "angle": -10, "label": "green", "labelpos": "right"))
	elements.add(CreateMap("type": "theme", "angle": 10, "label": "red", "labelpos": "right"))
	elements.add(CreateMap("type": "theme", "angle": 30, "label": "light-blue", "labelpos": "right"))
	elements.add(CreateMap("type": "theme", "angle": 50, "label": "gray", "labelpos": "right"))
	elements.add(CreateMap("type": "mode", "angle": 210, "label": "dark", "labelpos": "left"))
	elements.add(CreateMap("type": "mode", "angle": 190, "label": "dark-filled", "labelpos": "left"))
	elements.add(CreateMap("type": "mode", "angle": 170, "label": "light", "labelpos": "left"))
	elements.add(CreateMap("type": "mode", "angle": 150, "label": "light-filled", "labelpos": "left"))
	'save elements to the state
	comp.SetData("elements", elements)	
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub

'define the event
Sub changestyle(el As Map)
	'get the type
	Dim stheme As String = el.get("label")
	Dim stype As String = el.Get("type")
	Select Case stype
	Case "theme"
		'set the state
		sh.SetData("theme", stheme)
		'we change this via a watcher
	Case "mode"
		'set the state
		sh.SetData("mode", stheme)
		'we change this via a watcher
	End Select
End Sub
	

'define the class getter
Sub getclassname(el As Map) As String
	'get the type
	Dim stheme As String = el.get("label")
	Dim stype As String = el.Get("type")
	Select Case stype
	Case "theme"
		Return $"theme-${stheme}"$
	Case "mode"
		Return $"mode-${stheme}"$
	End Select
End Sub

