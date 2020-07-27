B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
Sub Process_Globals
	Private BANano As BANano  'ignore
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
	comp.Initialize(Me, "devices", "devices")
	'add devices
	Dim devices As List = sh.newlist
	devices.Add(CreateMap("category": "cameras & sensors", "qty": 4))
	devices.Add(CreateMap("category": "care", "qty": 1))
	devices.Add(CreateMap("category": "climate", "qty": 2))
	devices.Add(CreateMap("category": "doors & locks", "qty": 2))
	devices.Add(CreateMap("category": "energy", "qty": 1))
	devices.Add(CreateMap("category": "garage doors", "qty": 1))
	devices.Add(CreateMap("category": "home & family", "qty": 6))
	devices.Add(CreateMap("category": "lawn & garden", "qty": 0))
	devices.Add(CreateMap("category": "lights & switches", "qty": 13))
	devices.Add(CreateMap("category": "smoke & co", "qty": 3))
	devices.Add(CreateMap("category": "voice assistant", "qty": 1))
	devices.Add(CreateMap("category": "water", "qty": 1))
	devices.Add(CreateMap("category": "windows & blinds", "qty": 3))
	devices.Add(CreateMap("category": "entertainment", "qty": 3))
	comp.setdata("devices", devices)
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "devicesview", "devicesview")
	zview.AddSectionSlotExtension
	zview.AddToPlaceholder
	'add a list to the view
	Dim zlist As ZUIZlist
	zlist.Initialize(Me, "deviceslist", "deviceslist")
	zlist.items = "devices"
	zlist.PerPage = 3
	zlist.AddToViewSlot(zview)
	
	Dim dspot As ZUIZspot
	dspot.Initialize(Me, "devicespot", "devicespot")
	dspot.SlotScopeProps
	dspot.Index = ":props.index"
	dspot.Distance = 60
	dspot.Label = ":props.category"
	dspot.LabelPos = zui.POS_TOP
	dspot.AddSpan("white", "{{props.qty}}")        
	'add a child z spot
	Dim childspot As ZUIZspot
	childspot.Initialize(Me, "devicespotchild", "devicespotchild")
	childspot.SlotExtension
	childspot.Angle = -45
	childspot.AddAttr(":style", "getchildstyle(props.category)")
	childspot.Size = zui.SIZE_XXS
	'add a child spot
	dspot.AddChildSpot(childspot.ToString)
	'add this spot to the div slot we created above
	dspot.AddToList(zlist)

	comp.SetMethod(Me, "getchildstyle")
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub


':To-view="{ name: 'device', params: {category: props.category, qty: props.qty}}"

Sub getchildstyle(cat As String) As String
	Select Case cat
	Case "care"
		Return "background-color: red; border: none;"
	Case Else
		Return "background-color: green; border: none;"
	End Select
End Sub