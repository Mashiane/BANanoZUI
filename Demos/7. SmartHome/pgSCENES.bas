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
	Private comp As VMElement
End Sub


Sub Initialize
	'get the reference of the app
	sh = pgIndex.myapp
	zui = pgIndex.zui
	'define the component
	
	'initialie the component
	comp.Initialize(Me, "scenes", "scenes")
	'initialize some states
	comp.setdata("activescene", "Night")
	comp.SetData("color", "blue")
	comp.SetData("msg","")
	comp.setdata("progress", 0)
	comp.setdata("styleactive", CreateMap())
	'
	Dim elements As List = sh.NewList
	elements.Add(CreateMap("angle": -50, "scene": "Day", "color": "orange", "icon": "fas fa-sun", "msg": "Cooling rooms, blinds opened, playing ambient music"))
	elements.Add(CreateMap("angle": -30, "scene": "Night", "color": "blue", "icon": "fas fa-moon", "msg": "Blinds closed, AC in silence mode, motion sensors active"))
	elements.Add(CreateMap("angle": -10, "scene": "Away", "color": "red", "icon": "fas fa-shield-alt", "msg": "Alarm armed, cameras activated, blinds closed"))
	elements.Add(CreateMap("angle": 10, "scene": "At home", "color": "green", "icon": "fas fa-home", "msg": "Lights in ambient mode, playing relax music, coffee is being prepared"))
	comp.setdata("sceneslist", elements)
	'save the size of the list
	comp.setdata("scenessize", elements.size)
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "scenesview", "scenesview")
	zview.Label = "Scenes"
	zview.slider = True
	zview.Progress = ":progress"
	zview.Slider = True
	'bind the style
	zview.AddAttr(":style", "styleactive")
	'add a h1
	zview.AddElement("vh1", "h1", Null, Null, Null, Null, "{{ activescene }}")
	'add a div
	zview.AddElement("hd1", "div", Null, CreateMap("height":"60px"),Null, Null, "{{ msg }}")
	'add slot extension
	zview.AddDivSlotExtension
	'add view to placeholder
	zview.AddToPlaceholder

	'add the items
	Dim scenespot As ZUIZspot
	scenespot.initialize(Me, "scenespot", "scenespot")
	scenespot.VFor = "(el, index) in sceneslist"
	scenespot.button = True 
	scenespot.size = "s"
	scenespot.distance = 120
	scenespot.Label = ":el.scene"
	scenespot.LabelPos = zui.POS_RIGHT
	scenespot.Angle = ":el.angle"
	'apply scene color
	scenespot.AddAttr(":style" ,"getspotstyle(el)")
	scenespot.key = ":el.index"
	'activate color scene
	scenespot.VOnClickNative = "showme(el)"
	scenespot.AddIcon("", ":el.icon")
	scenespot.AddToViewSlot(zview)
	
	'set the computed property, will run the callback
	comp.setmethod(Me, "showme")
	'watch changes to the scene
	comp.SetWatch(Me, "activescene", True, True, "applystyle")
	comp.setmethod(Me, "getspotstyle")
	'
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub

Sub showme(el As Map)
	'get the active scene
	Dim sactivescene As String = comp.getdata("activescene")
	'get the element scene
	Dim elscene As String = el.get("scene")
	Dim elcolor As String = el.get("color")
	'apply scene
	If sactivescene = elscene Then
		comp.SetData("msg", "This scene is already activated")
	Else
		comp.setdata("progress", 5)
		comp.setdata("activescene", elscene)
		comp.setdata("color", elcolor)
		comp.setdata("msg", "Activating devices...")
		'var vm = this
	End If	
End Sub

'callback for watch
Sub applystyle As Map
	Dim scolor As String = comp.getdata("color")
	Dim astyle As Map = CreateMap()
	astyle.put("border-width", "8px")
	astyle.Put("border-color", scolor)
	astyle.Put("color", scolor)
	comp.SetData("styleactive", astyle)
	Return astyle
End Sub

Sub getspotstyle(el As Map) As Object
	'get the active theme
	Dim sactive As String = comp.getdata("activescene")
	'get this theme
	Dim elscene As String = el.get("scene")
	'
	If sactive = elscene Then
		Dim mactive As Map = comp.GetData("styleactive")
		Return mactive
	Else
		Return ""
	End If
End Sub