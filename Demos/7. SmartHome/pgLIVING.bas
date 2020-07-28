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
	'define the component
	Dim comp As VMElement
	Private thisInterval As Object
End Sub

'#ignorewarnings:12

Sub Initialize
	'get the reference of the app
	sh = pgIndex.myapp
	zui = pgIndex.zui
	
	'initialie the component
	comp.Initialize(Me, "living", "living")
	comp.SetData("progress", 0)
	comp.SetData("msg", "")
	comp.SetData("activescene", "")
	comp.SetData("devices", sh.NewList)
	'we define scenes for the living room
	Dim scenes As List = sh.NewList
	scenes.add(CreateMap("angle":-50, "msg":"",  "name": "Relax", "state": "active", "icon": "fas fa-book"))
	scenes.add(CreateMap("angle":-30, "msg":"", "name": "Theatre", "state": "deactive", "icon": "fas fa-film"))
	scenes.add(CreateMap("angle":-10, "msg":"", "name": "Party", "state": "deactive", "icon": "fas fa-birthday-cake"))
	comp.setdata("scenes", scenes)
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "livingview", "livingview")
	zview.BorderWidth = "8px"
	zview.Slider = True
	zview.Progress = ":progress"
	zview.AddDivSlotExtension
	zview.AddToPlaceholder
	'
	Dim vspan As ZUISpan 
	vspan.Initialize(Me, "vspan", "vspan")
	vspan.Text = "Living Room"
	vspan.AddElement("sh1", "h1", Null, Null, Null, Null, "{{ activescene }}")
	vspan.AddText("{{ msg }}")
	vspan.Color = "var(--accent-text-color)"
	vspan.AddToView(zview)
	
	Dim img As ZUIImage
	img.Initialize(Me, "img", "img")
	img.SlotImage
	img.Src = "./assets/living.jpg"
	img.width = "100%"
	img.height = "100%"
	img.AddStyle("opacity","0.3")
	img.AddToView(zview)
	'
	Dim zdevices As ZUIZspot
	zdevices.Initialize(Me, "zdevices", "zdevices")
	zdevices.VFor = "(device, index) in devices"
	zdevices.Bind("button", "device.name !== 'AC'")
	zdevices.Bind("knob", "device.name === 'AC'")
	zdevices.VBindSync = "device.temp"
	zdevices.Angle = ":device.angle"
	zdevices.distance = "100"
	zdevices.size = "m"
	zdevices.ToView = ":device.view"
	zdevices.Label = ":device.name"
	zdevices.labelpos = zui.pos_left
	zdevices.Key = "'dev_' + index"
	zdevices.AddIcon("", ":device.icon")
	'add child zspot
	Dim zchild As ZUIZspot
	zchild.Initialize(Me, "zhild", "zchild")
	zchild.Button = True
	zchild.SlotExtension
	zchild.angle = -45
	zchild.Size = zui.SIZE_XXS
	'make red/green depending on state
	zchild.Bind("style", "getstate(device.state)")
	zdevices.AddChildSpot(zchild.tostring)  
	zdevices.AddToViewSlot(zview)
	'
	Dim zspot As ZUIZspot
	zspot.Initialize(Me, "zuispot", "zuispot")
	zspot.vfor = "(scene, index) in scenes"
	zspot.button = True
	zspot.size = "s"
	zspot.Angle = ":scene.angle"
	zspot.distance = 125
	zspot.label = ":scene.name"
	zspot.labelpos = "right"
	zspot.AddAttr(":key", "'scn_' + index")
	zspot.VOnClickNative = "showme(scene)"
	zspot.AddIcon("", ":scene.icon")
	zspot.AddToViewSlot(zview)
	'
	comp.SetMethod(Me, "showme")  'fires when a scene is selected
	comp.SetCreated(Me, "setrelax")   ' the opening scene
	comp.SetMethod(Me, "getstate")     'helper method for device colors
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)
End Sub

Sub getstate(state As String) As String   'IgnoreDeadCode
	Select Case state
		Case "on"
			Return "border-color: green; background-color: green;"
		Case Else
			Return "border-color: red; background-color: red;"
	End Select
