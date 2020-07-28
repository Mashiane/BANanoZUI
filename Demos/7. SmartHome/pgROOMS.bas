B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.5
@EndOfDesignText@
'Static code module
'#IgnoreWarnings:12
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
	comp.Initialize(Me, "rooms", "rooms")
	'list of rooms
	Dim rooms As List = sh.NewList
	rooms.Add(CreateMap("name": "Living", "to":"living", "devices": 6, "image": "./assets/living.jpg"))
	rooms.Add(CreateMap("name": "Bedroom", "to":"bedroom", "devices": 2, "status": "alert"))
	rooms.Add(CreateMap("name": "Kitchen", "to":"kitchen", "devices": 5))
	rooms.Add(CreateMap("name": "Studio", "to":"studio", "devices": 1))
	rooms.Add(CreateMap("name": "Bath", "to":"bath", "devices": 1))
	comp.setdata("rooms", rooms)
	'define a global variable for open dialog
	sh.SetData("opendialog", False)
	
	'create the view
	Dim zview As ZUIZview
	zview.Initialize(Me, "roomsview", "roomsview")
	zview.Text = "Rooms"
	zview.AddSectionSlotExtension
	zview.AddToPlaceholder
	'
	'add a list to the view
	Dim zlist As ZUIZlist
	zlist.Initialize(Me, "roomslist", "roomslist")
	zlist.items = "rooms"
	zlist.PerPage = 3
	zlist.AddToViewSlot(zview)
'	'
	'add zspot
	Dim zspot As ZUIZspot
	zspot.Initialize(Me, "roomspot", "roomspot")
	zspot.distance = 60
	zspot.slotscopeprops
	zspot.index = ":props.index"
	zspot.Toview = ":props.to"
	zspot.label = ":props.name"
	zspot.imagepath = ":props.image"
	zspot.labelpos = "bottom"
'	
	'add a child z spot
	Dim childspot As ZUIZspot
	childspot.Initialize(Me, "roomspotchild", "roomspotchild")
	'we use the v-if directive to show the dot
	childspot.VIf = "props.status"
	childspot.SlotExtension
	childspot.Angle = -45
	childspot.BackgroundColor = "red"
	childspot.Border = "none"
	childspot.Size = zui.SIZE_XXS
	'add a child spot
	zspot.AddChildSpot(childspot.ToString)
	zspot.AddToList(zlist)
'	'
	'add an add button
	Dim addSpot As ZUIZspot
	addSpot.Initialize(Me, "addspot", "addspot")
	addSpot.Button = True
	addSpot.angle = 45
	addSpot.size = "s"
	addSpot.distance = 120
	addSpot.label = "Add"
	'addSpot.LabelPos = zui.pos_right
	addSpot.VOnClickNative = "cbopendialog"
	addSpot.AddIcon("", "fas fa-plus")
	addSpot.AddToViewSlot(zview)
	'
	'add a dialog
	Dim zdialog As ZUIZdialog
	zdialog.Initialize(Me, "roomsdialog", "roomsdialog")
	'must show when opendialog = true
	zdialog.VIf = "$store.opendialog"
	'this is a self closing dialog
	zdialog.SelfClose = True
	'when its done it executes a callback
	zdialog.VOnDone = "cbclosedialog"
	'text to appear inside the dialog
	zdialog.Text = "Add a new room?"
	zdialog.AddDivSlotExtension
	zdialog.AddToViewSlot(zview)
	
	'add a spot (success)
	Dim zsuccess As ZUIZspot
	zsuccess.Initialize(Me, "success", "success")
	zsuccess.AddClass("success")
	zsuccess.Button = True
	zsuccess.angle = 45
	zsuccess.size = "s"
	zsuccess.distance = 120
	zsuccess.VOnClickNative = "cbclosedialog"
	zsuccess.AddIcon("", "fas fa-check")
	zsuccess.AddToDialogSlot(zdialog)
	'
	'add a spot (danger)
	Dim zdanger As ZUIZspot
	zdanger.Initialize(Me, "danger", "danger")
	zdanger.AddClass("danger")
	zdanger.Button = True
	zdanger.angle = 135
	zdanger.size = "s"
	zdanger.distance = 120
	zdanger.VOnClickNative = "cbclosedialog"
	zdanger.AddIcon("", "fas fa-times")
	zdanger.AddToDialogSlot(zdialog)
'
	' bind the callbacks
	comp.SetMethod(Me, "cbopendialog")
	comp.SetMethod(Me, "cbclosedialog")
	
	'build component from placeholder and
	'add the component to the app
	sh.AddComponentZUI(comp)

End Sub

'define the callbacks
Sub cbopendialog   'IgnoreDeadCode
	sh.SetData("opendialog", True)
End Sub

Sub cbclosedialog   'IgnoreDeadCode
	sh.SetData("opendialog", False)
End Sub