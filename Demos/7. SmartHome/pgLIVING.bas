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
End Sub


Sub Initialize
	'get the reference of the app
	sh = pgIndex.myapp
	zui = pgIndex.zui
	'define the component
	Dim comp As VMElement
	'initialie the component
	comp.Initialize(Me, "living", "living")
	comp.SetData("progress", 0)
	comp.SetData("msg", "")
	comp.SetData("activescene", "")
	comp.SetData("devices", sh.NewList)
	'
	Dim scenes As List = sh.NewList
	scenes.add(CreateMap("name": "Relax", "state": "active", "icon": "fas fa-book"))
	scenes.add(CreateMap("name": "Theatre", "state": "deactive", "icon": "fas fa-film"))
	scenes.add(CreateMap("name": "Party", "state": "deactive", "icon": "fas fa-birthday-cake"))
	comp.setdata("scenes", scenes)
	'
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "livingview", "livingview")
	zview.Text = "Living"
	zview.BorderWidth = "8px"
	zview.Slider = True
	zview.Progress = ":progress"
	zview.AddDivSlotExtension
	zview.AddToPlaceholder
	'
	Dim img As ZUIZimage
	img.Initialize(Me, "img", "img")
	img.SlotImage
	img.Src = "./assets/living.jpg"
	img.width = "100%"
	img.height = "100%"
	img.AddStyle("opacity","0.3")
	img.AddToView(zview)
	'
	Dim zspot As ZUIZspot
	zspot.Initialize(Me, "zuispot", "zuispot")
	zspot.vfor = "(scene, index) in scenes"
	zspot.button = True
	zspot.size = "s"
	zspot.AddAttr(":angle", "getangle(scenes,index)")
	zspot.distance = 125
	zspot.label = ":scene.name"
	zspot.labelpos = "right"
	'zspot.AddAttr(":key", "'scn_' + index")
	'zspot.VOnClickNative = "showme(scene.name)"
	zspot.AddIcon("", ":scene.icon")
	zspot.AddToViewSlot(zview)
	
	'
	comp.SetMethod(Me, "getangle")
	
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub

Sub getangle(scenes As List, index As String) As Int
	Dim llen As Int = scenes.Size - 1
	Log(llen)
	Log(index)
	'llen = llen * index
	'Dim toadd As Int = 90 / llen
	'toadd = 225 + toadd
	'Log(toadd)
	'Return toadd 
	'zspot.AddAttr(":angle", "225 + (90 / (scenes.length - 1) * index)")
End Sub