End Sub

'when created, open the Relax mode (default scene)
Sub setrelax  'IgnoreDeadCode
	Dim scene As Map = CreateMap("name":"Relax", "msg":"")
	showme(scene)
End Sub

'show the scene
Sub showme(scene As Map)   'IgnoreDeadCode
	'save the item
	'get the active scene
	Dim sactivescene As String = comp.getdata("activescene")
	'from the user selected scene
	Dim elscene As String = scene.get("name")
	'apply scene, dont if they match
	If sactivescene = elscene Then
		comp.SetData("msg", "This scene is already activated")
	Else
		'set active scene
		comp.setdata("progress", 5)
		comp.setdata("activescene", elscene)
		comp.setdata("msg", "Activating devices...")
		'run the interval to update the scene
		Dim cb As BANanoObject = BANano.CallBackExtra(Me, "runsettings", Null, Array(scene))
		thisInterval = BANano.Window.SetInterval(cb, 20)
	End If
End Sub

'run on 20 milliseconds
Sub runsettings(scene As Map)   'IgnoreDeadCode
	'get the message for this scene
	Dim msg As String = scene.get("msg")
	Dim sscene As String = scene.Get("name")
	'read the progress, we will increment this by 1
	Dim lastP As Int = comp.getdata("progress")
	'ensure its int
	lastP = BANano.parseInt(lastP)
	If lastP >= 100 Then
		'we have reached 100%, stop everything
		BANano.Window.ClearInterval(thisInterval)
		comp.setdata("progress", 0)
		comp.setdata("msg", msg)
	Else if lastP = 40 Then
		comp.setdata("msg", "Applying rules...")
		lastP = lastP + 1
		comp.setdata("progress", lastP)
		'change device settings based on scene
		Dim devices As List = sh.newlist
		Select Case sscene
		Case "Relax"
			'update device settings
			devices.add(CreateMap("angle": -270, "name": "AC", "state": "on", "temp": CreateMap("qty": 24, "unit": "˚C", "min": 18, "max": 32)))
			devices.add(CreateMap("angle": -220,"name": "TV", "state": "off", "vol": 14, "bright": 30, "source": "youtube", "icon": "fas fa-tv", "view": "tv"))
			devices.Add(CreateMap("angle": -170,"name": "Hifi", "state": "on", "vol": 14, "icon": "fas fa-music"))
			devices.Add(CreateMap("angle": -120,"name": "Ambient light", "state": "off", "icon": "far fa-lightbulb"))
		Case "Theatre"
			devices.Add(CreateMap("angle": -270, "name": "AC", "state": "on", "temp": CreateMap("qty": 18, "unit": "˚C", "min": 18, "max": 32)))
			devices.Add(CreateMap("angle": -220,"name": "TV", "state": "on", "vol": 14, "bright": 30, "source": "youtube", "icon": "fas fa-tv", "view": "tv"))
			devices.Add(CreateMap("angle": -170,"name": "Hifi", "state": "off", "vol": 14, "icon": "fas fa-music"))
			devices.Add(CreateMap("angle": -120,"name": "Ambient light", "state": "off", "icon": "far fa-lightbulb"))
		Case "Party"
			devices.Add(CreateMap("angle": -270, "name": "AC", "state": "on", "temp": CreateMap("qty": 20, "unit": "˚C", "min": 18, "max": 32)))
			devices.Add(CreateMap("angle": -220, "name": "TV", "state": "off", "vol": 14, "bright": 30, "source": "youtube", "icon": "fas fa-tv", "view": "tv"))
			devices.Add(CreateMap("angle": -170, "name": "Hifi", "state": "on", "vol": 14, "icon": "fas fa-music"))
			devices.Add(CreateMap("angle": -120, "name": "Ambient light", "state": "on", "icon": "far fa-lightbulb"))
		End Select
		comp.SetData("devices", devices)
	Else
		lastP = lastP + 1
		comp.setdata("progress", lastP)
	End If
End Sub