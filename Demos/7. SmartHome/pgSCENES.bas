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
	'
	Dim elements As List = sh.NewList
	elements.Add(CreateMap("scene": "Day", "color": "orange", "icon": "fa-sun", "msg": "Cooling rooms, blinds opened, playing ambient music"))
	elements.Add(CreateMap("scene": "Night", "color": "blue", "icon": "fa-moon", "msg": "Blinds closed, AC in silence mode, motion sensors active"))
	elements.Add(CreateMap("scene": "Away", "color": "red", "icon": "fa-shield-alt", "msg": "Alarm armed, cameras activated, blinds closed"))
	elements.Add(CreateMap("scene": "At home", "color": "green", "icon": "fa-home", "msg": "Lights in ambient mode, playing relax music, coffee is being prepared"))
	comp.setdata("scenes", elements)
	
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "scenesview", "scenesview")
	zview.Label = "Scenes"
	zview.slider = True
	zview.Progress = ":progress"
	zview.AddAttr(":style", "styleactive")
	zview.AddElement("vh1", "h1", Null, Null, Null, Null, "{{ activescene }}")
	zview.AddElement("hd1", "div", Null, CreateMap("height":"60px"),Null, Null, "{{ msg }}")
	
	'add slot extension
	zview.AddDivSlotExtension
	'add view to placeholder
	zview.AddToPlaceholder

	'set the computed property, will run the callback
	comp.SetComputed("styleactive", Me, "getstyleactive")
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub

'callback for computed property
Sub getstyleactive As Map
	Dim scolor As String = comp.getdata("color")
	Dim astyle As Map = CreateMap()
	astyle.put("borderWidth", "8px")
	astyle.Put("borderColor", scolor)
	astyle.Put("color", scolor)
	Return astyle
End Sub